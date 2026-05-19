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
