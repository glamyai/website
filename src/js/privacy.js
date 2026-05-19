import { privacyNotices } from "./privacyContent.js";
import { normalizeLanguage } from "./routes.js";

const lastUpdatedByLang = {
  en: "Last Updated: May 19, 2026",
  tr: "Son Güncelleme Tarihi: 19.05.2026",
  it: "Ultimo aggiornamento: 19/05/2026"
};

function createTextElement(tagName, text, className) {
  const el = document.createElement(tagName);
  if (className) el.className = className;
  el.textContent = text;
  return el;
}

function isLastUpdatedLine(line) {
  return /^(Last Updated|Son Güncelleme Tarihi|Ultimo aggiornamento):/i.test(line);
}

function isControllerLabel(line) {
  return /^(Data Controller|Veri Sorumlusu|Titolare del trattamento):$/i.test(line);
}

function isLegalDetailLine(line) {
  return /^(P\.IVA|Email|E-posta):\s*/i.test(line);
}

function splitDetailLine(line) {
  const separator = line.indexOf(":");
  if (separator === -1) return { label: "", value: line };
  return {
    label: line.slice(0, separator + 1),
    value: line.slice(separator + 1).trim()
  };
}

function createDetailRow(label, value) {
  const row = document.createElement("div");
  row.className = "privacy-contact-card__row";

  const labelEl = document.createElement("dt");
  labelEl.textContent = label;

  const valueEl = document.createElement("dd");
  valueEl.textContent = value;

  row.append(labelEl, valueEl);
  return row;
}

function createContactCard(rows) {
  const card = document.createElement("dl");
  card.className = "privacy-contact-card";
  rows.forEach(({ label, value }) => card.appendChild(createDetailRow(label, value)));
  return card;
}

function headingLevel(line, index, previousLine, nextLine) {
  if (index === 0) return 1;
  if (/^\d+\.\d+\s+/.test(line)) return 3;
  if (/^\d+\.\s+/.test(line)) return 2;
  if (
    !previousLine.trim() &&
    !nextLine.trim() &&
    !line.includes(":") &&
    /^[A-ZÇĞİÖŞÜ0-9][A-ZÇĞİÖŞÜ0-9\s.,:;()/&'-]+$/.test(line) &&
    line.length <= 90
  ) {
    return 2;
  }
  return 0;
}

export function renderMarkdownDocument(markdown, lang = "en") {
  const pageLang = normalizeLanguage(lang);
  const article = document.createElement("article");
  article.className = "privacy-document";
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let paragraph = [];
  let list = null;

  function flushParagraph() {
    if (paragraph.length === 0) return;
    article.appendChild(createTextElement("p", paragraph.join("\n"), "privacy-document__paragraph"));
    paragraph = [];
  }

  function flushList() {
    if (!list) return;
    article.appendChild(list);
    list = null;
  }

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();
    const previousLine = lines[index - 1] || "";
    const nextLine = lines[index + 1] || "";

    if (!line) {
      flushParagraph();
      flushList();
      return;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      if (!list) {
        list = document.createElement("ul");
        list.className = "privacy-document__list";
      }
      list.appendChild(createTextElement("li", line.slice(2)));
      return;
    }

    flushList();

    if (isControllerLabel(line) && nextLine.trim()) {
      flushParagraph();
      const rows = [{ label: line, value: nextLine.trim() }];
      let cursor = index + 2;
      while (cursor < lines.length) {
        const detailLine = lines[cursor].trim();
        if (isLegalDetailLine(detailLine)) {
          rows.push(splitDetailLine(detailLine));
        }
        cursor += 1;
      }
      article.appendChild(createContactCard(rows));
      return;
    }

    if (previousLine.trim() && isControllerLabel(previousLine.trim())) return;
    if (isLegalDetailLine(line)) return;

    const level = headingLevel(line, index, previousLine, nextLine);
    if (level > 0) {
      flushParagraph();
      article.appendChild(createTextElement(`h${level}`, line));
      return;
    }

    if (isLastUpdatedLine(line)) {
      flushParagraph();
      article.appendChild(createTextElement("p", lastUpdatedByLang[pageLang] || line, "privacy-document__meta"));
      return;
    }

    paragraph.push(line);
  });

  flushParagraph();
  flushList();
  return article;
}

export function renderPrivacyPage(lang) {
  const pageLang = normalizeLanguage(lang);
  const markdown = privacyNotices[pageLang] || privacyNotices.en;
  const section = document.createElement("section");
  section.className = "privacy-page";
  section.setAttribute("aria-labelledby", "privacy-title");

  const inner = document.createElement("div");
  inner.className = "privacy-page__inner";
  const documentEl = renderMarkdownDocument(markdown, pageLang);
  const firstTitle = documentEl.querySelector("h1");
  if (firstTitle) firstTitle.id = "privacy-title";

  inner.appendChild(documentEl);
  section.appendChild(inner);
  return section;
}
