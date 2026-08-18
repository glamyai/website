function upsertMeta(name, content) {
  let meta = document.head.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function upsertLink(rel, href, hreflang) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let link = document.head.querySelector(selector);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    if (hreflang) link.setAttribute("hreflang", hreflang);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export function applyLocalizedPageMetadata({ lang, metadata, pathForLanguage }) {
  const pageMetadata = metadata[lang] || metadata.en;
  document.title = pageMetadata.title;
  upsertMeta("description", pageMetadata.description);
  upsertLink("canonical", `https://glamyai.com${pathForLanguage(lang)}`);
  ["en", "tr", "it"].forEach((alternateLang) => {
    upsertLink(
      "alternate",
      `https://glamyai.com${pathForLanguage(alternateLang)}`,
      alternateLang
    );
  });
}
