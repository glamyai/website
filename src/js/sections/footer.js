export default function footer() {
  return `
    <footer>
      <div class="content footer-inner">
        <small class="footer-copyright" data-i18n="footer.copyright">© 2026 Glamy AI</small>
        <small class="footer-social" aria-label="Social links">
          <a
            class="footer-social__link"
            href="https://www.linkedin.com/company/glamyai/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" />
              <path d="M8.1 10.1v5.8M8.1 8.25h.01M11.15 10.1v5.8M11.15 12.55v-2.45h2.35a2.4 2.4 0 0 1 2.4 2.4v3.4" />
            </svg>
          </a>
          <a
            class="footer-social__link"
            href="https://www.instagram.com/glamy_ai/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="4.5" y="4.5" width="15" height="15" rx="4.1" />
              <circle cx="12" cy="12" r="3.45" />
              <circle cx="16.55" cy="7.45" r="0.95" />
            </svg>
          </a>
        </small>
        <small class="footer-origin">
          <span class="footer-origin__text" data-i18n="footer.origin_text">Built in Veneto, Italy</span>
          <span class="footer-origin__flag" aria-hidden="true">🇮🇹</span>
        </small>
      </div>
    </footer>
  `;
}
