import { renderMarkdownDocument } from "./privacy.js";
import { applyLocalizedPageMetadata } from "./pageMetadata.js";
import { researchDocuments } from "./researchContent.js";
import { getResearchPath, normalizeLanguage } from "./routes.js";

const researchMetadata = {
  "market-opportunity": {
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
  },
  "financial-model": {
    en: {
      title: "Financial Model & Resource Planning | Glamy",
      description: "Glamy's bottom-up five-year financial model, resource plan, capital requirements, and core operating assumptions."
    },
    tr: {
      title: "Finansal Model ve Kaynak Planlaması | Glamy",
      description: "Glamy'nin beş yıllık finansal modeli, kaynak planlaması, sermaye gereksinimleri ve temel faaliyet varsayımları."
    },
    it: {
      title: "Modello finanziario e pianificazione delle risorse | Glamy",
      description: "Il modello finanziario quinquennale di Glamy, la pianificazione delle risorse, il fabbisogno di capitale e le principali ipotesi operative."
    }
  }
};

export function renderResearchPage(slug, lang) {
  const pageLang = normalizeLanguage(lang);
  const documentContent = researchDocuments[slug] || researchDocuments["market-opportunity"];
  const markdown = documentContent[pageLang] || documentContent.en;
  const section = document.createElement("section");
  section.className = "privacy-page research-page";
  section.setAttribute("aria-labelledby", "research-title");

  const inner = document.createElement("div");
  inner.className = "privacy-page__inner research-page__inner";
  const documentEl = renderMarkdownDocument(markdown, pageLang, { tables: true });
  documentEl.classList.add("research-document");

  const firstTitle = documentEl.querySelector("h1");
  if (firstTitle) firstTitle.id = "research-title";

  inner.appendChild(documentEl);
  section.appendChild(inner);
  return section;
}

export function applyResearchMetadata(slug, lang) {
  const pageSlug = researchMetadata[slug] ? slug : "market-opportunity";
  applyLocalizedPageMetadata({
    lang: normalizeLanguage(lang),
    metadata: researchMetadata[pageSlug],
    pathForLanguage: (pageLang) => getResearchPath(pageLang, pageSlug)
  });
}
