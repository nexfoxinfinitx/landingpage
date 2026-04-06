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
          <h1 class="legal-title">Terms & <span class="text-accent">Conditions</span></h1>
          <p class="legal-updated">Last Updated: April 6, 2026</p>
        </div>
      </div>

      <div class="container">
        <div class="legal-content-wrapper">

          <section class="legal-section" data-anim="legal">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using the Civion Infomatics website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.</p>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>2. Services</h2>
            <p>Civion Infomatics provides digital solutions including but not limited to:</p>
            <ul>
              <li>Custom web design and development</li>
              <li>Mobile application development</li>
              <li>UI/UX design services</li>
              <li>Cloud infrastructure and deployment solutions</li>
              <li>Website redesign and optimization</li>
              <li>E-commerce platform development</li>
            </ul>
            <p>The scope, timeline, and deliverables for each project will be defined in a separate project agreement or proposal.</p>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>3. Project Agreements</h2>
            <p>All projects undertaken by Civion Infomatics will be governed by individual project agreements that outline:</p>
            <ul>
              <li>Detailed scope of work and deliverables</li>
              <li>Project timeline and milestones</li>
              <li>Payment terms and schedule</li>
              <li>Revision policy and limits</li>
              <li>Ownership and intellectual property rights</li>
            </ul>
            <p>In the event of a conflict between these Terms and a project agreement, the project agreement shall prevail.</p>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>4. Payment Terms</h2>
            <p>Unless otherwise specified in a project agreement:</p>
            <ul>
              <li>A deposit of <strong>30%–50%</strong> of the total project cost is required before work begins</li>
              <li>Remaining payments are due upon completion of agreed milestones</li>
              <li>All invoices are payable within <strong>15 days</strong> of the invoice date</li>
              <li>Late payments may incur additional charges</li>
              <li>All prices are quoted in Indian Rupees (INR) unless stated otherwise</li>
            </ul>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>5. Client Responsibilities</h2>
            <p>To ensure timely and successful project delivery, clients are expected to:</p>
            <ul>
              <li>Provide all necessary content, assets, and feedback in a timely manner</li>
              <li>Designate a primary point of contact for the project</li>
              <li>Review and approve deliverables within the agreed timeframe</li>
              <li>Ensure that all provided content does not infringe on third-party rights</li>
            </ul>
            <p>Delays caused by the client's failure to meet these responsibilities may result in adjusted timelines and additional charges.</p>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>6. Intellectual Property</h2>
            <p>Upon full payment of all project fees:</p>
            <ul>
              <li>The client receives full ownership of the final delivered work product</li>
              <li>Civion Infomatics retains the right to use the project in its portfolio and for promotional purposes</li>
              <li>Any pre-existing tools, libraries, or frameworks used remain the property of their respective owners</li>
              <li>Custom code and designs created specifically for the project are transferred to the client</li>
            </ul>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>7. Confidentiality</h2>
            <p>Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the project. This obligation survives the termination of the business relationship.</p>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul>
              <li>Civion Infomatics shall not be liable for any indirect, incidental, or consequential damages</li>
              <li>Our total liability shall not exceed the total amount paid by the client for the specific project</li>
              <li>We are not responsible for any third-party service outages, hosting issues, or platform changes beyond our control</li>
            </ul>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>9. Termination</h2>
            <p>Either party may terminate a project engagement with <strong>15 days</strong> written notice. In the event of termination:</p>
            <ul>
              <li>The client is responsible for payment for all work completed up to the termination date</li>
              <li>Any advance payments for uncompleted work will be refunded on a pro-rata basis</li>
              <li>All delivered work product up to the termination date will be handed over to the client</li>
            </ul>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>10. Governing Law</h2>
            <p>These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.</p>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>11. Changes to These Terms</h2>
            <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this page. Continued use of our website or services after changes constitutes acceptance of the updated terms.</p>
          </section>

          <section class="legal-section" data-anim="legal">
            <h2>12. Contact Us</h2>
            <div class="legal-contact-card">
              <p>If you have any questions about these Terms and Conditions, please reach out:</p>
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
