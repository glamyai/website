export default function howWeWork() {
  return `
    <section id="how-we-work" class="delivery-model" aria-labelledby="how-title">
      <div class="content">
        <h2 id="how-title" data-i18n="how.title">How You Move Forward</h2>
        <div class="delivery-layout">
          <div class="delivery-visual">
            <img src="/media/how-it-works.png" alt="" aria-hidden="true" />
          </div>
          <div class="delivery-items">
            <div class="delivery-item">
              <h3 data-i18n="how.model1.title">1. Set Up — Connect your data and define rules</h3>
              <p data-i18n="how.model1.desc">Connect your company data and set access boundaries and usage rules. AI behavior stays within clear limits from the start.</p>
            </div>
            <div class="delivery-item">
              <h3 data-i18n="how.model2.title">2. Run — Start controlled interactions</h3>
              <p data-i18n="how.model2.desc">Run interactions based on your configurations. The same requests follow the same rules, predictably.</p>
            </div>
            <div class="delivery-item">
              <h3 data-i18n="how.model3.title">3. Observe — Monitor costs and outcomes</h3>
              <p data-i18n="how.model3.desc">Track spend and outputs across interactions. Adjust configurations when needed, and keep control.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
