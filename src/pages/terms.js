import { renderNavbar, renderFooter, initMobileMenu } from '../layout.js';

export function render() {
    const app = document.getElementById('app');
    app.innerHTML = `
    ${renderNavbar()}

    <!-- Page Header -->
    <header class="page-header">
      <div class="container">
        <h1>Terms &amp; Conditions</h1>
        <p>Please read these terms carefully before engaging our services or using our website.</p>
      </div>
    </header>

    <!-- Content -->
    <section class="page-section">
      <div class="container legal-content">
        <p><strong>Effective Date:</strong> January 1, 2026</p>

        <h2>1. Services</h2>
        <p>Starter. ("we," "us," "our") provides web design, development, and related digital services. The specific scope, timeline, and deliverables for each project are defined in a separate project proposal or statement of work agreed upon by both parties.</p>

        <h2>2. Project Proposals &amp; Payments</h2>
        <p>All projects begin with a signed proposal and a deposit as specified in the agreement. Payment schedules, milestones, and accepted methods are outlined in the project proposal. Late payments may result in project delays or suspension.</p>

        <h2>3. Client Responsibilities</h2>
        <p>Clients are responsible for providing content, assets, feedback, and approvals in a timely manner. Delays in client deliverables may affect project timelines and are not the responsibility of Starter.</p>

        <h2>4. Intellectual Property</h2>
        <p>Upon full payment, the client receives ownership of all custom design and code deliverables created for the project. Third-party assets (stock photos, fonts, plugins) remain subject to their respective licenses. We retain the right to showcase the work in our portfolio unless otherwise agreed in writing.</p>

        <h2>5. Revisions</h2>
        <p>Each project includes a defined number of revision rounds as specified in the proposal. Additional revisions beyond the agreed scope will be billed at our standard hourly rate.</p>

        <h2>6. Limitation of Liability</h2>
        <p>Starter. shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or deliverables. Our total liability shall not exceed the total fees paid by the client for the specific project in question.</p>

        <h2>7. Termination</h2>
        <p>Either party may terminate a project with 14 days' written notice. In the event of termination, the client is responsible for payment of all work completed up to the termination date.</p>

        <h2>8. Confidentiality</h2>
        <p>Both parties agree to keep confidential any proprietary information shared during the course of the project. This obligation survives the termination of the engagement.</p>

        <h2>9. Website Use</h2>
        <p>By using this website, you agree not to misuse its content or services. All content on this site is the property of Starter. and may not be reproduced without written permission.</p>

        <h2>10. Governing Law</h2>
        <p>These terms are governed by the laws of the State of California, United States. Any disputes shall be resolved in the courts of San Francisco County.</p>

        <h2>11. Changes to These Terms</h2>
        <p>We reserve the right to update these terms at any time. Changes will be effective upon posting to this page with a revised effective date.</p>

        <h2>12. Contact</h2>
        <p>For questions about these Terms &amp; Conditions, contact us at:</p>
        <p><strong>Email:</strong> legal@starter.agency<br /><strong>Address:</strong> 123 Digital Ave, Suite 400, San Francisco, CA 94105</p>
      </div>
    </section>

    ${renderFooter()}
  `;

    initMobileMenu();
}
