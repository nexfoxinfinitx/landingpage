import { renderNavbar, renderFooter, initMagneticButton } from '../layouts/layout.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function render() {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${renderNavbar()}

    <div style="padding-top: 80px; min-height: calc(100vh - 80px); background: #0e1215;">
      <!-- ═══════════ SERVICES ═══════════ -->
      <section id="services" class="single-section services-section">
        <div class="container">
          <div class="section-label">SERVICES</div>
          <h2 class="section-title">What We <span class="text-accent">Do</span></h2>
          <p class="section-sub">End-to-end digital solutions tailored to your unique business needs.</p>

          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3>Web Development</h3>
              <p>High-performance, responsive websites and web applications built with cutting-edge technologies.</p>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h3>UI/UX Design</h3>
              <p>Beautiful, intuitive interfaces designed to delight users and achieve your business objectives.</p>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
              <h3>Mobile Apps</h3>
              <p>Native and cross-platform mobile applications that deliver seamless experiences on every device.</p>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3>Custom Software</h3>
              <p>Tailored software solutions that streamline operations and solve complex business challenges.</p>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </div>
              <h3>AI Automation</h3>
              <p>Comprehensive branding that captures your essence and resonates with your target audience.</p>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
              </div>
              <h3>Digital Marketing</h3>
              <p>Data-driven marketing strategies that amplify your reach and maximize your return on investment.</p>
            </div>
          </div>

          <!-- Process Steps -->
          <div class="process-wrapper">
            <h3 class="process-heading">Our Process</h3>
            <div class="workflow-grid">
              <div class="workflow-step">
                <div class="step-number">1</div>
                <h3>Discovery</h3>
                <p>We dive deep into your business, audience, and goals through stakeholder interviews and research.</p>
              </div>
              <div class="workflow-step">
                <div class="step-number">2</div>
                <h3>Strategy</h3>
                <p>We define the sitemap, user flows, content strategy, and technical architecture for the build.</p>
              </div>
              <div class="workflow-step">
                <div class="step-number">3</div>
                <h3>Design</h3>
                <p>Wireframes evolve into high-fidelity mockups with your feedback at every checkpoint.</p>
              </div>
              <div class="workflow-step">
                <div class="step-number">4</div>
                <h3>Development</h3>
                <p>Clean, semantic, and performant code brings the design to life. Mobile-first always.</p>
              </div>
              <div class="workflow-step">
                <div class="step-number">5</div>
                <h3>QA &amp; Testing</h3>
                <p>Rigorous quality assurance covers functionality, accessibility, performance, and SEO.</p>
              </div>
              <div class="workflow-step">
                <div class="step-number">6</div>
                <h3>Launch &amp; Support</h3>
                <p>We handle deployment, monitoring, and post-launch optimization. Always by your side.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    ${renderFooter()}
  `;

  setTimeout(() => {
    initMagneticButton();

    gsap.utils.toArray('.section-label').forEach(label => {
      gsap.fromTo(label,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: label, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
    });

    gsap.utils.toArray('.section-title').forEach(title => {
      gsap.fromTo(title,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: title, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
    });

    const serviceCards = gsap.utils.toArray('.service-card');
    if (serviceCards.length) {
      gsap.fromTo(serviceCards,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.services-grid', start: 'top 80%', toggleActions: 'play none none none' }
        }
      );
    }
  }, 50);

  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}
