import { renderNavbar, renderFooter, initMobileMenu } from '../layout.js';
import { initScrollReveal } from '../animations.js';

export function render() {
    const app = document.getElementById('app');
    app.innerHTML = `
    ${renderNavbar()}

    <!-- Hero -->
    <header class="hero" id="hero">
      <div class="container hero-inner">
        <p class="hero-badge">Web Development Agency</p>
        <h1>We build websites<br />that <em>drive results</em></h1>
        <p class="hero-sub">From concept to launch, we craft high-performance digital experiences that help brands grow, convert, and stand out.</p>
        <div class="hero-actions">
          <a href="#/contact" class="btn btn-lg">Start a Project</a>
          <a href="#/work" class="btn btn-lg btn-outline">View Our Work</a>
        </div>
        <div class="hero-visual">
          <div class="hero-card card-1"></div>
          <div class="hero-card card-2"></div>
          <div class="hero-card card-3"></div>
        </div>
      </div>
    </header>

    <!-- Services -->
    <section class="features" id="services">
      <div class="container">
        <h2 class="section-title">What we do</h2>
        <p class="section-sub">End-to-end web solutions tailored to your business goals.</p>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Beautiful, intuitive interfaces grounded in user research and modern design principles.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Web Development</h3>
            <p>Fast, responsive, and accessible websites built with clean code and best practices.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛒</div>
            <h3>E-Commerce</h3>
            <p>Custom online stores that convert visitors into customers with seamless shopping experiences.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>SEO &amp; Analytics</h3>
            <p>Data-driven optimization so your site ranks higher and you understand every visitor.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔧</div>
            <h3>Maintenance &amp; Support</h3>
            <p>Ongoing care, updates, and performance monitoring to keep your site running flawlessly.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3>SaaS &amp; Web Apps</h3>
            <p>Full-stack application development for startups and enterprises ready to scale.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="pricing" id="pricing">
      <div class="container">
        <h2 class="section-title">Flexible engagement models</h2>
        <p class="section-sub">Choose the plan that fits your project scope and budget.</p>
        <div class="pricing-grid">
          <div class="pricing-card">
            <h3>Starter</h3>
            <p class="price">$2,500<span>/project</span></p>
            <ul>
              <li>Up to 5 pages</li>
              <li>Responsive design</li>
              <li>Basic SEO setup</li>
              <li>2 revision rounds</li>
            </ul>
            <a href="#/contact" class="btn btn-outline">Get a Quote</a>
          </div>
          <div class="pricing-card popular">
            <span class="popular-badge">Most Popular</span>
            <h3>Growth</h3>
            <p class="price">$6,000<span>/project</span></p>
            <ul>
              <li>Up to 15 pages</li>
              <li>Custom UI/UX design</li>
              <li>CMS integration</li>
              <li>Advanced SEO &amp; analytics</li>
              <li>Priority support</li>
            </ul>
            <a href="#/contact" class="btn">Get a Quote</a>
          </div>
          <div class="pricing-card">
            <h3>Enterprise</h3>
            <p class="price">Custom</p>
            <ul>
              <li>Unlimited pages</li>
              <li>Full-stack development</li>
              <li>Dedicated project manager</li>
              <li>SLA &amp; ongoing support</li>
            </ul>
            <a href="#/contact" class="btn btn-outline">Contact Us</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials" id="testimonials">
      <div class="container">
        <h2 class="section-title">Trusted by ambitious brands</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <p>"Starter. redesigned our entire platform and the results were immediate — 40% more conversions in the first month."</p>
            <div class="testimonial-author">
              <div class="avatar" style="background:#6C63FF"></div>
              <div>
                <strong>Alex Rivera</strong>
                <span>CTO, Flowstate</span>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <p>"Their process is incredibly smooth. We went from wireframes to a live site in under four weeks."</p>
            <div class="testimonial-author">
              <div class="avatar" style="background:#FF6584"></div>
              <div>
                <strong>Priya Sharma</strong>
                <span>Product Lead, NovaTech</span>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <p>"We needed an e-commerce store that felt premium. Starter. nailed it — our customers love the experience."</p>
            <div class="testimonial-author">
              <div class="avatar" style="background:#43E97B"></div>
              <div>
                <strong>Jordan Kim</strong>
                <span>Founder, Pixelworks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta" id="contact">
      <div class="container cta-inner">
        <h2>Ready to build something great?</h2>
        <p>Tell us about your project and we'll get back to you within 24 hours.</p>
        <div class="hero-actions">
          <a href="#/contact" class="btn btn-lg">Start a Project</a>
          <a href="#/work" class="btn btn-lg btn-outline">See Our Work</a>
        </div>
      </div>
    </section>

    ${renderFooter()}
  `;

    initMobileMenu();
    initScrollReveal();
}
