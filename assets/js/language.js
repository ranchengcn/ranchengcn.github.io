// English is the default URL space; explicit Chinese URLs stay in Chinese.
// A saved manual choice takes priority over browser preferences on later visits.
(() => {
  const key = "preferred-language";
  const current = document.documentElement.lang;
  const alternate = document.querySelector('link[rel="alternate"][hreflang]:not([hreflang="x-default"]):not([hreflang="' + current + '"])');
  let preferred;
  try {
    preferred = localStorage.getItem(key);
  } catch (_) {
    // Navigation still works when storage is unavailable.
  }
  const explicit = new URLSearchParams(location.search).get("lang");
  if (explicit === "en" || explicit === "zh-CN") preferred = explicit;
  if (preferred !== "en" && preferred !== "zh-CN") {
    const browserLanguage = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    preferred = current === "zh-CN" || /^zh\b/i.test(browserLanguage) ? "zh-CN" : "en";
  }
  if (alternate && preferred !== current && alternate.hreflang === preferred) {
    const target = new URL(alternate.href);
    target.search = location.search;
    target.hash = location.hash;
    // Keep preview domains and local test servers local.
    location.replace(target.pathname + target.search + target.hash);
  }
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".language-switcher a[hreflang]").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        try {
          localStorage.setItem(key, link.hreflang);
        } catch (_) {
          // Without storage, suppress detection on this explicit navigation.
          const url = new URL(link.href);
          url.searchParams.set("lang", link.hreflang);
          link.href = url.href;
        }
      });
    });
  });
})();
