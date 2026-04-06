import { renderNavbar, renderContactFooter, initMagneticButton } from '../layouts/layout.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function render() {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${renderNavbar()}

    <div style="padding-top: 80px; min-height: calc(100vh - 80px); background: #12161A;">
      <!-- ═══════════ CONTACT US ═══════════ -->
      <section id="contact" class="single-section contact-section">
        <div class="container">
          <div class="section-label">CONTACT US</div>
          <h2 class="section-title">Let's Start a <span class="text-accent">Conversation</span></h2>
          <p class="section-sub">Have a project in mind or just want to say hello? We'd love to hear from you.</p>

          <div class="contact-layout">
            <!-- Left: Form Card -->
            <div class="contact-form-card">
              <div class="contact-form-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2ab7a8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>Send us a message</span>
              </div>
              <form class="contact-form-v2" id="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="contact-name">Your Name</label>
                    <input type="text" id="contact-name" placeholder="John Doe" required />
                  </div>
                  <div class="form-group">
                    <label for="contact-email">Email Address</label>
                    <input type="email" id="contact-email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label for="contact-type">Project Type</label>
                    <select id="contact-type">
                      <option value="" disabled selected>Select a type</option>
                      <option value="landing">Landing Page</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="saas">SaaS / Web App</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="contact-budget">Estimated Budget</label>
                    <input type="text" id="contact-budget" placeholder="₹10,000 – ₹1,00,000" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="contact-message">Your Message</label>
                  <textarea id="contact-message" placeholder="Tell us about your project, goals, and timeline..."></textarea>
                </div>
                <button type="submit" class="contact-submit-btn" id="contact-submit-btn">
                  <span>Send Message</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </form>
            </div>

            <!-- Right: Contact Info -->
            <div class="contact-info-col">
              <div class="contact-info-card" data-anim="info">
                <div class="contact-info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2ab7a8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div class="contact-info-text">
                  <strong>Email</strong>
                  <span>civion-infomatics.slack.com</span>
                </div>
              </div>

              <div class="contact-info-card" data-anim="info">
                <div class="contact-info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2ab7a8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div class="contact-info-text">
                  <strong>Phone</strong>
                  <span>+91 8452979365</span>
                </div>
              </div>

              <div class="contact-info-card" data-anim="info">
                <div class="contact-info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2ab7a8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div class="contact-info-text">
                  <strong>Working Hours</strong>
                  <span>Mon – Fri, 9:00 AM – 6:00 IST</span>
                </div>
              </div>

              <div class="contact-info-card" data-anim="info">
                <div class="contact-info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2ab7a8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div class="contact-info-text">
                  <strong>Location</strong>
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    ${renderContactFooter()}
  `;

  setTimeout(() => {
    initMagneticButton();

    // Animate section header
    gsap.fromTo('.section-label',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    gsap.fromTo('.section-title',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.15 }
    );

    gsap.fromTo('.section-sub',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 }
    );

    // Animate form card
    gsap.fromTo('.contact-form-card',
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.4 }
    );

    // Animate info cards staggered
    gsap.fromTo('[data-anim="info"]',
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12, delay: 0.5 }
    );

    // Form submit handler
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('contact-submit-btn');
        btn.innerHTML = `<span>Message Sent!</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
        btn.style.background = 'linear-gradient(135deg, #1a9e8e, #2ab7a8)';
        setTimeout(() => {
          btn.innerHTML = `<span>Send Message</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
          btn.style.background = '';
          form.reset();
        }, 2500);
      });
    }
  }, 50);

  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}
