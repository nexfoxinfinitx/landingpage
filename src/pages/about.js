import { renderNavbar, renderFooter, initMagneticButton } from '../layouts/layout.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function render() {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${renderNavbar()}

    <div style="padding-top: 80px; min-height: calc(100vh - 80px); background: #12161A;">
      <!-- ═══════════ ABOUT US ═══════════ -->
      <section id="about" class="single-section about-section">
        <div class="container">
          <div class="section-label">ABOUT US</div>
          <h2 class="section-title">We Build Like<span class="text-accent"> Experts</span></h2>
          <p class="section-sub">We are a fast-growing digital solutions agency focused on building modern, scalable, and high-performing digital products.</p>

          <div class="about-content-grid">
            <div class="about-text">
              <p>As a startup, we bring agility, fresh thinking, and a deep understanding of today’s technology landscape.</p>
              <p>Our team specializes in crafting websites, mobile applications, and AI-driven systems that are not just functional — but designed to solve real business problems and drive growth.</p>
              <p>Unlike traditional agencies, we work closely with our clients, acting as technology partners rather than just service providers.</p>
            </div>
            <div class="about-stats">
              <div class="stat-item">
                <span class="stat-number">80+</span>
                <span class="stat-label">Projects Shipped</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">Happy Clients</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">2+</span>
                <span class="stat-label">Years Experience</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">6</span>
                <span class="stat-label">Team Members</span>
              </div>
            </div>
          </div>

          <div class="values-grid">
            <div class="value-card">
              <h3>Results First</h3>
              <p>Every design choice and line of code is driven by measurable outcomes for your business.</p>
            </div>
            <div class="value-card">
              <h3>True Partnership</h3>
              <p>We work alongside you, not just for you. Transparent communication at every stage.</p>
            </div>
            <div class="value-card">
              <h3>Relentless Quality</h3>
              <p>We sweat the details so your users don't have to. Pixel-perfect, performant, accessible.</p>
            </div>
            <div class="value-card">
              <h3>Continuous Learning</h3>
              <p>The web evolves fast. We stay ahead of the curve so your product never falls behind.</p>
            </div>
            <div class="value-card">
              <h3>Inclusive Design</h3>
              <p>We build for everyone. Accessibility and usability are non-negotiable in every project.</p>
            </div>
            <div class="value-card">
              <h3>Ship &amp; Iterate</h3>
              <p>Perfection is a moving target. We ship fast, gather feedback, and refine continuously.</p>
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

    const statItems = gsap.utils.toArray('.stat-item');
    if (statItems.length) {
      gsap.fromTo(statItems,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.6, stagger: 0.12, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.about-stats', start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
    }
  }, 50);

  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}
