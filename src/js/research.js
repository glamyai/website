import { renderMarkdownDocument } from "./privacy.js";
import { applyLocalizedPageMetadata } from "./pageMetadata.js";
import { marketOpportunityResearch } from "./researchContent.js";
import { getResearchPath, normalizeLanguage } from "./routes.js";

const researchMetadata = {
  en: {
    title: "Market Opportunity | Glamy",
    description: "Glamy's market opportunity methodology across TAM, SAM, SOM, and its initial commercial focus."
  },
  tr: {
    title: "Pazar Fırsatı | Glamy",
    description: "Glamy'nin TAM, SAM, SOM ve ilk ticari odağına yönelik pazar fırsatı metodolojisi."
  },
  it: {
    title: "Opportunità di mercato | Glamy",
    description: "La metodologia dell'opportunità di mercato di Glamy per TAM, SAM, SOM e il primo focus commerciale."
  }
};

export function renderMarketOpportunityPage(lang) {
  const pageLang = normalizeLanguage(lang);
  const markdown = marketOpportunityResearch[pageLang] || marketOpportunityResearch.en;
  const section = document.createElement("section");
  section.className = "privacy-page research-page";
  section.setAttribute("aria-labelledby", "research-title");

  const inner = document.createElement("div");
  inner.className = "privacy-page__inner research-page__inner";
  const documentEl = renderMarkdownDocument(markdown, pageLang);
  documentEl.classList.add("research-document");

  const firstTitle = documentEl.querySelector("h1");
  if (firstTitle) firstTitle.id = "research-title";

  inner.appendChild(documentEl);
  section.appendChild(inner);
  return section;
}

export function applyResearchMetadata(lang) {
  applyLocalizedPageMetadata({
    lang: normalizeLanguage(lang),
    metadata: researchMetadata,
    pathForLanguage: getResearchPath
  });
}
