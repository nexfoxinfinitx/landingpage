import { renderNavbar, renderFooter, initMobileMenu } from '../layout.js';
import { initScrollReveal } from '../animations.js';

export function render() {
    const app = document.getElementById('app');
    app.innerHTML = `
    ${renderNavbar()}

    <!-- Page Header -->
    <header class="page-header">
      <div class="container">
        <h1>Our Work</h1>
        <p>A selection of projects we're proud of. Each one designed, developed, and delivered with care.</p>
      </div>
    </header>

    <!-- Templates -->
    <section class="page-section">
      <div class="container">
        <a href="#/template-1" class="portfolio-card-landscape">
          <div class="portfolio-thumb-landscape">Template Preview</div>
          <div class="portfolio-info-landscape">
            <h3>Template 1</h3>
          </div>
        </a>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container cta-inner">
        <h2>Want to be our next success story?</h2>
        <p>Tell us about your project and let's make it happen.</p>
        <div class="hero-actions">
          <a href="#/contact" class="btn btn-lg">Start a Project</a>
          <a href="#/process" class="btn btn-lg btn-outline">See Our Process</a>
        </div>
      </div>
    </section>

    ${renderFooter()}
  `;

    initMobileMenu();
    initScrollReveal();
}
