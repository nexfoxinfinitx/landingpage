import { renderNavbar, renderFooter, initMobileMenu } from '../layout.js';

export function render() {
    const app = document.getElementById('app');
    app.innerHTML = `
    ${renderNavbar()}

    <!-- Page Header -->
    <header class="page-header">
      <div class="container">
        <h1>Get in Touch</h1>
        <p>Have a project in mind or just want to say hello? Fill out the form below and we'll get back to you within 24 hours.</p>
      </div>
    </header>

    <!-- Contact Section -->
    <section class="page-section">
      <div class="container">
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
              <span>hello@starter.agency</span>
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

    ${renderFooter()}
  `;

    initMobileMenu();

    // Wire up contact form
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thanks for reaching out! We'll get back to you within 24 hours. (This is a demo)");
            form.reset();
        });
    }
}
