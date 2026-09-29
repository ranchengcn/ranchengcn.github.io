# English and Simplified Chinese

English URLs remain unchanged. Chinese pages live under `/zh-cn/`. Both languages
share layouts, styles, images, `_bibliography/papers.bib` and `_data/contact.json`.
No translation API or runtime translation service is required.

## Editing content

- English pages: `_pages/*.md`; Chinese pages: `_pages/zh-cn/*.md`.
- English news: `_news/*.md`; Chinese news: `_news_zh/*.md`.
- Pair corresponding files with the same `translation_key` and explicit `lang`
  (`en` or `zh-CN`). For a new page, set a Chinese permalink under `/zh-cn/`.
- Keep news dates and `homepage` visibility identical. Images and links should
  refer to shared assets using `relative_url`, never parent-relative paths.
- Translate UI labels in `_data/i18n.json`. Edit contact details once in
  `_data/contact.json`. Bibliography updates require no separate translation.
- Review the translated meaning whenever changing either version. Run Prettier
  on edited content, then `python bin/check_i18n.py --record` to acknowledge the
  review. Commit the generated `_data/translation_sources.json` with the edit.
- Run `python bin/check_i18n.py` before committing. CI blocks deployment for
  missing translations or content changed since the last acknowledged review.
  The hashes detect changes; they do not verify translation quality.

## Translation policy

Use natural, professional Chinese suited to an academic homepage. Translate
biography, descriptive news, roles, navigation and UI labels. Use established
Chinese names for institutions and awards; retain the official English name
where useful for precision. Do not invent achievements or update factual dates
as part of translation.

Preserve paper titles, author names and order, journal/conference names in
bibliographic records, abstracts, BibTeX, DOI, arXiv IDs, URLs, email addresses,
code identifiers, model/dataset names and project names (EvoX, EvoGit,
EvoX Genesis, R1-zero-Div). Paper metadata embedded in news also stays in its
original language; surrounding explanatory text and field labels are translated.

Preferred terminology: 演化计算, 人工智能基础设施, 复杂系统, 智能体,
香港理工大学数据科学及人工智能学系, 科睿唯安高被引科学家.

## Language selection

On an English route with no saved choice, the browser's first preferred language
selects Chinese for `zh-*` and English for other languages. An explicit Chinese
URL stays Chinese unless a manual preference was previously saved. Clicking the
language switcher records the choice in localStorage and opens the matching page.
The detection runs in the head, preserves query strings and fragments, and does
not require a backend. With JavaScript disabled, both static versions and language
links remain accessible. If storage is blocked, a `lang` query parameter preserves
the manual choice for that navigation.
