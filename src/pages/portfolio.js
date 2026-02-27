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

    <!-- Portfolio Grid -->
    <section class="page-section">
      <div class="container">
        <div class="portfolio-grid">

          <a href="#/project/flowstate" class="portfolio-card">
            <div class="portfolio-thumb">Project Screenshot</div>
            <div class="portfolio-info">
              <h3>Flowstate SaaS Platform</h3>
              <p>A complete redesign and rebuild of a project management SaaS used by 10,000+ teams.</p>
              <div class="portfolio-tags">
                <span class="portfolio-tag">SaaS</span>
                <span class="portfolio-tag">UI/UX</span>
                <span class="portfolio-tag">Full-Stack</span>
              </div>
            </div>
          </a>

          <a href="#/project/novatech" class="portfolio-card">
            <div class="portfolio-thumb">Project Screenshot</div>
            <div class="portfolio-info">
              <h3>NovaTech E-Commerce</h3>
              <p>A premium online store for a consumer electronics brand with 300+ SKUs.</p>
              <div class="portfolio-tags">
                <span class="portfolio-tag">E-Commerce</span>
                <span class="portfolio-tag">Shopify</span>
                <span class="portfolio-tag">Branding</span>
              </div>
            </div>
          </a>

          <a href="#/project/pixelworks" class="portfolio-card">
            <div class="portfolio-thumb">Project Screenshot</div>
            <div class="portfolio-info">
              <h3>Pixelworks Portfolio</h3>
              <p>A minimal, animation-rich portfolio site for an award-winning design studio.</p>
              <div class="portfolio-tags">
                <span class="portfolio-tag">Landing Page</span>
                <span class="portfolio-tag">Animation</span>
              </div>
            </div>
          </a>

          <a href="#/project/medconnect" class="portfolio-card">
            <div class="portfolio-thumb">Project Screenshot</div>
            <div class="portfolio-info">
              <h3>MedConnect Health Portal</h3>
              <p>A patient-facing portal with appointment booking, records access, and telehealth integration.</p>
              <div class="portfolio-tags">
                <span class="portfolio-tag">Healthcare</span>
                <span class="portfolio-tag">Web App</span>
              </div>
            </div>
          </a>

          <a href="#/project/finedge" class="portfolio-card">
            <div class="portfolio-thumb">Project Screenshot</div>
            <div class="portfolio-info">
              <h3>FinEdge Dashboard</h3>
              <p>A real-time analytics dashboard for a fintech startup tracking portfolio performance.</p>
              <div class="portfolio-tags">
                <span class="portfolio-tag">Fintech</span>
                <span class="portfolio-tag">Dashboard</span>
                <span class="portfolio-tag">Data Viz</span>
              </div>
            </div>
          </a>

          <a href="#/project/greenroots" class="portfolio-card">
            <div class="portfolio-thumb">Project Screenshot</div>
            <div class="portfolio-info">
              <h3>GreenRoots Non-Profit</h3>
              <p>A donation-driven website for an environmental non-profit, built for speed and accessibility.</p>
              <div class="portfolio-tags">
                <span class="portfolio-tag">Non-Profit</span>
                <span class="portfolio-tag">Accessibility</span>
              </div>
            </div>
          </a>

        </div>
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
