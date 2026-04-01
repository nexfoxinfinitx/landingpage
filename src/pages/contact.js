import { renderNavbar, renderFooter, initMagneticButton } from '../layouts/layout.js';
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

          <div class="contact-grid">
            <!-- Form -->
            <form class="contact-form" id="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <select>
                <option value="" disabled selected>Project Type</option>
                <option value="landing">Landing Page</option>
                <option value="ecommerce">E-Commerce</option>
                <option value="saas">SaaS / Web App</option>
                <option value="redesign">Redesign</option>
                <option value="other">Other</option>
              </select>
              <input type="text" placeholder="Estimated Budget (optional)" />
              <textarea placeholder="Tell us about your project..."></textarea>
              <button type="submit" class="btn btn-lg">Send Message</button>
            </form>

            <!-- Contact Info -->
            <div class="contact-info">
              <h3>Other ways to reach us</h3>
              <p>Prefer a more direct approach? Here's how you can find us.</p>

              <div class="contact-detail">
                <strong>Email</strong>
                <span>hello@civioninfomatics.com</span>
              </div>
              <div class="contact-detail">
                <strong>Phone</strong>
                <span>+1 (555) 123-4567</span>
              </div>
              <div class="contact-detail">
                <strong>Office</strong>
                <span>123 Digital Ave, Suite 400<br />San Francisco, CA 94105</span>
              </div>
              <div class="contact-detail">
                <strong>Hours</strong>
                <span>Mon – Fri, 9:00 AM – 6:00 PM PST</span>
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

    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thanks for reaching out! We'll get back to you within 24 hours. (This is a demo)");
        form.reset();
      });
    }
  }, 50);

  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}
