export const supportedLanguages = ["en", "tr", "it"];

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

export function isResearchPath(pathname = window.location.pathname) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 2) {
    return parts[0] === "research" && parts[1] === "market-oppurtunity";
  }
  return (
    parts.length === 3 &&
    supportedLanguages.includes(parts[0]) &&
    parts[1] === "research" &&
    parts[2] === "market-oppurtunity"
  );
}

export function getResearchPath(lang) {
  return `/${normalizeLanguage(lang)}/research/market-oppurtunity`;
}
