import { privacyNotices } from "./privacyContent.js";
import { applyLocalizedPageMetadata } from "./pageMetadata.js";
import { getPrivacyPath, normalizeLanguage } from "./routes.js";

const privacyMetadata = {
  en: {
    title: "Privacy Notice | Glamy",
    description: "Privacy Notice for Glamy and Glamy-powered services."
  },
  tr: {
    title: "Gizlilik Bildirimi | Glamy",
    description: "Glamy ve Glamy destekli hizmetler için gizlilik bildirimi."
  },
  it: {
    title: "Informativa Privacy | Glamy",
    description: "Informativa privacy per Glamy e i servizi basati su Glamy."
  }
};

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

function appendInlineMarkup(parent, text) {
  const pattern = /\*\*(.+?)\*\*|\*([^*]+?)\*|\[([^\]]+)\]\((https:\/\/[^)]+)\)/g;
  let cursor = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    parent.appendChild(document.createTextNode(text.slice(cursor, match.index)));
    if (match[1]) {
      const strong = document.createElement("strong");
      appendInlineMarkup(strong, match[1]);
      parent.appendChild(strong);
    } else if (match[2]) {
      const emphasis = document.createElement("em");
      emphasis.textContent = match[2];
      parent.appendChild(emphasis);
    } else {
      const link = document.createElement("a");
      link.href = match[4];
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = match[3];
      parent.appendChild(link);
    }
    cursor = pattern.lastIndex;
  }

  parent.appendChild(document.createTextNode(text.slice(cursor)));
}

function createRichTextElement(tagName, text, className) {
  const el = document.createElement(tagName);
  if (className) el.className = className;
  appendInlineMarkup(el, text);
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
    /^\p{Lu}[\p{Lu}\p{N}\s.,:;()/&'-]+$/u.test(line) &&
    line.length <= 90
  ) {
    return 2;
  }
  return 0;
}

function markdownHeading(line) {
  const match = line.match(/^(#{1,4})\s+(.+)$/);
  if (!match) return null;
  return {
    level: Math.min(match[1].length, 4),
    text: match[2]
  };
}

function createSourceLine(line) {
  const match = line.match(/^(Source|Sources|Kaynak|Kaynaklar|Fonte|Fonti):\s+(.+)$/);
  if (!match) return null;

  const source = document.createElement("p");
  source.className = "research-source";

  const label = document.createElement("span");
  label.className = "research-source__label";
  label.textContent = `${match[1]}:`;
  source.appendChild(label);

  const linkPattern = /\[([^\]]+)\]\((https:\/\/[^)]+)\)/g;
  let cursor = 0;
  let linkMatch;
  while ((linkMatch = linkPattern.exec(match[2])) !== null) {
    source.appendChild(document.createTextNode(match[2].slice(cursor, linkMatch.index)));
    const link = document.createElement("a");
    link.href = linkMatch[2];
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = linkMatch[1];
    source.appendChild(link);
    cursor = linkPattern.lastIndex;
  }
  source.appendChild(document.createTextNode(match[2].slice(cursor)));
  return source;
}

function createDataTable(rows) {
  const wrapper = document.createElement("div");
  wrapper.className = "research-table-wrap";
  wrapper.setAttribute("tabindex", "0");
  wrapper.setAttribute("role", "region");

  const table = document.createElement("table");
  table.className = "research-table";
  const [headerRow, ...bodyRows] = rows;
  const head = document.createElement("thead");
  const headRow = document.createElement("tr");
  headerRow.forEach((cell) => {
    const headerCell = createTextElement("th", cell);
    headerCell.setAttribute("scope", "col");
    headRow.appendChild(headerCell);
  });
  head.appendChild(headRow);
  table.appendChild(head);

  if (bodyRows.length > 0) {
    const body = document.createElement("tbody");
    bodyRows.forEach((row) => {
      const tableRow = document.createElement("tr");
      row.forEach((cell, index) => {
        const cellEl = createTextElement(index === 0 ? "th" : "td", cell);
        if (index === 0) cellEl.setAttribute("scope", "row");
        tableRow.appendChild(cellEl);
      });
      body.appendChild(tableRow);
    });
    table.appendChild(body);
  }

  wrapper.appendChild(table);
  return wrapper;
}

export function renderMarkdownDocument(markdown, lang = "en", { tables = false } = {}) {
  const pageLang = normalizeLanguage(lang);
  const article = document.createElement("article");
  article.className = "privacy-document";
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let paragraph = [];
  let list = null;
  let quote = [];
  let table = [];

  function flushParagraph() {
    if (paragraph.length === 0) return;
    article.appendChild(createRichTextElement("p", paragraph.join("\n"), "privacy-document__paragraph"));
    paragraph = [];
  }

  function flushList() {
    if (!list) return;
    article.appendChild(list);
    list = null;
  }

  function flushQuote() {
    if (quote.length === 0) return;
    article.appendChild(createRichTextElement("div", quote.join("\n"), "privacy-document__calculation"));
    quote = [];
  }

  function flushTable() {
    if (table.length === 0) return;
    article.appendChild(createDataTable(table));
    table = [];
  }

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();
    const previousLine = lines[index - 1] || "";
    const nextLine = lines[index + 1] || "";

    if (!line) {
      flushParagraph();
      flushList();
      flushQuote();
      flushTable();
      return;
    }

    if (/^---+$/.test(line) || line === "⸻") {
      flushParagraph();
      flushList();
      flushQuote();
      flushTable();
      const divider = document.createElement("hr");
      divider.className = "privacy-document__divider";
      article.appendChild(divider);
      return;
    }

    if (line.startsWith("> ")) {
      flushParagraph();
      flushList();
      flushTable();
      quote.push(line.slice(2));
      return;
    }

    flushQuote();

    if (tables && line.includes(";")) {
      flushParagraph();
      flushList();
      table.push(line.split(";").map((cell) => cell.trim()));
      return;
    }

    flushTable();

    if (line.startsWith("- ")) {
      flushParagraph();
      if (!list) {
        list = document.createElement("ul");
        list.className = "privacy-document__list";
      }
      list.appendChild(createRichTextElement("li", line.slice(2)));
      return;
    }

    flushList();

    const sourceLine = createSourceLine(line);
    if (sourceLine) {
      flushParagraph();
      article.appendChild(sourceLine);
      return;
    }

    const explicitHeading = markdownHeading(line);
    if (explicitHeading) {
      flushParagraph();
      article.appendChild(createTextElement(`h${explicitHeading.level}`, explicitHeading.text));
      return;
    }

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
  flushQuote();
  flushTable();
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

export function applyPrivacyMetadata(lang) {
  applyLocalizedPageMetadata({
    lang: normalizeLanguage(lang),
    metadata: privacyMetadata,
    pathForLanguage: getPrivacyPath
  });
}
