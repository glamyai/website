export default function trust() {
  return `
    <section id="trust" aria-labelledby="trust-title" hidden>
      <div class="content">
        <h2 id="trust-title" data-i18n="trust.title">Trust</h2>
        <p class="trust-headline" data-i18n="trust.placeholder">This section will be enabled once verified customer references are available.</p>
        <div class="trust-markets" hidden aria-hidden="true">
          <p class="trust-markets__label"></p>
          <p class="trust-markets__list"></p>
        </div>
        <div class="trust-logos" aria-label="Trust placeholder" hidden aria-hidden="true">
          <div class="trust-logos__row">
            <div class="trust-logo-card"></div>
          </div>
        </div>
      </div>
    </section>
  `;
}
