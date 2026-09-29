"""Check paired translations and optionally the built bilingual site (stdlib only)."""
import argparse
import hashlib
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]


def content_files():
    return sorted([*ROOT.glob('_pages/**/*.md'), *ROOT.glob('_news/*.md'), *ROOT.glob('_news_zh/*.md')])


def metadata(path):
    text = path.read_text(encoding='utf-8')
    front = text.split('---', 2)[1]
    return dict(re.findall(r'^([\w_]+):\s*([^\n]+)', front, re.M))


def digest(path):
    return hashlib.sha256(path.read_text(encoding='utf-8').encode()).hexdigest()


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.lang = None
        self.alternates = {}
        self.canonical = None
        self.links = []
        self.feed(text)

    def handle_starttag(self, tag, attributes):
        a = dict(attributes)
        if tag == 'html':
            self.lang = a.get('lang')
        if tag == 'link' and a.get('rel') == 'alternate' and 'hreflang' in a:
            self.alternates[a['hreflang']] = a['href']
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonical = a['href']
        if tag == 'a' and 'nav-link' in a.get('class', '').split():
            self.links.append(a.get('href', ''))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--record', action='store_true', help='Record hashes only after reviewing both language versions')
    parser.add_argument('--site', type=Path)
    args = parser.parse_args()
    pairs = {}
    for path in content_files():
        meta = metadata(path)
        if 'translation_key' not in meta:
            raise AssertionError(f'{path.relative_to(ROOT)} needs a translation_key and a reviewed translation')
        key, lang = meta['translation_key'], meta.get('lang', 'en')
        assert lang in ('en', 'zh-CN'), (path, lang)
        assert lang not in pairs.setdefault(key, {}), f'Duplicate translation: {key}/{lang}'
        pairs[key][lang] = path
    for key, pair in pairs.items():
        assert set(pair) == {'en', 'zh-CN'}, f'Missing translation: {key}'
        en, zh = metadata(pair['en']), metadata(pair['zh-CN'])
        if 'date' in en:
            assert en['date'] == zh['date'], f'News date mismatch: {key}'
            assert en.get('homepage') == zh.get('homepage'), f'News visibility mismatch: {key}'
    hashes = {str(p.relative_to(ROOT)).replace('\\', '/'): digest(p) for pair in pairs.values() for p in pair.values()}
    manifest = ROOT / '_data/translation_sources.json'
    if args.record:
        manifest.write_text(json.dumps(hashes, indent=2, sort_keys=True) + '\n', encoding='utf-8')
    else:
        recorded = json.loads(manifest.read_text(encoding='utf-8'))
        stale = [p for p, h in hashes.items() if recorded.get(p) != h]
        assert not stale, 'Review both languages, then run --record:\n' + '\n'.join(stale)
        assert set(recorded) == set(hashes), 'Translation manifest contains removed pages; review and record it again'
    labels = json.loads((ROOT / '_data/i18n.json').read_text(encoding='utf-8'))
    assert labels['en'].keys() == labels['zh-CN'].keys(), 'UI translation keys differ'
    if args.site:
        site = args.site.resolve()
        def output(url):
            path = urlparse(url).path.lstrip('/')
            return site / (path + 'index.html' if not path or path.endswith('/') else path)
        # Locate built routes by their alternate links instead of duplicating Jekyll's permalink logic.
        built = {}
        for path in site.rglob('*.html'):
            text = path.read_text(encoding='utf-8')
            parsed = Page(text)
            if {'en', 'zh-CN'} <= parsed.alternates.keys():
                built[path.resolve()] = (parsed, text)
        assert len(built) == 2 * len(pairs), f'Expected {2 * len(pairs)} bilingual pages; found {len(built)}'
        for path, (parsed, text) in built.items():
            assert parsed.lang in labels, (path, parsed.lang)
            assert parsed.canonical == parsed.alternates[parsed.lang], f'Incorrect canonical: {path}'
            for lang in labels:
                target = output(parsed.alternates[lang]).resolve()
                assert target in built, f'Missing alternate: {target}'
                assert built[target][0].alternates == parsed.alternates, f'Non-reciprocal language links: {path}'
            for href in parsed.links:
                if not href or href.startswith('#') or urlparse(href).netloc:
                    continue
                assert output(href).exists(), f'Broken navigation link in {path}: {href}'
                if 'language-switcher' not in text:
                    raise AssertionError(f'Missing language switcher: {path}')
            assert '{{' not in text and '{%' not in text, f'Unrendered Liquid: {path}'
        for suffix in ('', 'zh-cn/'):
            assert (site / suffix / 'assets/js/search-data.js').exists(), 'Missing language search index'
        # Bibliography records themselves must be identical in both languages.
        pattern = r'<div class="title">(.*?)</div>'
        english = re.findall(pattern, (site/'publications/index.html').read_text(encoding='utf-8'), re.S)
        chinese = re.findall(pattern, (site/'zh-cn/publications/index.html').read_text(encoding='utf-8'), re.S)
        assert english and english == chinese, 'Publication titles changed or missing in Chinese'
        print(f'Validated {len(built)} generated pages, reciprocal language links, navigation, search indexes and publication titles.')
    print(f'Validated {len(pairs)} English/Chinese content pairs and translation freshness.')


if __name__ == '__main__':
    main()
