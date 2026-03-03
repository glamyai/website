export default function whatWeDo() {
  return `
    <section id="what-we-do" class="capabilities" aria-labelledby="what-title">
      <div class="content">
        <h2 id="what-title" data-i18n="what.title">Build controlled AI workflows for real operations</h2>
        <p class="capabilities-lead" data-i18n="what.lead">Glamy lets you use popular AI models on your company data in a cost-effective way.</p>
        <div class="grid-3">
          <div class="cap-card">
            <div class="capability-media">
              <div class="capability-media__image">
                <img src="/media/capabilities/routing.png" alt="" aria-hidden="true" />
              </div>
            </div>
            <h3 class="cap-title" data-i18n="what.cap1.title">Request Routing</h3>
            <p data-i18n="what.cap1.desc">Control how requests are routed to models or configurations.</p>
          </div>
          <div class="cap-card">
            <div class="capability-media">
              <div class="capability-media__image">
                <img src="/media/capabilities/workflow.png" alt="" aria-hidden="true" />
              </div>
            </div>
            <h3 class="cap-title" data-i18n="what.cap2.title">Run Configurations</h3>
            <p data-i18n="what.cap2.desc">Run controlled configurations with explicit steps.</p>
          </div>
          <div class="cap-card">
            <div class="capability-media">
              <div class="capability-media__image">
                <img src="/media/capabilities/observability.png" alt="" aria-hidden="true" />
              </div>
            </div>
            <h3 class="cap-title" data-i18n="what.cap3.title">Observable Operations</h3>
            <p data-i18n="what.cap3.desc">Track costs, usage, and outcomes across interactions.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
