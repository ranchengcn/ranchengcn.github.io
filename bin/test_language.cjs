const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const source = fs.readFileSync(path.join(__dirname, "../assets/js/language.js"), "utf8");

function visit({ current = "en", browser = "en-US", saved = null, blocked = false, query = "", alternate = true } = {}) {
  const other = current === "en" ? "zh-CN" : "en";
  const route = other === "zh-CN" ? "/zh-cn/publications/" : "/publications/";
  const result = { saved, redirect: null, click: null };
  const link = {
    href: "https://chengran.tech" + route,
    hreflang: other,
    addEventListener: (_, handler) => (result.click = handler),
  };
  const context = {
    URL,
    URLSearchParams,
    navigator: { languages: [browser] },
    localStorage: {
      getItem() {
        if (blocked) throw new Error("Storage disabled");
        return result.saved;
      },
      setItem(_, value) {
        if (blocked) throw new Error("Storage disabled");
        result.saved = value;
      },
    },
    location: { search: query, hash: "#papers", replace: (url) => (result.redirect = url) },
    document: {
      documentElement: { lang: current },
      querySelector: () => (alternate ? link : null),
      querySelectorAll: () => [link],
      addEventListener: (_, handler) => handler(),
    },
  };
  vm.runInNewContext(source, context);
  return { result, link };
}

assert.equal(visit({ browser: "zh-CN", query: "?q=paper" }).result.redirect, "/zh-cn/publications/?q=paper#papers");
assert.equal(visit({ browser: "zh-HK" }).result.redirect, "/zh-cn/publications/#papers");
assert.equal(visit({ browser: "fr-FR" }).result.redirect, null);
assert.equal(visit({ current: "zh-CN", browser: "en-US" }).result.redirect, null);
assert.equal(visit({ browser: "zh-CN", saved: "en" }).result.redirect, null);
assert.equal(visit({ current: "zh-CN", saved: "en" }).result.redirect, "/publications/#papers");
assert.equal(visit({ saved: "zh-CN" }).result.redirect, "/zh-cn/publications/#papers");
assert.equal(visit({ browser: "zh-CN", alternate: false }).result.redirect, null);
assert.equal(visit({ browser: "zh-CN", blocked: true, query: "?lang=en" }).result.redirect, null);
assert.equal(visit({ browser: "zh-CN", saved: "invalid" }).result.redirect, "/zh-cn/publications/#papers");
const manual = visit();
manual.result.click({});
assert.equal(manual.result.saved, "zh-CN");
const blocked = visit({ blocked: true, current: "zh-CN" });
blocked.result.click({});
assert.equal(new URL(blocked.link.href).searchParams.get("lang"), "en");
console.log("Passed browser detection, manual preference, matching routes, query/hash preservation, and blocked-storage cases.");
