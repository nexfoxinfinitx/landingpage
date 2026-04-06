import { renderNavbar, renderFooter, initMagneticButton } from '../layouts/layout.js';
import gsap from 'gsap';

export function render() {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${renderNavbar()}

    <div class="legal-page">
      <div class="legal-hero">
        <div class="container">
          <div class="legal-badge">LEGAL</div>
          <h1 class="legal-title">Privacy <span class="text-accent">Policy</span></h1>
          <p class="legal-updated">Last Updated: April 6, 2026</p>
        </div>
      </div>

      <div class="container">
        <div class="legal-content-wrapper">

          <section class="legal-section" data-anim="legal">
            <h2>1. Introduction</h2>
            <p>Welcome to Civion Infomatics ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.</p>
            <p>If you have any questions or concerns about this policy, please contact us at <strong>civion-infomatics.slack.com</strong>.</p>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>2. Information We Collect</h2>
            <p>We collect information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Fill out our contact form</li>
              <li>Request a quote or consultation</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via email, phone, or other channels</li>
            </ul>
            <p>The personal information we may collect includes:</p>
            <ul>
              <li><strong>Name</strong> — to address you properly</li>
              <li><strong>Email Address</strong> — to respond to your inquiries</li>
              <li><strong>Phone Number</strong> — for project-related communication</li>
              <li><strong>Project Details</strong> — to understand your requirements</li>
              <li><strong>Budget Information</strong> — to provide accurate estimates</li>
            </ul>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To deliver the services you have requested</li>
              <li>To send you project updates and relevant communications</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>4. Data Sharing & Third Parties</h2>
            <p>We do <strong>not</strong> sell, rent, or trade your personal information to third parties. We may share your data only in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers</strong> — trusted third-party tools (e.g., email services, hosting) that help us operate our business</li>
              <li><strong>Legal Requirements</strong> — if required by law, regulation, or legal process</li>
              <li><strong>Business Transfers</strong> — in the event of a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>5. Data Security</h2>
            <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>6. Cookies & Tracking</h2>
            <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. These may include:</p>
            <ul>
              <li><strong>Essential Cookies</strong> — required for the website to function properly</li>
              <li><strong>Analytics Cookies</strong> — to understand how visitors interact with our website</li>
            </ul>
            <p>You can control cookie preferences through your browser settings.</p>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to request correction of inaccurate data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to withdraw consent at any time</li>
              <li>The right to data portability</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <strong>civion-infomatics.slack.com</strong>.</p>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.</p>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>9. Contact Us</h2>
            <div class="legal-contact-card">
              <p>If you have any questions about this Privacy Policy, you can contact us:</p>
              <div class="legal-contact-details">
                <div class="legal-contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ab7a8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span>civion-infomatics.slack.com</span>
                </div>
                <div class="legal-contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ab7a8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>+91 8452979365</span>
                </div>
                <div class="legal-contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ab7a8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>

    ${renderFooter()}
  `;

  setTimeout(() => {
    initMagneticButton();

    // Animate sections
    gsap.fromTo('.legal-badge',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    gsap.fromTo('.legal-title',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.15 }
    );

    gsap.fromTo('.legal-updated',
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.3 }
    );

    gsap.fromTo('[data-anim="legal"]',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1, delay: 0.4 }
    );
  }, 50);

  return () => {};
}
