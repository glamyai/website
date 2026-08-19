export const supportedLanguages = ["en", "tr", "it"];
export const supportedResearchSlugs = ["market-opportunity", "financial-model"];

export function normalizeLanguage(lang) {
  return supportedLanguages.includes(lang) ? lang : "en";
}

export function getLanguageFromPath(pathname = window.location.pathname) {
  const [, lang] = pathname.split("/");
  return supportedLanguages.includes(lang) ? lang : null;
}

export function isPrivacyPath(pathname = window.location.pathname) {
  const [, lang, route, extra] = pathname.split("/");
  return supportedLanguages.includes(lang) && route === "privacy" && !extra;
}

export function getPrivacyPath(lang) {
  return `/${normalizeLanguage(lang)}/privacy`;
}

export function getResearchSlugFromPath(pathname = window.location.pathname) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 2) {
    return parts[0] === "research" && supportedResearchSlugs.includes(parts[1])
      ? parts[1]
      : null;
  }
  return (
    parts.length === 3 &&
    supportedLanguages.includes(parts[0]) &&
    parts[1] === "research" &&
    supportedResearchSlugs.includes(parts[2])
  ) ? parts[2] : null;
}

export function getResearchPath(lang, slug = "market-opportunity") {
  const researchSlug = supportedResearchSlugs.includes(slug) ? slug : "market-opportunity";
  return `/${normalizeLanguage(lang)}/research/${researchSlug}/`;
}
