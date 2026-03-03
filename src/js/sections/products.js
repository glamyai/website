export default function products() {
  const techStackItems = [
    { slug: "crm", icon: "crm", labelKey: "products.techstack.items.crm", fallback: "CRM Systems" },
    { slug: "erp", icon: "erp", labelKey: "products.techstack.items.erp", fallback: "ERP & Operations" },
    { slug: "ticketing", icon: "ticket", labelKey: "products.techstack.items.ticketing", fallback: "Ticketing" },
    { slug: "messaging", icon: "chat", labelKey: "products.techstack.items.messaging", fallback: "Messaging Channels" },
    { slug: "documents", icon: "docs", labelKey: "products.techstack.items.documents", fallback: "Documents" },
    { slug: "spreadsheets", icon: "sheet", labelKey: "products.techstack.items.spreadsheets", fallback: "Spreadsheets" },
    { slug: "apis", icon: "api", labelKey: "products.techstack.items.apis", fallback: "Internal APIs" }
  ];

  const renderTechIcon = (icon) => {
    const common = `class="products-techstack__img" viewBox="0 0 24 24" aria-hidden="true" role="img"`;
    if (icon === "crm") return `<svg ${common}><rect x="3.5" y="4" width="17" height="16" rx="4" fill="#E8F2FF"/><rect x="6.5" y="7.5" width="11" height="9" rx="2" fill="none" stroke="#2D6CDF" stroke-width="1.6"/><path d="M8.5 10.5h7M8.5 13.5h4.5" fill="none" stroke="#2D6CDF" stroke-width="1.6" stroke-linecap="round"/></svg>`;
    if (icon === "erp") return `<svg ${common}><rect x="3.5" y="4" width="17" height="16" rx="4" fill="#E8F8F4"/><rect x="6.5" y="7" width="11" height="10" rx="2" fill="none" stroke="#1F8F74" stroke-width="1.6"/><path d="M6.5 11h11M10.2 7v10M13.8 7v10" fill="none" stroke="#1F8F74" stroke-width="1.4" stroke-linecap="round"/></svg>`;
    if (icon === "ticket") return `<svg ${common}><rect x="3.5" y="4" width="17" height="16" rx="4" fill="#FFF3E9"/><path d="M6.5 9a2 2 0 0 0 0 4v1.8a1.7 1.7 0 0 0 1.7 1.7h7.6a1.7 1.7 0 0 0 1.7-1.7V13a2 2 0 0 0 0-4V7.2a1.7 1.7 0 0 0-1.7-1.7H8.2a1.7 1.7 0 0 0-1.7 1.7V9Z" fill="none" stroke="#C96B2C" stroke-width="1.4"/><path d="M12 7v9" fill="none" stroke="#C96B2C" stroke-width="1.4" stroke-dasharray="2 2"/></svg>`;
    if (icon === "chat") return `<svg ${common}><rect x="3.5" y="4" width="17" height="16" rx="4" fill="#F1EEFF"/><path d="M7.2 8h9.6a1.8 1.8 0 0 1 1.8 1.8v3.7a1.8 1.8 0 0 1-1.8 1.8h-4.7l-2.5 2.2v-2.2H7.2a1.8 1.8 0 0 1-1.8-1.8V9.8A1.8 1.8 0 0 1 7.2 8Z" fill="none" stroke="#6B4FD6" stroke-width="1.5"/><path d="M8.8 10.8h6.4M8.8 13h4.2" fill="none" stroke="#6B4FD6" stroke-width="1.4" stroke-linecap="round"/></svg>`;
    if (icon === "docs") return `<svg ${common}><rect x="3.5" y="4" width="17" height="16" rx="4" fill="#EAF4FF"/><path d="M8 6.5h6l2.5 2.5V17a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 17V8A1.5 1.5 0 0 1 8 6.5Z" fill="#FFFFFF" stroke="#2A78B8" stroke-width="1.3"/><path d="M14 6.5V9h2.5M9 11.2h5.8M9 13.6h5.8" fill="none" stroke="#2A78B8" stroke-width="1.3" stroke-linecap="round"/></svg>`;
    if (icon === "sheet") return `<svg ${common}><rect x="3.5" y="4" width="17" height="16" rx="4" fill="#ECF9EE"/><rect x="6.5" y="6.8" width="11" height="10.4" rx="1.6" fill="#FFFFFF" stroke="#2F9A52" stroke-width="1.3"/><path d="M6.5 10.3h11M6.5 13.6h11M10.2 6.8v10.4M13.8 6.8v10.4" fill="none" stroke="#2F9A52" stroke-width="1.2"/></svg>`;
    return `<svg ${common}><rect x="3.5" y="4" width="17" height="16" rx="4" fill="#EAF7F8"/><rect x="6.2" y="8" width="11.6" height="7.8" rx="2" fill="none" stroke="#2B9A95" stroke-width="1.4"/><path d="M8.6 10.6h2.8M12.8 10.6h2.8M8.6 13.3h7" fill="none" stroke="#2B9A95" stroke-width="1.3" stroke-linecap="round"/></svg>`;
  };

  return `
    <section id="products" class="products" aria-labelledby="products-title">
      <div class="content">
        <h2 id="products-title" data-i18n="products.label">Use Cases</h2>
      </div>
      <div class="products-hero" aria-labelledby="products-hero-title">
        <div class="products-hero__bg" data-ecom-hero>
          <img src="/media/products/hero-use-cases.png" alt="" aria-hidden="true" data-ecom-hero-img />
        </div>
        <div class="products-hero__overlay"></div>
        <div class="products-hero__inner">
          <div class="content">
            <div class="products-hero__content">
              <h3 id="products-hero-title" class="products-hero__title" data-i18n="products.title">Glamy is not designed as a tool that just talks, but as a role that works within your business.</h3>
              <p class="products-hero__subline" data-i18n="products.subline">Across sales, operations, and every customer touchpoint, it supports your team, takes responsibility, and moves the work forward.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="products-techstack">
        <div class="content">
          <div class="products-techstack__header">
            <h3 class="products-techstack__headline" data-i18n="products.techstack.headline">Built on production-grade technology, trusted in real operations.</h3>
          </div>
          <div class="products-techstack__scroller">
            <div class="products-techstack__row" aria-label="Tech stack" tabindex="0">
              ${techStackItems.map((item) => `
                <div class="products-techstack__item" data-techstack="${item.slug}">
                  ${renderTechIcon(item.icon)}
                  <div class="products-techstack__label" data-i18n="${item.labelKey}">${item.fallback}</div>
                </div>
              `).join("")}
            </div>
            <div class="products-techstack__controls" aria-hidden="true">
              <button class="products-techstack__control products-techstack__control--prev" type="button" data-techstack-scroll="prev" aria-label="Scroll tech stack left">
                <span aria-hidden="true">←</span>
              </button>
              <button class="products-techstack__control products-techstack__control--next" type="button" data-techstack-scroll="next" aria-label="Scroll tech stack right">
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
          <p class="products-trademark" data-i18n="products.trademark"></p>
        </div>
      </div>
      <div class="products-domains">
        <div class="content">
          <div class="products-domains__list">
            <article class="products-domain">
              <h3 class="products-domain__title" data-i18n="products.domains.platform.title">Sales Enablement</h3>
              <p class="products-domain__desc" data-i18n="products.domains.platform.desc">Real-time support during sales conversations. Use live CRM and product catalog data to help your sales team respond accurately and reduce presales dependency.</p>
              <div class="products-domain__logos" aria-label="Platform Architecture technologies">
                <span class="products-domain__logo" data-i18n="products.domains.platform.tags.one">live crm</span>
                <span class="products-domain__logo" data-i18n="products.domains.platform.tags.two">product catalog</span>
                <span class="products-domain__logo" data-i18n="products.domains.platform.tags.three">faster cycles</span>
              </div>
            </article>
            <article class="products-domain">
              <h3 class="products-domain__title" data-i18n="products.domains.client.title">Customer Operations</h3>
              <p class="products-domain__desc" data-i18n="products.domains.client.desc">Turn messages into completed requests. Handle reservations and incoming requests from channels like WhatsApp and write them into your systems to reduce manual work.</p>
              <div class="products-domain__logos" aria-label="Client Applications technologies">
                <span class="products-domain__logo" data-i18n="products.domains.client.tags.one">whatsapp</span>
                <span class="products-domain__logo" data-i18n="products.domains.client.tags.two">auto capture</span>
                <span class="products-domain__logo" data-i18n="products.domains.client.tags.three">less manual work</span>
              </div>
            </article>
            <article class="products-domain">
              <h3 class="products-domain__title" data-i18n="products.domains.infrastructure.title">Front Desk & Concierge</h3>
              <p class="products-domain__desc" data-i18n="products.domains.infrastructure.desc">Always-on service for guests and customers. Act as a front desk or concierge assistant, handle requests, and open tickets when needed to keep service running smoothly.</p>
              <div class="products-domain__logos" aria-label="Infrastructure and Operations technologies">
                <span class="products-domain__logo" data-i18n="products.domains.infrastructure.tags.one">always-on</span>
                <span class="products-domain__logo" data-i18n="products.domains.infrastructure.tags.two">ticketing</span>
                <span class="products-domain__logo" data-i18n="products.domains.infrastructure.tags.three">faster response</span>
              </div>
            </article>
            <article class="products-domain">
              <h3 class="products-domain__title" data-i18n="products.domains.observability.title">Internal Assistants</h3>
              <p class="products-domain__desc" data-i18n="products.domains.observability.desc">Instant help for internal teams. Answer internal questions, explain procedures, and guide people to the right place to shorten onboarding and adaptation time.</p>
              <div class="products-domain__logos" aria-label="Observability and Contracts technologies">
                <span class="products-domain__logo" data-i18n="products.domains.observability.tags.one">onboarding</span>
                <span class="products-domain__logo" data-i18n="products.domains.observability.tags.two">internal help</span>
                <span class="products-domain__logo" data-i18n="products.domains.observability.tags.three">faster adaptation</span>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="product-suite" id="way-of-working">
        <div class="content">
          <div class="product-suite__header">
            <h2 class="product-suite__title" data-i18n="products.suite.title">New Way of Working</h2>
          </div>
          <div class="product-suite__layout">
            <div class="product-suite__media">
              <p class="product-suite__lead" data-i18n="products.suite.lead">Work is changing, and you don’t have to handle it alone.</p>
              <img
                class="product-suite__image"
                src="/media/products/new-way-of-work.png"
                alt="Storefront web & mobile, picking & distribution, office applications"
              />
            </div>
            <div class="product-suite__cards">
              <article class="product-suite__card">
                <h3 class="product-suite__card-title" data-i18n="products.suite.cards.storefront_web.title">Increase Human Capacity</h3>
                <p class="product-suite__card-desc" data-i18n="products.suite.cards.storefront_web.desc">Glamy boosts the capacity and adaptability of your existing team to achieve more with the same people.</p>
                <div class="product-suite__tags"></div>
                <span class="product-suite__badge product-suite__badge--web" aria-label="Web app">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <circle cx="9" cy="9" r="2.3" fill="none" stroke="currentColor" stroke-width="1.6"/>
                    <path d="M5.8 16c.7-2.1 2.1-3.2 3.2-3.2S11.5 13.9 12.2 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                    <circle cx="16.5" cy="10.2" r="1.8" fill="none" stroke="currentColor" stroke-width="1.6"/>
                    <path d="M14.2 16c.5-1.5 1.4-2.3 2.3-2.3.9 0 1.8.8 2.3 2.3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                    <path d="M17.8 5.6v2.8M16.4 7h2.8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                  </svg>
                </span>
              </article>
              <article class="product-suite__card">
                <h3 class="product-suite__card-title" data-i18n="products.suite.cards.storefront_mobile.title">Large Teams, Lower Cost</h3>
                <p class="product-suite__card-desc" data-i18n="products.suite.cards.storefront_mobile.desc">Handle large workloads sustainably with focused teams while keeping costs under control.</p>
                <div class="product-suite__tags"></div>
                <span class="product-suite__badge product-suite__badge--mobile" aria-label="Mobile app">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <circle cx="7.5" cy="9" r="1.4" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <circle cx="12" cy="9" r="1.4" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <circle cx="16.5" cy="9" r="1.4" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M5.5 13.5h13M7 16h10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M18.2 6.2 20 8m0 0-1.8 1.8M20 8h-3.2" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </article>
              <article class="product-suite__card">
                <h3 class="product-suite__card-title" data-i18n="products.suite.cards.picking_distribution.title">Scale Flexibly</h3>
                <p class="product-suite__card-desc" data-i18n="products.suite.cards.picking_distribution.desc">Grow your business confidently as demand increases, without expanding headcount.</p>
                <div class="product-suite__tags"></div>
                <span class="product-suite__badge product-suite__badge--mobile" aria-label="Mobile app">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <rect x="4.5" y="14.5" width="5.5" height="4.5" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <rect x="9.25" y="10.5" width="5.5" height="8.5" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <rect x="14" y="6.5" width="5.5" height="12.5" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M5 9.5h4.5M9.8 7h4.2M14.5 4.8h4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                  </svg>
                </span>
              </article>
              <article class="product-suite__card">
                <h3 class="product-suite__card-title" data-i18n="products.suite.cards.office.title">Don’t Fall Behind</h3>
                <p class="product-suite__card-desc" data-i18n="products.suite.cards.office.desc">Companies adopting new ways of working today are setting the pace for tomorrow.</p>
                <div class="product-suite__tags"></div>
                <span class="product-suite__badge product-suite__badge--web" aria-label="Web app">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M5 12h12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                    <path d="m13 8 4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 7.5h5.5M5 16.5h5.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                  </svg>
                </span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
