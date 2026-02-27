import { renderNavbar, renderFooter, initMobileMenu } from '../layout.js';

export function render() {
    const app = document.getElementById('app');
    app.innerHTML = `
    ${renderNavbar()}

    <!-- Page Header -->
    <header class="page-header">
      <div class="container">
        <h1>Privacy Policy</h1>
        <p>Your privacy matters to us. This policy explains what data we collect, why, and how we protect it.</p>
      </div>
    </header>

    <!-- Content -->
    <section class="page-section">
      <div class="container legal-content">
        <p><strong>Effective Date:</strong> January 1, 2026</p>

        <h2>1. Information We Collect</h2>
        <p>When you use our website or engage our services, we may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, and company name provided through our contact forms.</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent on site, browser type, device information, and referring URLs collected through analytics tools.</li>
          <li><strong>Cookies:</strong> Small data files stored on your device to improve your browsing experience and help us understand site usage.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide requested services.</li>
          <li>Improve our website, content, and service offerings.</li>
          <li>Send project updates and, with your consent, occasional newsletters.</li>
          <li>Comply with legal obligations and protect our rights.</li>
        </ul>

        <h2>3. Data Sharing</h2>
        <p>We do not sell, rent, or trade your personal information to third parties. We may share data with trusted service providers (e.g., hosting, analytics) who assist us in operating our website, subject to confidentiality agreements.</p>

        <h2>4. Cookies</h2>
        <p>Our site uses essential cookies for functionality and optional analytics cookies to understand traffic patterns. You can control cookie preferences through your browser settings.</p>

        <h2>5. Data Security</h2>
        <p>We implement industry-standard security measures to protect your data, including HTTPS encryption, secure hosting, and access controls. However, no method of transmission over the internet is 100% secure.</p>

        <h2>6. Your Rights</h2>
        <p>Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, please contact us at <strong>privacy@starter.agency</strong>.</p>

        <h2>7. Third-Party Links</h2>
        <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices and encourage you to review their policies.</p>

        <h2>8. Changes to This Policy</h2>
        <p>We may update this policy from time to time. Changes will be posted on this page with a revised effective date.</p>

        <h2>9. Contact</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p><strong>Email:</strong> privacy@starter.agency<br /><strong>Address:</strong> 123 Digital Ave, Suite 400, San Francisco, CA 94105</p>
      </div>
    </section>

    ${renderFooter()}
  `;

    initMobileMenu();
}
