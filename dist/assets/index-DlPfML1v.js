(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Da={};let xs=null;function kr(r,e){Da[r]=e}function mv(){return window.location.hash.slice(1)||"/"}function op(){const r=mv();if(xs&&typeof xs=="function"&&(xs(),xs=null),Da[r]){xs=Da[r](),window.scrollTo(0,0);return}for(const[e,t]of Object.entries(Da))if(e.includes(":")){const n=e.split("/"),i=r.split("/");if(n.length===i.length){const s={};let a=!0;for(let o=0;o<n.length;o++)if(n[o].startsWith(":"))s[n[o].slice(1)]=i[o];else if(n[o]!==i[o]){a=!1;break}if(a){xs=t(s),window.scrollTo(0,0);return}}}Da["/"]&&(xs=Da["/"](),window.scrollTo(0,0))}function gv(){window.addEventListener("hashchange",op),op()}function ia(){return`
  <nav class="navbar">
    <div class="container navbar-inner">
      <a href="#/" class="logo">Starter<span>.</span></a>

      <div class="icon-menu">
        <a href="#/" class="icon-link">
          <span class="icon-link-icon"><img src="/assets/icons/home.png" alt="Home" /></span>
          <span class="icon-link-title">Home</span>
        </a>
        <a href="#/services" class="icon-link">
          <span class="icon-link-icon"><img src="/assets/icons/Services.png" alt="Services" /></span>
          <span class="icon-link-title">Services</span>
        </a>
        <a href="#/work" class="icon-link">
          <span class="icon-link-icon"><img src="/assets/icons/work.png" alt="Work" /></span>
          <span class="icon-link-title">Work</span>
        </a>
        <a href="#/process" class="icon-link">
          <span class="icon-link-icon"><img src="/assets/icons/process.png" alt="Process" /></span>
          <span class="icon-link-title">Process</span>
        </a>
        <a href="#/about" class="icon-link">
          <span class="icon-link-icon"><img src="/assets/icons/about.png" alt="About" /></span>
          <span class="icon-link-title">About</span>
        </a>
        <a href="#/contact" class="icon-link">
          <span class="icon-link-icon"><img src="/assets/icons/contact.png" alt="Contact" /></span>
          <span class="icon-link-title">Contact</span>
        </a>
      </div>

      <button class="menu-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`}function ra(){return`
  <footer class="footer">
    <div class="container footer-inner">
      <a href="#/" class="logo">Starter<span>.</span></a>
      <div class="footer-links">
        <a href="#/services">Services</a>
        <a href="#/work">Work</a>
        <a href="#/process">Process</a>
        <a href="#/about">About</a>
        <a href="#/contact">Contact</a>
        <a href="#/privacy">Privacy</a>
        <a href="#/terms">Terms</a>
      </div>
      <p class="copyright">&copy; 2026 Starter. All rights reserved.</p>
    </div>
  </footer>`}function sa(){const r=document.querySelector(".menu-toggle"),e=document.querySelector(".nav-links");r&&e&&(r.addEventListener("click",()=>{e.classList.toggle("open"),r.classList.toggle("active")}),e.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{e.classList.remove("open"),r.classList.remove("active")})}))}function uu(){const r=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("visible"),r.unobserve(t.target))})},{threshold:.15});document.querySelectorAll(".feature-card, .pricing-card, .testimonial-card, .workflow-step, .portfolio-card, .value-card, .team-member").forEach(e=>{e.style.opacity="0",e.style.transform="translateY(24px)",e.style.transition="opacity .5s ease, transform .5s ease",r.observe(e)})}function Ng(){const r=document.getElementById("app");r.innerHTML=`
    ${ia()}

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

    ${ra()}
  `,sa(),uu()}function _v(){const r=document.getElementById("app");r.innerHTML=`
    ${ia()}

    <!-- Page Header -->
    <header class="page-header">
      <div class="container">
        <h1>About Starter<span style="color:var(--accent)">.</span></h1>
        <p>We're a team of designers, developers, and strategists who believe the web should be beautiful, fast, and accessible to everyone.</p>
      </div>
    </header>

    <!-- Mission -->
    <section class="page-section">
      <div class="container">
        <h2 class="section-title">Our Mission</h2>
        <p class="section-sub">We help ambitious brands translate their vision into exceptional digital experiences that drive real business results.</p>
        <p style="max-width:720px;margin:0 auto;color:var(--text-muted);text-align:center;font-size:.95rem;line-height:1.8;">
          Founded in 2020, Starter. grew from a two-person freelance partnership into a full-service web agency. We've shipped over 80 projects for startups, SMBs, and enterprise clients across e-commerce, SaaS, healthcare, and fintech. Our philosophy is simple: understand the problem deeply, design with intent, and build with precision.
        </p>
      </div>
    </section>

    <!-- Values -->
    <section class="page-section">
      <div class="container">
        <h2 class="section-title">Our Values</h2>
        <p class="section-sub">The principles that guide every project we take on.</p>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">🎯</div>
            <h3>Results First</h3>
            <p>Every design choice and line of code is driven by measurable outcomes for your business.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🤝</div>
            <h3>True Partnership</h3>
            <p>We work alongside you, not just for you. Transparent communication at every stage.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">⚡</div>
            <h3>Relentless Quality</h3>
            <p>We sweat the details so your users don't have to. Pixel-perfect, performant, accessible.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🔬</div>
            <h3>Continuous Learning</h3>
            <p>The web evolves fast. We stay ahead of the curve so your product never falls behind.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🌍</div>
            <h3>Inclusive Design</h3>
            <p>We build for everyone. Accessibility and usability are non-negotiable in every project.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🚀</div>
            <h3>Ship &amp; Iterate</h3>
            <p>Perfection is a moving target. We ship fast, gather feedback, and refine continuously.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="page-section">
      <div class="container">
        <h2 class="section-title">Meet the Team</h2>
        <p class="section-sub">The people behind the pixels.</p>
        <div class="team-grid">
          <div class="team-member">
            <div class="team-avatar" style="background:#6C63FF"></div>
            <h4>Maya Chen</h4>
            <p>Founder &amp; Creative Director</p>
          </div>
          <div class="team-member">
            <div class="team-avatar" style="background:#FF6584"></div>
            <h4>David Osei</h4>
            <p>Lead Developer</p>
          </div>
          <div class="team-member">
            <div class="team-avatar" style="background:#43E97B"></div>
            <h4>Sofia Reyes</h4>
            <p>UX/UI Designer</p>
          </div>
          <div class="team-member">
            <div class="team-avatar" style="background:#FFB347"></div>
            <h4>Liam Park</h4>
            <p>Project Manager</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container cta-inner">
        <h2>Let's build something great together</h2>
        <p>Have a project in mind? We'd love to hear about it.</p>
        <div class="hero-actions">
          <a href="#/contact" class="btn btn-lg">Start a Project</a>
          <a href="#/work" class="btn btn-lg btn-outline">View Our Work</a>
        </div>
      </div>
    </section>

    ${ra()}
  `,sa(),uu()}function vv(){const r=document.getElementById("app");r.innerHTML=`
    ${ia()}

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

    ${ra()}
  `,sa();const e=document.getElementById("contact-form");e&&e.addEventListener("submit",t=>{t.preventDefault(),alert("Thanks for reaching out! We'll get back to you within 24 hours. (This is a demo)"),e.reset()})}function xv(){const r=document.getElementById("app");r.innerHTML=`
    ${ia()}

    <!-- Page Header -->
    <header class="page-header">
      <div class="container">
        <h1>Our Work</h1>
        <p>A selection of projects we're proud of. Each one designed, developed, and delivered with care.</p>
      </div>
    </header>

    <!-- Templates -->
    <section class="page-section">
      <div class="container">
        <a href="#/template-1" class="portfolio-card-landscape">
          <div class="portfolio-thumb-landscape">Template Preview</div>
          <div class="portfolio-info-landscape">
            <h3>Template 1</h3>
          </div>
        </a>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container cta-inner">
        <h2>Want to be our next success story?</h2>
        <p>Tell us about your project and let's make it happen.</p>
        <div class="hero-actions">
          <a href="#/contact" class="btn btn-lg">Start a Project</a>
          <a href="#/process" class="btn btn-lg btn-outline">See Our Process</a>
        </div>
      </div>
    </section>

    ${ra()}
  `,sa(),uu()}function yv(){const r=document.getElementById("app");r.innerHTML=`
    ${ia()}

    <!-- Page Header -->
    <header class="page-header">
      <div class="container">
        <h1>Our Process</h1>
        <p>A proven, transparent workflow that takes your project from idea to launch — and beyond.</p>
      </div>
    </header>

    <!-- Workflow Steps -->
    <section class="page-section">
      <div class="container">
        <h2 class="section-title">How we work</h2>
        <p class="section-sub">Six clear phases ensure nothing falls through the cracks.</p>
        <div class="workflow-grid">
          <div class="workflow-step">
            <div class="step-number">1</div>
            <h3>Discovery</h3>
            <p>We dive deep into your business, audience, and goals through stakeholder interviews, competitive analysis, and research.</p>
          </div>
          <div class="workflow-step">
            <div class="step-number">2</div>
            <h3>Strategy</h3>
            <p>We define the sitemap, user flows, content strategy, and technical architecture that will guide the entire build.</p>
          </div>
          <div class="workflow-step">
            <div class="step-number">3</div>
            <h3>Design</h3>
            <p>Wireframes evolve into high-fidelity mockups with your feedback at every checkpoint. Nothing moves forward without your sign-off.</p>
          </div>
          <div class="workflow-step">
            <div class="step-number">4</div>
            <h3>Development</h3>
            <p>Clean, semantic, and performant code brings the design to life. We build mobile-first and test across devices and browsers.</p>
          </div>
          <div class="workflow-step">
            <div class="step-number">5</div>
            <h3>QA &amp; Testing</h3>
            <p>Rigorous quality assurance covers functionality, accessibility, performance, and SEO before anything goes live.</p>
          </div>
          <div class="workflow-step">
            <div class="step-number">6</div>
            <h3>Launch &amp; Support</h3>
            <p>We handle deployment, monitoring, and post-launch optimization. Our relationship doesn't end at launch.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why it works -->
    <section class="page-section">
      <div class="container" style="max-width:720px;text-align:center;">
        <h2 class="section-title">Why it works</h2>
        <p style="color:var(--text-muted);font-size:.95rem;line-height:1.8;margin-top:20px;">
          Each phase has clear deliverables and approval gates, so you always know exactly where your project stands. This structured approach eliminates surprises, keeps timelines on track, and produces consistently high-quality results — whether we're building a five-page landing site or a full-stack SaaS platform.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container cta-inner">
        <h2>Ready to kick off your project?</h2>
        <p>Let's start with a free discovery call to understand your needs.</p>
        <div class="hero-actions">
          <a href="#/contact" class="btn btn-lg">Get in Touch</a>
          <a href="#/work" class="btn btn-lg btn-outline">See Our Work</a>
        </div>
      </div>
    </section>

    ${ra()}
  `,sa(),uu()}function Sv(){const r=document.getElementById("app");r.innerHTML=`
    ${ia()}

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

    ${ra()}
  `,sa()}function Mv(){const r=document.getElementById("app");r.innerHTML=`
    ${ia()}

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

    ${ra()}
  `,sa()}const ad="183",Tv=0,lp=1,bv=2,Mc=1,Ev=2,Oo=3,Nr=0,Jn=1,er=2,Pr=0,ka=1,cp=2,up=3,hp=4,Av=5,Us=100,wv=101,Rv=102,Cv=103,Pv=104,Dv=200,Lv=201,Iv=202,Nv=203,Nh=204,Uh=205,Uv=206,Fv=207,Ov=208,Bv=209,kv=210,zv=211,Vv=212,Hv=213,Gv=214,Fh=0,Oh=1,Bh=2,Ja=3,kh=4,zh=5,Vh=6,Hh=7,Ug=0,Wv=1,Xv=2,ar=0,Fg=1,Og=2,Bg=3,kg=4,zg=5,Vg=6,Hg=7,fp="attached",qv="detached",Gg=300,Js=301,Qa=302,Au=303,wu=304,hu=306,eo=1e3,nr=1001,Gc=1002,ln=1003,Wg=1004,Bo=1005,cn=1006,Tc=1007,wr=1008,hi=1009,Xg=1010,qg=1011,hl=1012,od=1013,ur=1014,Ci=1015,Ur=1016,ld=1017,cd=1018,fl=1020,Yg=35902,$g=35899,Kg=1021,jg=1022,Pi=1023,Fr=1026,Bs=1027,ud=1028,hd=1029,to=1030,fd=1031,dd=1033,bc=33776,Ec=33777,Ac=33778,wc=33779,Gh=35840,Wh=35841,Xh=35842,qh=35843,Yh=36196,$h=37492,Kh=37496,jh=37488,Zh=37489,Jh=37490,Qh=37491,ef=37808,tf=37809,nf=37810,rf=37811,sf=37812,af=37813,of=37814,lf=37815,cf=37816,uf=37817,hf=37818,ff=37819,df=37820,pf=37821,mf=36492,gf=36494,_f=36495,vf=36283,xf=36284,yf=36285,Sf=36286,dl=2300,pl=2301,Ru=2302,dp=2303,pp=2400,mp=2401,gp=2402,Yv=2500,$v=0,Zg=1,Mf=2,Kv=3200,Jg=0,jv=1,Qr="",bn="srgb",jn="srgb-linear",Wc="linear",Et="srgb",ua=7680,_p=519,Zv=512,Jv=513,Qv=514,pd=515,ex=516,tx=517,md=518,nx=519,Tf=35044,vp="300 es",ir=2e3,ml=2001;function ix(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function rx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function gl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sx(){const r=gl("canvas");return r.style.display="block",r}const xp={};function Xc(...r){const e="THREE."+r.shift();console.log(e,...r)}function Qg(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function We(...r){r=Qg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function $e(...r){r=Qg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function qc(...r){const e=r.join(" ");e in xp||(xp[e]=!0,We(...r))}function ax(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ox={[Fh]:Oh,[Bh]:Vh,[kh]:Hh,[Ja]:zh,[Oh]:Fh,[Vh]:Bh,[Hh]:kh,[zh]:Ja};class _o{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yp=1234567;const $o=Math.PI/180,no=180/Math.PI;function Hi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function dt(r,e,t){return Math.max(e,Math.min(t,r))}function gd(r,e){return(r%e+e)%e}function lx(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function cx(r,e,t){return r!==e?(t-r)/(e-r):0}function Ko(r,e,t){return(1-t)*r+t*e}function ux(r,e,t,n){return Ko(r,e,1-Math.exp(-t*n))}function hx(r,e=1){return e-Math.abs(gd(r,e*2)-e)}function fx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function dx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function px(r,e){return r+Math.floor(Math.random()*(e-r+1))}function mx(r,e){return r+Math.random()*(e-r)}function gx(r){return r*(.5-Math.random())}function _x(r){r!==void 0&&(yp=r);let e=yp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vx(r){return r*$o}function xx(r){return r*no}function yx(r){return(r&r-1)===0&&r!==0}function Sx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Mx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Tx(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*m,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*m,o*c);break;case"ZYZ":r.set(l*m,l*d,o*u,o*c);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function At(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const bx={DEG2RAD:$o,RAD2DEG:no,generateUUID:Hi,clamp:dt,euclideanModulo:gd,mapLinear:lx,inverseLerp:cx,lerp:Ko,damp:ux,pingpong:hx,smoothstep:fx,smootherstep:dx,randInt:px,randFloat:mx,randFloatSpread:gx,seededRandom:_x,degToRad:vx,radToDeg:xx,isPowerOfTwo:yx,ceilPowerOfTwo:Sx,floorPowerOfTwo:Mx,setQuaternionFromProperEuler:Tx,normalize:At,denormalize:zi};class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[a+0],d=s[a+1],m=s[a+2],_=s[a+3];if(h!==_||l!==f||c!==d||u!==m){let p=l*f+c*d+u*m+h*_;p<0&&(f=-f,d=-d,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){const x=Math.acos(p),T=Math.sin(x);g=Math.sin(g*x)/T,o=Math.sin(o*x)/T,l=l*g+f*o,c=c*g+d*o,u=u*g+m*o,h=h*g+_*o}else{l=l*g+f*o,c=c*g+d*o,u=u*g+m*o,h=h*g+_*o;const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-o*d,e[t+2]=c*m+u*d+o*f-l*h,e[t+3]=u*m-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cu.copy(this).projectOnVector(e),this.sub(Cu)}reflect(e){return this.sub(Cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cu=new W,Sp=new zr;class it{constructor(e,t,n,i,s,a,o,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],_=i[0],p=i[3],g=i[6],x=i[1],T=i[4],y=i[7],b=i[2],w=i[5],A=i[8];return s[0]=a*_+o*x+l*b,s[3]=a*p+o*T+l*w,s[6]=a*g+o*y+l*A,s[1]=c*_+u*x+h*b,s[4]=c*p+u*T+h*w,s[7]=c*g+u*y+h*A,s[2]=f*_+d*x+m*b,s[5]=f*p+d*T+m*w,s[8]=f*g+d*y+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,m=t*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Pu.makeScale(e,t)),this}rotate(e){return this.premultiply(Pu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pu=new it,Mp=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tp=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ex(){const r={enabled:!0,workingColorSpace:jn,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Et&&(i.r=Dr(i.r),i.g=Dr(i.g),i.b=Dr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(i.r=za(i.r),i.g=za(i.g),i.b=za(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qr?Wc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return qc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return qc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[jn]:{primaries:e,whitePoint:n,transfer:Wc,toXYZ:Mp,fromXYZ:Tp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:Mp,fromXYZ:Tp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),r}const mt=Ex();function Dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function za(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ha;class Ax{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ha===void 0&&(ha=gl("canvas")),ha.width=e.width,ha.height=e.height;const i=ha.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ha}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Dr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dr(t[n]/255)*255):t[n]=Dr(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wx=0;class _d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Du(i[a].image)):s.push(Du(i[a]))}else s=Du(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Du(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ax.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let Rx=0;const Lu=new W;class xn extends _o{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,n=nr,i=nr,s=cn,a=wr,o=Pi,l=hi,c=xn.DEFAULT_ANISOTROPY,u=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Hi(),this.name="",this.source=new _d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lu).x}get height(){return this.source.getSize(Lu).y}get depth(){return this.source.getSize(Lu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eo:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case Gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eo:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case Gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Gg;xn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,n=0,i=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,y=(d+1)/2,b=(g+1)/2,w=(u+f)/4,A=(h+_)/4,v=(m+p)/4;return T>y&&T>b?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=w/n,s=A/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=v/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=A/s,i=v/s),this.set(n,i,s,t),this}let x=Math.sqrt((p-m)*(p-m)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(h-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cx extends _o{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new xn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new _d(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class or extends Cx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class e_ extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Px extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ot{constructor(e,t,n,i,s,a,o,l,c,u,h,f,d,m,_,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,f,d,m,_,p)}set(e,t,n,i,s,a,o,l,c,u,h,f,d,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/fa.setFromMatrixColumn(e,0).length(),s=1/fa.setFromMatrixColumn(e,1).length(),a=1/fa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,m=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,m=c*u,_=c*h;t[0]=f+_*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,m=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,m=o*u,_=o*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=m*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,d=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dx,e,Lx)}lookAt(e,t,n){const i=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Wr.crossVectors(n,si),Wr.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Wr.crossVectors(n,si)),Wr.normalize(),Pl.crossVectors(si,Wr),i[0]=Wr.x,i[4]=Pl.x,i[8]=si.x,i[1]=Wr.y,i[5]=Pl.y,i[9]=si.y,i[2]=Wr.z,i[6]=Pl.z,i[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],_=n[6],p=n[10],g=n[14],x=n[3],T=n[7],y=n[11],b=n[15],w=i[0],A=i[4],v=i[8],M=i[12],N=i[1],C=i[5],L=i[9],k=i[13],H=i[2],O=i[6],B=i[10],U=i[14],j=i[3],V=i[7],P=i[11],ae=i[15];return s[0]=a*w+o*N+l*H+c*j,s[4]=a*A+o*C+l*O+c*V,s[8]=a*v+o*L+l*B+c*P,s[12]=a*M+o*k+l*U+c*ae,s[1]=u*w+h*N+f*H+d*j,s[5]=u*A+h*C+f*O+d*V,s[9]=u*v+h*L+f*B+d*P,s[13]=u*M+h*k+f*U+d*ae,s[2]=m*w+_*N+p*H+g*j,s[6]=m*A+_*C+p*O+g*V,s[10]=m*v+_*L+p*B+g*P,s[14]=m*M+_*k+p*U+g*ae,s[3]=x*w+T*N+y*H+b*j,s[7]=x*A+T*C+y*O+b*V,s[11]=x*v+T*L+y*B+b*P,s[15]=x*M+T*k+y*U+b*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],_=e[7],p=e[11],g=e[15],x=l*d-c*f,T=o*d-c*h,y=o*f-l*h,b=a*d-c*u,w=a*f-l*u,A=a*h-o*u;return t*(_*x-p*T+g*y)-n*(m*x-p*b+g*w)+i*(m*T-_*b+g*A)-s*(m*y-_*w+p*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],_=e[13],p=e[14],g=e[15],x=t*o-n*a,T=t*l-i*a,y=t*c-s*a,b=n*l-i*o,w=n*c-s*o,A=i*c-s*l,v=u*_-h*m,M=u*p-f*m,N=u*g-d*m,C=h*p-f*_,L=h*g-d*_,k=f*g-d*p,H=x*k-T*L+y*C+b*N-w*M+A*v;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/H;return e[0]=(o*k-l*L+c*C)*O,e[1]=(i*L-n*k-s*C)*O,e[2]=(_*A-p*w+g*b)*O,e[3]=(f*w-h*A-d*b)*O,e[4]=(l*N-a*k-c*M)*O,e[5]=(t*k-i*N+s*M)*O,e[6]=(p*y-m*A-g*T)*O,e[7]=(u*A-f*y+d*T)*O,e[8]=(a*L-o*N+c*v)*O,e[9]=(n*N-t*L-s*v)*O,e[10]=(m*w-_*y+g*x)*O,e[11]=(h*y-u*w-d*x)*O,e[12]=(o*M-a*C-l*v)*O,e[13]=(t*C-n*M+i*v)*O,e[14]=(_*T-m*b-p*x)*O,e[15]=(u*b-h*T+f*x)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,m=s*h,_=a*u,p=a*h,g=o*h,x=l*c,T=l*u,y=l*h,b=n.x,w=n.y,A=n.z;return i[0]=(1-(_+g))*b,i[1]=(d+y)*b,i[2]=(m-T)*b,i[3]=0,i[4]=(d-y)*w,i[5]=(1-(f+g))*w,i[6]=(p+x)*w,i[7]=0,i[8]=(m+T)*A,i[9]=(p-x)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=fa.set(i[0],i[1],i[2]).length();const o=fa.set(i[4],i[5],i[6]).length(),l=fa.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Ui.copy(this);const c=1/a,u=1/o,h=1/l;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=u,Ui.elements[5]*=u,Ui.elements[6]*=u,Ui.elements[8]*=h,Ui.elements[9]*=h,Ui.elements[10]*=h,t.setFromRotationMatrix(Ui),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=ir,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let m,_;if(l)m=s/(a-s),_=a*s/(a-s);else if(o===ir)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ml)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=ir,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let m,_;if(l)m=1/(a-s),_=a/(a-s);else if(o===ir)m=-2/(a-s),_=-(a+s)/(a-s);else if(o===ml)m=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fa=new W,Ui=new ot,Dx=new W(0,0,0),Lx=new W(1,1,1),Wr=new W,Pl=new W,si=new W,bp=new ot,Ep=new zr;class hr{constructor(e=0,t=0,n=0,i=hr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ep.setFromEuler(this),this.setFromQuaternion(Ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hr.DEFAULT_ORDER="XYZ";class t_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ix=0;const Ap=new W,da=new zr,_r=new ot,Dl=new W,To=new W,Nx=new W,Ux=new zr,wp=new W(1,0,0),Rp=new W(0,1,0),Cp=new W(0,0,1),Pp={type:"added"},Fx={type:"removed"},pa={type:"childadded",child:null},Iu={type:"childremoved",child:null};class Wt extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new W,t=new hr,n=new zr,i=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new it}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new t_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.multiply(da),this}rotateOnWorldAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.premultiply(da),this}rotateX(e){return this.rotateOnAxis(wp,e)}rotateY(e){return this.rotateOnAxis(Rp,e)}rotateZ(e){return this.rotateOnAxis(Cp,e)}translateOnAxis(e,t){return Ap.copy(e).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wp,e)}translateY(e){return this.translateOnAxis(Rp,e)}translateZ(e){return this.translateOnAxis(Cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dl.copy(e):Dl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_r.lookAt(To,Dl,this.up):_r.lookAt(Dl,To,this.up),this.quaternion.setFromRotationMatrix(_r),i&&(_r.extractRotation(i.matrixWorld),da.setFromRotationMatrix(_r),this.quaternion.premultiply(da.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pp),pa.child=e,this.dispatchEvent(pa),pa.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fx),Iu.child=e,this.dispatchEvent(Iu),Iu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_r.multiply(e.parent.matrixWorld)),e.applyMatrix4(_r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pp),pa.child=e,this.dispatchEvent(pa),pa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,Nx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,Ux,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Wt.DEFAULT_UP=new W(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ks extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ox={type:"move"};class Nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ox)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ks;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const n_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function Uu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=gd(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Uu(a,s,e+1/3),this.g=Uu(a,s,e),this.b=Uu(a,s,e-1/3)}return mt.colorSpaceToWorking(this,i),this}setStyle(e,t=bn){function n(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const n=n_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return mt.workingToColorSpace(Dn.copy(this),e),Math.round(dt(Dn.r*255,0,255))*65536+Math.round(dt(Dn.g*255,0,255))*256+Math.round(dt(Dn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Dn.copy(this),t);const n=Dn.r,i=Dn.g,s=Dn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=bn){mt.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,n=Dn.g,i=Dn.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(Ll);const n=Ko(Xr.h,Ll.h,t),i=Ko(Xr.s,Ll.s,t),s=Ko(Xr.l,Ll.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Qe;Qe.NAMES=n_;class Dp extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hr,this.environmentIntensity=1,this.environmentRotation=new hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fi=new W,vr=new W,Fu=new W,xr=new W,ma=new W,ga=new W,Lp=new W,Ou=new W,Bu=new W,ku=new W,zu=new Ot,Vu=new Ot,Hu=new Ot;class Vi{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Fi.subVectors(e,t),i.cross(Fi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Fi.subVectors(i,t),vr.subVectors(n,t),Fu.subVectors(e,t);const a=Fi.dot(Fi),o=Fi.dot(vr),l=Fi.dot(Fu),c=vr.dot(vr),u=vr.dot(Fu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,m=(a*u-o*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,xr)===null?!1:xr.x>=0&&xr.y>=0&&xr.x+xr.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,xr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xr.x),l.addScaledVector(a,xr.y),l.addScaledVector(o,xr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return zu.setScalar(0),Vu.setScalar(0),Hu.setScalar(0),zu.fromBufferAttribute(e,t),Vu.fromBufferAttribute(e,n),Hu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(zu,s.x),a.addScaledVector(Vu,s.y),a.addScaledVector(Hu,s.z),a}static isFrontFacing(e,t,n,i){return Fi.subVectors(n,t),vr.subVectors(e,t),Fi.cross(vr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),Fi.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Vi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ma.subVectors(i,n),ga.subVectors(s,n),Ou.subVectors(e,n);const l=ma.dot(Ou),c=ga.dot(Ou);if(l<=0&&c<=0)return t.copy(n);Bu.subVectors(e,i);const u=ma.dot(Bu),h=ga.dot(Bu);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ma,a);ku.subVectors(e,s);const d=ma.dot(ku),m=ga.dot(ku);if(m>=0&&d<=m)return t.copy(s);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(ga,o);const p=u*m-d*h;if(p<=0&&h-u>=0&&d-m>=0)return Lp.subVectors(s,i),o=(h-u)/(h-u+(d-m)),t.copy(i).addScaledVector(Lp,o);const g=1/(p+_+f);return a=_*g,o=f*g,t.copy(n).addScaledVector(ma,a).addScaledVector(ga,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class dr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Oi):Oi.fromBufferAttribute(s,a),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Il.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Il.copy(n.boundingBox)),Il.applyMatrix4(e.matrixWorld),this.union(Il)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),Nl.subVectors(this.max,bo),_a.subVectors(e.a,bo),va.subVectors(e.b,bo),xa.subVectors(e.c,bo),qr.subVectors(va,_a),Yr.subVectors(xa,va),ys.subVectors(_a,xa);let t=[0,-qr.z,qr.y,0,-Yr.z,Yr.y,0,-ys.z,ys.y,qr.z,0,-qr.x,Yr.z,0,-Yr.x,ys.z,0,-ys.x,-qr.y,qr.x,0,-Yr.y,Yr.x,0,-ys.y,ys.x,0];return!Gu(t,_a,va,xa,Nl)||(t=[1,0,0,0,1,0,0,0,1],!Gu(t,_a,va,xa,Nl))?!1:(Ul.crossVectors(qr,Yr),t=[Ul.x,Ul.y,Ul.z],Gu(t,_a,va,xa,Nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yr=[new W,new W,new W,new W,new W,new W,new W,new W],Oi=new W,Il=new dr,_a=new W,va=new W,xa=new W,qr=new W,Yr=new W,ys=new W,bo=new W,Nl=new W,Ul=new W,Ss=new W;function Gu(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ss.fromArray(r,s);const o=i.x*Math.abs(Ss.x)+i.y*Math.abs(Ss.y)+i.z*Math.abs(Ss.z),l=e.dot(Ss),c=t.dot(Ss),u=n.dot(Ss);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Qt=new W,Fl=new vt;let Bx=0;class yn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tf,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fl.fromBufferAttribute(this,t),Fl.applyMatrix3(e),this.setXY(t,Fl.x,Fl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tf&&(e.usage=this.usage),e}}class i_ extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class r_ extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gi extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const kx=new dr,Eo=new W,Wu=new W;class pr{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const t=Eo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Eo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(Wu)),this.expandByPoint(Eo.copy(e.center).sub(Wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zx=0;const Ti=new ot,Xu=new Wt,ya=new W,ai=new dr,Ao=new dr,pn=new W;class Si extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ix(e)?r_:i_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,t,n){return Ti.makeTranslation(e,t,n),this.applyMatrix4(Ti),this}scale(e,t,n){return Ti.makeScale(e,t,n),this.applyMatrix4(Ti),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ya).negate(),this.translate(ya.x,ya.y,ya.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ai.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ao.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(ai.min,Ao.min),ai.expandByPoint(pn),pn.addVectors(ai.max,Ao.max),ai.expandByPoint(pn)):(ai.expandByPoint(Ao.min),ai.expandByPoint(Ao.max))}ai.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)pn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(pn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pn.fromBufferAttribute(o,c),l&&(ya.fromBufferAttribute(e,c),pn.add(ya)),i=Math.max(i,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new W,l[v]=new W;const c=new W,u=new W,h=new W,f=new vt,d=new vt,m=new vt,_=new W,p=new W;function g(v,M,N){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,N),f.fromBufferAttribute(s,v),d.fromBufferAttribute(s,M),m.fromBufferAttribute(s,N),u.sub(c),h.sub(c),d.sub(f),m.sub(f);const C=1/(d.x*m.y-m.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(C),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(C),o[v].add(_),o[M].add(_),o[N].add(_),l[v].add(p),l[M].add(p),l[N].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,M=x.length;v<M;++v){const N=x[v],C=N.start,L=N.count;for(let k=C,H=C+L;k<H;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const T=new W,y=new W,b=new W,w=new W;function A(v){b.fromBufferAttribute(i,v),w.copy(b);const M=o[v];T.copy(M),T.sub(b.multiplyScalar(b.dot(M))).normalize(),y.crossVectors(w,M);const C=y.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,C)}for(let v=0,M=x.length;v<M;++v){const N=x[v],C=N.start,L=N.count;for(let k=C,H=C+L;k<H;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,h=new W;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let g=0;g<u;g++)f[m++]=c[d++]}return new yn(f,u,h)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Si,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tf,this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new W;class vd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Xc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Hx=0;class lr extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=ka,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Uh,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ka&&(n.blending=this.blending),this.side!==Nr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nh&&(n.blendSrc=this.blendSrc),this.blendDst!==Uh&&(n.blendDst=this.blendDst),this.blendEquation!==Us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ja&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_p&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ua&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ua&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ua&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sr=new W,qu=new W,Ol=new W,$r=new W,Yu=new W,Bl=new W,$u=new W;class fu{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qu.copy(e).add(t).multiplyScalar(.5),Ol.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(qu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ol),o=$r.dot(this.direction),l=-$r.dot(Ol),c=$r.lengthSq(),u=Math.abs(1-a*a);let h,f,d,m;if(u>0)if(h=a*l-o,f=a*o-l,m=s*u,h>=0)if(f>=-m)if(f<=m){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(qu).addScaledVector(Ol,f),d}intersectSphere(e,t){Sr.subVectors(e.center,this.origin);const n=Sr.dot(this.direction),i=Sr.dot(Sr)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,n,i,s){Yu.subVectors(t,e),Bl.subVectors(n,e),$u.crossVectors(Yu,Bl);let a=this.direction.dot($u),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$r.subVectors(this.origin,e);const l=o*this.direction.dot(Bl.crossVectors($r,Bl));if(l<0)return null;const c=o*this.direction.dot(Yu.cross($r));if(c<0||l+c>a)return null;const u=-o*$r.dot($u);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zs extends lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.combine=Ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ip=new ot,Ms=new fu,kl=new pr,Np=new W,zl=new W,Vl=new W,Hl=new W,Ku=new W,Gl=new W,Up=new W,Wl=new W;class vi extends Wt{constructor(e=new Si,t=new zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Gl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Ku.fromBufferAttribute(h,e),a?Gl.addScaledVector(Ku,u):Gl.addScaledVector(Ku.sub(t),u))}t.add(Gl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kl.copy(n.boundingSphere),kl.applyMatrix4(s),Ms.copy(e.ray).recast(e.near),!(kl.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(kl,Np)===null||Ms.origin.distanceToSquared(Np)>(e.far-e.near)**2))&&(Ip.copy(s).invert(),Ms.copy(e.ray).applyMatrix4(Ip),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=a[p.materialIndex],x=Math.max(p.start,d.start),T=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=x,b=T;y<b;y+=3){const w=o.getX(y),A=o.getX(y+1),v=o.getX(y+2);i=Xl(this,g,e,n,c,u,h,w,A,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const x=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);i=Xl(this,a,e,n,c,u,h,x,T,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=a[p.materialIndex],x=Math.max(p.start,d.start),T=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=x,b=T;y<b;y+=3){const w=y,A=y+1,v=y+2;i=Xl(this,g,e,n,c,u,h,w,A,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const x=p,T=p+1,y=p+2;i=Xl(this,a,e,n,c,u,h,x,T,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Gx(r,e,t,n,i,s,a,o){let l;if(e.side===Jn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Nr,o),l===null)return null;Wl.copy(o),Wl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Wl);return c<t.near||c>t.far?null:{distance:c,point:Wl.clone(),object:r}}function Xl(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,zl),r.getVertexPosition(l,Vl),r.getVertexPosition(c,Hl);const u=Gx(r,e,t,n,zl,Vl,Hl,Up);if(u){const h=new W;Vi.getBarycoord(Up,zl,Vl,Hl,h),i&&(u.uv=Vi.getInterpolatedAttribute(i,o,l,c,h,new vt)),s&&(u.uv1=Vi.getInterpolatedAttribute(s,o,l,c,h,new vt)),a&&(u.normal=Vi.getInterpolatedAttribute(a,o,l,c,h,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};Vi.getNormal(zl,Vl,Hl,f.normal),u.face=f,u.barycoord=h}return u}const Fp=new W,Op=new Ot,Bp=new Ot,Wx=new W,kp=new ot,ql=new W,ju=new pr,zp=new ot,Zu=new fu;class Xx extends vi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fp,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ql),this.boundingBox.expandByPoint(ql)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ql),this.boundingSphere.expandByPoint(ql)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ju.copy(this.boundingSphere),ju.applyMatrix4(i),e.ray.intersectsSphere(ju)!==!1&&(zp.copy(i).invert(),Zu.copy(e.ray).applyMatrix4(zp),!(this.boundingBox!==null&&Zu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qv?this.bindMatrixInverse.copy(this.bindMatrix).invert():We("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Op.fromBufferAttribute(i.attributes.skinIndex,e),Bp.fromBufferAttribute(i.attributes.skinWeight,e),Fp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Bp.getComponent(s);if(a!==0){const o=Op.getComponent(s);kp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Wx.copy(Fp).applyMatrix4(kp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class s_ extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xd extends xn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=ln,u=ln,h,f){super(null,a,o,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vp=new ot,qx=new ot;class yd{constructor(e=[],t=[]){this.uuid=Hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){We("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:qx;Vp.multiplyMatrices(o,t[s]),Vp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new yd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new xd(t,e,e,Pi,Ci);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(We("Skeleton: No bone found with UUID:",s),a=new s_),this.bones.push(a),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class bf extends yn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Sa=new ot,Hp=new ot,Yl=[],Gp=new dr,Yx=new ot,wo=new vi,Ro=new pr;class $x extends vi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bf(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Yx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sa),Gp.copy(e.boundingBox).applyMatrix4(Sa),this.boundingBox.union(Gp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sa),Ro.copy(e.boundingSphere).applyMatrix4(Sa),this.boundingSphere.union(Ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(wo.geometry=this.geometry,wo.material=this.material,wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(n),e.ray.intersectsSphere(Ro)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Sa),Hp.multiplyMatrices(n,Sa),wo.matrixWorld=Hp,wo.raycast(e,Yl);for(let a=0,o=Yl.length;a<o;a++){const l=Yl[a];l.instanceId=s,l.object=this,t.push(l)}Yl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xd(new Float32Array(i*this.count),i,this.count,ud,Ci));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ju=new W,Kx=new W,jx=new it;class Ds{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ju.subVectors(n,t).cross(Kx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ju),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jx.getNormalMatrix(e),i=this.coplanarPoint(Ju).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new pr,Zx=new vt(.5,.5),$l=new W;class Sd{constructor(e=new Ds,t=new Ds,n=new Ds,i=new Ds,s=new Ds,a=new Ds){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ir,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],_=s[9],p=s[10],g=s[11],x=s[12],T=s[13],y=s[14],b=s[15];if(i[0].setComponents(c-a,d-u,g-m,b-x).normalize(),i[1].setComponents(c+a,d+u,g+m,b+x).normalize(),i[2].setComponents(c+o,d+h,g+_,b+T).normalize(),i[3].setComponents(c-o,d-h,g-_,b-T).normalize(),n)i[4].setComponents(l,f,p,y).normalize(),i[5].setComponents(c-l,d-f,g-p,b-y).normalize();else if(i[4].setComponents(c-l,d-f,g-p,b-y).normalize(),t===ir)i[5].setComponents(c+l,d+f,g+p,b+y).normalize();else if(t===ml)i[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const t=Zx.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if($l.x=i.normal.x>0?e.max.x:e.min.x,$l.y=i.normal.y>0?e.max.y:e.min.y,$l.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($l)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class a_ extends lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yc=new W,$c=new W,Wp=new ot,Co=new fu,Kl=new pr,Qu=new W,Xp=new W;class Md extends Wt{constructor(e=new Si,t=new a_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Yc.fromBufferAttribute(t,i-1),$c.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Yc.distanceTo($c);e.setAttribute("lineDistance",new Gi(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kl.copy(n.boundingSphere),Kl.applyMatrix4(i),Kl.radius+=s,e.ray.intersectsSphere(Kl)===!1)return;Wp.copy(i).invert(),Co.copy(e.ray).applyMatrix4(Wp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=d,p=m-1;_<p;_+=c){const g=u.getX(_),x=u.getX(_+1),T=jl(this,e,Co,l,g,x,_);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(m-1),p=u.getX(d),g=jl(this,e,Co,l,_,p,m-1);g&&t.push(g)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=d,p=m-1;_<p;_+=c){const g=jl(this,e,Co,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=jl(this,e,Co,l,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jl(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Yc.fromBufferAttribute(o,i),$c.fromBufferAttribute(o,s),t.distanceSqToSegment(Yc,$c,Qu,Xp)>n)return;Qu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Qu);if(!(c<e.near||c>e.far))return{distance:c,point:Xp.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const qp=new W,Yp=new W;class Jx extends Md{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)qp.fromBufferAttribute(t,i),Yp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qp.distanceTo(Yp);e.setAttribute("lineDistance",new Gi(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qx extends Md{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class o_ extends lr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $p=new ot,Ef=new fu,Zl=new pr,Jl=new W;class l_ extends Wt{constructor(e=new Si,t=new o_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zl.copy(n.boundingSphere),Zl.applyMatrix4(i),Zl.radius+=s,e.ray.intersectsSphere(Zl)===!1)return;$p.copy(i).invert(),Ef.copy(e.ray).applyMatrix4($p);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,_=d;m<_;m++){const p=c.getX(m);Jl.fromBufferAttribute(h,p),Kp(Jl,p,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let m=f,_=d;m<_;m++)Jl.fromBufferAttribute(h,m),Kp(Jl,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Kp(r,e,t,n,i,s,a){const o=Ef.distanceSqToPoint(r);if(o<t){const l=new W;Ef.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class c_ extends xn{constructor(e=[],t=Js,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _l extends xn{constructor(e,t,n=ur,i,s,a,o=ln,l=ln,c,u=Fr,h=1){if(u!==Fr&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _d(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ey extends _l{constructor(e,t=ur,n=Js,i,s,a=ln,o=ln,l,c=Fr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class u_ extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rl extends Si{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Gi(c,3)),this.setAttribute("normal",new Gi(u,3)),this.setAttribute("uv",new Gi(h,2));function m(_,p,g,x,T,y,b,w,A,v,M){const N=y/A,C=b/v,L=y/2,k=b/2,H=w/2,O=A+1,B=v+1;let U=0,j=0;const V=new W;for(let P=0;P<B;P++){const ae=P*C-k;for(let ne=0;ne<O;ne++){const ve=ne*N-L;V[_]=ve*x,V[p]=ae*T,V[g]=H,c.push(V.x,V.y,V.z),V[_]=0,V[p]=0,V[g]=w>0?1:-1,u.push(V.x,V.y,V.z),h.push(ne/A),h.push(1-P/v),U+=1}}for(let P=0;P<v;P++)for(let ae=0;ae<A;ae++){const ne=f+ae+O*P,ve=f+ae+O*(P+1),Pe=f+(ae+1)+O*(P+1),Ne=f+(ae+1)+O*P;l.push(ne,ve,Ne),l.push(ve,Pe,Ne),j+=6}o.addGroup(d,j,M),d+=j,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class du extends Si{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],m=[],_=[],p=[];for(let g=0;g<u;g++){const x=g*f-a;for(let T=0;T<c;T++){const y=T*h-s;m.push(y,-x,0),_.push(0,0,1),p.push(T/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){const T=x+c*g,y=x+c*(g+1),b=x+1+c*(g+1),w=x+1+c*g;d.push(T,y,w),d.push(y,b,w)}this.setIndex(d),this.setAttribute("position",new Gi(m,3)),this.setAttribute("normal",new Gi(_,3)),this.setAttribute("uv",new Gi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.width,e.height,e.widthSegments,e.heightSegments)}}function io(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Hn(r){const e={};for(let t=0;t<r.length;t++){const n=io(r[t]);for(const i in n)e[i]=n[i]}return e}function ty(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function h_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const ny={clone:io,merge:Hn};var iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iy,this.fragmentShader=ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=ty(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class sy extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Td extends lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jg,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mr extends Td{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ay extends lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oy extends lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ql(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ly(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function jp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function f_(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class vo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class cy extends vo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pp,endingEnd:pp}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case mp:s=e,o=2*t-n;break;case gp:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mp:a=e,l=2*n-t;break;case gp:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,x=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,T=(-1-d)*p+(1.5+d)*_+.5*m,y=d*p-d*_;for(let b=0;b!==o;++b)s[b]=g*a[u+b]+x*a[c+b]+T*a[l+b]+y*a[h+b];return s}}class uy extends vo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}}class hy extends vo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class fy extends vo{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.settings||this.DefaultSettings_,h=u.inTangents,f=u.outTangents;if(!h||!f){const _=(n-t)/(i-t),p=1-_;for(let g=0;g!==o;++g)s[g]=a[c+g]*p+a[l+g]*_;return s}const d=o*2,m=e-1;for(let _=0;_!==o;++_){const p=a[c+_],g=a[l+_],x=m*d+_*2,T=f[x],y=f[x+1],b=e*d+_*2,w=h[b],A=h[b+1];let v=(n-t)/(i-t),M,N,C,L,k;for(let H=0;H<8;H++){M=v*v,N=M*v,C=1-v,L=C*C,k=L*C;const B=k*t+3*L*v*T+3*C*M*w+N*i-n;if(Math.abs(B)<1e-10)break;const U=3*L*(T-t)+6*C*v*(w-T)+3*M*(i-w);if(Math.abs(U)<1e-10)break;v=v-B/U,v=Math.max(0,Math.min(1,v))}s[_]=k*p+3*L*v*y+3*C*M*A+N*g}return s}}class Xi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ql(t,this.TimeBufferType),this.values=Ql(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ql(e.times,Array),values:Ql(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new fy(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case dl:t=this.InterpolantFactoryMethodDiscrete;break;case pl:t=this.InterpolantFactoryMethodLinear;break;case Ru:t=this.InterpolantFactoryMethodSmooth;break;case dp:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dl;case this.InterpolantFactoryMethodLinear:return pl;case this.InterpolantFactoryMethodSmooth:return Ru;case this.InterpolantFactoryMethodBezier:return dp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){$e("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&rx(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ru,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){const _=t[h+m];if(_!==t[f+m]||_!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Xi.prototype.ValueTypeName="";Xi.prototype.TimeBufferType=Float32Array;Xi.prototype.ValueBufferType=Float32Array;Xi.prototype.DefaultInterpolation=pl;class xo extends Xi{constructor(e,t,n){super(e,t,n)}}xo.prototype.ValueTypeName="bool";xo.prototype.ValueBufferType=Array;xo.prototype.DefaultInterpolation=dl;xo.prototype.InterpolantFactoryMethodLinear=void 0;xo.prototype.InterpolantFactoryMethodSmooth=void 0;class d_ extends Xi{constructor(e,t,n,i){super(e,t,n,i)}}d_.prototype.ValueTypeName="color";class ro extends Xi{constructor(e,t,n,i){super(e,t,n,i)}}ro.prototype.ValueTypeName="number";class dy extends vo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)zr.slerpFlat(s,0,a,c-o,a,c,l);return s}}class so extends Xi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new dy(this.times,this.values,this.getValueSize(),e)}}so.prototype.ValueTypeName="quaternion";so.prototype.InterpolantFactoryMethodSmooth=void 0;class yo extends Xi{constructor(e,t,n){super(e,t,n)}}yo.prototype.ValueTypeName="string";yo.prototype.ValueBufferType=Array;yo.prototype.DefaultInterpolation=dl;yo.prototype.InterpolantFactoryMethodLinear=void 0;yo.prototype.InterpolantFactoryMethodSmooth=void 0;class ao extends Xi{constructor(e,t,n,i){super(e,t,n,i)}}ao.prototype.ValueTypeName="vector";class py{constructor(e="",t=-1,n=[],i=Yv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Hi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(gy(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Xi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=ly(l);l=jp(l,1,u),c=jp(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ro(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(We("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return $e("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,m,_){if(d.length!==0){const p=[],g=[];f_(d,p,g,m),p.length!==0&&_.push(new h(f,p,g))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let _=0;_<f[m].morphTargets.length;_++)d[f[m].morphTargets[_]]=-1;for(const _ in d){const p=[],g=[];for(let x=0;x!==f[m].morphTargets.length;++x){const T=f[m];p.push(T.time),g.push(T.morphTarget===_?1:0)}i.push(new ro(".morphTargetInfluence["+_+"]",p,g))}l=d.length*a}else{const d=".bones["+t[h].name+"]";n(ao,d+".position",f,"pos",i),n(so,d+".quaternion",f,"rot",i),n(ao,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function my(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ro;case"vector":case"vector2":case"vector3":case"vector4":return ao;case"color":return d_;case"quaternion":return so;case"bool":case"boolean":return xo;case"string":return yo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function gy(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=my(r.type);if(r.times===void 0){const t=[],n=[];f_(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Rr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Zp(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Zp(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Zp(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class _y{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const vy=new _y;class So{constructor(e){this.manager=e!==void 0?e:vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}So.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mr={};class xy extends Error{constructor(e,t){super(e),this.response=t}}class p_ extends So{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Rr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Mr[e]!==void 0){Mr[e].push({onLoad:t,onProgress:n,onError:i});return}Mr[e]=[],Mr[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&We("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let _=0;const p=new ReadableStream({start(g){x();function x(){h.read().then(({done:T,value:y})=>{if(T)g.close();else{_+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let w=0,A=u.length;w<A;w++){const v=u[w];v.onProgress&&v.onProgress(b)}g.enqueue(y),x()}},T=>{g.error(T)})}}});return new Response(p)}else throw new xy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Rr.add(`file:${e}`,c);const u=Mr[e];delete Mr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Mr[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ma=new WeakMap;class yy extends So{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Rr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Ma.get(a);h===void 0&&(h=[],Ma.set(a,h)),h.push({onLoad:t,onError:i})}return a}const o=gl("img");function l(){u(),t&&t(this);const h=Ma.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Ma.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),Rr.remove(`image:${e}`);const f=Ma.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(h)}Ma.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Rr.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Sy extends So{constructor(e){super(e)}load(e,t,n,i){const s=new xn,a=new yy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class pu extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const eh=new ot,Jp=new W,Qp=new W;class bd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sd,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jp),Qp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qp),t.updateMatrixWorld(),eh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ml||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ec=new W,tc=new zr,Yi=new W;class m_ extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ir,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ec,tc,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,tc,Yi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ec,tc,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,tc,Yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kr=new W,em=new vt,tm=new vt;class Un extends m_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,em,tm),t.subVectors(tm,em)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($o*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class My extends bd{constructor(){super(new Un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=no*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ty extends pu{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new My}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class by extends bd{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0}}class Ey extends pu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new by}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class mu extends m_{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ay extends bd{constructor(){super(new mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Af extends pu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Ay}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class wy extends pu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class jo{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const th=new WeakMap;class Ry extends So{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&We("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&We("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Rr.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{if(th.has(a)===!0)i&&i(th.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Rr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),th.set(l,c),Rr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Rr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ta=-90,ba=1;class Cy extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Un(Ta,ba,e,t);i.layers=this.layers,this.add(i);const s=new Un(Ta,ba,e,t);s.layers=this.layers,this.add(s);const a=new Un(Ta,ba,e,t);a.layers=this.layers,this.add(a);const o=new Un(Ta,ba,e,t);o.layers=this.layers,this.add(o);const l=new Un(Ta,ba,e,t);l.layers=this.layers,this.add(l);const c=new Un(Ta,ba,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ir)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ml)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Py extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ed="\\[\\]\\.:\\/",Dy=new RegExp("["+Ed+"]","g"),Ad="[^"+Ed+"]",Ly="[^"+Ed.replace("\\.","")+"]",Iy=/((?:WC+[\/:])*)/.source.replace("WC",Ad),Ny=/(WCOD+)?/.source.replace("WCOD",Ly),Uy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ad),Fy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ad),Oy=new RegExp("^"+Iy+Ny+Uy+Fy+"$"),By=["material","materials","bones","map"];class ky{constructor(e,t,n){const i=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class wt{constructor(e,t,n){this.path=t,this.parsedPath=n||wt.parseTrackName(t),this.node=wt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new wt.Composite(e,t,n):new wt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dy,"")}static parseTrackName(e){const t=Oy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);By.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=wt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}wt.Composite=ky;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function nm(r,e,t,n){const i=zy(n);switch(t){case Kg:return r*e;case ud:return r*e/i.components*i.byteLength;case hd:return r*e/i.components*i.byteLength;case to:return r*e*2/i.components*i.byteLength;case fd:return r*e*2/i.components*i.byteLength;case jg:return r*e*3/i.components*i.byteLength;case Pi:return r*e*4/i.components*i.byteLength;case dd:return r*e*4/i.components*i.byteLength;case bc:case Ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ac:case wc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wh:case qh:return Math.max(r,16)*Math.max(e,8)/4;case Gh:case Xh:return Math.max(r,8)*Math.max(e,8)/2;case Yh:case $h:case jh:case Zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Kh:case Jh:case Qh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ef:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case tf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case nf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case rf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case sf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case af:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case of:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case lf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case cf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case uf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case hf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ff:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case df:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case pf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case mf:case gf:case _f:return Math.ceil(r/4)*Math.ceil(e/4)*16;case vf:case xf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case yf:case Sf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zy(r){switch(r){case hi:case Xg:return{byteLength:1,components:1};case hl:case qg:case Ur:return{byteLength:2,components:1};case ld:case cd:return{byteLength:2,components:4};case ur:case od:case Ci:return{byteLength:4,components:1};case Yg:case $g:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ad}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ad);function g_(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Vy(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],_=h[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$y=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Zy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_S=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vS="gl_FragColor = linearToOutputTexel( gl_FragColor );",xS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ES=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,US=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$S=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_M=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,EM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$M=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:Hy,alphahash_pars_fragment:Gy,alphamap_fragment:Wy,alphamap_pars_fragment:Xy,alphatest_fragment:qy,alphatest_pars_fragment:Yy,aomap_fragment:$y,aomap_pars_fragment:Ky,batching_pars_vertex:jy,batching_vertex:Zy,begin_vertex:Jy,beginnormal_vertex:Qy,bsdfs:eS,iridescence_fragment:tS,bumpmap_pars_fragment:nS,clipping_planes_fragment:iS,clipping_planes_pars_fragment:rS,clipping_planes_pars_vertex:sS,clipping_planes_vertex:aS,color_fragment:oS,color_pars_fragment:lS,color_pars_vertex:cS,color_vertex:uS,common:hS,cube_uv_reflection_fragment:fS,defaultnormal_vertex:dS,displacementmap_pars_vertex:pS,displacementmap_vertex:mS,emissivemap_fragment:gS,emissivemap_pars_fragment:_S,colorspace_fragment:vS,colorspace_pars_fragment:xS,envmap_fragment:yS,envmap_common_pars_fragment:SS,envmap_pars_fragment:MS,envmap_pars_vertex:TS,envmap_physical_pars_fragment:NS,envmap_vertex:bS,fog_vertex:ES,fog_pars_vertex:AS,fog_fragment:wS,fog_pars_fragment:RS,gradientmap_pars_fragment:CS,lightmap_pars_fragment:PS,lights_lambert_fragment:DS,lights_lambert_pars_fragment:LS,lights_pars_begin:IS,lights_toon_fragment:US,lights_toon_pars_fragment:FS,lights_phong_fragment:OS,lights_phong_pars_fragment:BS,lights_physical_fragment:kS,lights_physical_pars_fragment:zS,lights_fragment_begin:VS,lights_fragment_maps:HS,lights_fragment_end:GS,logdepthbuf_fragment:WS,logdepthbuf_pars_fragment:XS,logdepthbuf_pars_vertex:qS,logdepthbuf_vertex:YS,map_fragment:$S,map_pars_fragment:KS,map_particle_fragment:jS,map_particle_pars_fragment:ZS,metalnessmap_fragment:JS,metalnessmap_pars_fragment:QS,morphinstance_vertex:eM,morphcolor_vertex:tM,morphnormal_vertex:nM,morphtarget_pars_vertex:iM,morphtarget_vertex:rM,normal_fragment_begin:sM,normal_fragment_maps:aM,normal_pars_fragment:oM,normal_pars_vertex:lM,normal_vertex:cM,normalmap_pars_fragment:uM,clearcoat_normal_fragment_begin:hM,clearcoat_normal_fragment_maps:fM,clearcoat_pars_fragment:dM,iridescence_pars_fragment:pM,opaque_fragment:mM,packing:gM,premultiplied_alpha_fragment:_M,project_vertex:vM,dithering_fragment:xM,dithering_pars_fragment:yM,roughnessmap_fragment:SM,roughnessmap_pars_fragment:MM,shadowmap_pars_fragment:TM,shadowmap_pars_vertex:bM,shadowmap_vertex:EM,shadowmask_pars_fragment:AM,skinbase_vertex:wM,skinning_pars_vertex:RM,skinning_vertex:CM,skinnormal_vertex:PM,specularmap_fragment:DM,specularmap_pars_fragment:LM,tonemapping_fragment:IM,tonemapping_pars_fragment:NM,transmission_fragment:UM,transmission_pars_fragment:FM,uv_pars_fragment:OM,uv_pars_vertex:BM,uv_vertex:kM,worldpos_vertex:zM,background_vert:VM,background_frag:HM,backgroundCube_vert:GM,backgroundCube_frag:WM,cube_vert:XM,cube_frag:qM,depth_vert:YM,depth_frag:$M,distance_vert:KM,distance_frag:jM,equirect_vert:ZM,equirect_frag:JM,linedashed_vert:QM,linedashed_frag:eT,meshbasic_vert:tT,meshbasic_frag:nT,meshlambert_vert:iT,meshlambert_frag:rT,meshmatcap_vert:sT,meshmatcap_frag:aT,meshnormal_vert:oT,meshnormal_frag:lT,meshphong_vert:cT,meshphong_frag:uT,meshphysical_vert:hT,meshphysical_frag:fT,meshtoon_vert:dT,meshtoon_frag:pT,points_vert:mT,points_frag:gT,shadow_vert:_T,shadow_frag:vT,sprite_vert:xT,sprite_frag:yT},be={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Qi={basic:{uniforms:Hn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Hn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Hn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Hn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Hn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Qe(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Hn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Hn([be.points,be.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Hn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Hn([be.common,be.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Hn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Hn([be.sprite,be.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Hn([be.common,be.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Hn([be.lights,be.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Qi.physical={uniforms:Hn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const nc={r:0,b:0,g:0},bs=new hr,ST=new ot;function MT(r,e,t,n,i,s){const a=new Qe(0);let o=i===!0?0:1,l,c,u=null,h=0,f=null;function d(x){let T=x.isScene===!0?x.background:null;if(T&&T.isTexture){const y=x.backgroundBlurriness>0;T=e.get(T,y)}return T}function m(x){let T=!1;const y=d(x);y===null?p(a,o):y&&y.isColor&&(p(y,1),T=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(x,T){const y=d(T);y&&(y.isCubeTexture||y.mapping===hu)?(c===void 0&&(c=new vi(new Rl(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:io(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),bs.copy(T.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ST.makeRotationFromEuler(bs)),c.material.toneMapped=mt.getTransfer(y.colorSpace)!==Et,(u!==y||h!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new vi(new du(2,2),new Wi({name:"BackgroundMaterial",uniforms:io(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=mt.getTransfer(y.colorSpace)!==Et,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,T){x.getRGB(nc,h_(r)),t.buffers.color.setClear(nc.r,nc.g,nc.b,T,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,T=1){a.set(x),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(a,o)},render:m,addToRenderList:_,dispose:g}}function TT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(C,L,k,H,O){let B=!1;const U=h(C,H,k,L);s!==U&&(s=U,c(s.object)),B=d(C,H,k,O),B&&m(C,H,k,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(C,L,k,H),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return r.createVertexArray()}function c(C){return r.bindVertexArray(C)}function u(C){return r.deleteVertexArray(C)}function h(C,L,k,H){const O=H.wireframe===!0;let B=n[L.id];B===void 0&&(B={},n[L.id]=B);const U=C.isInstancedMesh===!0?C.id:0;let j=B[U];j===void 0&&(j={},B[U]=j);let V=j[k.id];V===void 0&&(V={},j[k.id]=V);let P=V[O];return P===void 0&&(P=f(l()),V[O]=P),P}function f(C){const L=[],k=[],H=[];for(let O=0;O<t;O++)L[O]=0,k[O]=0,H[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:H,object:C,attributes:{},index:null}}function d(C,L,k,H){const O=s.attributes,B=L.attributes;let U=0;const j=k.getAttributes();for(const V in j)if(j[V].location>=0){const ae=O[V];let ne=B[V];if(ne===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(ne=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(ne=C.instanceColor)),ae===void 0||ae.attribute!==ne||ne&&ae.data!==ne.data)return!0;U++}return s.attributesNum!==U||s.index!==H}function m(C,L,k,H){const O={},B=L.attributes;let U=0;const j=k.getAttributes();for(const V in j)if(j[V].location>=0){let ae=B[V];ae===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor));const ne={};ne.attribute=ae,ae&&ae.data&&(ne.data=ae.data),O[V]=ne,U++}s.attributes=O,s.attributesNum=U,s.index=H}function _(){const C=s.newAttributes;for(let L=0,k=C.length;L<k;L++)C[L]=0}function p(C){g(C,0)}function g(C,L){const k=s.newAttributes,H=s.enabledAttributes,O=s.attributeDivisors;k[C]=1,H[C]===0&&(r.enableVertexAttribArray(C),H[C]=1),O[C]!==L&&(r.vertexAttribDivisor(C,L),O[C]=L)}function x(){const C=s.newAttributes,L=s.enabledAttributes;for(let k=0,H=L.length;k<H;k++)L[k]!==C[k]&&(r.disableVertexAttribArray(k),L[k]=0)}function T(C,L,k,H,O,B,U){U===!0?r.vertexAttribIPointer(C,L,k,O,B):r.vertexAttribPointer(C,L,k,H,O,B)}function y(C,L,k,H){_();const O=H.attributes,B=k.getAttributes(),U=L.defaultAttributeValues;for(const j in B){const V=B[j];if(V.location>=0){let P=O[j];if(P===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(P=C.instanceColor)),P!==void 0){const ae=P.normalized,ne=P.itemSize,ve=e.get(P);if(ve===void 0)continue;const Pe=ve.buffer,Ne=ve.type,X=ve.bytesPerElement,ee=Ne===r.INT||Ne===r.UNSIGNED_INT||P.gpuType===od;if(P.isInterleavedBufferAttribute){const re=P.data,Re=re.stride,Ae=P.offset;if(re.isInstancedInterleavedBuffer){for(let Me=0;Me<V.locationSize;Me++)g(V.location+Me,re.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Me=0;Me<V.locationSize;Me++)p(V.location+Me);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let Me=0;Me<V.locationSize;Me++)T(V.location+Me,ne/V.locationSize,Ne,ae,Re*X,(Ae+ne/V.locationSize*Me)*X,ee)}else{if(P.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)g(V.location+re,P.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let re=0;re<V.locationSize;re++)p(V.location+re);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let re=0;re<V.locationSize;re++)T(V.location+re,ne/V.locationSize,Ne,ae,ne*X,ne/V.locationSize*re*X,ee)}}else if(U!==void 0){const ae=U[j];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(V.location,ae);break;case 3:r.vertexAttrib3fv(V.location,ae);break;case 4:r.vertexAttrib4fv(V.location,ae);break;default:r.vertexAttrib1fv(V.location,ae)}}}}x()}function b(){M();for(const C in n){const L=n[C];for(const k in L){const H=L[k];for(const O in H){const B=H[O];for(const U in B)u(B[U].object),delete B[U];delete H[O]}}delete n[C]}}function w(C){if(n[C.id]===void 0)return;const L=n[C.id];for(const k in L){const H=L[k];for(const O in H){const B=H[O];for(const U in B)u(B[U].object),delete B[U];delete H[O]}}delete n[C.id]}function A(C){for(const L in n){const k=n[L];for(const H in k){const O=k[H];if(O[C.id]===void 0)continue;const B=O[C.id];for(const U in B)u(B[U].object),delete B[U];delete O[C.id]}}}function v(C){for(const L in n){const k=n[L],H=C.isInstancedMesh===!0?C.id:0,O=k[H];if(O!==void 0){for(const B in O){const U=O[B];for(const j in U)u(U[j].object),delete U[j];delete O[B]}delete k[H],Object.keys(k).length===0&&delete n[L]}}}function M(){N(),a=!0,s!==i&&(s=i,c(s.object))}function N(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:M,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function bT(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*f[_];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ET(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Pi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===Ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==hi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ci&&!v)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:y,maxSamples:b,samples:w}}function AT(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ds,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,g=r.get(h);if(!i||m===null||m.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,T=x*4;let y=g.clippingState||null;l.value=y,y=u(m,f,T,d);for(let b=0;b!==T;++b)y[b]=t[b];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=d+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,y=d;T!==_;++T,y+=4)a.copy(h[T]).applyMatrix4(x,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const es=4,im=[.125,.215,.35,.446,.526,.582],Fs=20,wT=256,Po=new mu,rm=new Qe;let nh=null,ih=0,rh=0,sh=!1;const RT=new W;class sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=RT}=s;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,rh),this._renderer.xr.enabled=sh,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Qa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Ur,format:Pi,colorSpace:jn,depthBuffer:!1},i=am(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CT(s)),this._blurMaterial=DT(s,e,t),this._ggxMaterial=PT(s,e,t)}return i}_compileMaterial(e){const t=new vi(new Si,e);this._renderer.compile(t,Po)}_sceneToCubeUV(e,t,n,i,s){const l=new Un(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(rm),h.toneMapping=ar,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vi(new Rl,new zs({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,g=!0):(p.color.copy(rm),g=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const b=this._cubeSize;Ea(i,y*b,T>2?b:0,b,b),h.setRenderTarget(i),g&&h.render(_,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Js||e.mapping===Qa;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ea(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Po)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-es?n-m+es:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Ea(s,p,g,3*_,2*_),i.setRenderTarget(s),i.render(o,Po),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Ea(e,p,g,3*_,2*_),i.setRenderTarget(e),i.render(o,Po)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Fs-1),_=s/m,p=isFinite(s)?1+Math.floor(u*_):Fs;p>Fs&&We(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fs}`);const g=[];let x=0;for(let A=0;A<Fs;++A){const v=A/_,M=Math.exp(-v*v/2);g.push(M),A===0?x+=M:A<p&&(x+=2*M)}for(let A=0;A<g.length;A++)g[A]=g[A]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=m,f.mipInt.value=T-n;const y=this._sizeLods[i],b=3*y*(i>T-es?i-T+es:0),w=4*(this._cubeSize-y);Ea(t,b,w,3*y,2*y),l.setRenderTarget(t),l.render(h,Po)}}function CT(r){const e=[],t=[],n=[];let i=r;const s=r-es+1+im.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-es?l=im[a-r+es-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,_=3,p=2,g=1,x=new Float32Array(_*m*d),T=new Float32Array(p*m*d),y=new Float32Array(g*m*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,v=w>2?0:-1,M=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];x.set(M,_*m*w),T.set(f,p*m*w);const N=[w,w,w,w,w,w];y.set(N,g*m*w)}const b=new Si;b.setAttribute("position",new yn(x,_)),b.setAttribute("uv",new yn(T,p)),b.setAttribute("faceIndex",new yn(y,g)),n.push(new vi(b,null)),i>es&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function am(r,e,t){const n=new or(r,e,t);return n.texture.mapping=hu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function PT(r,e,t){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function DT(r,e,t){const n=new Float32Array(Fs),i=new W(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function om(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function lm(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function gu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class __ extends or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new c_(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Rl(5,5,5),s=new Wi({name:"CubemapFromEquirect",uniforms:io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:Pr});s.uniforms.tEquirect.value=t;const a=new vi(i,s),o=t.minFilter;return t.minFilter===wr&&(t.minFilter=cn),new Cy(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function LT(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?a(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Au||d===wu)if(e.has(f)){const m=e.get(f).texture;return o(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const _=new __(m.height);return _.fromEquirectangularTexture(r,f),e.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const d=f.mapping,m=d===Au||d===wu,_=d===Js||d===Qa;if(m||_){let p=t.get(f);const g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new sm(r)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const x=f.image;return m&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new sm(r)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,d){return d===Au?f.mapping=Js:d===wu&&(f.mapping=Qa),f}function l(f){let d=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&d++;return d===m}function c(f){const d=f.target;d.removeEventListener("dispose",c);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function IT(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&qc("WebGLRenderer: "+n+" extension not supported."),i}}}function NT(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,m=h.attributes.position;let _=0;if(m===void 0)return;if(d!==null){const x=d.array;_=d.version;for(let T=0,y=x.length;T<y;T+=3){const b=x[T+0],w=x[T+1],A=x[T+2];f.push(b,w,w,A,A,b)}}else{const x=m.array;_=m.version;for(let T=0,y=x.length/3-1;T<y;T+=3){const b=T+0,w=T+1,A=T+2;f.push(b,w,w,A,A,b)}}const p=new(m.count>=65535?r_:i_)(f,1);p.version=_;const g=s.get(h);g&&e.remove(g),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function UT(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,f*a,m),t.update(d,n,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];t.update(p,n,1)}function h(f,d,m,_){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)c(f[g]/a,d[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,m);let g=0;for(let x=0;x<m;x++)g+=d[x]*_[x];t.update(g,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function FT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function OT(r,e,t){const n=new WeakMap,i=new Ot;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let N=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",N)};var d=N;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let b=o.attributes.position.count*y,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*w*4*h),v=new e_(A,b,w,h);v.type=Ci,v.needsUpdate=!0;const M=y*4;for(let C=0;C<h;C++){const L=g[C],k=x[C],H=T[C],O=b*w*4*C;for(let B=0;B<L.count;B++){const U=B*M;m===!0&&(i.fromBufferAttribute(L,B),A[O+U+0]=i.x,A[O+U+1]=i.y,A[O+U+2]=i.z,A[O+U+3]=0),_===!0&&(i.fromBufferAttribute(k,B),A[O+U+4]=i.x,A[O+U+5]=i.y,A[O+U+6]=i.z,A[O+U+7]=0),p===!0&&(i.fromBufferAttribute(H,B),A[O+U+8]=i.x,A[O+U+9]=i.y,A[O+U+10]=i.z,A[O+U+11]=H.itemSize===4?i.w:1)}}f={count:h,texture:v,size:new vt(b,w)},n.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function BT(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const kT={[Fg]:"LINEAR_TONE_MAPPING",[Og]:"REINHARD_TONE_MAPPING",[Bg]:"CINEON_TONE_MAPPING",[kg]:"ACES_FILMIC_TONE_MAPPING",[Vg]:"AGX_TONE_MAPPING",[Hg]:"NEUTRAL_TONE_MAPPING",[zg]:"CUSTOM_TONE_MAPPING"};function zT(r,e,t,n,i){const s=new or(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new or(e,t,{type:Ur,depthBuffer:!1,stencilBuffer:!1}),o=new Si;o.setAttribute("position",new Gi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Gi([0,2,0,0,2,0],2));const l=new sy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new vi(o,l),u=new mu(-1,1,1,-1,0,1);let h=null,f=null,d=!1,m,_=null,p=[],g=!1;this.setSize=function(x,T){s.setSize(x,T),a.setSize(x,T);for(let y=0;y<p.length;y++){const b=p[y];b.setSize&&b.setSize(x,T)}},this.setEffects=function(x){p=x,g=p.length>0&&p[0].isRenderPass===!0;const T=s.width,y=s.height;for(let b=0;b<p.length;b++){const w=p[b];w.setSize&&w.setSize(T,y)}},this.begin=function(x,T){if(d||x.toneMapping===ar&&p.length===0)return!1;if(_=T,T!==null){const y=T.width,b=T.height;(s.width!==y||s.height!==b)&&this.setSize(y,b)}return g===!1&&x.setRenderTarget(s),m=x.toneMapping,x.toneMapping=ar,!0},this.hasRenderPass=function(){return g},this.end=function(x,T){x.toneMapping=m,d=!0;let y=s,b=a;for(let w=0;w<p.length;w++){const A=p[w];if(A.enabled!==!1&&(A.render(x,b,y,T),A.needsSwap!==!1)){const v=y;y=b,b=v}}if(h!==x.outputColorSpace||f!==x.toneMapping){h=x.outputColorSpace,f=x.toneMapping,l.defines={},mt.getTransfer(h)===Et&&(l.defines.SRGB_TRANSFER="");const w=kT[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(_),x.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const v_=new xn,wf=new _l(1,1),x_=new e_,y_=new Px,S_=new c_,cm=[],um=[],hm=new Float32Array(16),fm=new Float32Array(9),dm=new Float32Array(4);function Mo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=cm[i];if(s===void 0&&(s=new Float32Array(i),cm[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function un(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function hn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _u(r,e){let t=um[e];t===void 0&&(t=new Int32Array(e),um[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function VT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function HT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2fv(this.addr,e),hn(t,e)}}function GT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;r.uniform3fv(this.addr,e),hn(t,e)}}function WT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4fv(this.addr,e),hn(t,e)}}function XT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;dm.set(n),r.uniformMatrix2fv(this.addr,!1,dm),hn(t,n)}}function qT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;fm.set(n),r.uniformMatrix3fv(this.addr,!1,fm),hn(t,n)}}function YT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;hm.set(n),r.uniformMatrix4fv(this.addr,!1,hm),hn(t,n)}}function $T(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function KT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2iv(this.addr,e),hn(t,e)}}function jT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3iv(this.addr,e),hn(t,e)}}function ZT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4iv(this.addr,e),hn(t,e)}}function JT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function QT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2uiv(this.addr,e),hn(t,e)}}function eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3uiv(this.addr,e),hn(t,e)}}function tb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4uiv(this.addr,e),hn(t,e)}}function nb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(wf.compareFunction=t.isReversedDepthBuffer()?md:pd,s=wf):s=v_,t.setTexture2D(e||s,i)}function ib(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||y_,i)}function rb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||S_,i)}function sb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||x_,i)}function ab(r){switch(r){case 5126:return VT;case 35664:return HT;case 35665:return GT;case 35666:return WT;case 35674:return XT;case 35675:return qT;case 35676:return YT;case 5124:case 35670:return $T;case 35667:case 35671:return KT;case 35668:case 35672:return jT;case 35669:case 35673:return ZT;case 5125:return JT;case 36294:return QT;case 36295:return eb;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return rb;case 36289:case 36303:case 36311:case 36292:return sb}}function ob(r,e){r.uniform1fv(this.addr,e)}function lb(r,e){const t=Mo(e,this.size,2);r.uniform2fv(this.addr,t)}function cb(r,e){const t=Mo(e,this.size,3);r.uniform3fv(this.addr,t)}function ub(r,e){const t=Mo(e,this.size,4);r.uniform4fv(this.addr,t)}function hb(r,e){const t=Mo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function fb(r,e){const t=Mo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function db(r,e){const t=Mo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function pb(r,e){r.uniform1iv(this.addr,e)}function mb(r,e){r.uniform2iv(this.addr,e)}function gb(r,e){r.uniform3iv(this.addr,e)}function _b(r,e){r.uniform4iv(this.addr,e)}function vb(r,e){r.uniform1uiv(this.addr,e)}function xb(r,e){r.uniform2uiv(this.addr,e)}function yb(r,e){r.uniform3uiv(this.addr,e)}function Sb(r,e){r.uniform4uiv(this.addr,e)}function Mb(r,e,t){const n=this.cache,i=e.length,s=_u(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=wf:a=v_;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Tb(r,e,t){const n=this.cache,i=e.length,s=_u(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||y_,s[a])}function bb(r,e,t){const n=this.cache,i=e.length,s=_u(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||S_,s[a])}function Eb(r,e,t){const n=this.cache,i=e.length,s=_u(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||x_,s[a])}function Ab(r){switch(r){case 5126:return ob;case 35664:return lb;case 35665:return cb;case 35666:return ub;case 35674:return hb;case 35675:return fb;case 35676:return db;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return _b;case 5125:return vb;case 36294:return xb;case 36295:return yb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return Mb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return Eb}}class wb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ab(t.type)}}class Rb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ab(t.type)}}class Cb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ah=/(\w+)(\])?(\[|\.)?/g;function pm(r,e){r.seq.push(e),r.map[e.id]=e}function Pb(r,e,t){const n=r.name,i=n.length;for(ah.lastIndex=0;;){const s=ah.exec(n),a=ah.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){pm(t,c===void 0?new wb(o,r,e):new Rb(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Cb(o),pm(t,h)),t=h}}}class Rc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Pb(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function mm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Db=37297;let Lb=0;function Ib(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const gm=new it;function Nb(r){mt._getMatrix(gm,mt.workingColorSpace,r);const e=`mat3( ${gm.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(r)){case Wc:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function _m(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ib(r.getShaderSource(e),o)}else return s}function Ub(r,e){const t=Nb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Fb={[Fg]:"Linear",[Og]:"Reinhard",[Bg]:"Cineon",[kg]:"ACESFilmic",[Vg]:"AgX",[Hg]:"Neutral",[zg]:"Custom"};function Ob(r,e){const t=Fb[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ic=new W;function Bb(){mt.getLuminanceCoefficients(ic);const r=ic.x.toFixed(4),e=ic.y.toFixed(4),t=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function zb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vb(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ko(r){return r!==""}function vm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(r){return r.replace(Hb,Wb)}const Gb=new Map;function Wb(r,e){let t=at[e];if(t===void 0){const n=Gb.get(e);if(n!==void 0)t=at[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rf(t)}const Xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ym(r){return r.replace(Xb,qb)}function qb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Sm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Yb={[Mc]:"SHADOWMAP_TYPE_PCF",[Oo]:"SHADOWMAP_TYPE_VSM"};function $b(r){return Yb[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Kb={[Js]:"ENVMAP_TYPE_CUBE",[Qa]:"ENVMAP_TYPE_CUBE",[hu]:"ENVMAP_TYPE_CUBE_UV"};function jb(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Kb[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Zb={[Qa]:"ENVMAP_MODE_REFRACTION"};function Jb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Zb[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Qb={[Ug]:"ENVMAP_BLENDING_MULTIPLY",[Wv]:"ENVMAP_BLENDING_MIX",[Xv]:"ENVMAP_BLENDING_ADD"};function eE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Qb[r.combine]||"ENVMAP_BLENDING_NONE"}function tE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function nE(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=$b(t),c=jb(t),u=Jb(t),h=eE(t),f=tE(t),d=kb(t),m=zb(s),_=i.createProgram();let p,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ko).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ko).join(`
`),g.length>0&&(g+=`
`)):(p=[Sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),g=[Sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ar?"#define TONE_MAPPING":"",t.toneMapping!==ar?at.tonemapping_pars_fragment:"",t.toneMapping!==ar?Ob("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Ub("linearToOutputTexel",t.outputColorSpace),Bb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),a=Rf(a),a=vm(a,t),a=xm(a,t),o=Rf(o),o=vm(o,t),o=xm(o,t),a=ym(a),o=ym(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=x+p+a,y=x+g+o,b=mm(i,i.VERTEX_SHADER,T),w=mm(i,i.FRAGMENT_SHADER,y);i.attachShader(_,b),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(C){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(b)||"",H=i.getShaderInfoLog(w)||"",O=L.trim(),B=k.trim(),U=H.trim();let j=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,w);else{const P=_m(i,b,"vertex"),ae=_m(i,w,"fragment");$e("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+P+`
`+ae)}else O!==""?We("WebGLProgram: Program Info Log:",O):(B===""||U==="")&&(V=!1);V&&(C.diagnostics={runnable:j,programLog:O,vertexShader:{log:B,prefix:p},fragmentShader:{log:U,prefix:g}})}i.deleteShader(b),i.deleteShader(w),v=new Rc(i,_),M=Vb(i,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(_,Db)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let iE=0;class rE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sE(e),t.set(e,n)),n}}class sE{constructor(e){this.id=iE++,this.code=e,this.usedTimes=0}}function aE(r,e,t,n,i,s){const a=new t_,o=new rE,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,M,N,C,L){const k=C.fog,H=L.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,U=e.get(v.envMap||O,B),j=U&&U.mapping===hu?U.image.height:null,V=d[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&We("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const P=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ae=P!==void 0?P.length:0;let ne=0;H.morphAttributes.position!==void 0&&(ne=1),H.morphAttributes.normal!==void 0&&(ne=2),H.morphAttributes.color!==void 0&&(ne=3);let ve,Pe,Ne,X;if(V){const Ee=Qi[V];ve=Ee.vertexShader,Pe=Ee.fragmentShader}else ve=v.vertexShader,Pe=v.fragmentShader,o.update(v),Ne=o.getVertexShaderID(v),X=o.getFragmentShaderID(v);const ee=r.getRenderTarget(),re=r.state.buffers.depth.getReversed(),Re=L.isInstancedMesh===!0,Ae=L.isBatchedMesh===!0,Me=!!v.map,Ke=!!v.matcap,he=!!U,De=!!v.aoMap,Ve=!!v.lightMap,Ce=!!v.bumpMap,G=!!v.normalMap,I=!!v.displacementMap,tt=!!v.emissiveMap,ze=!!v.metalnessMap,Oe=!!v.roughnessMap,oe=v.anisotropy>0,R=v.clearcoat>0,S=v.dispersion>0,F=v.iridescence>0,Z=v.sheen>0,J=v.transmission>0,$=oe&&!!v.anisotropyMap,me=R&&!!v.clearcoatMap,ue=R&&!!v.clearcoatNormalMap,Le=R&&!!v.clearcoatRoughnessMap,xe=F&&!!v.iridescenceMap,ce=F&&!!v.iridescenceThicknessMap,le=Z&&!!v.sheenColorMap,ye=Z&&!!v.sheenRoughnessMap,fe=!!v.specularMap,de=!!v.specularColorMap,qe=!!v.specularIntensityMap,D=J&&!!v.transmissionMap,te=J&&!!v.thicknessMap,ie=!!v.gradientMap,pe=!!v.alphaMap,se=v.alphaTest>0,Q=!!v.alphaHash,we=!!v.extensions;let He=ar;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(He=r.toneMapping);const _t={shaderID:V,shaderType:v.type,shaderName:v.name,vertexShader:ve,fragmentShader:Pe,defines:v.defines,customVertexShaderID:Ne,customFragmentShaderID:X,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&L._colorsTexture!==null,instancing:Re,instancingColor:Re&&L.instanceColor!==null,instancingMorph:Re&&L.morphTexture!==null,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:jn,alphaToCoverage:!!v.alphaToCoverage,map:Me,matcap:Ke,envMap:he,envMapMode:he&&U.mapping,envMapCubeUVHeight:j,aoMap:De,lightMap:Ve,bumpMap:Ce,normalMap:G,displacementMap:I,emissiveMap:tt,normalMapObjectSpace:G&&v.normalMapType===jv,normalMapTangentSpace:G&&v.normalMapType===Jg,metalnessMap:ze,roughnessMap:Oe,anisotropy:oe,anisotropyMap:$,clearcoat:R,clearcoatMap:me,clearcoatNormalMap:ue,clearcoatRoughnessMap:Le,dispersion:S,iridescence:F,iridescenceMap:xe,iridescenceThicknessMap:ce,sheen:Z,sheenColorMap:le,sheenRoughnessMap:ye,specularMap:fe,specularColorMap:de,specularIntensityMap:qe,transmission:J,transmissionMap:D,thicknessMap:te,gradientMap:ie,opaque:v.transparent===!1&&v.blending===ka&&v.alphaToCoverage===!1,alphaMap:pe,alphaTest:se,alphaHash:Q,combine:v.combine,mapUv:Me&&m(v.map.channel),aoMapUv:De&&m(v.aoMap.channel),lightMapUv:Ve&&m(v.lightMap.channel),bumpMapUv:Ce&&m(v.bumpMap.channel),normalMapUv:G&&m(v.normalMap.channel),displacementMapUv:I&&m(v.displacementMap.channel),emissiveMapUv:tt&&m(v.emissiveMap.channel),metalnessMapUv:ze&&m(v.metalnessMap.channel),roughnessMapUv:Oe&&m(v.roughnessMap.channel),anisotropyMapUv:$&&m(v.anisotropyMap.channel),clearcoatMapUv:me&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:le&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&m(v.sheenRoughnessMap.channel),specularMapUv:fe&&m(v.specularMap.channel),specularColorMapUv:de&&m(v.specularColorMap.channel),specularIntensityMapUv:qe&&m(v.specularIntensityMap.channel),transmissionMapUv:D&&m(v.transmissionMap.channel),thicknessMapUv:te&&m(v.thicknessMap.channel),alphaMapUv:pe&&m(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(G||oe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(Me||pe),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&G===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:re,skinning:L.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:He,decodeVideoTexture:Me&&v.map.isVideoTexture===!0&&mt.getTransfer(v.map.colorSpace)===Et,decodeVideoTextureEmissive:tt&&v.emissiveMap.isVideoTexture===!0&&mt.getTransfer(v.emissiveMap.colorSpace)===Et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===er,flipSided:v.side===Jn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:we&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&v.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function p(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)M.push(N),M.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(g(M,v),x(M,v),M.push(r.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function g(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function x(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function T(v){const M=d[v.type];let N;if(M){const C=Qi[M];N=ny.clone(C.uniforms)}else N=v.uniforms;return N}function y(v,M){let N=u.get(M);return N!==void 0?++N.usedTimes:(N=new nE(r,M,v,i),c.push(N),u.set(M,N)),N}function b(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:T,acquireProgram:y,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:A}}function oE(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function lE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Mm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Tm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,m,_,p,g){let x=r[e];return x===void 0?(x={id:f.id,object:f,geometry:d,material:m,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},r[e]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=m,x.materialVariant=a(f),x.groupOrder=_,x.renderOrder=f.renderOrder,x.z=p,x.group=g),e++,x}function l(f,d,m,_,p,g){const x=o(f,d,m,_,p,g);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function c(f,d,m,_,p,g){const x=o(f,d,m,_,p,g);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function u(f,d){t.length>1&&t.sort(f||lE),n.length>1&&n.sort(d||Mm),i.length>1&&i.sort(d||Mm)}function h(){for(let f=e,d=r.length;f<d;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:h,sort:u}}function cE(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Tm,r.set(n,[a])):i>=s.length?(a=new Tm,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function uE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Qe};break;case"SpotLight":t={position:new W,direction:new W,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new W,halfWidth:new W,halfHeight:new W};break}return r[e.id]=t,t}}}function hE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let fE=0;function dE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function pE(r){const e=new uE,t=hE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const i=new W,s=new ot,a=new ot;function o(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,m=0,_=0,p=0,g=0,x=0,T=0,y=0,b=0,w=0,A=0;c.sort(dE);for(let M=0,N=c.length;M<N;M++){const C=c[M],L=C.color,k=C.intensity,H=C.distance;let O=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===to?O=C.shadow.map.texture:O=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=L.r*k,h+=L.g*k,f+=L.b*k;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],k);A++}else if(C.isDirectionalLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const U=C.shadow,j=t.get(C);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=C.shadow.matrix,x++}n.directional[d]=B,d++}else if(C.isSpotLight){const B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(L).multiplyScalar(k),B.distance=H,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[_]=B;const U=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,U.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=U.matrix,C.castShadow){const j=t.get(C);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=O,y++}_++}else if(C.isRectAreaLight){const B=e.get(C);B.color.copy(L).multiplyScalar(k),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=B,p++}else if(C.isPointLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const U=C.shadow,j=t.get(C);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,j.shadowCameraNear=U.camera.near,j.shadowCameraFar=U.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=C.shadow.matrix,T++}n.point[m]=B,m++}else if(C.isHemisphereLight){const B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(k),B.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[g]=B,g++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==d||v.pointLength!==m||v.spotLength!==_||v.rectAreaLength!==p||v.hemiLength!==g||v.numDirectionalShadows!==x||v.numPointShadows!==T||v.numSpotShadows!==y||v.numSpotMaps!==b||v.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,v.directionalLength=d,v.pointLength=m,v.spotLength=_,v.rectAreaLength=p,v.hemiLength=g,v.numDirectionalShadows=x,v.numPointShadows=T,v.numSpotShadows=y,v.numSpotMaps=b,v.numLightProbes=A,n.version=fE++)}function l(c,u){let h=0,f=0,d=0,m=0,_=0;const p=u.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const T=c[g];if(T.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),h++}else if(T.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(T.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(T.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function bm(r){const e=new pE(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function mE(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new bm(r),e.set(i,[o])):s>=a.length?(o=new bm(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const gE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_E=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vE=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],xE=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Em=new ot,Do=new W,oh=new W;function yE(r,e,t){let n=new Sd;const i=new vt,s=new vt,a=new Ot,o=new ay,l=new oy,c={},u=t.maxTextureSize,h={[Nr]:Jn,[Jn]:Nr,[er]:er},f=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:gE,fragmentShader:_E}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Si;m.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vi(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let g=this.type;this.render=function(w,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Ev&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Mc);const M=r.getRenderTarget(),N=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Pr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const k=g!==this.type;k&&A.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(O=>O.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,O=w.length;H<O;H++){const B=w[H],U=B.shadow;if(U===void 0){We("WebGLShadowMap:",B,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const j=U.getFrameExtents();i.multiply(j),s.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,U.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,U.mapSize.y=s.y));const V=r.state.buffers.depth.getReversed();if(U.camera._reversedDepth=V,U.map===null||k===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Oo){if(B.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new or(i.x,i.y,{format:to,type:Ur,minFilter:cn,magFilter:cn,generateMipmaps:!1}),U.map.texture.name=B.name+".shadowMap",U.map.depthTexture=new _l(i.x,i.y,Ci),U.map.depthTexture.name=B.name+".shadowMapDepth",U.map.depthTexture.format=Fr,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=ln,U.map.depthTexture.magFilter=ln}else B.isPointLight?(U.map=new __(i.x),U.map.depthTexture=new ey(i.x,ur)):(U.map=new or(i.x,i.y),U.map.depthTexture=new _l(i.x,i.y,ur)),U.map.depthTexture.name=B.name+".shadowMap",U.map.depthTexture.format=Fr,this.type===Mc?(U.map.depthTexture.compareFunction=V?md:pd,U.map.depthTexture.minFilter=cn,U.map.depthTexture.magFilter=cn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=ln,U.map.depthTexture.magFilter=ln);U.camera.updateProjectionMatrix()}const P=U.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<P;ae++){if(U.map.isWebGLCubeRenderTarget)r.setRenderTarget(U.map,ae),r.clear();else{ae===0&&(r.setRenderTarget(U.map),r.clear());const ne=U.getViewport(ae);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),L.viewport(a)}if(B.isPointLight){const ne=U.camera,ve=U.matrix,Pe=B.distance||ne.far;Pe!==ne.far&&(ne.far=Pe,ne.updateProjectionMatrix()),Do.setFromMatrixPosition(B.matrixWorld),ne.position.copy(Do),oh.copy(ne.position),oh.add(vE[ae]),ne.up.copy(xE[ae]),ne.lookAt(oh),ne.updateMatrixWorld(),ve.makeTranslation(-Do.x,-Do.y,-Do.z),Em.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Em,ne.coordinateSystem,ne.reversedDepth)}else U.updateMatrices(B);n=U.getFrustum(),y(A,v,U.camera,B,this.type)}U.isPointLightShadow!==!0&&this.type===Oo&&x(U,v),U.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(M,N,C)};function x(w,A){const v=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new or(i.x,i.y,{format:to,type:Ur})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,v,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,v,d,_,null)}function T(w,A,v,M){let N=null;const C=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)N=C;else if(N=v.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=N.uuid,k=A.uuid;let H=c[L];H===void 0&&(H={},c[L]=H);let O=H[k];O===void 0&&(O=N.clone(),H[k]=O,A.addEventListener("dispose",b)),N=O}if(N.visible=A.visible,N.wireframe=A.wireframe,M===Oo?N.side=A.shadowSide!==null?A.shadowSide:A.side:N.side=A.shadowSide!==null?A.shadowSide:h[A.side],N.alphaMap=A.alphaMap,N.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,N.map=A.map,N.clipShadows=A.clipShadows,N.clippingPlanes=A.clippingPlanes,N.clipIntersection=A.clipIntersection,N.displacementMap=A.displacementMap,N.displacementScale=A.displacementScale,N.displacementBias=A.displacementBias,N.wireframeLinewidth=A.wireframeLinewidth,N.linewidth=A.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const L=r.properties.get(N);L.light=v}return N}function y(w,A,v,M,N){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===Oo)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const k=e.update(w),H=w.material;if(Array.isArray(H)){const O=k.groups;for(let B=0,U=O.length;B<U;B++){const j=O[B],V=H[j.materialIndex];if(V&&V.visible){const P=T(w,V,M,N);w.onBeforeShadow(r,w,A,v,k,P,j),r.renderBufferDirect(v,null,k,P,w,j),w.onAfterShadow(r,w,A,v,k,P,j)}}}else if(H.visible){const O=T(w,H,M,N);w.onBeforeShadow(r,w,A,v,k,O,null),r.renderBufferDirect(v,null,k,O,w,null),w.onAfterShadow(r,w,A,v,k,O,null)}}const L=w.children;for(let k=0,H=L.length;k<H;k++)y(L[k],A,v,M,N)}function b(w){w.target.removeEventListener("dispose",b);for(const v in c){const M=c[v],N=w.target.uuid;N in M&&(M[N].dispose(),delete M[N])}}}function SE(r,e){function t(){let D=!1;const te=new Ot;let ie=null;const pe=new Ot(0,0,0,0);return{setMask:function(se){ie!==se&&!D&&(r.colorMask(se,se,se,se),ie=se)},setLocked:function(se){D=se},setClear:function(se,Q,we,He,_t){_t===!0&&(se*=He,Q*=He,we*=He),te.set(se,Q,we,He),pe.equals(te)===!1&&(r.clearColor(se,Q,we,He),pe.copy(te))},reset:function(){D=!1,ie=null,pe.set(-1,0,0,0)}}}function n(){let D=!1,te=!1,ie=null,pe=null,se=null;return{setReversed:function(Q){if(te!==Q){const we=e.get("EXT_clip_control");Q?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),te=Q;const He=se;se=null,this.setClear(He)}},getReversed:function(){return te},setTest:function(Q){Q?ee(r.DEPTH_TEST):re(r.DEPTH_TEST)},setMask:function(Q){ie!==Q&&!D&&(r.depthMask(Q),ie=Q)},setFunc:function(Q){if(te&&(Q=ox[Q]),pe!==Q){switch(Q){case Fh:r.depthFunc(r.NEVER);break;case Oh:r.depthFunc(r.ALWAYS);break;case Bh:r.depthFunc(r.LESS);break;case Ja:r.depthFunc(r.LEQUAL);break;case kh:r.depthFunc(r.EQUAL);break;case zh:r.depthFunc(r.GEQUAL);break;case Vh:r.depthFunc(r.GREATER);break;case Hh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Q}},setLocked:function(Q){D=Q},setClear:function(Q){se!==Q&&(se=Q,te&&(Q=1-Q),r.clearDepth(Q))},reset:function(){D=!1,ie=null,pe=null,se=null,te=!1}}}function i(){let D=!1,te=null,ie=null,pe=null,se=null,Q=null,we=null,He=null,_t=null;return{setTest:function(Ee){D||(Ee?ee(r.STENCIL_TEST):re(r.STENCIL_TEST))},setMask:function(Ee){te!==Ee&&!D&&(r.stencilMask(Ee),te=Ee)},setFunc:function(Ee,Be,nt){(ie!==Ee||pe!==Be||se!==nt)&&(r.stencilFunc(Ee,Be,nt),ie=Ee,pe=Be,se=nt)},setOp:function(Ee,Be,nt){(Q!==Ee||we!==Be||He!==nt)&&(r.stencilOp(Ee,Be,nt),Q=Ee,we=Be,He=nt)},setLocked:function(Ee){D=Ee},setClear:function(Ee){_t!==Ee&&(r.clearStencil(Ee),_t=Ee)},reset:function(){D=!1,te=null,ie=null,pe=null,se=null,Q=null,we=null,He=null,_t=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,_=!1,p=null,g=null,x=null,T=null,y=null,b=null,w=null,A=new Qe(0,0,0),v=0,M=!1,N=null,C=null,L=null,k=null,H=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,U=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(j)[1]),B=U>=1):j.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),B=U>=2);let V=null,P={};const ae=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),ve=new Ot().fromArray(ae),Pe=new Ot().fromArray(ne);function Ne(D,te,ie,pe){const se=new Uint8Array(4),Q=r.createTexture();r.bindTexture(D,Q),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let we=0;we<ie;we++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(te,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage2D(te+we,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se);return Q}const X={};X[r.TEXTURE_2D]=Ne(r.TEXTURE_2D,r.TEXTURE_2D,1),X[r.TEXTURE_CUBE_MAP]=Ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[r.TEXTURE_2D_ARRAY]=Ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),X[r.TEXTURE_3D]=Ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(r.DEPTH_TEST),a.setFunc(Ja),Ce(!1),G(lp),ee(r.CULL_FACE),De(Pr);function ee(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function re(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function Re(D,te){return h[D]!==te?(r.bindFramebuffer(D,te),h[D]=te,D===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=te),D===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=te),!0):!1}function Ae(D,te){let ie=d,pe=!1;if(D){ie=f.get(te),ie===void 0&&(ie=[],f.set(te,ie));const se=D.textures;if(ie.length!==se.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,we=se.length;Q<we;Q++)ie[Q]=r.COLOR_ATTACHMENT0+Q;ie.length=se.length,pe=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,pe=!0);pe&&r.drawBuffers(ie)}function Me(D){return m!==D?(r.useProgram(D),m=D,!0):!1}const Ke={[Us]:r.FUNC_ADD,[wv]:r.FUNC_SUBTRACT,[Rv]:r.FUNC_REVERSE_SUBTRACT};Ke[Cv]=r.MIN,Ke[Pv]=r.MAX;const he={[Dv]:r.ZERO,[Lv]:r.ONE,[Iv]:r.SRC_COLOR,[Nh]:r.SRC_ALPHA,[kv]:r.SRC_ALPHA_SATURATE,[Ov]:r.DST_COLOR,[Uv]:r.DST_ALPHA,[Nv]:r.ONE_MINUS_SRC_COLOR,[Uh]:r.ONE_MINUS_SRC_ALPHA,[Bv]:r.ONE_MINUS_DST_COLOR,[Fv]:r.ONE_MINUS_DST_ALPHA,[zv]:r.CONSTANT_COLOR,[Vv]:r.ONE_MINUS_CONSTANT_COLOR,[Hv]:r.CONSTANT_ALPHA,[Gv]:r.ONE_MINUS_CONSTANT_ALPHA};function De(D,te,ie,pe,se,Q,we,He,_t,Ee){if(D===Pr){_===!0&&(re(r.BLEND),_=!1);return}if(_===!1&&(ee(r.BLEND),_=!0),D!==Av){if(D!==p||Ee!==M){if((g!==Us||y!==Us)&&(r.blendEquation(r.FUNC_ADD),g=Us,y=Us),Ee)switch(D){case ka:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cp:r.blendFunc(r.ONE,r.ONE);break;case up:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:$e("WebGLState: Invalid blending: ",D);break}else switch(D){case ka:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case up:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hp:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",D);break}x=null,T=null,b=null,w=null,A.set(0,0,0),v=0,p=D,M=Ee}return}se=se||te,Q=Q||ie,we=we||pe,(te!==g||se!==y)&&(r.blendEquationSeparate(Ke[te],Ke[se]),g=te,y=se),(ie!==x||pe!==T||Q!==b||we!==w)&&(r.blendFuncSeparate(he[ie],he[pe],he[Q],he[we]),x=ie,T=pe,b=Q,w=we),(He.equals(A)===!1||_t!==v)&&(r.blendColor(He.r,He.g,He.b,_t),A.copy(He),v=_t),p=D,M=!1}function Ve(D,te){D.side===er?re(r.CULL_FACE):ee(r.CULL_FACE);let ie=D.side===Jn;te&&(ie=!ie),Ce(ie),D.blending===ka&&D.transparent===!1?De(Pr):De(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const pe=D.stencilWrite;o.setTest(pe),pe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),tt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):re(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(D){N!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),N=D)}function G(D){D!==Tv?(ee(r.CULL_FACE),D!==C&&(D===lp?r.cullFace(r.BACK):D===bv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):re(r.CULL_FACE),C=D}function I(D){D!==L&&(B&&r.lineWidth(D),L=D)}function tt(D,te,ie){D?(ee(r.POLYGON_OFFSET_FILL),(k!==te||H!==ie)&&(k=te,H=ie,a.getReversed()&&(te=-te),r.polygonOffset(te,ie))):re(r.POLYGON_OFFSET_FILL)}function ze(D){D?ee(r.SCISSOR_TEST):re(r.SCISSOR_TEST)}function Oe(D){D===void 0&&(D=r.TEXTURE0+O-1),V!==D&&(r.activeTexture(D),V=D)}function oe(D,te,ie){ie===void 0&&(V===null?ie=r.TEXTURE0+O-1:ie=V);let pe=P[ie];pe===void 0&&(pe={type:void 0,texture:void 0},P[ie]=pe),(pe.type!==D||pe.texture!==te)&&(V!==ie&&(r.activeTexture(ie),V=ie),r.bindTexture(D,te||X[D]),pe.type=D,pe.texture=te)}function R(){const D=P[V];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function Z(){try{r.texSubImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function J(){try{r.texSubImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function me(){try{r.compressedTexSubImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function ue(){try{r.texStorage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function Le(){try{r.texStorage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function xe(){try{r.texImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function ce(){try{r.texImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function le(D){ve.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),ve.copy(D))}function ye(D){Pe.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Pe.copy(D))}function fe(D,te){let ie=c.get(te);ie===void 0&&(ie=new WeakMap,c.set(te,ie));let pe=ie.get(D);pe===void 0&&(pe=r.getUniformBlockIndex(te,D.name),ie.set(D,pe))}function de(D,te){const pe=c.get(te).get(D);l.get(te)!==pe&&(r.uniformBlockBinding(te,pe,D.__bindingPointIndex),l.set(te,pe))}function qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},V=null,P={},h={},f=new WeakMap,d=[],m=null,_=!1,p=null,g=null,x=null,T=null,y=null,b=null,w=null,A=new Qe(0,0,0),v=0,M=!1,N=null,C=null,L=null,k=null,H=null,ve.set(0,0,r.canvas.width,r.canvas.height),Pe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:re,bindFramebuffer:Re,drawBuffers:Ae,useProgram:Me,setBlending:De,setMaterial:Ve,setFlipSided:Ce,setCullFace:G,setLineWidth:I,setPolygonOffset:tt,setScissorTest:ze,activeTexture:Oe,bindTexture:oe,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:F,texImage2D:xe,texImage3D:ce,updateUBOMapping:fe,uniformBlockBinding:de,texStorage2D:ue,texStorage3D:Le,texSubImage2D:Z,texSubImage3D:J,compressedTexSubImage2D:$,compressedTexSubImage3D:me,scissor:le,viewport:ye,reset:qe}}function ME(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return d?new OffscreenCanvas(R,S):gl("canvas")}function _(R,S,F){let Z=1;const J=oe(R);if((J.width>F||J.height>F)&&(Z=F/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(Z*J.width),me=Math.floor(Z*J.height);h===void 0&&(h=m($,me));const ue=S?m($,me):h;return ue.width=$,ue.height=me,ue.getContext("2d").drawImage(R,0,0,$,me),We("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+me+")."),ue}else return"data"in R&&We("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function p(R){return R.generateMipmaps}function g(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(R,S,F,Z,J=!1){if(R!==null){if(r[R]!==void 0)return r[R];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=S;if(S===r.RED&&(F===r.FLOAT&&($=r.R32F),F===r.HALF_FLOAT&&($=r.R16F),F===r.UNSIGNED_BYTE&&($=r.R8)),S===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&($=r.R8UI),F===r.UNSIGNED_SHORT&&($=r.R16UI),F===r.UNSIGNED_INT&&($=r.R32UI),F===r.BYTE&&($=r.R8I),F===r.SHORT&&($=r.R16I),F===r.INT&&($=r.R32I)),S===r.RG&&(F===r.FLOAT&&($=r.RG32F),F===r.HALF_FLOAT&&($=r.RG16F),F===r.UNSIGNED_BYTE&&($=r.RG8)),S===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&($=r.RG8UI),F===r.UNSIGNED_SHORT&&($=r.RG16UI),F===r.UNSIGNED_INT&&($=r.RG32UI),F===r.BYTE&&($=r.RG8I),F===r.SHORT&&($=r.RG16I),F===r.INT&&($=r.RG32I)),S===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&($=r.RGB8UI),F===r.UNSIGNED_SHORT&&($=r.RGB16UI),F===r.UNSIGNED_INT&&($=r.RGB32UI),F===r.BYTE&&($=r.RGB8I),F===r.SHORT&&($=r.RGB16I),F===r.INT&&($=r.RGB32I)),S===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&($=r.RGBA8UI),F===r.UNSIGNED_SHORT&&($=r.RGBA16UI),F===r.UNSIGNED_INT&&($=r.RGBA32UI),F===r.BYTE&&($=r.RGBA8I),F===r.SHORT&&($=r.RGBA16I),F===r.INT&&($=r.RGBA32I)),S===r.RGB&&(F===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),S===r.RGBA){const me=J?Wc:mt.getTransfer(Z);F===r.FLOAT&&($=r.RGBA32F),F===r.HALF_FLOAT&&($=r.RGBA16F),F===r.UNSIGNED_BYTE&&($=me===Et?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(R,S){let F;return R?S===null||S===ur||S===fl?F=r.DEPTH24_STENCIL8:S===Ci?F=r.DEPTH32F_STENCIL8:S===hl&&(F=r.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ur||S===fl?F=r.DEPTH_COMPONENT24:S===Ci?F=r.DEPTH_COMPONENT32F:S===hl&&(F=r.DEPTH_COMPONENT16),F}function b(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){const S=R.target;S.removeEventListener("dispose",w),v(S),S.isVideoTexture&&u.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),N(S)}function v(R){const S=n.get(R);if(S.__webglInit===void 0)return;const F=R.source,Z=f.get(F);if(Z){const J=Z[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(R),Object.keys(Z).length===0&&f.delete(F)}n.remove(R)}function M(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const F=R.source,Z=f.get(F);delete Z[S.__cacheKey],a.memory.textures--}function N(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let J=0;J<S.__webglFramebuffer[Z].length;J++)r.deleteFramebuffer(S.__webglFramebuffer[Z][J]);else r.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)r.deleteFramebuffer(S.__webglFramebuffer[Z]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=R.textures;for(let Z=0,J=F.length;Z<J;Z++){const $=n.get(F[Z]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(F[Z])}n.remove(R)}let C=0;function L(){C=0}function k(){const R=C;return R>=i.maxTextures&&We("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),C+=1,R}function H(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function O(R,S){const F=n.get(R);if(R.isVideoTexture&&ze(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const Z=R.image;if(Z===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,R,S);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+S)}function B(R,S){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){X(F,R,S);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+S)}function U(R,S){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){X(F,R,S);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+S)}function j(R,S){const F=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){ee(F,R,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+S)}const V={[eo]:r.REPEAT,[nr]:r.CLAMP_TO_EDGE,[Gc]:r.MIRRORED_REPEAT},P={[ln]:r.NEAREST,[Wg]:r.NEAREST_MIPMAP_NEAREST,[Bo]:r.NEAREST_MIPMAP_LINEAR,[cn]:r.LINEAR,[Tc]:r.LINEAR_MIPMAP_NEAREST,[wr]:r.LINEAR_MIPMAP_LINEAR},ae={[Zv]:r.NEVER,[nx]:r.ALWAYS,[Jv]:r.LESS,[pd]:r.LEQUAL,[Qv]:r.EQUAL,[md]:r.GEQUAL,[ex]:r.GREATER,[tx]:r.NOTEQUAL};function ne(R,S){if(S.type===Ci&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===cn||S.magFilter===Tc||S.magFilter===Bo||S.magFilter===wr||S.minFilter===cn||S.minFilter===Tc||S.minFilter===Bo||S.minFilter===wr)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,V[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,V[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,V[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,P[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,P[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ln||S.minFilter!==Bo&&S.minFilter!==wr||S.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ve(R,S){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));const Z=S.source;let J=f.get(Z);J===void 0&&(J={},f.set(Z,J));const $=H(S);if($!==R.__cacheKey){J[$]===void 0&&(J[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[$].usedTimes++;const me=J[R.__cacheKey];me!==void 0&&(J[R.__cacheKey].usedTimes--,me.usedTimes===0&&M(S)),R.__cacheKey=$,R.__webglTexture=J[$].texture}return F}function Pe(R,S,F){return Math.floor(Math.floor(R/F)/S)}function Ne(R,S,F,Z){const $=R.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,F,Z,S.data);else{$.sort((ce,le)=>ce.start-le.start);let me=0;for(let ce=1;ce<$.length;ce++){const le=$[me],ye=$[ce],fe=le.start+le.count,de=Pe(ye.start,S.width,4),qe=Pe(le.start,S.width,4);ye.start<=fe+1&&de===qe&&Pe(ye.start+ye.count-1,S.width,4)===de?le.count=Math.max(le.count,ye.start+ye.count-le.start):(++me,$[me]=ye)}$.length=me+1;const ue=r.getParameter(r.UNPACK_ROW_LENGTH),Le=r.getParameter(r.UNPACK_SKIP_PIXELS),xe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let ce=0,le=$.length;ce<le;ce++){const ye=$[ce],fe=Math.floor(ye.start/4),de=Math.ceil(ye.count/4),qe=fe%S.width,D=Math.floor(fe/S.width),te=de,ie=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,qe),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,qe,D,te,ie,F,Z,S.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Le),r.pixelStorei(r.UNPACK_SKIP_ROWS,xe)}}function X(R,S,F){let Z=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=r.TEXTURE_3D);const J=ve(R,S),$=S.source;t.bindTexture(Z,R.__webglTexture,r.TEXTURE0+F);const me=n.get($);if($.version!==me.__version||J===!0){t.activeTexture(r.TEXTURE0+F);const ue=mt.getPrimaries(mt.workingColorSpace),Le=S.colorSpace===Qr?null:mt.getPrimaries(S.colorSpace),xe=S.colorSpace===Qr||ue===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ce=_(S.image,!1,i.maxTextureSize);ce=Oe(S,ce);const le=s.convert(S.format,S.colorSpace),ye=s.convert(S.type);let fe=T(S.internalFormat,le,ye,S.colorSpace,S.isVideoTexture);ne(Z,S);let de;const qe=S.mipmaps,D=S.isVideoTexture!==!0,te=me.__version===void 0||J===!0,ie=$.dataReady,pe=b(S,ce);if(S.isDepthTexture)fe=y(S.format===Bs,S.type),te&&(D?t.texStorage2D(r.TEXTURE_2D,1,fe,ce.width,ce.height):t.texImage2D(r.TEXTURE_2D,0,fe,ce.width,ce.height,0,le,ye,null));else if(S.isDataTexture)if(qe.length>0){D&&te&&t.texStorage2D(r.TEXTURE_2D,pe,fe,qe[0].width,qe[0].height);for(let se=0,Q=qe.length;se<Q;se++)de=qe[se],D?ie&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,de.width,de.height,le,ye,de.data):t.texImage2D(r.TEXTURE_2D,se,fe,de.width,de.height,0,le,ye,de.data);S.generateMipmaps=!1}else D?(te&&t.texStorage2D(r.TEXTURE_2D,pe,fe,ce.width,ce.height),ie&&Ne(S,ce,le,ye)):t.texImage2D(r.TEXTURE_2D,0,fe,ce.width,ce.height,0,le,ye,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&te&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,fe,qe[0].width,qe[0].height,ce.depth);for(let se=0,Q=qe.length;se<Q;se++)if(de=qe[se],S.format!==Pi)if(le!==null)if(D){if(ie)if(S.layerUpdates.size>0){const we=nm(de.width,de.height,S.format,S.type);for(const He of S.layerUpdates){const _t=de.data.subarray(He*we/de.data.BYTES_PER_ELEMENT,(He+1)*we/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,He,de.width,de.height,1,le,_t)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,ce.depth,le,de.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,fe,de.width,de.height,ce.depth,0,de.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ie&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,ce.depth,le,ye,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,fe,de.width,de.height,ce.depth,0,le,ye,de.data)}else{D&&te&&t.texStorage2D(r.TEXTURE_2D,pe,fe,qe[0].width,qe[0].height);for(let se=0,Q=qe.length;se<Q;se++)de=qe[se],S.format!==Pi?le!==null?D?ie&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,de.width,de.height,le,de.data):t.compressedTexImage2D(r.TEXTURE_2D,se,fe,de.width,de.height,0,de.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ie&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,de.width,de.height,le,ye,de.data):t.texImage2D(r.TEXTURE_2D,se,fe,de.width,de.height,0,le,ye,de.data)}else if(S.isDataArrayTexture)if(D){if(te&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,fe,ce.width,ce.height,ce.depth),ie)if(S.layerUpdates.size>0){const se=nm(ce.width,ce.height,S.format,S.type);for(const Q of S.layerUpdates){const we=ce.data.subarray(Q*se/ce.data.BYTES_PER_ELEMENT,(Q+1)*se/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,ce.width,ce.height,1,le,ye,we)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,le,ye,ce.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,fe,ce.width,ce.height,ce.depth,0,le,ye,ce.data);else if(S.isData3DTexture)D?(te&&t.texStorage3D(r.TEXTURE_3D,pe,fe,ce.width,ce.height,ce.depth),ie&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,le,ye,ce.data)):t.texImage3D(r.TEXTURE_3D,0,fe,ce.width,ce.height,ce.depth,0,le,ye,ce.data);else if(S.isFramebufferTexture){if(te)if(D)t.texStorage2D(r.TEXTURE_2D,pe,fe,ce.width,ce.height);else{let se=ce.width,Q=ce.height;for(let we=0;we<pe;we++)t.texImage2D(r.TEXTURE_2D,we,fe,se,Q,0,le,ye,null),se>>=1,Q>>=1}}else if(qe.length>0){if(D&&te){const se=oe(qe[0]);t.texStorage2D(r.TEXTURE_2D,pe,fe,se.width,se.height)}for(let se=0,Q=qe.length;se<Q;se++)de=qe[se],D?ie&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,le,ye,de):t.texImage2D(r.TEXTURE_2D,se,fe,le,ye,de);S.generateMipmaps=!1}else if(D){if(te){const se=oe(ce);t.texStorage2D(r.TEXTURE_2D,pe,fe,se.width,se.height)}ie&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,ye,ce)}else t.texImage2D(r.TEXTURE_2D,0,fe,le,ye,ce);p(S)&&g(Z),me.__version=$.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ee(R,S,F){if(S.image.length!==6)return;const Z=ve(R,S),J=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+F);const $=n.get(J);if(J.version!==$.__version||Z===!0){t.activeTexture(r.TEXTURE0+F);const me=mt.getPrimaries(mt.workingColorSpace),ue=S.colorSpace===Qr?null:mt.getPrimaries(S.colorSpace),Le=S.colorSpace===Qr||me===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,le=[];for(let Q=0;Q<6;Q++)!xe&&!ce?le[Q]=_(S.image[Q],!0,i.maxCubemapSize):le[Q]=ce?S.image[Q].image:S.image[Q],le[Q]=Oe(S,le[Q]);const ye=le[0],fe=s.convert(S.format,S.colorSpace),de=s.convert(S.type),qe=T(S.internalFormat,fe,de,S.colorSpace),D=S.isVideoTexture!==!0,te=$.__version===void 0||Z===!0,ie=J.dataReady;let pe=b(S,ye);ne(r.TEXTURE_CUBE_MAP,S);let se;if(xe){D&&te&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,qe,ye.width,ye.height);for(let Q=0;Q<6;Q++){se=le[Q].mipmaps;for(let we=0;we<se.length;we++){const He=se[we];S.format!==Pi?fe!==null?D?ie&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,He.width,He.height,fe,He.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,qe,He.width,He.height,0,He.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,He.width,He.height,fe,de,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,qe,He.width,He.height,0,fe,de,He.data)}}}else{if(se=S.mipmaps,D&&te){se.length>0&&pe++;const Q=oe(le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ce){D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,le[Q].width,le[Q].height,fe,de,le[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,le[Q].width,le[Q].height,0,fe,de,le[Q].data);for(let we=0;we<se.length;we++){const _t=se[we].image[Q].image;D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,_t.width,_t.height,fe,de,_t.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,qe,_t.width,_t.height,0,fe,de,_t.data)}}else{D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,fe,de,le[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,fe,de,le[Q]);for(let we=0;we<se.length;we++){const He=se[we];D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,fe,de,He.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,qe,fe,de,He.image[Q])}}}p(S)&&g(r.TEXTURE_CUBE_MAP),$.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function re(R,S,F,Z,J,$){const me=s.convert(F.format,F.colorSpace),ue=s.convert(F.type),Le=T(F.internalFormat,me,ue,F.colorSpace),xe=n.get(S),ce=n.get(F);if(ce.__renderTarget=S,!xe.__hasExternalTextures){const le=Math.max(1,S.width>>$),ye=Math.max(1,S.height>>$);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,$,Le,le,ye,S.depth,0,me,ue,null):t.texImage2D(J,$,Le,le,ye,0,me,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),tt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,J,ce.__webglTexture,0,I(S)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,J,ce.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(R,S,F){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){const Z=S.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,$=y(S.stencilBuffer,J),me=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;tt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(S),$,S.width,S.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(S),$,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,$,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,R)}else{const Z=S.textures;for(let J=0;J<Z.length;J++){const $=Z[J],me=s.convert($.format,$.colorSpace),ue=s.convert($.type),Le=T($.internalFormat,me,ue,$.colorSpace);tt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(S),Le,S.width,S.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(S),Le,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Le,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(R,S,F){const Z=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(S.depthTexture);if(J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if(J.__webglInit===void 0&&(J.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),ne(r.TEXTURE_CUBE_MAP,S.depthTexture);const xe=s.convert(S.depthTexture.format),ce=s.convert(S.depthTexture.type);let le;S.depthTexture.format===Fr?le=r.DEPTH_COMPONENT24:S.depthTexture.format===Bs&&(le=r.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,le,S.width,S.height,0,xe,ce,null)}}else O(S.depthTexture,0);const $=J.__webglTexture,me=I(S),ue=Z?r.TEXTURE_CUBE_MAP_POSITIVE_X+F:r.TEXTURE_2D,Le=S.depthTexture.format===Bs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===Fr)tt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Le,ue,$,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,Le,ue,$,0);else if(S.depthTexture.format===Bs)tt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Le,ue,$,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,Le,ue,$,0);else throw new Error("Unknown depthTexture format")}function Me(R){const S=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Z}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(F)for(let Z=0;Z<6;Z++)Ae(S.__webglFramebuffer[Z],R,Z);else{const Z=R.texture.mipmaps;Z&&Z.length>0?Ae(S.__webglFramebuffer[0],R,0):Ae(S.__webglFramebuffer,R,0)}else if(F){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=r.createRenderbuffer(),Re(S.__webglDepthbuffer[Z],R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,$)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Re(S.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(R,S,F){const Z=n.get(R);S!==void 0&&re(Z.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Me(R)}function he(R){const S=R.texture,F=n.get(R),Z=n.get(S);R.addEventListener("dispose",A);const J=R.textures,$=R.isWebGLCubeRenderTarget===!0,me=J.length>1;if(me||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=S.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ue]=[];for(let Le=0;Le<S.mipmaps.length;Le++)F.__webglFramebuffer[ue][Le]=r.createFramebuffer()}else F.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)F.__webglFramebuffer[ue]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(me)for(let ue=0,Le=J.length;ue<Le;ue++){const xe=n.get(J[ue]);xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&tt(R)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ue=0;ue<J.length;ue++){const Le=J[ue];F.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ue]);const xe=s.convert(Le.format,Le.colorSpace),ce=s.convert(Le.type),le=T(Le.internalFormat,xe,ce,Le.colorSpace,R.isXRRenderTarget===!0),ye=I(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,le,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,F.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Re(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),ne(r.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let Le=0;Le<S.mipmaps.length;Le++)re(F.__webglFramebuffer[ue][Le],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le);else re(F.__webglFramebuffer[ue],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(S)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ue=0,Le=J.length;ue<Le;ue++){const xe=J[ue],ce=n.get(xe);let le=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,ce.__webglTexture),ne(le,xe),re(F.__webglFramebuffer,R,xe,r.COLOR_ATTACHMENT0+ue,le,0),p(xe)&&g(le)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,Z.__webglTexture),ne(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let Le=0;Le<S.mipmaps.length;Le++)re(F.__webglFramebuffer[Le],R,S,r.COLOR_ATTACHMENT0,ue,Le);else re(F.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,ue,0);p(S)&&g(ue),t.unbindTexture()}R.depthBuffer&&Me(R)}function De(R){const S=R.textures;for(let F=0,Z=S.length;F<Z;F++){const J=S[F];if(p(J)){const $=x(R),me=n.get(J).__webglTexture;t.bindTexture($,me),g($),t.unbindTexture()}}}const Ve=[],Ce=[];function G(R){if(R.samples>0){if(tt(R)===!1){const S=R.textures,F=R.width,Z=R.height;let J=r.COLOR_BUFFER_BIT;const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=n.get(R),ue=S.length>1;if(ue)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const Le=R.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);const ce=n.get(S[xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ce,0)}r.blitFramebuffer(0,0,F,Z,0,0,F,Z,J,r.NEAREST),l===!0&&(Ve.length=0,Ce.length=0,Ve.push(r.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ve.push($),Ce.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ce)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);const ce=n.get(S[xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,ce,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function I(R){return Math.min(i.maxSamples,R.samples)}function tt(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ze(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function Oe(R,S){const F=R.colorSpace,Z=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==jn&&F!==Qr&&(mt.getTransfer(F)===Et?(Z!==Pi||J!==hi)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",F)),S}function oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=L,this.setTexture2D=O,this.setTexture2DArray=B,this.setTexture3D=U,this.setTextureCube=j,this.rebindTextures=Ke,this.setupRenderTarget=he,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=re,this.useMultisampledRTT=tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function TE(r,e){function t(n,i=Qr){let s;const a=mt.getTransfer(i);if(n===hi)return r.UNSIGNED_BYTE;if(n===ld)return r.UNSIGNED_SHORT_4_4_4_4;if(n===cd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Yg)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===$g)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xg)return r.BYTE;if(n===qg)return r.SHORT;if(n===hl)return r.UNSIGNED_SHORT;if(n===od)return r.INT;if(n===ur)return r.UNSIGNED_INT;if(n===Ci)return r.FLOAT;if(n===Ur)return r.HALF_FLOAT;if(n===Kg)return r.ALPHA;if(n===jg)return r.RGB;if(n===Pi)return r.RGBA;if(n===Fr)return r.DEPTH_COMPONENT;if(n===Bs)return r.DEPTH_STENCIL;if(n===ud)return r.RED;if(n===hd)return r.RED_INTEGER;if(n===to)return r.RG;if(n===fd)return r.RG_INTEGER;if(n===dd)return r.RGBA_INTEGER;if(n===bc||n===Ec||n===Ac||n===wc)if(a===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ec)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ac)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gh||n===Wh||n===Xh||n===qh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yh||n===$h||n===Kh||n===jh||n===Zh||n===Jh||n===Qh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Yh||n===$h)return a===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Kh)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===jh)return s.COMPRESSED_R11_EAC;if(n===Zh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Jh)return s.COMPRESSED_RG11_EAC;if(n===Qh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ef||n===tf||n===nf||n===rf||n===sf||n===af||n===of||n===lf||n===cf||n===uf||n===hf||n===ff||n===df||n===pf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ef)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===af)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===of)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ff)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===df)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mf||n===gf||n===_f)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===mf)return a===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_f)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vf||n===xf||n===yf||n===Sf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===vf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===xf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fl?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const bE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new u_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wi({vertexShader:bE,fragmentShader:EE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vi(new du(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wE extends _o{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",p=new AE,g={},x=t.getContextAttributes();let T=null,y=null;const b=[],w=[],A=new vt;let v=null;const M=new Un;M.viewport=new Ot;const N=new Un;N.viewport=new Ot;const C=[M,N],L=new Py;let k=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=b[X];return ee===void 0&&(ee=new Nu,b[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=b[X];return ee===void 0&&(ee=new Nu,b[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=b[X];return ee===void 0&&(ee=new Nu,b[X]=ee),ee.getHandSpace()};function O(X){const ee=w.indexOf(X.inputSource);if(ee===-1)return;const re=b[ee];re!==void 0&&(re.update(X.inputSource,X.frame,c||a),re.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",U);for(let X=0;X<b.length;X++){const ee=w[X];ee!==null&&(w[X]=null,b[X].disconnect(ee))}k=null,H=null,p.reset();for(const X in g)delete g[X];e.setRenderTarget(T),d=null,f=null,h=null,i=null,y=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",B),i.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Re=null,Ae=null;x.depth&&(Ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=x.stencil?Bs:Fr,Re=x.stencil?fl:ur);const Me={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Me),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new or(f.textureWidth,f.textureHeight,{format:Pi,type:hi,depthTexture:new _l(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const re={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new or(d.framebufferWidth,d.framebufferHeight,{format:Pi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ne.setContext(i),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function U(X){for(let ee=0;ee<X.removed.length;ee++){const re=X.removed[ee],Re=w.indexOf(re);Re>=0&&(w[Re]=null,b[Re].disconnect(re))}for(let ee=0;ee<X.added.length;ee++){const re=X.added[ee];let Re=w.indexOf(re);if(Re===-1){for(let Me=0;Me<b.length;Me++)if(Me>=w.length){w.push(re),Re=Me;break}else if(w[Me]===null){w[Me]=re,Re=Me;break}if(Re===-1)break}const Ae=b[Re];Ae&&Ae.connect(re)}}const j=new W,V=new W;function P(X,ee,re){j.setFromMatrixPosition(ee.matrixWorld),V.setFromMatrixPosition(re.matrixWorld);const Re=j.distanceTo(V),Ae=ee.projectionMatrix.elements,Me=re.projectionMatrix.elements,Ke=Ae[14]/(Ae[10]-1),he=Ae[14]/(Ae[10]+1),De=(Ae[9]+1)/Ae[5],Ve=(Ae[9]-1)/Ae[5],Ce=(Ae[8]-1)/Ae[0],G=(Me[8]+1)/Me[0],I=Ke*Ce,tt=Ke*G,ze=Re/(-Ce+G),Oe=ze*-Ce;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Oe),X.translateZ(ze),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ae[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const oe=Ke+ze,R=he+ze,S=I-Oe,F=tt+(Re-Oe),Z=De*he/R*oe,J=Ve*he/R*oe;X.projectionMatrix.makePerspective(S,F,Z,J,oe,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ae(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let ee=X.near,re=X.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(re=p.depthFar)),L.near=N.near=M.near=ee,L.far=N.far=M.far=re,(k!==L.near||H!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),k=L.near,H=L.far),L.layers.mask=X.layers.mask|6,M.layers.mask=L.layers.mask&-5,N.layers.mask=L.layers.mask&-3;const Re=X.parent,Ae=L.cameras;ae(L,Re);for(let Me=0;Me<Ae.length;Me++)ae(Ae[Me],Re);Ae.length===2?P(L,M,N):L.projectionMatrix.copy(M.projectionMatrix),ne(X,L,Re)};function ne(X,ee,re){re===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(re.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=no*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(X){return g[X]};let ve=null;function Pe(X,ee){if(u=ee.getViewerPose(c||a),m=ee,u!==null){const re=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Re=!1;re.length!==L.cameras.length&&(L.cameras.length=0,Re=!0);for(let he=0;he<re.length;he++){const De=re[he];let Ve=null;if(d!==null)Ve=d.getViewport(De);else{const G=h.getViewSubImage(f,De);Ve=G.viewport,he===0&&(e.setRenderTargetTextures(y,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(y))}let Ce=C[he];Ce===void 0&&(Ce=new Un,Ce.layers.enable(he),Ce.viewport=new Ot,C[he]=Ce),Ce.matrix.fromArray(De.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(De.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),he===0&&(L.matrix.copy(Ce.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Re===!0&&L.cameras.push(Ce)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const he=h.getDepthInformation(re[0]);he&&he.isValid&&he.texture&&p.init(he,i.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let he=0;he<re.length;he++){const De=re[he].camera;if(De){let Ve=g[De];Ve||(Ve=new u_,g[De]=Ve);const Ce=h.getCameraImage(De);Ve.sourceTexture=Ce}}}}for(let re=0;re<b.length;re++){const Re=w[re],Ae=b[re];Re!==null&&Ae!==void 0&&Ae.update(Re,ee,c||a)}ve&&ve(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}const Ne=new g_;Ne.setAnimationLoop(Pe),this.setAnimationLoop=function(X){ve=X},this.dispose=function(){}}}const Es=new hr,RE=new ot;function CE(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,h_(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,x,T,y){g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),h(p,g)):g.isMeshPhongMaterial?(s(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,x,T):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Jn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Jn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const x=e.get(g),T=x.envMap,y=x.envMapRotation;T&&(p.envMap.value=T,Es.copy(y),Es.x*=-1,Es.y*=-1,Es.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),p.envMapRotation.value.setFromMatrix4(RE.makeRotationFromEuler(Es)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,x,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=T*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,x){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Jn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const x=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function PE(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){const y=T.program;n.uniformBlockBinding(x,y)}function c(x,T){let y=i[x.id];y===void 0&&(m(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",p));const b=T.program;n.updateUBOMapping(x,b);const w=e.render.frame;s[x.id]!==w&&(f(x),s[x.id]=w)}function u(x){const T=h();x.__bindingPointIndex=T;const y=r.createBuffer(),b=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,b,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,y),y}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const T=i[x.id],y=x.uniforms,b=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let w=0,A=y.length;w<A;w++){const v=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,N=v.length;M<N;M++){const C=v[M];if(d(C,w,M,b)===!0){const L=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let O=0;O<k.length;O++){const B=k[O],U=_(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,L+H,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,H),H+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,T,y,b){const w=x.value,A=T+"_"+y;if(b[A]===void 0)return typeof w=="number"||typeof w=="boolean"?b[A]=w:b[A]=w.clone(),!0;{const v=b[A];if(typeof w=="number"||typeof w=="boolean"){if(v!==w)return b[A]=w,!0}else if(v.equals(w)===!1)return v.copy(w),!0}return!1}function m(x){const T=x.uniforms;let y=0;const b=16;for(let A=0,v=T.length;A<v;A++){const M=Array.isArray(T[A])?T[A]:[T[A]];for(let N=0,C=M.length;N<C;N++){const L=M[N],k=Array.isArray(L.value)?L.value:[L.value];for(let H=0,O=k.length;H<O;H++){const B=k[H],U=_(B),j=y%b,V=j%U.boundary,P=j+V;y+=V,P!==0&&b-P<U.storage&&(y+=b-P),L.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=U.storage}}}const w=y%b;return w>0&&(y+=b-w),x.__size=y,x.__cache={},this}function _(x){const T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):We("WebGLRenderer: Unsupported uniform value type.",x),T}function p(x){const T=x.target;T.removeEventListener("dispose",p);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function g(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:g}}const DE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function LE(){return $i===null&&($i=new xd(DE,16,16,to,Ur),$i.name="DFG_LUT",$i.minFilter=cn,$i.magFilter=cn,$i.wrapS=nr,$i.wrapT=nr,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class Am{constructor(e={}){const{canvas:t=sx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=hi}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=d,p=new Set([dd,fd,hd]),g=new Set([hi,ur,hl,fl,ld,cd]),x=new Uint32Array(4),T=new Int32Array(4);let y=null,b=null;const w=[],A=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let N=!1;this._outputColorSpace=bn;let C=0,L=0,k=null,H=-1,O=null;const B=new Ot,U=new Ot;let j=null;const V=new Qe(0);let P=0,ae=t.width,ne=t.height,ve=1,Pe=null,Ne=null;const X=new Ot(0,0,ae,ne),ee=new Ot(0,0,ae,ne);let re=!1;const Re=new Sd;let Ae=!1,Me=!1;const Ke=new ot,he=new W,De=new Ot,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function G(){return k===null?ve:1}let I=n;function tt(E,z){return t.getContext(E,z)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ad}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",_t,!1),I===null){const z="webgl2";if(I=tt(z,E),I===null)throw tt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw $e("WebGLRenderer: "+E.message),E}let ze,Oe,oe,R,S,F,Z,J,$,me,ue,Le,xe,ce,le,ye,fe,de,qe,D,te,ie,pe;function se(){ze=new IT(I),ze.init(),te=new TE(I,ze),Oe=new ET(I,ze,e,te),oe=new SE(I,ze),Oe.reversedDepthBuffer&&f&&oe.buffers.depth.setReversed(!0),R=new FT(I),S=new oE,F=new ME(I,ze,oe,S,Oe,te,R),Z=new LT(M),J=new Vy(I),ie=new TT(I,J),$=new NT(I,J,R,ie),me=new BT(I,$,J,ie,R),de=new OT(I,Oe,F),le=new AT(S),ue=new aE(M,Z,ze,Oe,ie,le),Le=new CE(M,S),xe=new cE,ce=new mE(ze),fe=new MT(M,Z,oe,me,m,l),ye=new yE(M,me,Oe),pe=new PE(I,R,Oe,oe),qe=new bT(I,ze,R),D=new UT(I,ze,R),R.programs=ue.programs,M.capabilities=Oe,M.extensions=ze,M.properties=S,M.renderLists=xe,M.shadowMap=ye,M.state=oe,M.info=R}se(),_!==hi&&(v=new zT(_,t.width,t.height,i,s));const Q=new wE(M,I);this.xr=Q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(E){E!==void 0&&(ve=E,this.setSize(ae,ne,!1))},this.getSize=function(E){return E.set(ae,ne)},this.setSize=function(E,z,K=!0){if(Q.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=E,ne=z,t.width=Math.floor(E*ve),t.height=Math.floor(z*ve),K===!0&&(t.style.width=E+"px",t.style.height=z+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(ae*ve,ne*ve).floor()},this.setDrawingBufferSize=function(E,z,K){ae=E,ne=z,ve=K,t.width=Math.floor(E*K),t.height=Math.floor(z*K),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(_===hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(B)},this.getViewport=function(E){return E.copy(X)},this.setViewport=function(E,z,K,Y){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,z,K,Y),oe.viewport(B.copy(X).multiplyScalar(ve).round())},this.getScissor=function(E){return E.copy(ee)},this.setScissor=function(E,z,K,Y){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,z,K,Y),oe.scissor(U.copy(ee).multiplyScalar(ve).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(E){oe.setScissorTest(re=E)},this.setOpaqueSort=function(E){Pe=E},this.setTransparentSort=function(E){Ne=E},this.getClearColor=function(E){return E.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,K=!0){let Y=0;if(E){let q=!1;if(k!==null){const ge=k.texture.format;q=p.has(ge)}if(q){const ge=k.texture.type,Se=g.has(ge),_e=fe.getClearColor(),Ue=fe.getClearAlpha(),Ie=_e.r,et=_e.g,lt=_e.b;Se?(x[0]=Ie,x[1]=et,x[2]=lt,x[3]=Ue,I.clearBufferuiv(I.COLOR,0,x)):(T[0]=Ie,T[1]=et,T[2]=lt,T[3]=Ue,I.clearBufferiv(I.COLOR,0,T))}else Y|=I.COLOR_BUFFER_BIT}z&&(Y|=I.DEPTH_BUFFER_BIT),K&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",_t,!1),fe.dispose(),xe.dispose(),ce.dispose(),S.dispose(),Z.dispose(),me.dispose(),ie.dispose(),pe.dispose(),ue.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Ze),Q.removeEventListener("sessionend",Yt),Je.stop()};function we(E){E.preventDefault(),Xc("WebGLRenderer: Context Lost."),N=!0}function He(){Xc("WebGLRenderer: Context Restored."),N=!1;const E=R.autoReset,z=ye.enabled,K=ye.autoUpdate,Y=ye.needsUpdate,q=ye.type;se(),R.autoReset=E,ye.enabled=z,ye.autoUpdate=K,ye.needsUpdate=Y,ye.type=q}function _t(E){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ee(E){const z=E.target;z.removeEventListener("dispose",Ee),Be(z)}function Be(E){nt(E),S.remove(E)}function nt(E){const z=S.get(E).programs;z!==void 0&&(z.forEach(function(K){ue.releaseProgram(K)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,K,Y,q,ge){z===null&&(z=Ve);const Se=q.isMesh&&q.matrixWorld.determinant()<0,_e=Mi(E,z,K,Y,q);oe.setMaterial(Y,Se);let Ue=K.index,Ie=1;if(Y.wireframe===!0){if(Ue=$.getWireframeAttribute(K),Ue===void 0)return;Ie=2}const et=K.drawRange,lt=K.attributes.position;let Ge=et.start*Ie,Rt=(et.start+et.count)*Ie;ge!==null&&(Ge=Math.max(Ge,ge.start*Ie),Rt=Math.min(Rt,(ge.start+ge.count)*Ie)),Ue!==null?(Ge=Math.max(Ge,0),Rt=Math.min(Rt,Ue.count)):lt!=null&&(Ge=Math.max(Ge,0),Rt=Math.min(Rt,lt.count));const $t=Rt-Ge;if($t<0||$t===1/0)return;ie.setup(q,Y,_e,K,Ue);let Xt,Ct=qe;if(Ue!==null&&(Xt=J.get(Ue),Ct=D,Ct.setIndex(Xt)),q.isMesh)Y.wireframe===!0?(oe.setLineWidth(Y.wireframeLinewidth*G()),Ct.setMode(I.LINES)):Ct.setMode(I.TRIANGLES);else if(q.isLine){let Cn=Y.linewidth;Cn===void 0&&(Cn=1),oe.setLineWidth(Cn*G()),q.isLineSegments?Ct.setMode(I.LINES):q.isLineLoop?Ct.setMode(I.LINE_LOOP):Ct.setMode(I.LINE_STRIP)}else q.isPoints?Ct.setMode(I.POINTS):q.isSprite&&Ct.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)qc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))Ct.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Cn=q._multiDrawStarts,ke=q._multiDrawCounts,ri=q._multiDrawCount,yt=Ue?J.get(Ue).bytesPerElement:1,Ni=S.get(Y).currentProgram.getUniforms();for(let qi=0;qi<ri;qi++)Ni.setValue(I,"_gl_DrawID",qi),Ct.render(Cn[qi]/yt,ke[qi])}else if(q.isInstancedMesh)Ct.renderInstances(Ge,$t,q.count);else if(K.isInstancedBufferGeometry){const Cn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ke=Math.min(K.instanceCount,Cn);Ct.renderInstances(Ge,$t,ke)}else Ct.render(Ge,$t)};function Te(E,z,K){E.transparent===!0&&E.side===er&&E.forceSinglePass===!1?(E.side=Jn,E.needsUpdate=!0,wn(E,z,K),E.side=Nr,E.needsUpdate=!0,wn(E,z,K),E.side=er):wn(E,z,K)}this.compile=function(E,z,K=null){K===null&&(K=E),b=ce.get(K),b.init(z),A.push(b),K.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),E!==K&&E.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),b.setupLights();const Y=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ge=q.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){const _e=ge[Se];Te(_e,K,q),Y.add(_e)}else Te(ge,K,q),Y.add(ge)}),b=A.pop(),Y},this.compileAsync=function(E,z,K=null){const Y=this.compile(E,z,K);return new Promise(q=>{function ge(){if(Y.forEach(function(Se){S.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){q(E);return}setTimeout(ge,10)}ze.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let je=null;function Xe(E){je&&je(E)}function Ze(){Je.stop()}function Yt(){Je.start()}const Je=new g_;Je.setAnimationLoop(Xe),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(E){je=E,Q.setAnimationLoop(E),E===null?Je.stop():Je.start()},Q.addEventListener("sessionstart",Ze),Q.addEventListener("sessionend",Yt),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const K=Q.enabled===!0&&Q.isPresenting===!0,Y=v!==null&&(k===null||K)&&v.begin(M,k);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(z),z=Q.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,z,k),b=ce.get(E,A.length),b.init(z),A.push(b),Ke.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Re.setFromProjectionMatrix(Ke,ir,z.reversedDepth),Me=this.localClippingEnabled,Ae=le.init(this.clippingPlanes,Me),y=xe.get(E,w.length),y.init(),w.push(y),Q.enabled===!0&&Q.isPresenting===!0){const Se=M.xr.getDepthSensingMesh();Se!==null&&Ut(Se,z,-1/0,M.sortObjects)}Ut(E,z,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(Pe,Ne),Ce=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Ce&&fe.addToRenderList(y,E),this.info.render.frame++,Ae===!0&&le.beginShadows();const q=b.state.shadowsArray;if(ye.render(q,E,z),Ae===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&v.hasRenderPass())===!1){const Se=y.opaque,_e=y.transmissive;if(b.setupLights(),z.isArrayCamera){const Ue=z.cameras;if(_e.length>0)for(let Ie=0,et=Ue.length;Ie<et;Ie++){const lt=Ue[Ie];Ft(Se,_e,E,lt)}Ce&&fe.render(E);for(let Ie=0,et=Ue.length;Ie<et;Ie++){const lt=Ue[Ie];nn(y,E,lt,lt.viewport)}}else _e.length>0&&Ft(Se,_e,E,z),Ce&&fe.render(E),nn(y,E,z)}k!==null&&L===0&&(F.updateMultisampleRenderTarget(k),F.updateRenderTargetMipmap(k)),Y&&v.end(M),E.isScene===!0&&E.onAfterRender(M,E,z),ie.resetDefaultState(),H=-1,O=null,A.pop(),A.length>0?(b=A[A.length-1],Ae===!0&&le.setGlobalState(M.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function Ut(E,z,K,Y){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Re.intersectsSprite(E)){Y&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ke);const Se=me.update(E),_e=E.material;_e.visible&&y.push(E,Se,_e,K,De.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Re.intersectsObject(E))){const Se=me.update(E),_e=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),De.copy(Se.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(Ke)),Array.isArray(_e)){const Ue=Se.groups;for(let Ie=0,et=Ue.length;Ie<et;Ie++){const lt=Ue[Ie],Ge=_e[lt.materialIndex];Ge&&Ge.visible&&y.push(E,Se,Ge,K,De.z,lt)}}else _e.visible&&y.push(E,Se,_e,K,De.z,null)}}const ge=E.children;for(let Se=0,_e=ge.length;Se<_e;Se++)Ut(ge[Se],z,K,Y)}function nn(E,z,K,Y){const{opaque:q,transmissive:ge,transparent:Se}=E;b.setupLightsView(K),Ae===!0&&le.setGlobalState(M.clippingPlanes,K),Y&&oe.viewport(B.copy(Y)),q.length>0&&bt(q,z,K),ge.length>0&&bt(ge,z,K),Se.length>0&&bt(Se,z,K),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Ft(E,z,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){const Ge=ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new or(1,1,{generateMipmaps:!0,type:Ge?Ur:hi,minFilter:wr,samples:Oe.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace})}const ge=b.state.transmissionRenderTarget[Y.id],Se=Y.viewport||B;ge.setSize(Se.z*M.transmissionResolutionScale,Se.w*M.transmissionResolutionScale);const _e=M.getRenderTarget(),Ue=M.getActiveCubeFace(),Ie=M.getActiveMipmapLevel();M.setRenderTarget(ge),M.getClearColor(V),P=M.getClearAlpha(),P<1&&M.setClearColor(16777215,.5),M.clear(),Ce&&fe.render(K);const et=M.toneMapping;M.toneMapping=ar;const lt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),Ae===!0&&le.setGlobalState(M.clippingPlanes,Y),bt(E,K,Y),F.updateMultisampleRenderTarget(ge),F.updateRenderTargetMipmap(ge),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Rt=0,$t=z.length;Rt<$t;Rt++){const Xt=z[Rt],{object:Ct,geometry:Cn,material:ke,group:ri}=Xt;if(ke.side===er&&Ct.layers.test(Y.layers)){const yt=ke.side;ke.side=Jn,ke.needsUpdate=!0,Mt(Ct,K,Y,Cn,ke,ri),ke.side=yt,ke.needsUpdate=!0,Ge=!0}}Ge===!0&&(F.updateMultisampleRenderTarget(ge),F.updateRenderTargetMipmap(ge))}M.setRenderTarget(_e,Ue,Ie),M.setClearColor(V,P),lt!==void 0&&(Y.viewport=lt),M.toneMapping=et}function bt(E,z,K){const Y=z.isScene===!0?z.overrideMaterial:null;for(let q=0,ge=E.length;q<ge;q++){const Se=E[q],{object:_e,geometry:Ue,group:Ie}=Se;let et=Se.material;et.allowOverride===!0&&Y!==null&&(et=Y),_e.layers.test(K.layers)&&Mt(_e,z,K,Ue,et,Ie)}}function Mt(E,z,K,Y,q,ge){E.onBeforeRender(M,z,K,Y,q,ge),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(M,z,K,Y,E,ge),q.transparent===!0&&q.side===er&&q.forceSinglePass===!1?(q.side=Jn,q.needsUpdate=!0,M.renderBufferDirect(K,z,Y,q,E,ge),q.side=Nr,q.needsUpdate=!0,M.renderBufferDirect(K,z,Y,q,E,ge),q.side=er):M.renderBufferDirect(K,z,Y,q,E,ge),E.onAfterRender(M,z,K,Y,q,ge)}function wn(E,z,K){z.isScene!==!0&&(z=Ve);const Y=S.get(E),q=b.state.lights,ge=b.state.shadowsArray,Se=q.state.version,_e=ue.getParameters(E,q.state,ge,z,K),Ue=ue.getProgramCacheKey(_e);let Ie=Y.programs;Y.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;const et=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Y.envMap=Z.get(E.envMap||Y.environment,et),Y.envMapRotation=Y.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",Ee),Ie=new Map,Y.programs=Ie);let lt=Ie.get(Ue);if(lt!==void 0){if(Y.currentProgram===lt&&Y.lightsStateVersion===Se)return Rn(E,_e),lt}else _e.uniforms=ue.getUniforms(E),E.onBeforeCompile(_e,M),lt=ue.acquireProgram(_e,Ue),Ie.set(Ue,lt),Y.uniforms=_e.uniforms;const Ge=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=le.uniform),Rn(E,_e),Y.needsLights=sn(E),Y.lightsStateVersion=Se,Y.needsLights&&(Ge.ambientLightColor.value=q.state.ambient,Ge.lightProbe.value=q.state.probe,Ge.directionalLights.value=q.state.directional,Ge.directionalLightShadows.value=q.state.directionalShadow,Ge.spotLights.value=q.state.spot,Ge.spotLightShadows.value=q.state.spotShadow,Ge.rectAreaLights.value=q.state.rectArea,Ge.ltc_1.value=q.state.rectAreaLTC1,Ge.ltc_2.value=q.state.rectAreaLTC2,Ge.pointLights.value=q.state.point,Ge.pointLightShadows.value=q.state.pointShadow,Ge.hemisphereLights.value=q.state.hemi,Ge.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ge.spotLightMatrix.value=q.state.spotLightMatrix,Ge.spotLightMap.value=q.state.spotLightMap,Ge.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.currentProgram=lt,Y.uniformsList=null,lt}function It(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=Rc.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Rn(E,z){const K=S.get(E);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Mi(E,z,K,Y,q){z.isScene!==!0&&(z=Ve),F.resetTextureUnits();const ge=z.fog,Se=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,_e=k===null?M.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:jn,Ue=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ie=Z.get(Y.envMap||Se,Ue),et=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,lt=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ge=!!K.morphAttributes.position,Rt=!!K.morphAttributes.normal,$t=!!K.morphAttributes.color;let Xt=ar;Y.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Xt=M.toneMapping);const Ct=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Cn=Ct!==void 0?Ct.length:0,ke=S.get(Y),ri=b.state.lights;if(Ae===!0&&(Me===!0||E!==O)){const dn=E===O&&Y.id===H;le.setState(Y,E,dn)}let yt=!1;Y.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ri.state.version||ke.outputColorSpace!==_e||q.isBatchedMesh&&ke.batching===!1||!q.isBatchedMesh&&ke.batching===!0||q.isBatchedMesh&&ke.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&ke.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&ke.instancing===!1||!q.isInstancedMesh&&ke.instancing===!0||q.isSkinnedMesh&&ke.skinning===!1||!q.isSkinnedMesh&&ke.skinning===!0||q.isInstancedMesh&&ke.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ke.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ke.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ke.instancingMorph===!1&&q.morphTexture!==null||ke.envMap!==Ie||Y.fog===!0&&ke.fog!==ge||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==le.numPlanes||ke.numIntersection!==le.numIntersection)||ke.vertexAlphas!==et||ke.vertexTangents!==lt||ke.morphTargets!==Ge||ke.morphNormals!==Rt||ke.morphColors!==$t||ke.toneMapping!==Xt||ke.morphTargetsCount!==Cn)&&(yt=!0):(yt=!0,ke.__version=Y.version);let Ni=ke.currentProgram;yt===!0&&(Ni=wn(Y,z,q));let qi=!1,vs=!1,la=!1;const Pt=Ni.getUniforms(),Mn=ke.uniforms;if(oe.useProgram(Ni.program)&&(qi=!0,vs=!0,la=!0),Y.id!==H&&(H=Y.id,vs=!0),qi||O!==E){oe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Pt.setValue(I,"projectionMatrix",E.projectionMatrix),Pt.setValue(I,"viewMatrix",E.matrixWorldInverse);const Gr=Pt.map.cameraPosition;Gr!==void 0&&Gr.setValue(I,he.setFromMatrixPosition(E.matrixWorld)),Oe.logarithmicDepthBuffer&&Pt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Pt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),O!==E&&(O=E,vs=!0,la=!0)}if(ke.needsLights&&(ri.state.directionalShadowMap.length>0&&Pt.setValue(I,"directionalShadowMap",ri.state.directionalShadowMap,F),ri.state.spotShadowMap.length>0&&Pt.setValue(I,"spotShadowMap",ri.state.spotShadowMap,F),ri.state.pointShadowMap.length>0&&Pt.setValue(I,"pointShadowMap",ri.state.pointShadowMap,F)),q.isSkinnedMesh){Pt.setOptional(I,q,"bindMatrix"),Pt.setOptional(I,q,"bindMatrixInverse");const dn=q.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Pt.setValue(I,"boneTexture",dn.boneTexture,F))}q.isBatchedMesh&&(Pt.setOptional(I,q,"batchingTexture"),Pt.setValue(I,"batchingTexture",q._matricesTexture,F),Pt.setOptional(I,q,"batchingIdTexture"),Pt.setValue(I,"batchingIdTexture",q._indirectTexture,F),Pt.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Pt.setValue(I,"batchingColorTexture",q._colorsTexture,F));const Hr=K.morphAttributes;if((Hr.position!==void 0||Hr.normal!==void 0||Hr.color!==void 0)&&de.update(q,K,Ni),(vs||ke.receiveShadow!==q.receiveShadow)&&(ke.receiveShadow=q.receiveShadow,Pt.setValue(I,"receiveShadow",q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(Mn.envMapIntensity.value=z.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=LE()),vs&&(Pt.setValue(I,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&rn(Mn,la),ge&&Y.fog===!0&&Le.refreshFogUniforms(Mn,ge),Le.refreshMaterialUniforms(Mn,Y,ve,ne,b.state.transmissionRenderTarget[E.id]),Rc.upload(I,It(ke),Mn,F)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Rc.upload(I,It(ke),Mn,F),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Pt.setValue(I,"center",q.center),Pt.setValue(I,"modelViewMatrix",q.modelViewMatrix),Pt.setValue(I,"normalMatrix",q.normalMatrix),Pt.setValue(I,"modelMatrix",q.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const dn=Y.uniformsGroups;for(let Gr=0,ca=dn.length;Gr<ca;Gr++){const ap=dn[Gr];pe.update(ap,Ni),pe.bind(ap,Ni)}}return Ni}function rn(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function sn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(E,z,K){const Y=S.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),S.get(E.texture).__webglTexture=z,S.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const K=S.get(E);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0};const fn=I.createFramebuffer();this.setRenderTarget=function(E,z=0,K=0){k=E,C=z,L=K;let Y=null,q=!1,ge=!1;if(E){const _e=S.get(E);if(_e.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(I.FRAMEBUFFER,_e.__webglFramebuffer),B.copy(E.viewport),U.copy(E.scissor),j=E.scissorTest,oe.viewport(B),oe.scissor(U),oe.setScissorTest(j),H=-1;return}else if(_e.__webglFramebuffer===void 0)F.setupRenderTarget(E);else if(_e.__hasExternalTextures)F.rebindTextures(E,S.get(E.texture).__webglTexture,S.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const et=E.depthTexture;if(_e.__boundDepthTexture!==et){if(et!==null&&S.has(et)&&(E.width!==et.image.width||E.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(E)}}const Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ge=!0);const Ie=S.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[z])?Y=Ie[z][K]:Y=Ie[z],q=!0):E.samples>0&&F.useMultisampledRTT(E)===!1?Y=S.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?Y=Ie[K]:Y=Ie,B.copy(E.viewport),U.copy(E.scissor),j=E.scissorTest}else B.copy(X).multiplyScalar(ve).floor(),U.copy(ee).multiplyScalar(ve).floor(),j=re;if(K!==0&&(Y=fn),oe.bindFramebuffer(I.FRAMEBUFFER,Y)&&oe.drawBuffers(E,Y),oe.viewport(B),oe.scissor(U),oe.setScissorTest(j),q){const _e=S.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,_e.__webglTexture,K)}else if(ge){const _e=z;for(let Ue=0;Ue<E.textures.length;Ue++){const Ie=S.get(E.textures[Ue]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ue,Ie.__webglTexture,K,_e)}}else if(E!==null&&K!==0){const _e=S.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_e.__webglTexture,K)}H=-1},this.readRenderTargetPixels=function(E,z,K,Y,q,ge,Se,_e=0){if(!(E&&E.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ue=Ue[Se]),Ue){oe.bindFramebuffer(I.FRAMEBUFFER,Ue);try{const Ie=E.textures[_e],et=Ie.format,lt=Ie.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_e),!Oe.textureFormatReadable(et)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(lt)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Y&&K>=0&&K<=E.height-q&&I.readPixels(z,K,Y,q,te.convert(et),te.convert(lt),ge)}finally{const Ie=k!==null?S.get(k).__webglFramebuffer:null;oe.bindFramebuffer(I.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,z,K,Y,q,ge,Se,_e=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ue=Ue[Se]),Ue)if(z>=0&&z<=E.width-Y&&K>=0&&K<=E.height-q){oe.bindFramebuffer(I.FRAMEBUFFER,Ue);const Ie=E.textures[_e],et=Ie.format,lt=Ie.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_e),!Oe.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ge),I.bufferData(I.PIXEL_PACK_BUFFER,ge.byteLength,I.STREAM_READ),I.readPixels(z,K,Y,q,te.convert(et),te.convert(lt),0);const Rt=k!==null?S.get(k).__webglFramebuffer:null;oe.bindFramebuffer(I.FRAMEBUFFER,Rt);const $t=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ax(I,$t,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ge),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ge),I.deleteBuffer(Ge),I.deleteSync($t),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,K=0){const Y=Math.pow(2,-K),q=Math.floor(E.image.width*Y),ge=Math.floor(E.image.height*Y),Se=z!==null?z.x:0,_e=z!==null?z.y:0;F.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,Se,_e,q,ge),oe.unbindTexture()};const gr=I.createFramebuffer(),oa=I.createFramebuffer();this.copyTextureToTexture=function(E,z,K=null,Y=null,q=0,ge=0){let Se,_e,Ue,Ie,et,lt,Ge,Rt,$t;const Xt=E.isCompressedTexture?E.mipmaps[ge]:E.image;if(K!==null)Se=K.max.x-K.min.x,_e=K.max.y-K.min.y,Ue=K.isBox3?K.max.z-K.min.z:1,Ie=K.min.x,et=K.min.y,lt=K.isBox3?K.min.z:0;else{const Mn=Math.pow(2,-q);Se=Math.floor(Xt.width*Mn),_e=Math.floor(Xt.height*Mn),E.isDataArrayTexture?Ue=Xt.depth:E.isData3DTexture?Ue=Math.floor(Xt.depth*Mn):Ue=1,Ie=0,et=0,lt=0}Y!==null?(Ge=Y.x,Rt=Y.y,$t=Y.z):(Ge=0,Rt=0,$t=0);const Ct=te.convert(z.format),Cn=te.convert(z.type);let ke;z.isData3DTexture?(F.setTexture3D(z,0),ke=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(F.setTexture2DArray(z,0),ke=I.TEXTURE_2D_ARRAY):(F.setTexture2D(z,0),ke=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const ri=I.getParameter(I.UNPACK_ROW_LENGTH),yt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ni=I.getParameter(I.UNPACK_SKIP_PIXELS),qi=I.getParameter(I.UNPACK_SKIP_ROWS),vs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Xt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,et),I.pixelStorei(I.UNPACK_SKIP_IMAGES,lt);const la=E.isDataArrayTexture||E.isData3DTexture,Pt=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const Mn=S.get(E),Hr=S.get(z),dn=S.get(Mn.__renderTarget),Gr=S.get(Hr.__renderTarget);oe.bindFramebuffer(I.READ_FRAMEBUFFER,dn.__webglFramebuffer),oe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Gr.__webglFramebuffer);for(let ca=0;ca<Ue;ca++)la&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,S.get(E).__webglTexture,q,lt+ca),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,S.get(z).__webglTexture,ge,$t+ca)),I.blitFramebuffer(Ie,et,Se,_e,Ge,Rt,Se,_e,I.DEPTH_BUFFER_BIT,I.NEAREST);oe.bindFramebuffer(I.READ_FRAMEBUFFER,null),oe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||S.has(E)){const Mn=S.get(E),Hr=S.get(z);oe.bindFramebuffer(I.READ_FRAMEBUFFER,gr),oe.bindFramebuffer(I.DRAW_FRAMEBUFFER,oa);for(let dn=0;dn<Ue;dn++)la?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mn.__webglTexture,q,lt+dn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mn.__webglTexture,q),Pt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Hr.__webglTexture,ge,$t+dn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Hr.__webglTexture,ge),q!==0?I.blitFramebuffer(Ie,et,Se,_e,Ge,Rt,Se,_e,I.COLOR_BUFFER_BIT,I.NEAREST):Pt?I.copyTexSubImage3D(ke,ge,Ge,Rt,$t+dn,Ie,et,Se,_e):I.copyTexSubImage2D(ke,ge,Ge,Rt,Ie,et,Se,_e);oe.bindFramebuffer(I.READ_FRAMEBUFFER,null),oe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Pt?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(ke,ge,Ge,Rt,$t,Se,_e,Ue,Ct,Cn,Xt.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(ke,ge,Ge,Rt,$t,Se,_e,Ue,Ct,Xt.data):I.texSubImage3D(ke,ge,Ge,Rt,$t,Se,_e,Ue,Ct,Cn,Xt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ge,Ge,Rt,Se,_e,Ct,Cn,Xt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ge,Ge,Rt,Xt.width,Xt.height,Ct,Xt.data):I.texSubImage2D(I.TEXTURE_2D,ge,Ge,Rt,Se,_e,Ct,Cn,Xt);I.pixelStorei(I.UNPACK_ROW_LENGTH,ri),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ni),I.pixelStorei(I.UNPACK_SKIP_ROWS,qi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,vs),ge===0&&z.generateMipmaps&&I.generateMipmap(ke),oe.unbindTexture()},this.initRenderTarget=function(E){S.get(E).__webglFramebuffer===void 0&&F.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?F.setTextureCube(E,0):E.isData3DTexture?F.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?F.setTexture2DArray(E,0):F.setTexture2D(E,0),oe.unbindTexture()},this.resetState=function(){C=0,L=0,k=null,oe.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}function wm(r,e){if(e===$v)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Mf||e===Zg){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Mf)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function IE(r){const e=new Map,t=new Map,n=r.clone();return M_(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function M_(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)M_(r.children[n],e.children[n],t)}class NE extends So{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kE(t)}),this.register(function(t){return new zE(t)}),this.register(function(t){return new KE(t)}),this.register(function(t){return new jE(t)}),this.register(function(t){return new ZE(t)}),this.register(function(t){return new HE(t)}),this.register(function(t){return new GE(t)}),this.register(function(t){return new WE(t)}),this.register(function(t){return new XE(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new qE(t)}),this.register(function(t){return new VE(t)}),this.register(function(t){return new $E(t)}),this.register(function(t){return new YE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new Rm(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Rm(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new JE(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=jo.extractUrlBase(e);a=jo.resolveURL(c,this.path)}else a=jo.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new p_(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===T_){try{a[ft.KHR_BINARY_GLTF]=new QE(e)}catch(h){i&&i(h);return}s=JSON.parse(a[ft.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new fA(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:a[h]=new OE;break;case ft.KHR_DRACO_MESH_COMPRESSION:a[h]=new eA(s,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:a[h]=new tA;break;case ft.KHR_MESH_QUANTIZATION:a[h]=new nA;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function UE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Jt(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class FE{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Qe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],jn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Af(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ey(u),c.distance=h;break;case"spot":c=new Ty(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class OE{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return zs}extendParams(e,t,n){const i=[];e.color=new Qe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],jn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,bn))}return Promise.all(i)}}class BE{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Jt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class kE{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new vt(s,s)}return Promise.all(i)}}class zE{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Jt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class VE{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class HE{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],jn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,bn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class GE{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class WE{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Qe().setRGB(s[0],s[1],s[2],jn),Promise.all(i)}}class XE{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Jt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class qE{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Qe().setRGB(s[0],s[1],s[2],jn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,bn)),Promise.all(i)}}class YE{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class $E{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class KE{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class jE{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class ZE{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Rm{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class JE{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ei.TRIANGLES&&c.mode!==Ei.TRIANGLE_STRIP&&c.mode!==Ei.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const m of h){const _=new ot,p=new W,g=new zr,x=new W(1,1,1),T=new $x(m.geometry,m.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),T.setMatrixAt(y,_.compose(p,g,x));for(const y in l)if(y==="_COLOR_0"){const b=l[y];T.instanceColor=new bf(b.array,b.itemSize,b.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,l[y]);Wt.prototype.copy.call(T,m),this.parser.assignFinalMaterial(T),d.push(T)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const T_="glTF",Lo=12,Cm={JSON:1313821514,BIN:5130562};class QE{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Lo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==T_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Lo,s=new DataView(e,Lo);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Cm.JSON){const c=new Uint8Array(e,Lo+a,o);this.content=n.decode(c)}else if(l===Cm.BIN){const c=Lo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class eA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Cf[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Cf[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Va[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const m in d.attributes){const _=d.attributes[m],p=l[m];p!==void 0&&(_.normalized=p)}h(d)},o,c,jn,f)})})}}class tA{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class nA{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}}class b_ extends vo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,m=e*c,_=m-c,p=-2*d+3*f,g=d-f,x=1-p,T=g-f+h;for(let y=0;y!==o;y++){const b=a[_+y+o],w=a[_+y+l]*u,A=a[m+y+o],v=a[m+y]*u;s[y]=x*b+T*w+p*A+g*v}return s}}const iA=new zr;class rA extends b_{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return iA.fromArray(s).normalize().toArray(s),s}}const Ei={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Va={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pm={9728:ln,9729:cn,9984:Wg,9985:Tc,9986:Bo,9987:wr},Dm={33071:nr,33648:Gc,10497:eo},lh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sA={CUBICSPLINE:void 0,LINEAR:pl,STEP:dl},ch={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aA(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Td({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nr})),r.DefaultMaterial}function As(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ji(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function oA(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function lA(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cA(r){let e;const t=r.extensions&&r.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+uh(t.attributes):e=r.indices+":"+uh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+uh(r.targets[n]);return e}function uh(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Pf(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uA(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const hA=new ot;class fA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new UE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Sy(this.options.manager):this.textureLoader=new Ry(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new p_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return As(s,o,i),ji(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(jo.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=lh[i.type],o=Va[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new yn(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=lh[i.type],c=Va[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,p;if(d&&d!==h){const g=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let T=t.cache.get(x);T||(_=new c(o,g*d,i.count*d/u),T=new Vx(_,d/u),t.cache.add(x,T)),p=new vd(T,l,f%d/u,m)}else o===null?_=new c(i.count*l):_=new c(o,f,i.count*l),p=new yn(_,l,m);if(i.sparse!==void 0){const g=lh.SCALAR,x=Va[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new x(a[1],T,i.sparse.count*g),w=new c(a[2],y,i.sparse.count*l);o!==null&&(p=new yn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,v=b.length;A<v;A++){const M=b[A];if(p.setX(M,w[A*l]),l>=2&&p.setY(M,w[A*l+1]),l>=3&&p.setZ(M,w[A*l+2]),l>=4&&p.setW(M,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return u.magFilter=Pm[f.magFilter]||cn,u.minFilter=Pm[f.minFilter]||wr,u.wrapS=Dm[f.wrapS]||eo,u.wrapT=Dm[f.wrapT]||eo,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==ln&&u.minFilter!==cn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(_){const p=new xn(_);p.needsUpdate=!0,f(p)}),t.load(jo.resolveURL(h,s.path),m,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),ji(h,a),h.userData.mimeType=a.mimeType||uA(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ft.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new o_,lr.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new a_,lr.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Td}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[ft.KHR_MATERIALS_UNLIT]){const h=i[ft.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Qe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],jn),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,bn)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=er);const u=s.alphaMode||ch.OPAQUE;if(u===ch.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ch.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==zs&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new vt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==zs&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==zs){const h=s.emissiveFactor;o.emissive=new Qe().setRGB(h[0],h[1],h[2],jn)}return s.emissiveTexture!==void 0&&a!==zs&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,bn)),Promise.all(c).then(function(){const h=new a(o);return s.name&&(h.name=s.name),ji(h,s),t.associations.set(h,{materials:e}),s.extensions&&As(i,h,s),h})}createUniqueName(e){const t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Lm(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=cA(c),h=i[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Lm(new Si,c,t),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?aA(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){const _=u[d],p=a[d];let g;const x=c[d];if(p.mode===Ei.TRIANGLES||p.mode===Ei.TRIANGLE_STRIP||p.mode===Ei.TRIANGLE_FAN||p.mode===void 0)g=s.isSkinnedMesh===!0?new Xx(_,x):new vi(_,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===Ei.TRIANGLE_STRIP?g.geometry=wm(g.geometry,Zg):p.mode===Ei.TRIANGLE_FAN&&(g.geometry=wm(g.geometry,Mf));else if(p.mode===Ei.LINES)g=new Jx(_,x);else if(p.mode===Ei.LINE_STRIP)g=new Md(_,x);else if(p.mode===Ei.LINE_LOOP)g=new Qx(_,x);else if(p.mode===Ei.POINTS)g=new l_(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&lA(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),ji(g,s),p.extensions&&As(i,g,p),t.assignFinalMaterial(g),h.push(g)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&As(i,h[0],s),h[0];const f=new ks;s.extensions&&As(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Un(bx.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new mu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ji(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new ot;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new yd(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],m=i.samplers[d.sampler],_=d.target,p=_.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",x)),c.push(m),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],m=h[2],_=h[3],p=h[4],g=[];for(let T=0,y=f.length;T<y;T++){const b=f[T],w=d[T],A=m[T],v=_[T],M=p[T];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const N=n._createAnimationTracks(b,w,A,v,M);if(N)for(let C=0;C<N.length;C++)g.push(N[C])}const x=new py(s,void 0,g);return ji(x,i),x})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,hA)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){const d=u.userData.pivot,m=h[0];u.pivot=new W().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new s_:c.length>1?u=new ks:c.length===1?u=c[0]:u=new Wt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),ji(u,s),s.extensions&&As(n,u,s),s.matrix!==void 0){const h=new ot;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ks;n.name&&(s.name=i.createUniqueName(n.name)),ji(s,n),n.extensions&&As(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){const f=l[u];f.parent!==null?s.add(IE(f)):s.add(f)}const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof lr||f instanceof xn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];jr[s.path]===jr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(jr[s.path]){case jr.weights:c=ro;break;case jr.rotation:c=so;break;case jr.translation:case jr.scale:c=ao;break;default:n.itemSize===1?c=ro:c=ao;break}const u=i.interpolation!==void 0?sA[i.interpolation]:pl,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const m=new c(l[f]+"."+jr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Pf(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof so?rA:b_;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function dA(r,e,t){const n=e.attributes,i=new dr;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new W(l[0],l[1],l[2]),new W(c[0],c[1],c[2])),o.normalized){const u=Pf(Va[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new W,l=new W;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const _=Pf(Va[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new pr;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Lm(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Cf[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return mt.workingColorSpace!==jn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),ji(r,e),dA(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?oA(r,e.targets,t):r})}function br(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function E_(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var _i={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},oo={duration:.5,overwrite:!1,delay:0},wd,An,kt,Di=1e8,Lt=1/Di,Df=Math.PI*2,pA=Df/4,mA=0,A_=Math.sqrt,gA=Math.cos,_A=Math.sin,Sn=function(e){return typeof e=="string"},qt=function(e){return typeof e=="function"},Or=function(e){return typeof e=="number"},Rd=function(e){return typeof e>"u"},fr=function(e){return typeof e=="object"},Qn=function(e){return e!==!1},Cd=function(){return typeof window<"u"},rc=function(e){return qt(e)||Sn(e)},w_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bn=Array.isArray,vA=/random\([^)]+\)/g,xA=/,\s*/g,Im=/(?:-?\.?\d|\.)+/gi,R_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,hh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,C_=/[+-]=-?[.\d]+/,yA=/[^,'"\[\]\s]+/gi,SA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,Zi,Lf,Pd,xi={},Kc={},P_,D_=function(e){return(Kc=lo(e,xi))&&ii},Dd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},vl=function(e,t){return!t&&console.warn(e)},L_=function(e,t){return e&&(xi[e]=t)&&Kc&&(Kc[e]=t)||xi},xl=function(){return 0},MA={suppressEvents:!0,isStart:!0,kill:!1},Cc={suppressEvents:!0,kill:!1},TA={suppressEvents:!0},Ld={},as=[],If={},I_,ci={},fh={},Nm=30,Pc=[],Id="",Nd=function(e){var t=e[0],n,i;if(fr(t)||qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Pc.length;i--&&!Pc[i].targetTest(t););n=Pc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new i0(e[i],n)))||e.splice(i,1);return e},Xs=function(e){return e._gsap||Nd(Li(e))[0]._gsap},N_=function(e,t,n){return(n=e[t])&&qt(n)?e[t]():Rd(n)&&e.getAttribute&&e.getAttribute(t)||n},ei=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},Ha=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},bA=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},jc=function(){var e=as.length,t=as.slice(0),n,i;for(If={},as.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ud=function(e){return!!(e._initted||e._startAt||e.add)},U_=function(e,t,n,i){as.length&&!An&&jc(),e.render(t,n,!!(An&&t<0&&Ud(e))),as.length&&!An&&jc()},F_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(yA).length<2?t:Sn(e)?e.trim():e},O_=function(e){return e},yi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},EA=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},lo=function(e,t){for(var n in t)e[n]=t[n];return e},Um=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=fr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Zc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Zo=function(e){var t=e.parent||Vt,n=e.keyframes?EA(Bn(e.keyframes)):yi;if(Qn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},AA=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},B_=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},vu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},us=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},wA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nf=function(e,t,n,i){return e._startAt&&(An?e._startAt.revert(Cc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},RA=function r(e){return!e||e._ts&&r(e.parent)},Fm=function(e){return e._repeat?co(e._tTime,e=e.duration()+e._rDelay)*e:0},co=function(e,t){var n=Math.floor(e=zt(e/t));return e&&n===e?n-1:n},Jc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},xu=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Lt)||0))},yu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),xu(e),n._dirty||qs(n,e)),e},k_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Jc(e.rawTime(),t),(!t._dur||Cl(0,t.totalDuration(),n)-t._tTime>Lt)&&t.render(n,!0)),qs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Lt}},tr=function(e,t,n,i){return t.parent&&us(t),t._start=zt((Or(n)?n:n||e!==Vt?bi(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),B_(e,t,"_first","_last",e._sort?"_start":0),Uf(t)||(e._recent=t),i||k_(e,t),e._ts<0&&yu(e,e._tTime),e},z_=function(e,t){return(xi.ScrollTrigger||Dd("scrollTrigger",t))&&xi.ScrollTrigger.create(t,e)},V_=function(e,t,n,i,s){if(Od(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!An&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&I_!==fi.frame)return as.push(e),e._lazy=[s,i],1},CA=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Uf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},PA=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&CA(e)&&!(!e._initted&&Uf(e))||(e._ts<0||e._dp._ts<0)&&!Uf(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Cl(0,e._tDur,t),u=co(l,o),e._yoyo&&u&1&&(a=1-a),u!==co(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||An||i||e._zTime===Lt||!t&&e._zTime){if(!e._initted&&V_(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Lt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Nf(e,t,n,!0),e._onUpdate&&!n&&mi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&us(e,1),!n&&!An&&(mi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},DA=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},uo=function(e,t,n,i){var s=e._repeat,a=zt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:zt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&yu(e,e._tTime=e._tDur*o),e.parent&&xu(e),n||qs(e.parent,e),e},Om=function(e){return e instanceof Yn?qs(e):uo(e,e._dur)},LA={_start:0,endTime:xl,totalDuration:xl},bi=function r(e,t,n){var i=e.labels,s=e._recent||LA,a=e.duration()>=Di?s.endTime(!1):e._dur,o,l,c;return Sn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Bn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Jo=function(e,t,n){var i=Or(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Qn(l.vars.inherit)&&l.parent;a.immediateRender=Qn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new tn(t[0],a,t[s+1])},_s=function(e,t){return e||e===0?t(e):t},Cl=function(e,t,n){return n<e?e:n>t?t:n},Fn=function(e,t){return!Sn(e)||!(t=SA.exec(e))?"":t[1]},IA=function(e,t,n){return _s(n,function(i){return Cl(e,t,i)})},Ff=[].slice,H_=function(e,t){return e&&fr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&fr(e[0]))&&!e.nodeType&&e!==Zi},NA=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Sn(i)&&!t||H_(i,1)?(s=n).push.apply(s,Li(i)):n.push(i)})||n},Li=function(e,t,n){return kt&&!t&&kt.selector?kt.selector(e):Sn(e)&&!n&&(Lf||!ho())?Ff.call((t||Pd).querySelectorAll(e),0):Bn(e)?NA(e,n):H_(e)?Ff.call(e,0):e?[e]:[]},Of=function(e){return e=Li(e)[0]||vl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Li(t,n.querySelectorAll?n:n===e?vl("Invalid scope")||Pd.createElement("div"):e)}},G_=function(e){return e.sort(function(){return .5-Math.random()})},W_=function(e){if(qt(e))return e;var t=fr(e)?e:{each:e},n=Ys(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Sn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,m){var _=(m||t).length,p=a[_],g,x,T,y,b,w,A,v,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,Di])[1],!M){for(A=-Di;A<(A=m[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(p=a[_]=[],g=l?Math.min(M,_)*u-.5:i%M,x=M===Di?0:l?_*h/M-.5:i/M|0,A=0,v=Di,w=0;w<_;w++)T=w%M-g,y=x-(w/M|0),p[w]=b=c?Math.abs(c==="y"?y:T):A_(T*T+y*y),b>A&&(A=b),b<v&&(v=b);i==="random"&&G_(p),p.max=A-v,p.min=v,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Fn(t.amount||t.each)||0,n=n&&_<0?e0(n):n}return _=(p[f]-p.min)/p.max||0,zt(p.b+(n?n(_):_)*p.v)+p.u}},Bf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Or(n)?0:Fn(n))}},X_=function(e,t){var n=Bn(e),i,s;return!n&&fr(e)&&(i=n=e.radius||Di,e.values?(e=Li(e.values),(s=!Or(e[0]))&&(i*=i)):e=Bf(e.increment)),_s(t,n?qt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Di,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,s||u===a||Or(a)?u:u+Fn(a)}:Bf(e))},q_=function(e,t,n,i){return _s(Bn(e)?!t:n===!0?!!(n=0):!i,function(){return Bn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},UA=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},FA=function(e,t){return function(n){return e(parseFloat(n))+(t||Fn(n))}},OA=function(e,t,n){return $_(e,t,0,1,n)},Y_=function(e,t,n){return _s(n,function(i){return e[~~t(i)]})},BA=function r(e,t,n){var i=t-e;return Bn(e)?Y_(e,r(0,e.length),t):_s(n,function(s){return(i+(s-e)%i)%i+e})},kA=function r(e,t,n){var i=t-e,s=i*2;return Bn(e)?Y_(e,r(0,e.length-1),t):_s(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},yl=function(e){return e.replace(vA,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(xA);return q_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},$_=function(e,t,n,i,s){var a=t-e,o=i-n;return _s(s,function(l){return n+((l-e)/a*o||0)})},zA=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=Sn(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Bn(e)&&!Bn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(m){m*=h;var _=Math.min(f,~~m);return u[_](m-_)},n=t}else i||(e=lo(Bn(e)?[]:{},e));if(!u){for(l in t)Fd.call(o,e,l,"get",t[l]);s=function(m){return zd(m,o)||(a?e.p:e)}}}return _s(n,s)},Bm=function(e,t,n){var i=e.labels,s=Di,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},mi=function(e,t,n){var i=e.vars,s=i[t],a=kt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&as.length&&jc(),o&&(kt=o),u=l?s.apply(c,l):s.call(c),kt=a,u},zo=function(e){return us(e),e.scrollTrigger&&e.scrollTrigger.kill(!!An),e.progress()<1&&mi(e,"onInterrupt"),e},Oa,K_=[],j_=function(e){if(e)if(e=!e.name&&e.default||e,Cd()||e.headless){var t=e.name,n=qt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:xl,render:zd,add:Fd,kill:n1,modifier:t1,rawVars:0},a={targetTest:0,get:0,getSetter:kd,aliases:{},register:0};if(ho(),e!==i){if(ci[t])return;yi(i,yi(Zc(e,s),a)),lo(i.prototype,lo(s,Zc(e,a))),ci[i.prop=t]=i,e.targetTest&&(Pc.push(i),Ld[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}L_(t,i),e.register&&e.register(ii,i,ti)}else K_.push(e)},Dt=255,Vo={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},dh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Dt+.5|0},Z_=function(e,t,n){var i=e?Or(e)?[e>>16,e>>8&Dt,e&Dt]:0:Vo.black,s,a,o,l,c,u,h,f,d,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Vo[e])i=Vo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Dt,i&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Im),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=dh(l+1/3,s,a),i[1]=dh(l,s,a),i[2]=dh(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(R_),n&&i.length<4&&(i[3]=1),i}else i=e.match(Im)||Vo.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/Dt,a=i[1]/Dt,o=i[2]/Dt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},J_=function(e){var t=[],n=[],i=-1;return e.split(os).forEach(function(s){var a=s.match(Fa)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},km=function(e,t,n){var i="",s=(e+i).match(os),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Z_(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=J_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(os,"1").split(Fa),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(os),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},os=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Vo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),VA=/hsl[a]?\(/,Q_=function(e){var t=e.join(" "),n;if(os.lastIndex=0,os.test(t))return n=VA.test(t),e[1]=km(e[1],n),e[0]=km(e[0],n,J_(e[1])),!0},Sl,fi=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,m=function _(p){var g=r()-i,x=p===!0,T,y,b,w;if((g>e||g<0)&&(n+=g-t),i+=g,b=i-n,T=b-a,(T>0||x)&&(w=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,a+=T+(T>=s?4:s-T),y=1),x||(l=c(_)),y)for(d=0;d<o.length;d++)o[d](b,f,w,p)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){P_&&(!Lf&&Cd()&&(Zi=Lf=window,Pd=Zi.document||{},xi.gsap=ii,(Zi.gsapVersions||(Zi.gsapVersions=[])).push(ii.version),D_(Kc||Zi.GreenSockGlobals||!Zi.gsap&&Zi||{}),K_.forEach(j_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Sl=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Sl=0,c=xl},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,g,x){var T=g?function(y,b,w,A){p(y,b,w,A),h.remove(T)}:p;return h.remove(p),o[x?"unshift":"push"](T),ho(),T},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&d>=g&&d--},_listeners:o},h})(),ho=function(){return!Sl&&fi.wake()},gt={},HA=/^[\d.\-M][\d.\-,\s]/,GA=/["']/g,WA=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(GA,"").trim():+c,i=l.substr(o+1).trim();return t},XA=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},qA=function(e){var t=(e+"").split("("),n=gt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[WA(t[1])]:XA(e).split(",").map(F_)):gt._CE&&HA.test(e)?gt._CE("",e):n},e0=function(e){return function(t){return 1-e(1-t)}},t0=function r(e,t){for(var n=e._first,i;n;)n instanceof Yn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ys=function(e,t){return e&&(qt(e)?e:gt[e]||qA(e))||t},aa=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return ei(e,function(o){gt[o]=xi[o]=s,gt[a=o.toLowerCase()]=n;for(var l in s)gt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=gt[o+"."+l]=s[l]}),s},n0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ph=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Df*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*_A((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:n0(o);return s=Df/s,l.config=function(c,u){return r(e,c,u)},l},mh=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:n0(n);return i.config=function(s){return r(e,s)},i};ei("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;aa(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});gt.Linear.easeNone=gt.none=gt.Linear.easeIn;aa("Elastic",ph("in"),ph("out"),ph());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};aa("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);aa("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});aa("Circ",function(r){return-(A_(1-r*r)-1)});aa("Sine",function(r){return r===1?1:-gA(r*pA)+1});aa("Back",mh("in"),mh("out"),mh());gt.SteppedEase=gt.steps=xi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Lt;return function(o){return((i*Cl(0,a,o)|0)+s)*n}}};oo.ease=gt["quad.out"];ei("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Id+=r+","+r+"Params,"});var i0=function(e,t){this.id=mA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:N_,this.set=t?t.getSetter:kd},Ml=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,uo(this,+t.duration,1,1),this.data=t.data,kt&&(this._ctx=kt,kt.data.push(this)),Sl||fi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,uo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ho(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(yu(this,n),!s._dp||s.parent||k_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&tr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Lt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),U_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?co(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Lt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Jc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Lt?0:this._rts,this.totalTime(Cl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),xu(this),wA(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ho(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Lt&&(this._tTime-=Lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=zt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&tr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Qn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Jc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=TA);var i=An;return An=n,Ud(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),An=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Om(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Om(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(bi(this,n),Qn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Qn(i)),this._dur||(this._zTime=-Lt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Lt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Lt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=qt(n)?n:O_,l=function(){var u=i.then;i.then=null,s&&s(),qt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){zo(this)},r})();yi(Ml.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Lt,_prom:0,_ps:!1,_rts:1});var Yn=(function(r){E_(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Qn(n.sortChildren),Vt&&tr(n.parent||Vt,br(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&z_(br(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Jo(0,arguments,this),this},t.from=function(i,s,a){return Jo(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Jo(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Zo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new tn(i,s,bi(this,a),1),this},t.call=function(i,s,a){return tr(this,tn.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new tn(i,a,bi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Zo(a).immediateRender=Qn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Zo(o).immediateRender=Qn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:zt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,m,_,p,g,x,T,y,b,w,A;if(this!==Vt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,y=this._start,T=this._ts,g=!T,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=zt(u%p),u===l?(_=this._repeat,f=c):(b=zt(u/p),_=~~b,_&&_===b&&(f=c,_--),f>c&&(f=c)),b=co(this._tTime,p),!o&&this._tTime&&b!==_&&this._tTime-b*p-this._dur<=0&&(b=_),w&&_&1&&(f=c-f,A=1),_!==b&&!this._lock){var v=w&&b&1,M=v===(w&&_&1);if(_<b&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(A?0:zt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&mi(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;t0(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=DA(this,zt(o),zt(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!b&&(mi(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!g){x=0,m&&(u+=this._zTime=-Lt);break}}d=m}else{d=this._last;for(var N=i<0?i:f;d;){if(m=d._prev,(d._act||N<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(N-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(N-d._start)*d._ts,s,a||An&&Ud(d)),f!==this._time||!this._ts&&!g){x=0,m&&(u+=this._zTime=N?-Lt:Lt);break}}d=m}}if(x&&!s&&(this.pause(),x.render(f>=o?0:-Lt)._zTime=f>=o?1:-1,this._ts))return this._start=y,xu(this),this.render(i,s,a);this._onUpdate&&!s&&mi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&us(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(mi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Or(s)||(s=bi(this,s,i)),!(i instanceof Ml)){if(Bn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Sn(i))return this.addLabel(i,s);if(qt(i))i=tn.delayedCall(0,i);else return this}return this!==i?tr(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Di);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof tn?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Sn(i)?this.removeLabel(i):qt(i)?this.killTweensOf(i):(i.parent===this&&vu(this,i),i===this._recent&&(this._recent=this._last),qs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(fi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=bi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=tn.delayedCall(0,s||xl,a);return o.data="isPause",this._hasPause=1,tr(this,o,bi(this,i))},t.removePause=function(i){var s=this._first;for(i=bi(this,i);s;)s._start===i&&s.data==="isPause"&&us(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ts!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Li(i),l=this._first,c=Or(s),u;l;)l instanceof tn?bA(l._targets,o)&&(c?(!ts||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=bi(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,m=tn.to(a,yi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Lt,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==p&&uo(m,p,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,h||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,yi({startAt:{time:bi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Bm(this,bi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Bm(this,bi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Lt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=zt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return qs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),qs(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Di,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,tr(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=zt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;uo(a,a===Vt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Vt._ts&&(U_(Vt,Jc(i,Vt)),I_=fi.frame),fi.frame>=Nm){Nm+=_i.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&_i.autoSleep&&fi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||fi.sleep()}}},e})(Ml);yi(Yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var YA=function(e,t,n,i,s,a,o){var l=new ti(this._pt,e,t,0,1,c0,null,s),c=0,u=0,h,f,d,m,_,p,g,x;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=yl(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),f=n.match(hh)||[];h=hh.exec(i);)m=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),m!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:m.charAt(1)==="="?Ha(p,m)-p:parseFloat(m)-p,m:d&&d<4?Math.round:0},c=hh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(C_.test(i)||g)&&(l.e=0),this._pt=l,l},Fd=function(e,t,n,i,s,a,o,l,c,u){qt(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:qt(h)?c?e[t.indexOf("set")||!qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=qt(h)?c?JA:o0:Bd,m;if(Sn(i)&&(~i.indexOf("random(")&&(i=yl(i)),i.charAt(1)==="="&&(m=Ha(f,i)+(Fn(f)||0),(m||m===0)&&(i=m))),!u||f!==i||kf)return!isNaN(f*i)&&i!==""?(m=new ti(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?e1:l0,0,d),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!h&&!(t in e)&&Dd(t,i),YA.call(this,e,t,f,i,d,l||_i.stringFilter,c))},$A=function(e,t,n,i,s){if(qt(e)&&(e=Qo(e,s,t,n,i)),!fr(e)||e.style&&e.nodeType||Bn(e)||w_(e))return Sn(e)?Qo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Qo(e[o],s,t,n,i);return a},r0=function(e,t,n,i,s,a){var o,l,c,u;if(ci[e]&&(o=new ci[e]).init(s,o.rawVars?t[e]:$A(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new ti(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Oa))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ts,kf,Od=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,x=g&&g.data==="nested"?g.vars.targets:p,T=e._overwrite==="auto"&&!wd,y=e.timeline,b,w,A,v,M,N,C,L,k,H,O,B,U;if(y&&(!f||!s)&&(s="none"),e._ease=Ys(s,oo.ease),e._yEase=h?e0(Ys(h===!0?s:h,oo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(L=p[0]?Xs(p[0]).harness:0,B=L&&i[L.prop],b=Zc(i,Ld),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&m?Cc:MA),_._lazy=0),a){if(us(e._startAt=tn.set(p,yi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Qn(l),startAt:null,delay:0,onUpdate:c&&function(){return mi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An||!o&&!d)&&e._startAt.revert(Cc),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(o=!1),A=yi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Qn(l),immediateRender:o,stagger:0,parent:g},b),B&&(A[L.prop]=B),us(e._startAt=tn.set(p,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An?e._startAt.revert(Cc):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Lt,Lt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Qn(l)||l&&!m,w=0;w<p.length;w++){if(M=p[w],C=M._gsap||Nd(p)[w]._gsap,e._ptLookup[w]=H={},If[C.id]&&as.length&&jc(),O=x===p?w:x.indexOf(M),L&&(k=new L).init(M,B||b,e,O,x)!==!1&&(e._pt=v=new ti(e._pt,M,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(j){H[j]=v}),k.priority&&(N=1)),!L||B)for(A in b)ci[A]&&(k=r0(A,b,e,O,M,x))?k.priority&&(N=1):H[A]=v=Fd.call(e,M,A,"get",b[A],O,x,0,i.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),T&&e._pt&&(ts=e,Vt.killTweensOf(M,H,e.globalTime(t)),U=!e.parent,ts=0),e._pt&&l&&(If[C.id]=1)}N&&u0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!U,f&&t<=0&&y.render(Di,!0,!0)},KA=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return kf=1,e.vars[t]="+=0",Od(e,o),kf=0,l?vl(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Kt(n)+Fn(h.e)),h.b&&(h.b=u.s+Fn(h.b))},jA=function(e,t){var n=e[0]?Xs(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=lo({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},ZA=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Bn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Qo=function(e,t,n,i,s){return qt(e)?e.call(t,n,i,s):Sn(e)&&~e.indexOf("random(")?yl(e):e},s0=Id+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",a0={};ei(s0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return a0[r]=1});var tn=(function(r){E_(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Zo(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,x=i.parent||Vt,T=(Bn(n)||w_(n)?Or(n[0]):"length"in i)?[n]:Li(n),y,b,w,A,v,M,N,C;if(o._targets=T.length?Nd(T):vl("GSAP target "+n+" not found. https://gsap.com",!_i.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,m||f||rc(c)||rc(u)){if(i=o.vars,y=o.timeline=new Yn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:T}),y.kill(),y.parent=y._dp=br(o),y._start=0,f||rc(c)||rc(u)){if(A=T.length,N=f&&W_(f),fr(f))for(v in f)~s0.indexOf(v)&&(C||(C={}),C[v]=f[v]);for(b=0;b<A;b++)w=Zc(i,a0),w.stagger=0,g&&(w.yoyoEase=g),C&&lo(w,C),M=T[b],w.duration=+Qo(c,br(o),b,M,T),w.delay=(+Qo(u,br(o),b,M,T)||0)-o._delay,!f&&A===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),y.to(M,w,N?N(b,M,T):0),y._ease=gt.none;y.duration()?c=u=0:o.timeline=0}else if(m){Zo(yi(y.vars.defaults,{ease:"none"})),y._ease=Ys(m.ease||i.ease||"none");var L=0,k,H,O;if(Bn(m))m.forEach(function(B){return y.to(T,B,">")}),y.duration();else{w={};for(v in m)v==="ease"||v==="easeEach"||ZA(v,m[v],w,m.easeEach);for(v in w)for(k=w[v].sort(function(B,U){return B.t-U.t}),L=0,b=0;b<k.length;b++)H=k[b],O={ease:H.e,duration:(H.t-(b?k[b-1].t:0))/100*c},O[v]=H.v,y.to(T,O,L),L+=O.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!wd&&(ts=br(o),Vt.killTweensOf(T),ts=0),tr(x,br(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!m&&o._start===zt(x._time)&&Qn(h)&&RA(br(o))&&x.data!=="nested")&&(o._tTime=-Lt,o.render(Math.max(0,-u)||0)),p&&z_(br(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Lt&&!u?l:i<Lt?0:i,f,d,m,_,p,g,x,T,y;if(!c)PA(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=zt(h%_),h===l?(m=this._repeat,f=c):(p=zt(h/_),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(y=this._yEase,f=c-f),p=co(this._tTime,_),f===o&&!a&&this._initted&&m===p)return this._tTime=h,this;m!==p&&(T&&this._yEase&&t0(T,g),this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(zt(_*m),!0).invalidate()._lock=0))}if(!this._initted){if(V_(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(f/c),this._from&&(this.ratio=x=1-x),!o&&h&&!s&&!p&&(mi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;T&&T.render(i<0?i:T._dur*T._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Nf(this,i,s,a),mi(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&mi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Nf(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&us(this,1),!s&&!(u&&!o)&&(h||o||g)&&(mi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Sl||fi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Od(this,c),u=this._ease(c/this._dur),KA(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(yu(this,0),this.parent||B_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?zo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!An),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ts&&ts.vars.overwrite!==!0)._first||zo(this),this.parent&&a!==this.timeline.totalDuration()&&uo(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Li(i):o,c=this._ptLookup,u=this._pt,h,f,d,m,_,p,g;if((!s||s==="all")&&AA(o,l))return s==="all"&&(this._pt=0),zo(this);for(h=this._op=this._op||[],s!=="all"&&(Sn(s)&&(_={},ei(s,function(x){return _[x]=1}),s=_),s=jA(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){f=c[g],s==="all"?(h[g]=s,m=f,d={}):(d=h[g]=h[g]||{},m=s);for(_ in m)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&vu(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&zo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Jo(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Jo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Vt.killTweensOf(i,s,a)},e})(Ml);yi(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ei("staggerTo,staggerFrom,staggerFromTo",function(r){tn[r]=function(){var e=new Yn,t=Ff.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Bd=function(e,t,n){return e[t]=n},o0=function(e,t,n){return e[t](n)},JA=function(e,t,n,i){return e[t](i.fp,n)},QA=function(e,t,n){return e.setAttribute(t,n)},kd=function(e,t){return qt(e[t])?o0:Rd(e[t])&&e.setAttribute?QA:Bd},l0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},e1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},c0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},zd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},t1=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},n1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?vu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},i1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},u0=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},ti=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||l0,this.d=l||this,this.set=c||Bd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=i1,this.m=n,this.mt=s,this.tween=i},r})();ei(Id+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Ld[r]=1});xi.TweenMax=xi.TweenLite=tn;xi.TimelineLite=xi.TimelineMax=Yn;Vt=new Yn({sortChildren:!1,defaults:oo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_i.stringFilter=Q_;var $s=[],Dc={},r1=[],zm=0,s1=0,gh=function(e){return(Dc[e]||r1).map(function(t){return t()})},zf=function(){var e=Date.now(),t=[];e-zm>2&&(gh("matchMediaInit"),$s.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Zi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),gh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zm=e,gh("matchMedia"))},h0=(function(){function r(t,n){this.selector=n&&Of(n),this.data=[],this._r=[],this.isReverted=!1,this.id=s1++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){qt(n)&&(s=i,i=n,n=qt);var a=this,o=function(){var c=kt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Of(s)),kt=a,h=i.apply(a,arguments),qt(h)&&a._r.push(h),kt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===qt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=kt;kt=null,n(this),kt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof tn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof tn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=$s.length;a--;)$s[a].id===this.id&&$s.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),a1=(function(){function r(t){this.contexts=[],this.scope=t,kt&&kt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){fr(n)||(n={matches:n});var a=new h0(0,s||this.scope),o=a.conditions={},l,c,u;kt&&!a.selector&&(a.selector=kt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Zi.matchMedia(n[c]),l&&($s.indexOf(a)<0&&$s.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(zf):l.addEventListener("change",zf)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Qc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return j_(i)})},timeline:function(e){return new Yn(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Sn(e)&&(e=Li(e)[0]);var s=Xs(e||{}).get,a=n?O_:F_;return n==="native"&&(n=""),e&&(t?a((ci[t]&&ci[t].get||s)(e,t,n,i)):function(o,l,c){return a((ci[o]&&ci[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Li(e),e.length>1){var i=e.map(function(u){return ii.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=ci[t],o=Xs(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Oa._pt=0,h.init(e,n?u+n:u,Oa,0,[e]),h.render(1,h),Oa._pt&&zd(1,Oa)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=ii.to(e,yi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ys(e.ease,oo.ease)),Um(oo,e||{})},config:function(e){return Um(_i,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ci[o]&&!xi[o]&&vl(t+" effect requires "+o+" plugin.")}),fh[t]=function(o,l,c){return n(Li(o),yi(l||{},s),c)},a&&(Yn.prototype[t]=function(o,l,c){return this.add(fh[t](o,fr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){gt[e]=Ys(t)},parseEase:function(e,t){return arguments.length?Ys(e,t):gt},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Yn(e),i,s;for(n.smoothChildTiming=Qn(e.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,i=Vt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof tn&&i.vars.onComplete===i._targets[0]))&&tr(n,i,i._start-i._delay),i=s;return tr(Vt,n,0),n},context:function(e,t){return e?new h0(e,t):kt},matchMedia:function(e){return new a1(e)},matchMediaRefresh:function(){return $s.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||zf()},addEventListener:function(e,t){var n=Dc[e]||(Dc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Dc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:BA,wrapYoyo:kA,distribute:W_,random:q_,snap:X_,normalize:OA,getUnit:Fn,clamp:IA,splitColor:Z_,toArray:Li,selector:Of,mapRange:$_,pipe:UA,unitize:FA,interpolate:zA,shuffle:G_},install:D_,effects:fh,ticker:fi,updateRoot:Yn.updateRoot,plugins:ci,globalTimeline:Vt,core:{PropTween:ti,globals:L_,Tween:tn,Timeline:Yn,Animation:Ml,getCache:Xs,_removeLinkedListItem:vu,reverting:function(){return An},context:function(e){return e&&kt&&(kt.data.push(e),e._ctx=kt),kt},suppressOverwrites:function(e){return wd=e}}};ei("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Qc[r]=tn[r]});fi.add(Yn.updateRoot);Oa=Qc.to({},{duration:0});var o1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},l1=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=o1(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},_h=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Sn(s)&&(l={},ei(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}l1(o,s)}}}},ii=Qc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)An?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},_h("roundProps",Bf),_h("modifiers"),_h("snap",X_))||Qc;tn.version=Yn.version=ii.version="3.14.2";P_=1;Cd()&&ho();gt.Power0;gt.Power1;gt.Power2;gt.Power3;gt.Power4;gt.Linear;gt.Quad;gt.Cubic;gt.Quart;gt.Quint;gt.Strong;gt.Elastic;gt.Back;gt.SteppedEase;gt.Bounce;gt.Sine;gt.Expo;gt.Circ;var Vm,ns,Ga,Vd,Vs,Hm,Hd,c1=function(){return typeof window<"u"},Br={},Ls=180/Math.PI,Wa=Math.PI/180,Aa=Math.atan2,Gm=1e8,Gd=/([A-Z])/g,u1=/(left|right|width|margin|padding|x)/i,h1=/[\s,\(]\S/,rr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},f1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},d1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},p1=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},m1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},f0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},d0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},g1=function(e,t,n){return e.style[t]=n},_1=function(e,t,n){return e.style.setProperty(t,n)},v1=function(e,t,n){return e._gsap[t]=n},x1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},y1=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},S1=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Gt="transform",ni=Gt+"Origin",M1=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Br&&s){if(this.tfm=this.tfm||{},e!=="transform")e=rr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Er(i,o)}):this.tfm[e]=a.x?a[e]:Er(i,e),e===ni&&(this.tfm.zOrigin=a.zOrigin);else return rr.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Gt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ni,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},p0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},T1=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Gd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Hd(),(!s||!s.isStart)&&!n[Gt]&&(p0(n),i.zOrigin&&n[ni]&&(n[ni]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},m0=function(e,t){var n={target:e,props:[],revert:T1,save:M1};return e._gsap||ii.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},g0,Hf=function(e,t){var n=ns.createElementNS?ns.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ns.createElement(e);return n&&n.style?n:ns.createElement(e)},gi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Gd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,fo(t)||t,1)||""},Wm="O,Moz,ms,Ms,Webkit".split(","),fo=function(e,t,n){var i=t||Vs,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Wm[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Wm[a]:"")+e},Gf=function(){c1()&&window.document&&(Vm=window,ns=Vm.document,Ga=ns.documentElement,Vs=Hf("div")||{style:{}},Hf("div"),Gt=fo(Gt),ni=Gt+"Origin",Vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",g0=!!fo("perspective"),Hd=ii.core.reverting,Vd=1)},Xm=function(e){var t=e.ownerSVGElement,n=Hf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ga.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ga.removeChild(n),s},qm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},_0=function(e){var t,n;try{t=e.getBBox()}catch{t=Xm(e),n=1}return t&&(t.width||t.height)||n||(t=Xm(e)),t&&!t.width&&!t.x&&!t.y?{x:+qm(e,["x","cx","x1"])||0,y:+qm(e,["y","cy","y1"])||0,width:0,height:0}:t},v0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&_0(e))},hs=function(e,t){if(t){var n=e.style,i;t in Br&&t!==ni&&(t=Gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Gd,"-$1").toLowerCase())):n.removeAttribute(t)}},is=function(e,t,n,i,s,a){var o=new ti(e._pt,t,n,0,1,a?d0:f0);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Ym={deg:1,rad:1,turn:1},b1={grid:1,flex:1},fs=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Vs.style,l=u1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",m,_,p,g;if(i===a||!s||Ym[i]||Ym[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),g=e.getCTM&&v0(e),(d||a==="%")&&(Br[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[u],Kt(d?s/m*h:s/100*m);if(o[l?"width":"height"]=h+(f?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ns||!_.appendChild)&&(_=ns.body),p=_._gsap,p&&d&&p.width&&l&&p.time===fi.time&&!p.uncache)return Kt(s/p.width*h);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,m=e[u],x?e.style[t]=x:hs(e,t)}else(d||a==="%")&&!b1[gi(_,"display")]&&(o.position=gi(e,"position")),_===e&&(o.position="static"),_.appendChild(Vs),m=Vs[u],_.removeChild(Vs),o.position="absolute";return l&&d&&(p=Xs(_),p.time=fi.time,p.width=_[u]),Kt(f?m*s/h:m&&s?h/m*s:0)},Er=function(e,t,n,i){var s;return Vd||Gf(),t in rr&&t!=="transform"&&(t=rr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Br[t]&&t!=="transform"?(s=bl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:tu(gi(e,ni))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=eu[t]&&eu[t](e,t,n)||gi(e,t)||N_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?fs(e,t,s,n)+n:s},E1=function(e,t,n,i){if(!n||n==="none"){var s=fo(t,e,1),a=s&&gi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=gi(e,"borderTopColor"))}var o=new ti(this._pt,e.style,t,0,1,c0),l=0,c=0,u,h,f,d,m,_,p,g,x,T,y,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=gi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=gi(e,t)||i,_?e.style[t]=_:hs(e,t)),u=[n,i],Q_(u),n=u[0],i=u[1],f=n.match(Fa)||[],b=i.match(Fa)||[],b.length){for(;h=Fa.exec(i);)p=h[0],x=i.substring(l,h.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),p.charAt(1)==="="&&(p=Ha(d,p)+y),g=parseFloat(p),T=p.substr((g+"").length),l=Fa.lastIndex-T.length,T||(T=T||_i.units[t]||y,l===i.length&&(i+=T,o.e+=T)),y!==T&&(d=fs(e,t,_,T)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:d,c:g-d,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?d0:f0;return C_.test(i)&&(o.e=0),this._pt=o,o},$m={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},A1=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=$m[n]||n,t[1]=$m[i]||i,t.join(" ")},w1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Br[o]&&(l=1,o=o==="transformOrigin"?ni:Gt),hs(n,o);l&&(hs(n,Gt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",bl(n,1),a.uncache=1,p0(i)))}},eu={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new ti(e._pt,t,n,0,0,w1);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Tl=[1,0,0,1,0,0],x0={},y0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Km=function(e){var t=gi(e,Gt);return y0(t)?Tl:t.substr(7).match(R_).map(Kt)},Wd=function(e,t){var n=e._gsap||Xs(e),i=e.style,s=Km(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Tl:s):(s===Tl&&!e.offsetParent&&e!==Ga&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ga.appendChild(e)),s=Km(e),l?i.display=l:hs(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ga.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Wf=function(e,t,n,i,s,a){var o=e._gsap,l=s||Wd(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],m=l[1],_=l[2],p=l[3],g=l[4],x=l[5],T=t.split(" "),y=parseFloat(T[0])||0,b=parseFloat(T[1])||0,w,A,v,M;n?l!==Tl&&(A=d*p-m*_)&&(v=y*(p/A)+b*(-_/A)+(_*x-p*g)/A,M=y*(-m/A)+b*(d/A)-(d*x-m*g)/A,y=v,b=M):(w=_0(e),y=w.x+(~T[0].indexOf("%")?y/100*w.width:y),b=w.y+(~(T[1]||T[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&o.smooth?(g=y-c,x=b-u,o.xOffset=h+(g*d+x*_)-g,o.yOffset=f+(g*m+x*p)-x):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ni]="0px 0px",a&&(is(a,o,"xOrigin",c,y),is(a,o,"yOrigin",u,b),is(a,o,"xOffset",h,o.xOffset),is(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},bl=function(e,t){var n=e._gsap||new i0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=gi(e,ni)||"0",u,h,f,d,m,_,p,g,x,T,y,b,w,A,v,M,N,C,L,k,H,O,B,U,j,V,P,ae,ne,ve,Pe,Ne;return u=h=f=_=p=g=x=T=y=0,d=m=1,n.svg=!!(e.getCTM&&v0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),i.scale=i.rotate=i.translate="none"),A=Wd(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),Wf(e,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,w=n.yOrigin||0,A!==Tl&&(C=A[0],L=A[1],k=A[2],H=A[3],u=O=A[4],h=B=A[5],A.length===6?(d=Math.sqrt(C*C+L*L),m=Math.sqrt(H*H+k*k),_=C||L?Aa(L,C)*Ls:0,x=k||H?Aa(k,H)*Ls+_:0,x&&(m*=Math.abs(Math.cos(x*Wa))),n.svg&&(u-=b-(b*C+w*k),h-=w-(b*L+w*H))):(Ne=A[6],ve=A[7],P=A[8],ae=A[9],ne=A[10],Pe=A[11],u=A[12],h=A[13],f=A[14],v=Aa(Ne,ne),p=v*Ls,v&&(M=Math.cos(-v),N=Math.sin(-v),U=O*M+P*N,j=B*M+ae*N,V=Ne*M+ne*N,P=O*-N+P*M,ae=B*-N+ae*M,ne=Ne*-N+ne*M,Pe=ve*-N+Pe*M,O=U,B=j,Ne=V),v=Aa(-k,ne),g=v*Ls,v&&(M=Math.cos(-v),N=Math.sin(-v),U=C*M-P*N,j=L*M-ae*N,V=k*M-ne*N,Pe=H*N+Pe*M,C=U,L=j,k=V),v=Aa(L,C),_=v*Ls,v&&(M=Math.cos(v),N=Math.sin(v),U=C*M+L*N,j=O*M+B*N,L=L*M-C*N,B=B*M-O*N,C=U,O=j),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),d=Kt(Math.sqrt(C*C+L*L+k*k)),m=Kt(Math.sqrt(B*B+Ne*Ne)),v=Aa(O,B),x=Math.abs(v)>2e-4?v*Ls:0,y=Pe?1/(Pe<0?-Pe:Pe):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!y0(gi(e,Gt)),U&&e.setAttribute("transform",U))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Kt(d),n.scaleY=Kt(m),n.rotation=Kt(_)+o,n.rotationX=Kt(p)+o,n.rotationY=Kt(g)+o,n.skewX=x+o,n.skewY=T+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ni]=tu(c)),n.xOffset=n.yOffset=0,n.force3D=_i.force3D,n.renderTransform=n.svg?C1:g0?S0:R1,n.uncache=0,n},tu=function(e){return(e=e.split(" "))[0]+" "+e[1]},vh=function(e,t,n){var i=Fn(t);return Kt(parseFloat(t)+parseFloat(fs(e,"x",n+"px",i)))+i},R1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,S0(e,t)},ws="0deg",Io="0px",Rs=") ",S0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,x=n.target,T=n.zOrigin,y="",b=g==="auto"&&e&&e!==1||g===!0;if(T&&(h!==ws||u!==ws)){var w=parseFloat(u)*Wa,A=Math.sin(w),v=Math.cos(w),M;w=parseFloat(h)*Wa,M=Math.cos(w),a=vh(x,a,A*M*-T),o=vh(x,o,-Math.sin(w)*-T),l=vh(x,l,v*M*-T+T)}p!==Io&&(y+="perspective("+p+Rs),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(b||a!==Io||o!==Io||l!==Io)&&(y+=l!==Io||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Rs),c!==ws&&(y+="rotate("+c+Rs),u!==ws&&(y+="rotateY("+u+Rs),h!==ws&&(y+="rotateX("+h+Rs),(f!==ws||d!==ws)&&(y+="skew("+f+", "+d+Rs),(m!==1||_!==1)&&(y+="scale("+m+", "+_+Rs),x.style[Gt]=y||"translate(0, 0)"},C1=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,x=n.forceCSS,T=parseFloat(a),y=parseFloat(o),b,w,A,v,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Wa,c*=Wa,b=Math.cos(l)*h,w=Math.sin(l)*h,A=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=Wa,M=Math.tan(c-u),M=Math.sqrt(1+M*M),A*=M,v*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),b*=M,w*=M)),b=Kt(b),w=Kt(w),A=Kt(A),v=Kt(v)):(b=h,v=f,w=A=0),(T&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(T=fs(d,"x",a,"px"),y=fs(d,"y",o,"px")),(m||_||p||g)&&(T=Kt(T+m-(m*b+_*A)+p),y=Kt(y+_-(m*w+_*v)+g)),(i||s)&&(M=d.getBBox(),T=Kt(T+i/100*M.width),y=Kt(y+s/100*M.height)),M="matrix("+b+","+w+","+A+","+v+","+T+","+y+")",d.setAttribute("transform",M),x&&(d.style[Gt]=M)},P1=function(e,t,n,i,s){var a=360,o=Sn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ls:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Gm)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Gm)%a-~~(c/a)*a)),e._pt=f=new ti(e._pt,t,n,i,c,f1),f.e=u,f.u="deg",e._props.push(n),f},jm=function(e,t){for(var n in t)e[n]=t[n];return e},D1=function(e,t,n){var i=jm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Gt]=t,o=bl(n,1),hs(n,Gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Gt],a[Gt]=t,o=bl(n,1),a[Gt]=c);for(l in Br)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Fn(c),m=Fn(u),h=d!==m?fs(n,l,c,m):parseFloat(c),f=parseFloat(u),e._pt=new ti(e._pt,o,l,h,f-h,Vf),e._pt.u=m||0,e._props.push(l));jm(o,i)};ei("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});eu[e>1?"border"+r:r]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(m){return Er(o,m,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(m,_){return d[m]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,h)}});var M0={name:"css",register:Gf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,m,_,p,g,x,T,y,b,w,A,v,M;Vd||Gf(),this.styles=this.styles||m0(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ci[_]&&r0(_,t,n,i,e,s)))){if(d=typeof u,m=eu[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=yl(u)),m)m(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",os.lastIndex=0,os.test(c)||(p=Fn(c),g=Fn(u),g?p!==g&&(c=fs(e,_,c,g)+g):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),v.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Sn(c)&&~c.indexOf("random(")&&(c=yl(c)),Fn(c+"")||c==="auto"||(c+=_i.units[_]||Fn(Er(e,_))||""),(c+"").charAt(1)==="="&&(c=Er(e,_))):c=Er(e,_),f=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in rr&&(_==="autoAlpha"&&(f===1&&Er(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,o.visibility),is(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=rr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in Br,T){if(this.styles.save(_),M=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=gi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var N=e.style.perspective;e.style.perspective=u,u=gi(e,"perspective"),N?e.style.perspective=N:hs(e,"perspective")}h=parseFloat(u)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||bl(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new ti(this._pt,o,Gt,0,1,b.renderTransform,b,0,-1),y.dep=1),_==="scale")this._pt=new ti(this._pt,b,"scaleY",b.scaleY,(x?Ha(b.scaleY,x+h):h)-b.scaleY||0,Vf),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(ni,0,o[ni]),u=A1(u),b.svg?Wf(e,u,0,w,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==b.zOrigin&&is(this,b,"zOrigin",b.zOrigin,g),is(this,o,_,tu(c),tu(u)));continue}else if(_==="svgOrigin"){Wf(e,u,1,w,0,this);continue}else if(_ in x0){P1(this,b,_,f,x?Ha(f,x+u):u);continue}else if(_==="smoothOrigin"){is(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){D1(this,u,e);continue}}else _ in o||(_=fo(_)||_);if(T||(h||h===0)&&(f||f===0)&&!h1.test(u)&&_ in o)p=(c+"").substr((f+"").length),h||(h=0),g=Fn(u)||(_ in _i.units?_i.units[_]:p),p!==g&&(f=fs(e,_,c,g)),this._pt=new ti(this._pt,T?b:o,_,f,(x?Ha(f,x+h):h)-f,!T&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?m1:Vf),this._pt.u=g||0,T&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=p1):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=d1);else if(_ in o)E1.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,i,s);else if(_!=="parseTransform"){Dd(_,u);continue}T||(_ in o?v.push(_,0,o[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),a.push(_)}}A&&u0(this)},render:function(e,t){if(t.tween._time||!Hd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Er,aliases:rr,getSetter:function(e,t,n){var i=rr[t];return i&&i.indexOf(",")<0&&(t=i),t in Br&&t!==ni&&(e._gsap.x||Er(e,"x"))?n&&Hm===n?t==="scale"?x1:v1:(Hm=n||{})&&(t==="scale"?y1:S1):e.style&&!Rd(e.style[t])?g1:~t.indexOf("-")?_1:kd(e,t)},core:{_removeProperty:hs,_getMatrix:Wd}};ii.utils.checkPrefix=fo;ii.core.getStyleSaver=m0;(function(r,e,t,n){var i=ei(r+","+e+","+t,function(s){Br[s]=1});ei(e,function(s){_i.units[s]="deg",x0[s]=1}),rr[i[13]]=r+","+e,ei(n,function(s){var a=s.split(":");rr[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ei("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){_i.units[r]="px"});ii.registerPlugin(M0);var Xd=ii.registerPlugin(M0)||ii;Xd.core.Tween;function L1(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function I1(r,e,t){return e&&L1(r.prototype,e),r}var En,Lc,di,rs,ss,Xa,T0,Is,el,b0,Cr,ki,E0,A0=function(){return En||typeof window<"u"&&(En=window.gsap)&&En.registerPlugin&&En},w0=1,Ba=[],ht=[],cr=[],tl=Date.now,Xf=function(e,t){return t},N1=function(){var e=el.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ht),i.push.apply(i,cr),ht=n,cr=i,Xf=function(a,o){return t[a](o)}},ls=function(e,t){return~cr.indexOf(e)&&cr[cr.indexOf(e)+1][t]},nl=function(e){return!!~b0.indexOf(e)},Vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},zn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},sc="scrollLeft",ac="scrollTop",qf=function(){return Cr&&Cr.isPressed||ht.cache++},nu=function(e,t){var n=function i(s){if(s||s===0){w0&&(di.history.scrollRestoration="manual");var a=Cr&&Cr.isPressed;s=i.v=Math.round(s)||(Cr&&Cr.iOS?1:0),e(s),i.cacheID=ht.cache,a&&Xf("ss",s)}else(t||ht.cache!==i.cacheID||Xf("ref"))&&(i.cacheID=ht.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},$n={s:sc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:nu(function(r){return arguments.length?di.scrollTo(r,on.sc()):di.pageXOffset||rs[sc]||ss[sc]||Xa[sc]||0})},on={s:ac,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:$n,sc:nu(function(r){return arguments.length?di.scrollTo($n.sc(),r):di.pageYOffset||rs[ac]||ss[ac]||Xa[ac]||0})},Zn=function(e,t){return(t&&t._ctx&&t._ctx.selector||En.utils.toArray)(e)[0]||(typeof e=="string"&&En.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},U1=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ds=function(e,t){var n=t.s,i=t.sc;nl(e)&&(e=rs.scrollingElement||ss);var s=ht.indexOf(e),a=i===on.sc?1:2;!~s&&(s=ht.push(e)-1),ht[s+a]||Vn(e,"scroll",qf);var o=ht[s+a],l=o||(ht[s+a]=nu(ls(e,n),!0)||(nl(e)?i:nu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=En.getProperty(e,"scrollBehavior")==="smooth"),l},Yf=function(e,t,n){var i=e,s=e,a=tl(),o=a,l=t||50,c=Math.max(500,l*3),u=function(m,_){var p=tl();_||p-a>l?(s=i,i=m,o=a,a=p):n?i+=m:i=s+(m-s)/(p-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},f=function(m){var _=o,p=s,g=tl();return(m||m===0)&&m!==i&&u(m),a===o||g-o>c?0:(i+(n?p:-p))/((n?g:a)-_)*1e3};return{update:u,reset:h,getVelocity:f}},No=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Zm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},R0=function(){el=En.core.globals().ScrollTrigger,el&&el.core&&N1()},C0=function(e){return En=e||A0(),!Lc&&En&&typeof document<"u"&&document.body&&(di=window,rs=document,ss=rs.documentElement,Xa=rs.body,b0=[di,rs,ss,Xa],En.utils.clamp,E0=En.core.context||function(){},Is="onpointerenter"in Xa?"pointer":"mouse",T0=Zt.isTouch=di.matchMedia&&di.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in di||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ki=Zt.eventTypes=("ontouchstart"in ss?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ss?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return w0=0},500),R0(),Lc=1),Lc};$n.op=on;ht.cache=0;var Zt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Lc||C0(En)||console.warn("Please gsap.registerPlugin(Observer)"),el||R0();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,x=n.onDrag,T=n.onPress,y=n.onRelease,b=n.onRight,w=n.onLeft,A=n.onUp,v=n.onDown,M=n.onChangeX,N=n.onChangeY,C=n.onChange,L=n.onToggleX,k=n.onToggleY,H=n.onHover,O=n.onHoverEnd,B=n.onMove,U=n.ignoreCheck,j=n.isNormalizer,V=n.onGestureStart,P=n.onGestureEnd,ae=n.onWheel,ne=n.onEnable,ve=n.onDisable,Pe=n.onClick,Ne=n.scrollSpeed,X=n.capture,ee=n.allowClicks,re=n.lockAxis,Re=n.onLockAxis;this.target=o=Zn(o)||ss,this.vars=n,d&&(d=En.utils.toArray(d)),i=i||1e-9,s=s||0,m=m||1,Ne=Ne||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(di.getComputedStyle(Xa).lineHeight)||22);var Ae,Me,Ke,he,De,Ve,Ce,G=this,I=0,tt=0,ze=n.passive||!u&&n.passive!==!1,Oe=ds(o,$n),oe=ds(o,on),R=Oe(),S=oe(),F=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ki[0]==="pointerdown",Z=nl(o),J=o.ownerDocument||rs,$=[0,0,0],me=[0,0,0],ue=0,Le=function(){return ue=tl()},xe=function(Be,nt){return(G.event=Be)&&d&&U1(Be.target,d)||nt&&F&&Be.pointerType!=="touch"||U&&U(Be,nt)},ce=function(){G._vx.reset(),G._vy.reset(),Me.pause(),h&&h(G)},le=function(){var Be=G.deltaX=Zm($),nt=G.deltaY=Zm(me),Te=Math.abs(Be)>=i,je=Math.abs(nt)>=i;C&&(Te||je)&&C(G,Be,nt,$,me),Te&&(b&&G.deltaX>0&&b(G),w&&G.deltaX<0&&w(G),M&&M(G),L&&G.deltaX<0!=I<0&&L(G),I=G.deltaX,$[0]=$[1]=$[2]=0),je&&(v&&G.deltaY>0&&v(G),A&&G.deltaY<0&&A(G),N&&N(G),k&&G.deltaY<0!=tt<0&&k(G),tt=G.deltaY,me[0]=me[1]=me[2]=0),(he||Ke)&&(B&&B(G),Ke&&(p&&Ke===1&&p(G),x&&x(G),Ke=0),he=!1),Ve&&!(Ve=!1)&&Re&&Re(G),De&&(ae(G),De=!1),Ae=0},ye=function(Be,nt,Te){$[Te]+=Be,me[Te]+=nt,G._vx.update(Be),G._vy.update(nt),c?Ae||(Ae=requestAnimationFrame(le)):le()},fe=function(Be,nt){re&&!Ce&&(G.axis=Ce=Math.abs(Be)>Math.abs(nt)?"x":"y",Ve=!0),Ce!=="y"&&($[2]+=Be,G._vx.update(Be,!0)),Ce!=="x"&&(me[2]+=nt,G._vy.update(nt,!0)),c?Ae||(Ae=requestAnimationFrame(le)):le()},de=function(Be){if(!xe(Be,1)){Be=No(Be,u);var nt=Be.clientX,Te=Be.clientY,je=nt-G.x,Xe=Te-G.y,Ze=G.isDragging;G.x=nt,G.y=Te,(Ze||(je||Xe)&&(Math.abs(G.startX-nt)>=s||Math.abs(G.startY-Te)>=s))&&(Ke||(Ke=Ze?2:1),Ze||(G.isDragging=!0),fe(je,Xe))}},qe=G.onPress=function(Ee){xe(Ee,1)||Ee&&Ee.button||(G.axis=Ce=null,Me.pause(),G.isPressed=!0,Ee=No(Ee),I=tt=0,G.startX=G.x=Ee.clientX,G.startY=G.y=Ee.clientY,G._vx.reset(),G._vy.reset(),Vn(j?o:J,ki[1],de,ze,!0),G.deltaX=G.deltaY=0,T&&T(G))},D=G.onRelease=function(Ee){if(!xe(Ee,1)){zn(j?o:J,ki[1],de,!0);var Be=!isNaN(G.y-G.startY),nt=G.isDragging,Te=nt&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),je=No(Ee);!Te&&Be&&(G._vx.reset(),G._vy.reset(),u&&ee&&En.delayedCall(.08,function(){if(tl()-ue>300&&!Ee.defaultPrevented){if(Ee.target.click)Ee.target.click();else if(J.createEvent){var Xe=J.createEvent("MouseEvents");Xe.initMouseEvent("click",!0,!0,di,1,je.screenX,je.screenY,je.clientX,je.clientY,!1,!1,!1,!1,0,null),Ee.target.dispatchEvent(Xe)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,h&&nt&&!j&&Me.restart(!0),Ke&&le(),g&&nt&&g(G),y&&y(G,Te)}},te=function(Be){return Be.touches&&Be.touches.length>1&&(G.isGesturing=!0)&&V(Be,G.isDragging)},ie=function(){return(G.isGesturing=!1)||P(G)},pe=function(Be){if(!xe(Be)){var nt=Oe(),Te=oe();ye((nt-R)*Ne,(Te-S)*Ne,1),R=nt,S=Te,h&&Me.restart(!0)}},se=function(Be){if(!xe(Be)){Be=No(Be,u),ae&&(De=!0);var nt=(Be.deltaMode===1?l:Be.deltaMode===2?di.innerHeight:1)*m;ye(Be.deltaX*nt,Be.deltaY*nt,0),h&&!j&&Me.restart(!0)}},Q=function(Be){if(!xe(Be)){var nt=Be.clientX,Te=Be.clientY,je=nt-G.x,Xe=Te-G.y;G.x=nt,G.y=Te,he=!0,h&&Me.restart(!0),(je||Xe)&&fe(je,Xe)}},we=function(Be){G.event=Be,H(G)},He=function(Be){G.event=Be,O(G)},_t=function(Be){return xe(Be)||No(Be,u)&&Pe(G)};Me=G._dc=En.delayedCall(f||.25,ce).pause(),G.deltaX=G.deltaY=0,G._vx=Yf(0,50,!0),G._vy=Yf(0,50,!0),G.scrollX=Oe,G.scrollY=oe,G.isDragging=G.isGesturing=G.isPressed=!1,E0(this),G.enable=function(Ee){return G.isEnabled||(Vn(Z?J:o,"scroll",qf),a.indexOf("scroll")>=0&&Vn(Z?J:o,"scroll",pe,ze,X),a.indexOf("wheel")>=0&&Vn(o,"wheel",se,ze,X),(a.indexOf("touch")>=0&&T0||a.indexOf("pointer")>=0)&&(Vn(o,ki[0],qe,ze,X),Vn(J,ki[2],D),Vn(J,ki[3],D),ee&&Vn(o,"click",Le,!0,!0),Pe&&Vn(o,"click",_t),V&&Vn(J,"gesturestart",te),P&&Vn(J,"gestureend",ie),H&&Vn(o,Is+"enter",we),O&&Vn(o,Is+"leave",He),B&&Vn(o,Is+"move",Q)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=he=Ke=!1,G._vx.reset(),G._vy.reset(),R=Oe(),S=oe(),Ee&&Ee.type&&qe(Ee),ne&&ne(G)),G},G.disable=function(){G.isEnabled&&(Ba.filter(function(Ee){return Ee!==G&&nl(Ee.target)}).length||zn(Z?J:o,"scroll",qf),G.isPressed&&(G._vx.reset(),G._vy.reset(),zn(j?o:J,ki[1],de,!0)),zn(Z?J:o,"scroll",pe,X),zn(o,"wheel",se,X),zn(o,ki[0],qe,X),zn(J,ki[2],D),zn(J,ki[3],D),zn(o,"click",Le,!0),zn(o,"click",_t),zn(J,"gesturestart",te),zn(J,"gestureend",ie),zn(o,Is+"enter",we),zn(o,Is+"leave",He),zn(o,Is+"move",Q),G.isEnabled=G.isPressed=G.isDragging=!1,ve&&ve(G))},G.kill=G.revert=function(){G.disable();var Ee=Ba.indexOf(G);Ee>=0&&Ba.splice(Ee,1),Cr===G&&(Cr=0)},Ba.push(G),j&&nl(o)&&(Cr=G),G.enable(_)},I1(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Zt.version="3.14.2";Zt.create=function(r){return new Zt(r)};Zt.register=C0;Zt.getAll=function(){return Ba.slice()};Zt.getById=function(r){return Ba.filter(function(e){return e.vars.id===r})[0]};A0()&&En.registerPlugin(Zt);var Fe,La,ut,Nt,ui,Tt,qd,iu,El,il,Ho,oc,Ln,Su,$f,Wn,Jm,Qm,Ia,P0,xh,D0,Gn,Kf,L0,I0,Jr,jf,Yd,qa,$d,rl,Zf,yh,lc=1,Nn=Date.now,Sh=Nn(),Ii=0,Go=0,eg=function(e,t,n){var i=li(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},tg=function(e,t){return t&&(!li(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},F1=function r(){return Go&&requestAnimationFrame(r)},ng=function(){return Su=1},ig=function(){return Su=0},Ji=function(e){return e},Wo=function(e){return Math.round(e*1e5)/1e5||0},N0=function(){return typeof window<"u"},U0=function(){return Fe||N0()&&(Fe=window.gsap)&&Fe.registerPlugin&&Fe},Qs=function(e){return!!~qd.indexOf(e)},F0=function(e){return(e==="Height"?$d:ut["inner"+e])||ui["client"+e]||Tt["client"+e]},O0=function(e){return ls(e,"getBoundingClientRect")||(Qs(e)?function(){return Oc.width=ut.innerWidth,Oc.height=$d,Oc}:function(){return Ar(e)})},O1=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=ls(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?F0(s):e["client"+s])||0}},B1=function(e,t){return!t||~cr.indexOf(e)?O0(e):function(){return Oc}},sr=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=ls(e,n))?a()-O0(e)()[s]:Qs(e)?(ui[n]||Tt[n])-F0(i):e[n]-e["offset"+i])},cc=function(e,t){for(var n=0;n<Ia.length;n+=3)(!t||~t.indexOf(Ia[n+1]))&&e(Ia[n],Ia[n+1],Ia[n+2])},li=function(e){return typeof e=="string"},On=function(e){return typeof e=="function"},Xo=function(e){return typeof e=="number"},Ns=function(e){return typeof e=="object"},Uo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Mh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},wa=Math.abs,B0="left",k0="top",Kd="right",jd="bottom",Ks="width",js="height",sl="Right",al="Left",ol="Top",ll="Bottom",en="padding",wi="margin",po="Width",Zd="Height",an="px",Ri=function(e){return ut.getComputedStyle(e)},k1=function(e){var t=Ri(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},rg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ar=function(e,t){var n=t&&Ri(e)[$f]!=="matrix(1, 0, 0, 1, 0, 0)"&&Fe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},ru=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},z0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},z1=function(e){return function(t){return Fe.utils.snap(z0(e),t)}},Jd=function(e){var t=Fe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},V1=function(e){return function(t,n){return Jd(z0(e))(t,n.direction)}},uc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},gn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},mn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},hc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},sg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},fc={toggleActions:"play",anticipatePin:0},su={top:0,left:0,center:.5,bottom:1,right:1},Ic=function(e,t){if(li(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in su?su[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},dc=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,m=Nt.createElement("div"),_=Qs(n)||ls(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=_?Tt:n,x=e.indexOf("start")!==-1,T=x?c:u,y="border-color:"+T+";font-size:"+h+";color:"+T+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===on?Kd:jd)+":"+(a+parseFloat(f))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=x,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=y,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],Nc(m,0,i,x),m},Nc=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+po]=1,s["border"+o+po]=0,s[n.p]=t+"px",Fe.set(e,s)},ct=[],Jf={},Al,ag=function(){return Nn()-Ii>34&&(Al||(Al=requestAnimationFrame(Lr)))},Ra=function(){(!Gn||!Gn.isPressed||Gn.startX>Tt.clientWidth)&&(ht.cache++,Gn?Al||(Al=requestAnimationFrame(Lr)):Lr(),Ii||ta("scrollStart"),Ii=Nn())},Th=function(){I0=ut.innerWidth,L0=ut.innerHeight},qo=function(e){ht.cache++,(e===!0||!Ln&&!D0&&!Nt.fullscreenElement&&!Nt.webkitFullscreenElement&&(!Kf||I0!==ut.innerWidth||Math.abs(ut.innerHeight-L0)>ut.innerHeight*.25))&&iu.restart(!0)},ea={},H1=[],V0=function r(){return mn(pt,"scrollEnd",r)||Hs(!0)},ta=function(e){return ea[e]&&ea[e].map(function(t){return t()})||H1},oi=[],H0=function(e){for(var t=0;t<oi.length;t+=5)(!e||oi[t+4]&&oi[t+4].query===e)&&(oi[t].style.cssText=oi[t+1],oi[t].getBBox&&oi[t].setAttribute("transform",oi[t+2]||""),oi[t+3].uncache=1)},G0=function(){return ht.forEach(function(e){return On(e)&&++e.cacheID&&(e.rec=e())})},Qd=function(e,t){var n;for(Wn=0;Wn<ct.length;Wn++)n=ct[Wn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));rl=!0,t&&H0(t),t||ta("revert")},W0=function(e,t){ht.cache++,(t||!Xn)&&ht.forEach(function(n){return On(n)&&n.cacheID++&&(n.rec=0)}),li(e)&&(ut.history.scrollRestoration=Yd=e)},Xn,Zs=0,og,G1=function(){if(og!==Zs){var e=og=Zs;requestAnimationFrame(function(){return e===Zs&&Hs(!0)})}},X0=function(){Tt.appendChild(qa),$d=!Gn&&qa.offsetHeight||ut.innerHeight,Tt.removeChild(qa)},lg=function(e){return El(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Hs=function(e,t){if(ui=Nt.documentElement,Tt=Nt.body,qd=[ut,Nt,ui,Tt],Ii&&!e&&!rl){gn(pt,"scrollEnd",V0);return}X0(),Xn=pt.isRefreshing=!0,rl||G0();var n=ta("refreshInit");P0&&pt.sort(),t||Qd(),ht.forEach(function(i){On(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ct.slice(0).forEach(function(i){return i.refresh()}),rl=!1,ct.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Zf=1,lg(!0),ct.forEach(function(i){var s=sr(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),lg(!1),Zf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ht.forEach(function(i){On(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),W0(Yd,1),iu.pause(),Zs++,Xn=2,Lr(2),ct.forEach(function(i){return On(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Xn=pt.isRefreshing=!1,ta("refresh")},Qf=0,Uc=1,cl,Lr=function(e){if(e===2||!Xn&&!rl){pt.isUpdating=!0,cl&&cl.update(0);var t=ct.length,n=Nn(),i=n-Sh>=50,s=t&&ct[0].scroll();if(Uc=Qf>s?-1:1,Xn||(Qf=s),i&&(Ii&&!Su&&n-Ii>200&&(Ii=0,ta("scrollEnd")),Ho=Sh,Sh=n),Uc<0){for(Wn=t;Wn-- >0;)ct[Wn]&&ct[Wn].update(0,i);Uc=1}else for(Wn=0;Wn<t;Wn++)ct[Wn]&&ct[Wn].update(0,i);pt.isUpdating=!1}Al=0},ed=[B0,k0,jd,Kd,wi+ll,wi+sl,wi+ol,wi+al,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Fc=ed.concat([Ks,js,"boxSizing","max"+po,"max"+Zd,"position",wi,en,en+ol,en+sl,en+ll,en+al]),W1=function(e,t,n){Ya(n);var i=e._gsap;if(i.spacerIsNative)Ya(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},bh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=ed.length,a=t.style,o=e.style,l;s--;)l=ed[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[jd]=o[Kd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ks]=ru(e,$n)+an,a[js]=ru(e,on)+an,a[en]=o[wi]=o[k0]=o[B0]="0",Ya(i),o[Ks]=o["max"+po]=n[Ks],o[js]=o["max"+Zd]=n[js],o[en]=n[en],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},X1=/([A-Z])/g,Ya=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Fe.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(X1,"-$1").toLowerCase())}},pc=function(e){for(var t=Fc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Fc[s],n[Fc[s]]);return i.t=e,i},q1=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Oc={left:0,top:0},cg=function(e,t,n,i,s,a,o,l,c,u,h,f,d,m){On(e)&&(e=e(l)),li(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Ic("0"+e.substr(3),n):0));var _=d?d.time():0,p,g,x;if(d&&d.seek(0),isNaN(e)||(e=+e),Xo(e))d&&(e=Fe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&Nc(o,n,i,!0);else{On(t)&&(t=t(l));var T=(e||"0").split(" "),y,b,w,A;x=Zn(t,l)||Tt,y=Ar(x)||{},(!y||!y.left&&!y.top)&&Ri(x).display==="none"&&(A=x.style.display,x.style.display="block",y=Ar(x),A?x.style.display=A:x.style.removeProperty("display")),b=Ic(T[0],y[i.d]),w=Ic(T[1]||"0",n),e=y[i.p]-c[i.p]-u+b+s-w,o&&Nc(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(m&&(l[m]=e||-.001,e<0&&(e=0)),a){var v=e+n,M=a._isStart;p="scroll"+i.d2,Nc(a,v,i,M&&v>20||!M&&(h?Math.max(Tt[p],ui[p]):a.parentNode[p])<=v+1),h&&(c=Ar(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+an))}return d&&x&&(p=Ar(x),d.seek(f),g=Ar(x),d._caScrollDist=p[i.p]-g[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},Y1=/(webkit|moz|length|cssText|inset)/i,ug=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===Tt){e._stOrig=s.cssText,o=Ri(e);for(a in o)!+a&&!Y1.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Fe.core.getCache(e).uncache=1,t.appendChild(e)}},q0=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},mc=function(e,t,n){var i={};i[t.p]="+="+n,Fe.set(e,i)},hg=function(e,t){var n=ds(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,m={};c=c||n();var _=q0(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ht.cache++,a.tween&&Lr()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Fe.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},gn(e,"wheel",n.wheelHandler),pt.isTouch&&gn(e,"touchmove",n.wheelHandler),s},pt=(function(){function r(t,n){La||r.register(Fe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),jf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Go){this.update=this.refresh=this.kill=Ji;return}n=rg(li(n)||Xo(n)||n.nodeType?{trigger:n}:n,fc);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,x=s.onSnapComplete,T=s.once,y=s.snap,b=s.pinReparent,w=s.pinSpacer,A=s.containerAnimation,v=s.fastScrollEnd,M=s.preventOverlaps,N=n.horizontal||n.containerAnimation&&n.horizontal!==!1?$n:on,C=!h&&h!==0,L=Zn(n.scroller||ut),k=Fe.core.getCache(L),H=Qs(L),O=("pinType"in n?n.pinType:ls(L,"pinType")||H&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=C&&n.toggleActions.split(" "),j="markers"in n?n.markers:fc.markers,V=H?0:parseFloat(Ri(L)["border"+N.p2+po])||0,P=this,ae=n.onRefreshInit&&function(){return n.onRefreshInit(P)},ne=O1(L,H,N),ve=B1(L,H),Pe=0,Ne=0,X=0,ee=ds(L,N),re,Re,Ae,Me,Ke,he,De,Ve,Ce,G,I,tt,ze,Oe,oe,R,S,F,Z,J,$,me,ue,Le,xe,ce,le,ye,fe,de,qe,D,te,ie,pe,se,Q,we,He;if(P._startClamp=P._endClamp=!1,P._dir=N,p*=45,P.scroller=L,P.scroll=A?A.time.bind(A):ee,Me=ee(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(P0=1,n.refreshPriority===-9999&&(cl=P)),k.tweenScroll=k.tweenScroll||{top:hg(L,on),left:hg(L,$n)},P.tweenTo=re=k.tweenScroll[N.p],P.scrubDuration=function(Te){te=Xo(Te)&&Te,te?D?D.duration(Te):D=Fe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:te,paused:!0,onComplete:function(){return g&&g(P)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),de=0,l||(l=i.vars.id)),y&&((!Ns(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Tt.style&&Fe.set(H?[Tt,ui]:L,{scrollBehavior:"auto"}),ht.forEach(function(Te){return On(Te)&&Te.target===(H?Nt.scrollingElement||ui:L)&&(Te.smooth=!1)}),Ae=On(y.snapTo)?y.snapTo:y.snapTo==="labels"?z1(i):y.snapTo==="labelsDirectional"?V1(i):y.directional!==!1?function(Te,je){return Jd(y.snapTo)(Te,Nn()-Ne<500?0:je.direction)}:Fe.utils.snap(y.snapTo),ie=y.duration||{min:.1,max:2},ie=Ns(ie)?il(ie.min,ie.max):il(ie,ie),pe=Fe.delayedCall(y.delay||te/2||.1,function(){var Te=ee(),je=Nn()-Ne<500,Xe=re.tween;if((je||Math.abs(P.getVelocity())<10)&&!Xe&&!Su&&Pe!==Te){var Ze=(Te-he)/Oe,Yt=i&&!C?i.totalProgress():Ze,Je=je?0:(Yt-qe)/(Nn()-Ho)*1e3||0,Ut=Fe.utils.clamp(-Ze,1-Ze,wa(Je/2)*Je/.185),nn=Ze+(y.inertia===!1?0:Ut),Ft,bt,Mt=y,wn=Mt.onStart,It=Mt.onInterrupt,Rn=Mt.onComplete;if(Ft=Ae(nn,P),Xo(Ft)||(Ft=nn),bt=Math.max(0,Math.round(he+Ft*Oe)),Te<=De&&Te>=he&&bt!==Te){if(Xe&&!Xe._initted&&Xe.data<=wa(bt-Te))return;y.inertia===!1&&(Ut=Ft-Ze),re(bt,{duration:ie(wa(Math.max(wa(nn-Yt),wa(Ft-Yt))*.185/Je/.05||0)),ease:y.ease||"power3",data:wa(bt-Te),onInterrupt:function(){return pe.restart(!0)&&It&&It(P)},onComplete:function(){P.update(),Pe=ee(),i&&!C&&(D?D.resetTo("totalProgress",Ft,i._tTime/i._tDur):i.progress(Ft)),de=qe=i&&!C?i.totalProgress():P.progress,x&&x(P),Rn&&Rn(P)}},Te,Ut*Oe,bt-Te-Ut*Oe),wn&&wn(P,re.tween)}}else P.isActive&&Pe!==Te&&pe.restart(!0)}).pause()),l&&(Jf[l]=P),f=P.trigger=Zn(f||d!==!0&&d),He=f&&f._gsap&&f._gsap.stRevert,He&&(He=He(P)),d=d===!0?f:Zn(d),li(o)&&(o={targets:f,className:o}),d&&(m===!1||m===wi||(m=!m&&d.parentNode&&d.parentNode.style&&Ri(d.parentNode).display==="flex"?!1:en),P.pin=d,Re=Fe.core.getCache(d),Re.spacer?oe=Re.pinState:(w&&(w=Zn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Re.spacerIsNative=!!w,w&&(Re.spacerState=pc(w))),Re.spacer=F=w||Nt.createElement("div"),F.classList.add("pin-spacer"),l&&F.classList.add("pin-spacer-"+l),Re.pinState=oe=pc(d)),n.force3D!==!1&&Fe.set(d,{force3D:!0}),P.spacer=F=Re.spacer,fe=Ri(d),Le=fe[m+N.os2],J=Fe.getProperty(d),$=Fe.quickSetter(d,N.a,an),bh(d,F,fe),S=pc(d)),j){tt=Ns(j)?rg(j,sg):sg,G=dc("scroller-start",l,L,N,tt,0),I=dc("scroller-end",l,L,N,tt,0,G),Z=G["offset"+N.op.d2];var _t=Zn(ls(L,"content")||L);Ve=this.markerStart=dc("start",l,_t,N,tt,Z,0,A),Ce=this.markerEnd=dc("end",l,_t,N,tt,Z,0,A),A&&(we=Fe.quickSetter([Ve,Ce],N.a,an)),!O&&!(cr.length&&ls(L,"fixedMarkers")===!0)&&(k1(H?Tt:L),Fe.set([G,I],{force3D:!0}),ce=Fe.quickSetter(G,N.a,an),ye=Fe.quickSetter(I,N.a,an))}if(A){var Ee=A.vars.onUpdate,Be=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){P.update(0,0,1),Ee&&Ee.apply(A,Be||[])})}if(P.previous=function(){return ct[ct.indexOf(P)-1]},P.next=function(){return ct[ct.indexOf(P)+1]},P.revert=function(Te,je){if(!je)return P.kill(!0);var Xe=Te!==!1||!P.enabled,Ze=Ln;Xe!==P.isReverted&&(Xe&&(se=Math.max(ee(),P.scroll.rec||0),X=P.progress,Q=i&&i.progress()),Ve&&[Ve,Ce,G,I].forEach(function(Yt){return Yt.style.display=Xe?"none":"block"}),Xe&&(Ln=P,P.update(Xe)),d&&(!b||!P.isActive)&&(Xe?W1(d,F,oe):bh(d,F,Ri(d),xe)),Xe||P.update(Xe),Ln=Ze,P.isReverted=Xe)},P.refresh=function(Te,je,Xe,Ze){if(!((Ln||!P.enabled)&&!je)){if(d&&Te&&Ii){gn(r,"scrollEnd",V0);return}!Xn&&ae&&ae(P),Ln=P,re.tween&&!Xe&&(re.tween.kill(),re.tween=0),D&&D.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ie){return Ie.vars.immediateRender&&Ie.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Yt=ne(),Je=ve(),Ut=A?A.duration():sr(L,N),nn=Oe<=.01||!Oe,Ft=0,bt=Ze||0,Mt=Ns(Xe)?Xe.end:n.end,wn=n.endTrigger||f,It=Ns(Xe)?Xe.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Rn=P.pinnedContainer=n.pinnedContainer&&Zn(n.pinnedContainer,P),Mi=f&&Math.max(0,ct.indexOf(P))||0,rn=Mi,sn,fn,gr,oa,E,z,K,Y,q,ge,Se,_e,Ue;for(j&&Ns(Xe)&&(_e=Fe.getProperty(G,N.p),Ue=Fe.getProperty(I,N.p));rn-- >0;)z=ct[rn],z.end||z.refresh(0,1)||(Ln=P),K=z.pin,K&&(K===f||K===d||K===Rn)&&!z.isReverted&&(ge||(ge=[]),ge.unshift(z),z.revert(!0,!0)),z!==ct[rn]&&(Mi--,rn--);for(On(It)&&(It=It(P)),It=eg(It,"start",P),he=cg(It,f,Yt,N,ee(),Ve,G,P,Je,V,O,Ut,A,P._startClamp&&"_startClamp")||(d?-.001:0),On(Mt)&&(Mt=Mt(P)),li(Mt)&&!Mt.indexOf("+=")&&(~Mt.indexOf(" ")?Mt=(li(It)?It.split(" ")[0]:"")+Mt:(Ft=Ic(Mt.substr(2),Yt),Mt=li(It)?It:(A?Fe.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,he):he)+Ft,wn=f)),Mt=eg(Mt,"end",P),De=Math.max(he,cg(Mt||(wn?"100% 0":Ut),wn,Yt,N,ee()+Ft,Ce,I,P,Je,V,O,Ut,A,P._endClamp&&"_endClamp"))||-.001,Ft=0,rn=Mi;rn--;)z=ct[rn]||{},K=z.pin,K&&z.start-z._pinPush<=he&&!A&&z.end>0&&(sn=z.end-(P._startClamp?Math.max(0,z.start):z.start),(K===f&&z.start-z._pinPush<he||K===Rn)&&isNaN(It)&&(Ft+=sn*(1-z.progress)),K===d&&(bt+=sn));if(he+=Ft,De+=Ft,P._startClamp&&(P._startClamp+=Ft),P._endClamp&&!Xn&&(P._endClamp=De||-.001,De=Math.min(De,sr(L,N))),Oe=De-he||(he-=.01)&&.001,nn&&(X=Fe.utils.clamp(0,1,Fe.utils.normalize(he,De,se))),P._pinPush=bt,Ve&&Ft&&(sn={},sn[N.a]="+="+Ft,Rn&&(sn[N.p]="-="+ee()),Fe.set([Ve,Ce],sn)),d&&!(Zf&&P.end>=sr(L,N)))sn=Ri(d),oa=N===on,gr=ee(),me=parseFloat(J(N.a))+bt,!Ut&&De>1&&(Se=(H?Nt.scrollingElement||ui:L).style,Se={style:Se,value:Se["overflow"+N.a.toUpperCase()]},H&&Ri(Tt)["overflow"+N.a.toUpperCase()]!=="scroll"&&(Se.style["overflow"+N.a.toUpperCase()]="scroll")),bh(d,F,sn),S=pc(d),fn=Ar(d,!0),Y=O&&ds(L,oa?$n:on)(),m?(xe=[m+N.os2,Oe+bt+an],xe.t=F,rn=m===en?ru(d,N)+Oe+bt:0,rn&&(xe.push(N.d,rn+an),F.style.flexBasis!=="auto"&&(F.style.flexBasis=rn+an)),Ya(xe),Rn&&ct.forEach(function(Ie){Ie.pin===Rn&&Ie.vars.pinSpacing!==!1&&(Ie._subPinOffset=!0)}),O&&ee(se)):(rn=ru(d,N),rn&&F.style.flexBasis!=="auto"&&(F.style.flexBasis=rn+an)),O&&(E={top:fn.top+(oa?gr-he:Y)+an,left:fn.left+(oa?Y:gr-he)+an,boxSizing:"border-box",position:"fixed"},E[Ks]=E["max"+po]=Math.ceil(fn.width)+an,E[js]=E["max"+Zd]=Math.ceil(fn.height)+an,E[wi]=E[wi+ol]=E[wi+sl]=E[wi+ll]=E[wi+al]="0",E[en]=sn[en],E[en+ol]=sn[en+ol],E[en+sl]=sn[en+sl],E[en+ll]=sn[en+ll],E[en+al]=sn[en+al],R=q1(oe,E,b),Xn&&ee(0)),i?(q=i._initted,xh(1),i.render(i.duration(),!0,!0),ue=J(N.a)-me+Oe+bt,le=Math.abs(Oe-ue)>1,O&&le&&R.splice(R.length-2,2),i.render(0,!0,!0),q||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),xh(0)):ue=Oe,Se&&(Se.value?Se.style["overflow"+N.a.toUpperCase()]=Se.value:Se.style.removeProperty("overflow-"+N.a));else if(f&&ee()&&!A)for(fn=f.parentNode;fn&&fn!==Tt;)fn._pinOffset&&(he-=fn._pinOffset,De-=fn._pinOffset),fn=fn.parentNode;ge&&ge.forEach(function(Ie){return Ie.revert(!1,!0)}),P.start=he,P.end=De,Me=Ke=Xn?se:ee(),!A&&!Xn&&(Me<se&&ee(se),P.scroll.rec=0),P.revert(!1,!0),Ne=Nn(),pe&&(Pe=-1,pe.restart(!0)),Ln=0,i&&C&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(nn||X!==P.progress||A||_||i&&!i._initted)&&(i&&!C&&(i._initted||X||i.vars.immediateRender!==!1)&&i.totalProgress(A&&he<-.001&&!X?Fe.utils.normalize(he,De,0):X,!0),P.progress=nn||(Me-he)/Oe===X?0:X),d&&m&&(F._pinOffset=Math.round(P.progress*ue)),D&&D.invalidate(),isNaN(_e)||(_e-=Fe.getProperty(G,N.p),Ue-=Fe.getProperty(I,N.p),mc(G,N,_e),mc(Ve,N,_e-(Ze||0)),mc(I,N,Ue),mc(Ce,N,Ue-(Ze||0))),nn&&!Xn&&P.update(),u&&!Xn&&!ze&&(ze=!0,u(P),ze=!1)}},P.getVelocity=function(){return(ee()-Ke)/(Nn()-Ho)*1e3||0},P.endAnimation=function(){Uo(P.callbackAnimation),i&&(D?D.progress(1):i.paused()?C||Uo(i,P.direction<0,1):Uo(i,i.reversed()))},P.labelToScroll=function(Te){return i&&i.labels&&(he||P.refresh()||he)+i.labels[Te]/i.duration()*Oe||0},P.getTrailing=function(Te){var je=ct.indexOf(P),Xe=P.direction>0?ct.slice(0,je).reverse():ct.slice(je+1);return(li(Te)?Xe.filter(function(Ze){return Ze.vars.preventOverlaps===Te}):Xe).filter(function(Ze){return P.direction>0?Ze.end<=he:Ze.start>=De})},P.update=function(Te,je,Xe){if(!(A&&!Xe&&!Te)){var Ze=Xn===!0?se:P.scroll(),Yt=Te?0:(Ze-he)/Oe,Je=Yt<0?0:Yt>1?1:Yt||0,Ut=P.progress,nn,Ft,bt,Mt,wn,It,Rn,Mi;if(je&&(Ke=Me,Me=A?ee():Ze,y&&(qe=de,de=i&&!C?i.totalProgress():Je)),p&&d&&!Ln&&!lc&&Ii&&(!Je&&he<Ze+(Ze-Ke)/(Nn()-Ho)*p?Je=1e-4:Je===1&&De>Ze+(Ze-Ke)/(Nn()-Ho)*p&&(Je=.9999)),Je!==Ut&&P.enabled){if(nn=P.isActive=!!Je&&Je<1,Ft=!!Ut&&Ut<1,It=nn!==Ft,wn=It||!!Je!=!!Ut,P.direction=Je>Ut?1:-1,P.progress=Je,wn&&!Ln&&(bt=Je&&!Ut?0:Je===1?1:Ut===1?2:3,C&&(Mt=!It&&U[bt+1]!=="none"&&U[bt+1]||U[bt],Mi=i&&(Mt==="complete"||Mt==="reset"||Mt in i))),M&&(It||Mi)&&(Mi||h||!i)&&(On(M)?M(P):P.getTrailing(M).forEach(function(gr){return gr.endAnimation()})),C||(D&&!Ln&&!lc?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",Je,i._tTime/i._tDur):(D.vars.totalProgress=Je,D.invalidate().restart())):i&&i.totalProgress(Je,!!(Ln&&(Ne||Te)))),d){if(Te&&m&&(F.style[m+N.os2]=Le),!O)$(Wo(me+ue*Je));else if(wn){if(Rn=!Te&&Je>Ut&&De+1>Ze&&Ze+1>=sr(L,N),b)if(!Te&&(nn||Rn)){var rn=Ar(d,!0),sn=Ze-he;ug(d,Tt,rn.top+(N===on?sn:0)+an,rn.left+(N===on?0:sn)+an)}else ug(d,F);Ya(nn||Rn?R:S),le&&Je<1&&nn||$(me+(Je===1&&!Rn?ue:0))}}y&&!re.tween&&!Ln&&!lc&&pe.restart(!0),o&&(It||T&&Je&&(Je<1||!yh))&&El(o.targets).forEach(function(gr){return gr.classList[nn||T?"add":"remove"](o.className)}),a&&!C&&!Te&&a(P),wn&&!Ln?(C&&(Mi&&(Mt==="complete"?i.pause().totalProgress(1):Mt==="reset"?i.restart(!0).pause():Mt==="restart"?i.restart(!0):i[Mt]()),a&&a(P)),(It||!yh)&&(c&&It&&Mh(P,c),B[bt]&&Mh(P,B[bt]),T&&(Je===1?P.kill(!1,1):B[bt]=0),It||(bt=Je===1?1:3,B[bt]&&Mh(P,B[bt]))),v&&!nn&&Math.abs(P.getVelocity())>(Xo(v)?v:2500)&&(Uo(P.callbackAnimation),D?D.progress(1):Uo(i,Mt==="reverse"?1:!Je,1))):C&&a&&!Ln&&a(P)}if(ye){var fn=A?Ze/A.duration()*(A._caScrollDist||0):Ze;ce(fn+(G._isFlipped?1:0)),ye(fn)}we&&we(-Ze/A.duration()*(A._caScrollDist||0))}},P.enable=function(Te,je){P.enabled||(P.enabled=!0,gn(L,"resize",qo),H||gn(L,"scroll",Ra),ae&&gn(r,"refreshInit",ae),Te!==!1&&(P.progress=X=0,Me=Ke=Pe=ee()),je!==!1&&P.refresh())},P.getTween=function(Te){return Te&&re?re.tween:D},P.setPositions=function(Te,je,Xe,Ze){if(A){var Yt=A.scrollTrigger,Je=A.duration(),Ut=Yt.end-Yt.start;Te=Yt.start+Ut*Te/Je,je=Yt.start+Ut*je/Je}P.refresh(!1,!1,{start:tg(Te,Xe&&!!P._startClamp),end:tg(je,Xe&&!!P._endClamp)},Ze),P.update()},P.adjustPinSpacing=function(Te){if(xe&&Te){var je=xe.indexOf(N.d)+1;xe[je]=parseFloat(xe[je])+Te+an,xe[1]=parseFloat(xe[1])+Te+an,Ya(xe)}},P.disable=function(Te,je){if(Te!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,je||D&&D.pause(),se=0,Re&&(Re.uncache=1),ae&&mn(r,"refreshInit",ae),pe&&(pe.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!H)){for(var Xe=ct.length;Xe--;)if(ct[Xe].scroller===L&&ct[Xe]!==P)return;mn(L,"resize",qo),H||mn(L,"scroll",Ra)}},P.kill=function(Te,je){P.disable(Te,je),D&&!je&&D.kill(),l&&delete Jf[l];var Xe=ct.indexOf(P);Xe>=0&&ct.splice(Xe,1),Xe===Wn&&Uc>0&&Wn--,Xe=0,ct.forEach(function(Ze){return Ze.scroller===P.scroller&&(Xe=1)}),Xe||Xn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,Te&&i.revert({kill:!1}),je||i.kill()),Ve&&[Ve,Ce,G,I].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),cl===P&&(cl=0),d&&(Re&&(Re.uncache=1),Xe=0,ct.forEach(function(Ze){return Ze.pin===d&&Xe++}),Xe||(Re.spacer=0)),n.onKill&&n.onKill(P)},ct.push(P),P.enable(!1,!1),He&&He(P),i&&i.add&&!Oe){var nt=P.update;P.update=function(){P.update=nt,ht.cache++,he||De||P.refresh()},Fe.delayedCall(.01,P.update),Oe=.01,he=De=0}else P.refresh();d&&G1()},r.register=function(n){return La||(Fe=n||U0(),N0()&&window.document&&r.enable(),La=Go),La},r.defaults=function(n){if(n)for(var i in n)fc[i]=n[i];return fc},r.disable=function(n,i){Go=0,ct.forEach(function(a){return a[i?"kill":"disable"](n)}),mn(ut,"wheel",Ra),mn(Nt,"scroll",Ra),clearInterval(oc),mn(Nt,"touchcancel",Ji),mn(Tt,"touchstart",Ji),uc(mn,Nt,"pointerdown,touchstart,mousedown",ng),uc(mn,Nt,"pointerup,touchend,mouseup",ig),iu.kill(),cc(mn);for(var s=0;s<ht.length;s+=3)hc(mn,ht[s],ht[s+1]),hc(mn,ht[s],ht[s+2])},r.enable=function(){if(ut=window,Nt=document,ui=Nt.documentElement,Tt=Nt.body,Fe&&(El=Fe.utils.toArray,il=Fe.utils.clamp,jf=Fe.core.context||Ji,xh=Fe.core.suppressOverwrites||Ji,Yd=ut.history.scrollRestoration||"auto",Qf=ut.pageYOffset||0,Fe.core.globals("ScrollTrigger",r),Tt)){Go=1,qa=document.createElement("div"),qa.style.height="100vh",qa.style.position="absolute",X0(),F1(),Zt.register(Fe),r.isTouch=Zt.isTouch,Jr=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Kf=Zt.isTouch===1,gn(ut,"wheel",Ra),qd=[ut,Nt,ui,Tt],Fe.matchMedia?(r.matchMedia=function(c){var u=Fe.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Fe.addEventListener("matchMediaInit",function(){G0(),Qd()}),Fe.addEventListener("matchMediaRevert",function(){return H0()}),Fe.addEventListener("matchMedia",function(){Hs(0,1),ta("matchMedia")}),Fe.matchMedia().add("(orientation: portrait)",function(){return Th(),Th})):console.warn("Requires GSAP 3.11.0 or later"),Th(),gn(Nt,"scroll",Ra);var n=Tt.hasAttribute("style"),i=Tt.style,s=i.borderTopStyle,a=Fe.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Ar(Tt),on.m=Math.round(o.top+on.sc())||0,$n.m=Math.round(o.left+$n.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Tt.setAttribute("style",""),Tt.removeAttribute("style")),oc=setInterval(ag,250),Fe.delayedCall(.5,function(){return lc=0}),gn(Nt,"touchcancel",Ji),gn(Tt,"touchstart",Ji),uc(gn,Nt,"pointerdown,touchstart,mousedown",ng),uc(gn,Nt,"pointerup,touchend,mouseup",ig),$f=Fe.utils.checkPrefix("transform"),Fc.push($f),La=Nn(),iu=Fe.delayedCall(.2,Hs).pause(),Ia=[Nt,"visibilitychange",function(){var c=ut.innerWidth,u=ut.innerHeight;Nt.hidden?(Jm=c,Qm=u):(Jm!==c||Qm!==u)&&qo()},Nt,"DOMContentLoaded",Hs,ut,"load",Hs,ut,"resize",qo],cc(gn),ct.forEach(function(c){return c.enable(0,1)}),l=0;l<ht.length;l+=3)hc(mn,ht[l],ht[l+1]),hc(mn,ht[l],ht[l+2])}},r.config=function(n){"limitCallbacks"in n&&(yh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(oc)||(oc=i)&&setInterval(ag,i),"ignoreMobileResize"in n&&(Kf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(cc(mn)||cc(gn,n.autoRefreshEvents||"none"),D0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Zn(n),a=ht.indexOf(s),o=Qs(s);~a&&ht.splice(a,o?6:2),i&&(o?cr.unshift(ut,i,Tt,i,ui,i):cr.unshift(s,i))},r.clearMatchMedia=function(n){ct.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(li(n)?Zn(n):n).getBoundingClientRect(),o=a[s?Ks:js]*i||0;return s?a.right-o>0&&a.left+o<ut.innerWidth:a.bottom-o>0&&a.top+o<ut.innerHeight},r.positionInViewport=function(n,i,s){li(n)&&(n=Zn(n));var a=n.getBoundingClientRect(),o=a[s?Ks:js],l=i==null?o/2:i in su?su[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ut.innerWidth:(a.top+l)/ut.innerHeight},r.killAll=function(n){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ea.killAll||[];ea={},i.forEach(function(s){return s()})}},r})();pt.version="3.14.2";pt.saveStyles=function(r){return r?El(r).forEach(function(e){if(e&&e.style){var t=oi.indexOf(e);t>=0&&oi.splice(t,5),oi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Fe.core.getCache(e),jf())}}):oi};pt.revert=function(r,e){return Qd(!r,e)};pt.create=function(r,e){return new pt(r,e)};pt.refresh=function(r){return r?qo(!0):(La||pt.register())&&Hs(!0)};pt.update=function(r){return++ht.cache&&Lr(r===!0?2:0)};pt.clearScrollMemory=W0;pt.maxScroll=function(r,e){return sr(r,e?$n:on)};pt.getScrollFunc=function(r,e){return ds(Zn(r),e?$n:on)};pt.getById=function(r){return Jf[r]};pt.getAll=function(){return ct.filter(function(r){return r.vars.id!=="ScrollSmoother"})};pt.isScrolling=function(){return!!Ii};pt.snapDirectional=Jd;pt.addEventListener=function(r,e){var t=ea[r]||(ea[r]=[]);~t.indexOf(e)||t.push(e)};pt.removeEventListener=function(r,e){var t=ea[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};pt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],f=[],d=Fe.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(m){h.length||d.restart(!0),h.push(m.trigger),f.push(m),s<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&On(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return On(s)&&(s=s(),gn(pt,"refresh",function(){return s=e.batchMax()})),El(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(pt.create(c))}),t};var fg=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Eh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===ui&&r(Tt,t)},gc={auto:1,scroll:1},$1=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Fe.core.getCache(s),o=Nn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==Tt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(gc[(l=Ri(s)).overflowY]||gc[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Qs(s)&&(gc[(l=Ri(s)).overflowY]||gc[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Y0=function(e,t,n,i){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&$1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&gn(Nt,Zt.eventTypes[0],pg,!1,!0)},onDisable:function(){return mn(Nt,Zt.eventTypes[0],pg,!0)}})},K1=/(input|label|select|textarea)/i,dg,pg=function(e){var t=K1.test(e.target.tagName);(t||dg)&&(e._gsapAllow=!0,dg=t)},j1=function(e){Ns(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Zn(e.target)||ui,u=Fe.core.globals().ScrollSmoother,h=u&&u.get(),f=Jr&&(e.content&&Zn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=ds(c,on),m=ds(c,$n),_=1,p=(Zt.isTouch&&ut.visualViewport?ut.visualViewport.scale*ut.visualViewport.width:ut.outerWidth)/ut.innerWidth,g=0,x=On(i)?function(){return i(o)}:function(){return i||2.8},T,y,b=Y0(c,e.type,!0,s),w=function(){return y=!1},A=Ji,v=Ji,M=function(){l=sr(c,on),v=il(Jr?1:0,l),n&&(A=il(0,sr(c,$n))),T=Zs},N=function(){f._gsap.y=Wo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},C=function(){if(y){requestAnimationFrame(w);var j=Wo(o.deltaY/2),V=v(d.v-j);if(f&&V!==d.v+d.offset){d.offset=V-d.v;var P=Wo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=ht.cache,Lr()}return!0}d.offset&&N(),y=!0},L,k,H,O,B=function(){M(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return f&&Fe.set(f,{y:"+=0"}),e.ignoreCheck=function(U){return Jr&&U.type==="touchmove"&&C()||_>1.05&&U.type!=="touchstart"||o.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){y=!1;var U=_;_=Wo((ut.visualViewport&&ut.visualViewport.scale||1)/p),L.pause(),U!==_&&Eh(c,_>1.01?!0:n?!1:"x"),k=m(),H=d(),M(),T=Zs},e.onRelease=e.onGestureStart=function(U,j){if(d.offset&&N(),!j)O.restart(!0);else{ht.cache++;var V=x(),P,ae;n&&(P=m(),ae=P+V*.05*-U.velocityX/.227,V*=fg(m,P,ae,sr(c,$n)),L.vars.scrollX=A(ae)),P=d(),ae=P+V*.05*-U.velocityY/.227,V*=fg(d,P,ae,sr(c,on)),L.vars.scrollY=v(ae),L.invalidate().duration(V).play(.01),(Jr&&L.vars.scrollY>=l||P>=l-1)&&Fe.to({},{onUpdate:B,duration:V})}a&&a(U)},e.onWheel=function(){L._ts&&L.pause(),Nn()-g>1e3&&(T=0,g=Nn())},e.onChange=function(U,j,V,P,ae){if(Zs!==T&&M(),j&&n&&m(A(P[2]===j?k+(U.startX-U.x):m()+j-P[1])),V){d.offset&&N();var ne=ae[2]===V,ve=ne?H+U.startY-U.y:d()+V-ae[1],Pe=v(ve);ne&&ve!==Pe&&(H+=Pe-ve),d(Pe)}(V||j)&&Lr()},e.onEnable=function(){Eh(c,n?!1:"x"),pt.addEventListener("refresh",B),gn(ut,"resize",B),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),b.enable()},e.onDisable=function(){Eh(c,!0),mn(ut,"resize",B),pt.removeEventListener("refresh",B),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new Zt(e),o.iOS=Jr,Jr&&!d()&&d(1),Jr&&Fe.ticker.add(Ji),O=o._dc,L=Fe.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:q0(d,d(),function(){return L.pause()})},onUpdate:Lr,onComplete:O.vars.onComplete}),o};pt.sort=function(r){if(On(r))return ct.sort(r);var e=ut.pageYOffset||0;return pt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ut.innerHeight}),ct.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};pt.observe=function(r){return new Zt(r)};pt.normalizeScroll=function(r){if(typeof r>"u")return Gn;if(r===!0&&Gn)return Gn.enable();if(r===!1){Gn&&Gn.kill(),Gn=r;return}var e=r instanceof Zt?r:j1(r);return Gn&&Gn.target===e.target&&Gn.kill(),Qs(e.target)&&(Gn=e),e};pt.core={_getVelocityProp:Yf,_inputObserver:Y0,_scrollers:ht,_proxies:cr,bridge:{ss:function(){Ii||ta("scrollStart"),Ii=Nn()},ref:function(){return Ln}}};U0()&&Fe.registerPlugin(pt);const Vr=typeof window<"u",Bc=Vr?window:null,wl=Vr?document:null,Ht={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},xt={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},pi={NONE:0,AUTO:1,FORCE:2},Kn={replace:0,none:1,blend:2},mg=Symbol(),Mu=Symbol(),ep=Symbol(),Tu=Symbol(),Z1=Symbol(),St=1e-11,td=1e12,mo=1e3,nd=240,cs="",J1="var(",$0=(()=>{const r=new Map;return r.set("x","translateX"),r.set("y","translateY"),r.set("z","translateZ"),r})(),K0=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","matrix","matrix3d","perspective"],j0=K0.reduce((r,e)=>({...r,[e]:e+"("}),{}),Ai=()=>{},Q1=/\)\s*[-.\d]/,ew=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,tw=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,nw=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,iw=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,rw=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,gg=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,Z0=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,sw=/([a-z])([A-Z])/g,aw=/(\w+)(\([^)]+\)+)/g,ow=/(\*=|\+=|-=)/,lw=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;const au={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:nd,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:mo,delay:0,loopDelay:0,ease:"out(2)",composition:Kn.replace,modifier:r=>r,onBegin:Ai,onBeforeUpdate:Ai,onUpdate:Ai,onLoop:Ai,onPause:Ai,onComplete:Ai,onRender:Ai},cw={root:wl},_n={defaults:au,precision:4,timeScale:1,tickThreshold:200},_c=Vr&&Bc.AnimeJSDevTools,J0={version:"4.3.6",engine:null};Vr&&(Bc.AnimeJS||(Bc.AnimeJS=[]),Bc.AnimeJS.push(J0));const Q0=r=>r.replace(sw,"$1-$2").toLowerCase(),Ir=(r,e)=>r.indexOf(e)===0,go=Date.now,na=Array.isArray,ul=r=>r&&r.constructor===Object,$a=r=>typeof r=="number"&&!isNaN(r),ps=r=>typeof r=="string",ms=r=>typeof r=="function",rt=r=>typeof r>"u",Ka=r=>rt(r)||r===null,tp=r=>Vr&&r instanceof SVGElement,ev=r=>ew.test(r),tv=r=>Ir(r,"rgb"),nv=r=>Ir(r,"hsl"),uw=r=>ev(r)||(tv(r)||nv(r))&&(r[r.length-1]===")"||!Q1.test(r)),kc=r=>!_n.defaults.hasOwnProperty(r),hw=["opacity","rotate","overflow","color"],fw=(r,e)=>{if(hw.includes(e))return!1;if(r.getAttribute(e)||e in r){if(e==="scale"){const t=r.parentNode;return t&&t.tagName==="filter"}return!0}},Ah=r=>ps(r)?parseFloat(r):r,Na=Math.pow,iv=Math.sqrt,dw=Math.sin,pw=Math.cos,_g=Math.abs,id=Math.floor,mw=Math.asin,gw=Math.max,_w=Math.atan2,bu=Math.PI,vg=Math.round,qn=(r,e,t)=>r<e?e:r>t?t:r,xg={},jt=(r,e)=>{if(e<0)return r;if(!e)return vg(r);let t=xg[e];return t||(t=xg[e]=10**e),vg(r*t)/t},Cs=(r,e,t)=>r+(e-r)*t,Eu=r=>r===1/0?td:r===-1/0?-td:r,ja=r=>r<=St?St:Eu(jt(r,11)),In=r=>na(r)?[...r]:r,rv=(r,e)=>{const t={...r};for(let n in e){const i=r[n];t[n]=rt(i)?e[n]:i}return t},Bt=(r,e,t,n="_prev",i="_next")=>{let s=r._head,a=i;for(t&&(s=r._tail,a=n);s;){const o=s[a];e(s),s=o}},Gs=(r,e,t="_prev",n="_next")=>{const i=e[t],s=e[n];i?i[n]=s:r._head=s,s?s[t]=i:r._tail=i,e[t]=null,e[n]=null},Ws=(r,e,t,n="_prev",i="_next")=>{let s=r._tail;for(;s&&t&&t(s,e);)s=s[n];const a=s?s[i]:r._head;s?s[i]=e:r._head=e,a?a[n]=e:r._tail=e,e[n]=s,e[i]=a};const vw=(r,e,t)=>{const n=r.style.transform;let i;if(n){const s=r[Tu];let a;for(;a=aw.exec(n);){const o=a[1],l=a[2].slice(1,-1);s[o]=l,o===e&&(i=l,t&&(t[e]=l))}}return n&&!rt(i)?i:Ir(e,"scale")?"1":Ir(e,"rotate")||Ir(e,"skew")?"0deg":"0px"};const xw=r=>{const e=tw.exec(r)||nw.exec(r),t=rt(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],t]},yw=r=>{const e=r.length,t=e===4||e===5;return[+("0x"+r[1]+r[t?1:2]),+("0x"+r[t?2:3]+r[t?2:4]),+("0x"+r[t?3:5]+r[t?3:6]),e===5||e===9?+(+("0x"+r[t?4:7]+r[t?4:8])/255).toFixed(3):1]},wh=(r,e,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*(2/3-t)*6:r),Sw=r=>{const e=iw.exec(r)||rw.exec(r),t=+e[1]/360,n=+e[2]/100,i=+e[3]/100,s=rt(e[4])?1:+e[4];let a,o,l;if(n===0)a=o=l=i;else{const c=i<.5?i*(1+n):i+n-i*n,u=2*i-c;a=jt(wh(u,c,t+1/3)*255,0),o=jt(wh(u,c,t)*255,0),l=jt(wh(u,c,t-1/3)*255,0)}return[a,o,l,s]},Mw=r=>tv(r)?xw(r):ev(r)?yw(r):nv(r)?Sw(r):[0,0,0,1];const vn=(r,e)=>rt(r)?e:r,Tr=(r,e,t,n,i)=>{let s;if(ms(r))s=()=>{const a=r(e,t,n);return isNaN(+a)?a||0:+a};else if(ps(r)&&Ir(r,J1))s=()=>{const a=r.match(lw),o=a[1],l=a[2];let c=getComputedStyle(e)?.getPropertyValue(o);return(!c||c.trim()===cs)&&l&&(c=l.trim()),c||0};else return r;return i&&(i.func=s),s()},sv=(r,e)=>r[Mu]?r[ep]&&fw(r,e)?Ht.ATTRIBUTE:K0.includes(e)||$0.get(e)?Ht.TRANSFORM:Ir(e,"--")?Ht.CSS_VAR:e in r.style?Ht.CSS:e in r?Ht.OBJECT:Ht.ATTRIBUTE:Ht.OBJECT,yg=(r,e,t)=>{const n=r.style[e];n&&t&&(t[e]=n);const i=n||getComputedStyle(r[Z1]||r).getPropertyValue(e);return i==="auto"?"0":i},Ua=(r,e,t,n)=>{const i=rt(t)?sv(r,e):t;return i===Ht.OBJECT?r[e]||0:i===Ht.ATTRIBUTE?r.getAttribute(e):i===Ht.TRANSFORM?vw(r,e,n):i===Ht.CSS_VAR?yg(r,e,n).trimStart():yg(r,e,n)},zc=(r,e,t)=>t==="-"?r-e:t==="+"?r+e:r*e,np=()=>({t:xt.NUMBER,n:0,u:null,o:null,d:null,s:null}),Bi=(r,e)=>{if(e.t=xt.NUMBER,e.n=0,e.u=null,e.o=null,e.d=null,e.s=null,!r)return e;const t=+r;if(isNaN(t)){let n=r;n[1]==="="&&(e.o=n[0],n=n.slice(2));const i=n.includes(" ")?!1:Z0.exec(n);if(i)return e.t=xt.UNIT,e.n=+i[1],e.u=i[2],e;if(e.o)return e.n=+n,e;if(uw(n))return e.t=xt.COLOR,e.d=Mw(n),e;{const s=n.match(gg);return e.t=xt.COMPLEX,e.d=s?s.map(Number):[],e.s=n.split(gg)||[],e}}else return e.n=t,e},Sg=(r,e)=>(e.t=r._valueType,e.n=r._toNumber,e.u=r._unit,e.o=null,e.d=In(r._toNumbers),e.s=In(r._strings),e),Ps=np();const Vc=(r,e,t,n,i)=>{const s=r.parent,a=r.duration,o=r.completed,l=r.iterationDuration,c=r.iterationCount,u=r._currentIteration,h=r._loopDelay,f=r._reversed,d=r._alternate,m=r._hasChildren,_=r._delay,p=r._currentTime,g=_+l,x=e-_,T=qn(p,-_,a),y=qn(x,-_,a),b=x-p,w=y>0,A=y>=a,v=a<=St,M=i===pi.FORCE;let N=0,C=x,L=0;if(c>1){const U=~~(y/(l+(A?0:h)));r._currentIteration=qn(U,0,c),A&&r._currentIteration--,N=r._currentIteration%2,C=y%(l+h)||0}const k=f^(d&&N),H=r._ease;let O=A?k?0:a:k?l-C:C;H&&(O=l*H(O/l)||0);const B=(s?s.backwards:x<p)?!k:!!k;if(r._currentTime=x,r._iterationTime=O,r.backwards=B,w&&!r.began?(r.began=!0,!t&&!(s&&(B||!s.began))&&r.onBegin(r)):x<=0&&(r.began=!1),!t&&!m&&w&&r._currentIteration!==u&&r.onLoop(r),M||i===pi.AUTO&&(e>=_&&e<=g||e<=_&&T>_||e>=g&&T!==a)||O>=g&&T!==a||O<=_&&T>0||e<=T&&T===a&&o||A&&!o&&v){if(w&&(r.computeDeltaTime(T),t||r.onBeforeUpdate(r)),!m){const U=M||(B?b*-1:b)>=_n.tickThreshold,j=r._offset+(s?s._offset:0)+_+O;let V=r._head,P,ae,ne,ve,Pe=0;for(;V;){const Ne=V._composition,X=V._currentTime,ee=V._changeDuration,re=V._absoluteStartTime+V._changeDuration,Re=V._nextRep,Ae=V._prevRep,Me=Ne!==Kn.none;if((U||(X!==ee||j<=re+(Re?Re._delay:0))&&(X!==0||j>=V._absoluteStartTime))&&(!Me||!V._isOverridden&&(!V._isOverlapped||j<=re)&&(!Re||Re._isOverridden||j<=Re._absoluteStartTime)&&(!Ae||Ae._isOverridden||j>=Ae._absoluteStartTime+Ae._changeDuration+V._delay))){const Ke=V._currentTime=qn(O-V._startTime,0,ee),he=V._ease(Ke/V._updateDuration),De=V._modifier,Ve=V._valueType,Ce=V._tweenType,G=Ce===Ht.OBJECT,I=Ve===xt.NUMBER,tt=I&&G||he===0||he===1?-1:_n.precision;let ze,Oe;if(I)ze=Oe=De(jt(Cs(V._fromNumber,V._toNumber,he),tt));else if(Ve===xt.UNIT)Oe=De(jt(Cs(V._fromNumber,V._toNumber,he),tt)),ze=`${Oe}${V._unit}`;else if(Ve===xt.COLOR){const oe=V._fromNumbers,R=V._toNumbers,S=jt(qn(De(Cs(oe[0],R[0],he)),0,255),0),F=jt(qn(De(Cs(oe[1],R[1],he)),0,255),0),Z=jt(qn(De(Cs(oe[2],R[2],he)),0,255),0),J=qn(De(jt(Cs(oe[3],R[3],he),tt)),0,1);if(ze=`rgba(${S},${F},${Z},${J})`,Me){const $=V._numbers;$[0]=S,$[1]=F,$[2]=Z,$[3]=J}}else if(Ve===xt.COMPLEX){ze=V._strings[0];for(let oe=0,R=V._toNumbers.length;oe<R;oe++){const S=De(jt(Cs(V._fromNumbers[oe],V._toNumbers[oe],he),tt)),F=V._strings[oe+1];ze+=`${F?S+F:S}`,Me&&(V._numbers[oe]=S)}}if(Me&&(V._number=Oe),!n&&Ne!==Kn.blend){const oe=V.property;P=V.target,G?P[oe]=ze:Ce===Ht.ATTRIBUTE?P.setAttribute(oe,ze):(ae=P.style,Ce===Ht.TRANSFORM?(P!==ne&&(ne=P,ve=P[Tu]),ve[oe]=ze,Pe=1):Ce===Ht.CSS?ae[oe]=ze:Ce===Ht.CSS_VAR&&ae.setProperty(oe,ze)),w&&(L=1)}else V._value=ze}if(Pe&&V._renderTransforms){let Ke=cs;for(let he in ve)Ke+=`${j0[he]}${ve[he]}) `;ae.transform=Ke,Pe=0}V=V._next}!t&&L&&r.onRender(r)}!t&&w&&r.onUpdate(r)}return s&&v?!t&&(s.began&&!B&&x>0&&!o||B&&x<=St&&o)&&(r.onComplete(r),r.completed=!B):w&&A?c===1/0?r._startTime+=r.duration:r._currentIteration>=c-1&&(r.paused=!0,!o&&!m&&(r.completed=!0,!t&&!(s&&(B||!s.began))&&(r.onComplete(r),r._resolve(r)))):r.completed=!1,L},Os=(r,e,t,n,i)=>{const s=r._currentIteration;if(Vc(r,e,t,n,i),r._hasChildren){const a=r,o=a.backwards,l=n?e:a._iterationTime,c=go();let u=0,h=!0;if(!n&&a._currentIteration!==s){const f=a.iterationDuration;Bt(a,d=>{if(!o)!d.completed&&!d.backwards&&d._currentTime<d.iterationDuration&&Vc(d,f,t,1,pi.FORCE),d.began=!1,d.completed=!1;else{const m=d.duration,_=d._offset+d._delay,p=_+m;!t&&m<=St&&(!_||p===f)&&d.onComplete(d)}}),t||a.onLoop(a)}Bt(a,f=>{const d=jt((l-f._offset)*f._speed,12),m=f._fps<a._fps?f.requestTick(c):i;u+=Vc(f,d,t,n,m),!f.completed&&h&&(h=!1)},o),!t&&u&&a.onRender(a),(h||o)&&a._currentTime>=a.duration&&(a.paused=!0,a.completed||(a.completed=!0,t||(a.onComplete(a),a._resolve(a))))}};const Mg={},av=(r,e,t)=>{if(t===Ht.TRANSFORM){const n=$0.get(r);return n||r}else if(t===Ht.CSS||t===Ht.ATTRIBUTE&&tp(e)&&r in e.style){const n=Mg[r];if(n)return n;{const i=r&&Q0(r);return Mg[r]=i,i}}else return r},ip=r=>{if(r._hasChildren)Bt(r,ip,!0);else{const e=r;e.pause(),Bt(e,t=>{const n=t.property,i=t.target;if(i[Mu]){const s=i.style,a=t._inlineValue,o=Ka(a)||a===cs;if(t._tweenType===Ht.TRANSFORM){const l=i[Tu];if(o?delete l[n]:l[n]=a,t._renderTransforms)if(!Object.keys(l).length)s.removeProperty("transform");else{let c=cs;for(let u in l)c+=j0[u]+l[u]+") ";s.transform=c}}else o?s.removeProperty(Q0(n)):s[n]=a;e._tail===t&&e.targets.forEach(l=>{l.getAttribute&&l.getAttribute("style")===cs&&l.removeAttribute("style")})}})}return r};class ov{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._lastTickTime=e,this._startTime=e,this._lastTime=e,this._scheduledTime=0,this._frameDuration=mo/nd,this._fps=nd,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){const t=this._frameDuration,n=+e,i=n<St?St:n,s=mo/i;i>au.frameRate&&(au.frameRate=i),this._fps=i,this._frameDuration=s,this._scheduledTime+=s-t}get speed(){return this._speed}set speed(e){const t=+e;this._speed=t<St?St:t}requestTick(e){const t=this._scheduledTime;if(this._lastTickTime=e,e<t)return pi.NONE;const n=this._frameDuration,i=e-t;return this._scheduledTime+=i<n?n:i,pi.AUTO}computeDeltaTime(e){const t=e-this._lastTime;return this.deltaTime=t,this._lastTime=e,t}}const Za={animation:null,update:Ai},Tw=r=>{let e=Za.animation;return e||(e={duration:St,computeDeltaTime:Ai,_offset:0,_delay:0,_head:null,_tail:null},Za.animation=e,Za.update=()=>{r.forEach(t=>{for(let n in t){const i=t[n],s=i._head;if(s){const a=s._valueType,o=a===xt.COMPLEX||a===xt.COLOR?In(s._fromNumbers):null;let l=s._fromNumber,c=i._tail;for(;c&&c!==s;){if(o)for(let u=0,h=c._numbers.length;u<h;u++)o[u]+=c._numbers[u];else l+=c._number;c=c._prevAdd}s._toNumber=l,s._toNumbers=o}}}),Vc(e,1,1,0,pi.FORCE)}),e};const lv=Vr?requestAnimationFrame:setImmediate,bw=Vr?cancelAnimationFrame:clearImmediate;class Ew extends ov{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=au,this.paused=!0,this.reqId=0}update(){const e=this._currentTime=go();if(this.requestTick(e)){this.computeDeltaTime(e);const t=this._speed,n=this._fps;let i=this._head;for(;i;){const s=i._next;i.paused?(Gs(this,i),this._hasChildren=!!this._tail,i._running=!1,i.completed&&!i._cancelled&&i.cancel()):Os(i,(e-i._startTime)*i._speed*t,0,0,i._fps<n?i.requestTick(e):pi.AUTO),i=s}Za.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(go()),this.reqId=lv(cv)),this}pause(){if(this.reqId)return this.paused=!0,Aw()}resume(){if(this.paused)return this.paused=!1,Bt(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(_n.timeScale===1?1:mo)}set speed(e){this._speed=e*_n.timeScale,Bt(this,t=>t.speed=t._speed)}get timeUnit(){return _n.timeScale===1?"ms":"s"}set timeUnit(e){const n=e==="s",i=n?.001:1;if(_n.timeScale!==i){_n.timeScale=i,_n.tickThreshold=200*i;const s=n?.001:mo;this.defaults.duration*=s,this._speed*=s}}get precision(){return _n.precision}set precision(e){_n.precision=e}}const Tn=(()=>{const r=new Ew(go());return Vr&&(J0.engine=r,wl.addEventListener("visibilitychange",()=>{r.pauseOnDocumentHidden&&(wl.hidden?r.pause():r.resume())})),r})(),cv=()=>{Tn._head?(Tn.reqId=lv(cv),Tn.update()):Tn.reqId=0},Aw=()=>(bw(Tn.reqId),Tn.reqId=0,Tn);const ou={_rep:new WeakMap,_add:new Map},rp=(r,e,t="_rep")=>{const n=ou[t];let i=n.get(r);return i||(i={},n.set(r,i)),i[e]?i[e]:i[e]={_head:null,_tail:null}},ww=(r,e)=>r._isOverridden||r._absoluteStartTime>e._absoluteStartTime,Hc=r=>{r._isOverlapped=1,r._isOverridden=1,r._changeDuration=St,r._currentTime=St},uv=(r,e)=>{const t=r._composition;if(t===Kn.replace){const n=r._absoluteStartTime;Ws(e,r,ww,"_prevRep","_nextRep");const i=r._prevRep;if(i){const s=i.parent,a=i._absoluteStartTime+i._changeDuration;if(r.parent.id!==s.id&&s.iterationCount>1&&a+(s.duration-s.iterationDuration)>n){Hc(i);let c=i._prevRep;for(;c&&c.parent.id===s.id;)Hc(c),c=c._prevRep}const o=n-r._delay;if(a>o){const c=i._startTime,u=a-(c+i._updateDuration),h=jt(o-u-c,12);i._changeDuration=h,i._currentTime=h,i._isOverlapped=1,h<St&&Hc(i)}let l=!0;if(Bt(s,c=>{c._isOverlapped||(l=!1)}),l){const c=s.parent;if(c){let u=!0;Bt(c,h=>{h!==s&&Bt(h,f=>{f._isOverlapped||(u=!1)})}),u&&c.cancel()}else s.cancel()}}}else if(t===Kn.blend){const n=rp(r.target,r.property,"_add"),i=Tw(ou._add);let s=n._head;s||(s={...r},s._composition=Kn.replace,s._updateDuration=St,s._startTime=0,s._numbers=In(r._fromNumbers),s._number=0,s._next=null,s._prev=null,Ws(n,s),Ws(i,s));const a=r._toNumber;if(r._fromNumber=s._fromNumber-a,r._toNumber=0,r._numbers=In(r._fromNumbers),r._number=0,s._fromNumber=a,r._toNumbers){const o=In(r._toNumbers);o&&o.forEach((l,c)=>{r._fromNumbers[c]=s._fromNumbers[c]-l,r._toNumbers[c]=0}),s._fromNumbers=o}Ws(n,r,null,"_prevAdd","_nextAdd")}return r},hv=r=>{const e=r._composition;if(e!==Kn.none){const t=r.target,n=r.property,a=ou._rep.get(t)[n];if(Gs(a,r,"_prevRep","_nextRep"),e===Kn.blend){const o=ou._add,l=o.get(t);if(!l)return;const c=l[n],u=Za.animation;Gs(c,r,"_prevAdd","_nextAdd");const h=c._head;if(h&&h===c._tail){Gs(c,h,"_prevAdd","_nextAdd"),Gs(u,h);let f=!0;for(let d in l)if(l[d]._head){f=!1;break}f&&o.delete(t)}}}return r},Tg=(r,e,t)=>{let n=!1;return Bt(e,i=>{const s=i.target;if(r.includes(s)){const a=i.property,o=i._tweenType,l=av(t,s,o);(!l||l&&l===a)&&(i.parent._tail===i&&i._tweenType===Ht.TRANSFORM&&i._prev&&i._prev._tweenType===Ht.TRANSFORM&&(i._prev._renderTransforms=1),Gs(e,i),hv(i),n=!0)}},!0),n},fv=(r,e,t)=>{const n=e||Tn;let i;if(n._hasChildren){let s=0;Bt(n,a=>{if(!a._hasChildren)if(i=Tg(r,a,t),i&&!a._head)a.cancel(),Gs(n,a);else{const l=a._offset+a._delay+a.duration;l>s&&(s=l)}a._head?fv(r,a,t):a._hasChildren=!1},!0),rt(n.iterationDuration)||(n.iterationDuration=s)}else i=Tg(r,n,t);i&&!n._head&&(n._hasChildren=!1,n.cancel&&n.cancel())};const bg=r=>(r.paused=!0,r.began=!1,r.completed=!1,r),rd=r=>(r._cancelled&&(r._hasChildren?Bt(r,rd):Bt(r,e=>{e._composition!==Kn.none&&uv(e,rp(e.target,e.property))}),r._cancelled=0),r);let Eg=0;class sp extends ov{constructor(e={},t=null,n=0){super(0),++Eg;const{id:i,delay:s,duration:a,reversed:o,alternate:l,loop:c,loopDelay:u,autoplay:h,frameRate:f,playbackRate:d,onComplete:m,onLoop:_,onPause:p,onBegin:g,onBeforeUpdate:x,onUpdate:T}=e,y=t?0:Tn._lastTickTime,b=t?t.defaults:_n.defaults,w=ms(s)||rt(s)?b.delay:+s,A=ms(a)||rt(a)?1/0:+a,v=vn(c,b.loop),M=vn(u,b.loopDelay);let N=v===!0||v===1/0||v<0?1/0:v+1;if(_c){const L=N===1/0;if(_c.register(this,e,L)&&L){const H=l?2:1,O=t?_c.maxNestedInfiniteLoops:_c.maxInfiniteLoops;N=Math.max(O,H)}}let C=0;t?C=n:(Tn.reqId||Tn.requestTick(go()),C=(Tn._lastTickTime-Tn._startTime)*_n.timeScale),this.id=rt(i)?Eg:i,this.parent=t,this.duration=Eu((A+M)*N-M)||St,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=g||b.onBegin,this.onBeforeUpdate=x||b.onBeforeUpdate,this.onUpdate=T||b.onUpdate,this.onLoop=_||b.onLoop,this.onPause=p||b.onPause,this.onComplete=m||b.onComplete,this.iterationDuration=A,this.iterationCount=N,this._autoplay=t?!1:vn(h,b.autoplay),this._offset=C,this._delay=w,this._loopDelay=M,this._iterationTime=0,this._currentIteration=0,this._resolve=Ai,this._running=!1,this._reversed=+vn(o,b.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=vn(l,b.alternate),this._prev=null,this._next=null,this._lastTickTime=y,this._startTime=y,this._lastTime=y,this._fps=vn(f,b.frameRate),this._speed=vn(d,b.playbackRate)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return qn(jt(this._currentTime,_n.precision),-this._delay,this.duration)}set currentTime(e){const t=this.paused;this.pause().seek(+e),t||this.resume()}get iterationCurrentTime(){return qn(jt(this._iterationTime,_n.precision),0,this.iterationDuration)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return qn(jt(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return qn(jt(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){const t=this.iterationDuration;this.currentTime=t*this._currentIteration+t*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*qn(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return rd(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,Os(this,0,1,~~e,pi.FORCE),bg(this),this._hasChildren&&Bt(this,bg),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&Os(this,this.duration,1,~~e,pi.FORCE),this.reset(e);const t=this._autoplay;return t===!0?this.resume():t&&!rt(t.linked)&&t.link(this),this}resetTime(){const e=1/(this._speed*Tn._speed);return this._startTime=go()-(this._currentTime+this._delay)*e,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=St&&!this._hasChildren?Os(this,St,0,0,pi.FORCE):(this._running||(Ws(Tn,this),Tn._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,Tn.wake()),this):this}restart(){return this.reset().resume()}seek(e,t=0,n=0){rd(this),this.completed=!1;const i=this.paused;return this.paused=!0,Os(this,e+this._delay,~~t,~~n,pi.AUTO),i?this:this.resume()}alternate(){const e=this._reversed,t=this.iterationCount,n=this.iterationDuration,i=t===1/0?id(td/n):t;return this._reversed=+(this._alternate&&!(i%2)?e:!e),t===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(n*i-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?Bt(this,e=>e.cancel(),!0):Bt(this,hv),this._cancelled=1,this.pause()}stretch(e){const t=this.duration,n=ja(e);if(t===n)return this;const i=e/t,s=e<=St;return this.duration=s?St:n,this.iterationDuration=s?St:ja(this.iterationDuration*i),this._offset*=i,this._delay*=i,this._loopDelay*=i,this}revert(){Os(this,0,1,0,pi.AUTO);const e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(e=0){return this.seek(this.duration,e).cancel()}then(e=Ai){const t=this.then,n=()=>{this.then=null,e(this),this.then=t,this._resolve=Ai};return new Promise(i=>(this._resolve=()=>i(n()),this.completed&&this._resolve(),this))}}function Ag(r){const e=ps(r)?cw.root.querySelectorAll(r):r;if(e instanceof NodeList||e instanceof HTMLCollection)return e}function lu(r){if(Ka(r))return[];if(!Vr)return na(r)&&r.flat(1/0)||[r];if(na(r)){const t=r.flat(1/0),n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];if(!Ka(a)){const o=Ag(a);if(o)for(let l=0,c=o.length;l<c;l++){const u=o[l];if(!Ka(u)){let h=!1;for(let f=0,d=n.length;f<d;f++)if(n[f]===u){h=!0;break}h||n.push(u)}}else{let l=!1;for(let c=0,u=n.length;c<u;c++)if(n[c]===a){l=!0;break}l||n.push(a)}}}return n}const e=Ag(r);return e?Array.from(e):[r]}function dv(r){const e=lu(r),t=e.length;if(t)for(let n=0;n<t;n++){const i=e[n];if(!i[mg]){i[mg]=!0;const s=tp(i);(i.nodeType||s)&&(i[Mu]=!0,i[ep]=s,i[Tu]={})}}return e}const Rh={deg:1,rad:180/bu,turn:360},wg={},Rg=(r,e,t,n=!1)=>{const i=e.u,s=e.n;if(e.t===xt.UNIT&&i===t)return e;const a=s+i+t,o=wg[a];if(!rt(o)&&!n)e.n=o;else{let l;if(i in Rh)l=s*Rh[i]/Rh[t];else{const u=r.cloneNode(),h=r.parentNode,f=h&&h!==wl?h:wl.body;f.appendChild(u);const d=u.style;d.width=100+i;const m=u.offsetWidth||100;d.width=100+t;const _=u.offsetWidth||100,p=m/_;f.removeChild(u),l=p*s}e.n=l,wg[a]=l}return e.t,xt.UNIT,e.u=t,e};const gs=r=>r;const Fo=(r=1.68)=>e=>Na(e,+r),sd={in:r=>e=>r(e),out:r=>e=>1-r(1-e),inOut:r=>e=>e<.5?r(e*2)/2:1-r(e*-2+2)/2,outIn:r=>e=>e<.5?(1-r(1-e*2))/2:(r(e*2-1)+1)/2},Rw=bu/2,Cg=bu*2,Pg={[cs]:Fo,Quad:Fo(2),Cubic:Fo(3),Quart:Fo(4),Quint:Fo(5),Sine:r=>1-pw(r*Rw),Circ:r=>1-iv(1-r*r),Expo:r=>r?Na(2,10*r-10):0,Bounce:r=>{let e,t=4;for(;r<((e=Na(2,--t))-1)/11;);return 1/Na(4,3-t)-7.5625*Na((e*3-2)/22-r,2)},Back:(r=1.7)=>e=>(+r+1)*e*e*e-+r*e*e,Elastic:(r=1,e=.3)=>{const t=qn(+r,1,10),n=qn(+e,St,2),i=n/Cg*mw(1/t),s=Cg/n;return a=>a===0||a===1?a:-t*Na(2,-10*(1-a))*dw((1-a-i)*s)}},Ch=(()=>{const r={linear:gs,none:gs};for(let e in sd)for(let t in Pg){const n=Pg[t],i=sd[e];r[e+t]=t===cs||t==="Back"||t==="Elastic"?(s,a)=>i(n(s,a)):i(n)}return r})(),vc={linear:gs,none:gs},Cw=r=>{if(vc[r])return vc[r];if(r.indexOf("(")<=-1){const t=sd[r]||r.includes("Back")||r.includes("Elastic")?Ch[r]():Ch[r];return t?vc[r]=t:gs}else{const e=r.slice(0,-1).split("("),t=Ch[e[0]];return t?vc[r]=t(...e[1].split(",")):gs}},Dg=["steps(","irregular(","linear(","cubicBezier("],cu=r=>{if(ps(r)){for(let t=0,n=Dg.length;t<n;t++)if(Ir(r,Dg[t]))return console.warn(`String syntax for \`ease: "${r}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${r}\``),gs}return ms(r)?r:ps(r)?Cw(r):gs};const Ye=np(),st=np(),Ca={},xc={func:null},Ph={func:null},yc=[null],Pa=[null,null],Sc={to:null};let Pw=0,Lg=0,Zr,Ki;const Dw=(r,e)=>{const t={};if(na(r)){const n=[].concat(...r.map(i=>Object.keys(i))).filter(kc);for(let i=0,s=n.length;i<s;i++){const a=n[i],o=r.map(l=>{const c={};for(let u in l){const h=l[u];kc(u)?u===a&&(c.to=h):c[u]=h}return c});t[a]=o}}else{const n=vn(e.duration,_n.defaults.duration);Object.keys(r).map(s=>({o:parseFloat(s)/100,p:r[s]})).sort((s,a)=>s.o-a.o).forEach(s=>{const a=s.o,o=s.p;for(let l in o)if(kc(l)){let c=t[l];c||(c=t[l]=[]);const u=a*n;let h=c.length,f=c[h-1];const d={to:o[l]};let m=0;for(let _=0;_<h;_++)m+=c[_].duration;h===1&&(d.from=f.to),o.ease&&(d.ease=o.ease),d.duration=u-(h?m:0),c.push(d)}return s});for(let s in t){const a=t[s];let o;for(let l=0,c=a.length;l<c;l++){const u=a[l],h=u.ease;u.ease=o||void 0,o=h}a[0].duration||a.shift()}}return t};class Lw extends sp{constructor(e,t,n,i,s=!1,a=0,o=0){super(t,n,i),++Lg;const l=dv(e),c=l.length,u=t.keyframes,h=u?rv(Dw(u,t),t):t,{id:f,delay:d,duration:m,ease:_,playbackEase:p,modifier:g,composition:x,onRender:T}=h,y=n?n.defaults:_n.defaults,b=vn(_,y.ease),w=vn(p,y.playbackEase),A=w?cu(w):null,v=!rt(b.ease),M=v?b.ease:vn(_,A?"linear":y.ease),N=v?b.settlingDuration:vn(m,y.duration),C=vn(d,y.delay),L=g||y.modifier,k=rt(x)&&c>=mo?Kn.none:rt(x)?y.composition:x,H=this._offset+(n?n._offset:0);v&&(b.parent=this);let O=NaN,B=NaN,U=0,j=0;for(let V=0;V<c;V++){const P=l[V],ae=a||V,ne=o||c;let ve=NaN,Pe=NaN;for(let Ne in h)if(kc(Ne)){const X=sv(P,Ne),ee=av(Ne,P,X);let re=h[Ne];const Re=na(re);if(s&&!Re&&(Pa[0]=re,Pa[1]=re,re=Pa),Re){const Ve=re.length,Ce=!ul(re[0]);Ve===2&&Ce?(Sc.to=re,yc[0]=Sc,Zr=yc):Ve>2&&Ce?(Zr=[],re.forEach((G,I)=>{I?I===1?(Pa[1]=G,Zr.push(Pa)):Zr.push(G):Pa[0]=G})):Zr=re}else yc[0]=re,Zr=yc;let Ae=null,Me=null,Ke=NaN,he=0,De=0;for(let Ve=Zr.length;De<Ve;De++){const Ce=Zr[De];ul(Ce)?Ki=Ce:(Sc.to=Ce,Ki=Sc),xc.func=null,Ph.func=null;const G=Tr(Ki.to,P,ae,ne,xc);let I;ul(G)&&!rt(G.to)?(Ki=G,I=G.to):I=G;const tt=Tr(Ki.from,P,ae,ne),ze=Ki.ease||M,Oe=Tr(ze,P,ae,ne),oe=ms(Oe)||ps(Oe)?Oe:ze,R=!rt(oe)&&!rt(oe.ease),S=R?oe.ease:oe,F=R?oe.settlingDuration:Tr(vn(Ki.duration,Ve>1?Tr(N,P,ae,ne)/Ve:N),P,ae,ne),Z=Tr(vn(Ki.delay,De?0:C),P,ae,ne),J=Tr(vn(Ki.composition,k),P,ae,ne),$=$a(J)?J:Kn[J],me=Ki.modifier||L,ue=!rt(tt),Le=!rt(I),xe=na(I),ce=xe||ue&&Le,le=Me?he+Z:Z,ye=jt(H+le,12);!j&&(ue||xe)&&(j=1);let fe=Me;if($!==Kn.none){Ae||(Ae=rp(P,ee));let te=Ae._head;for(;te&&!te._isOverridden&&te._absoluteStartTime<=ye;)if(fe=te,te=te._nextRep,te&&te._absoluteStartTime>=ye)for(;te;)Hc(te),te=te._nextRep}if(ce){Bi(xe?Tr(I[0],P,ae,ne,Ph):tt,Ye),Bi(xe?Tr(I[1],P,ae,ne,xc):I,st);const te=Ua(P,ee,X,Ca);Ye.t===xt.NUMBER&&(fe?fe._valueType===xt.UNIT&&(Ye.t=xt.UNIT,Ye.u=fe._unit):(Bi(te,Ps),Ps.t===xt.UNIT&&(Ye.t=xt.UNIT,Ye.u=Ps.u)))}else Le?Bi(I,st):Me?Sg(Me,st):Bi(n&&fe&&fe.parent.parent===n?fe._value:Ua(P,ee,X,Ca),st),ue?Bi(tt,Ye):Me?Sg(Me,Ye):Bi(n&&fe&&fe.parent.parent===n?fe._value:Ua(P,ee,X,Ca),Ye);if(Ye.o&&(Ye.n=zc(fe?fe._toNumber:Bi(Ua(P,ee,X,Ca),Ps).n,Ye.n,Ye.o)),st.o&&(st.n=zc(Ye.n,st.n,st.o)),Ye.t!==st.t){if(Ye.t===xt.COMPLEX||st.t===xt.COMPLEX){const te=Ye.t===xt.COMPLEX?Ye:st,ie=Ye.t===xt.COMPLEX?st:Ye;ie.t=xt.COMPLEX,ie.s=In(te.s),ie.d=te.d.map(()=>ie.n)}else if(Ye.t===xt.UNIT||st.t===xt.UNIT){const te=Ye.t===xt.UNIT?Ye:st,ie=Ye.t===xt.UNIT?st:Ye;ie.t=xt.UNIT,ie.u=te.u}else if(Ye.t===xt.COLOR||st.t===xt.COLOR){const te=Ye.t===xt.COLOR?Ye:st,ie=Ye.t===xt.COLOR?st:Ye;ie.t=xt.COLOR,ie.s=te.s,ie.d=[0,0,0,1]}}if(Ye.u!==st.u){let te=st.u?Ye:st;te=Rg(P,te,st.u?st.u:Ye.u,!1)}if(st.d&&Ye.d&&st.d.length!==Ye.d.length){const te=Ye.d.length>st.d.length?Ye:st,ie=te===Ye?st:Ye;ie.d=te.d.map((pe,se)=>rt(ie.d[se])?0:ie.d[se]),ie.s=In(te.s)}const de=jt(+F||St,12);let qe=Ca[ee];Ka(qe)||(Ca[ee]=null);const D={parent:this,id:Pw++,property:ee,target:P,_value:null,_toFunc:xc.func,_fromFunc:Ph.func,_ease:cu(S),_fromNumbers:In(Ye.d),_toNumbers:In(st.d),_strings:In(st.s),_fromNumber:Ye.n,_toNumber:st.n,_numbers:In(Ye.d),_number:Ye.n,_unit:st.u,_modifier:me,_currentTime:0,_startTime:le,_delay:+Z,_updateDuration:de,_changeDuration:de,_absoluteStartTime:ye,_tweenType:X,_valueType:st.t,_composition:$,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:qe,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};$!==Kn.none&&uv(D,Ae),isNaN(Ke)&&(Ke=D._startTime),he=jt(le+de,12),Me=D,U++,Ws(this,D)}(isNaN(B)||Ke<B)&&(B=Ke),(isNaN(O)||he>O)&&(O=he),X===Ht.TRANSFORM&&(ve=U-De,Pe=U)}if(!isNaN(ve)){let Ne=0;Bt(this,X=>{Ne>=ve&&Ne<Pe&&(X._renderTransforms=1,X._composition===Kn.blend&&Bt(Za.animation,ee=>{ee.id===X.id&&(ee._renderTransforms=1)})),Ne++})}}c||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),B?(Bt(this,V=>{V._startTime-V._delay||(V._delay-=B),V._startTime-=B}),O-=B):B=0,O||(O=St,this.iterationCount=0),this.targets=l,this.id=rt(f)?Lg:f,this.duration=O===St?St:Eu((O+this._loopDelay)*this.iterationCount-this._loopDelay)||St,this.onRender=T||y.onRender,this._ease=A,this._delay=B,this.iterationDuration=O,!this._autoplay&&j&&this.onRender(this)}stretch(e){const t=this.duration;if(t===ja(e))return this;const n=e/t;return Bt(this,i=>{i._updateDuration=ja(i._updateDuration*n),i._changeDuration=ja(i._changeDuration*n),i._currentTime*=n,i._startTime*=n,i._absoluteStartTime*=n}),super.stretch(e)}refresh(){return Bt(this,e=>{const t=e._toFunc,n=e._fromFunc;(t||n)&&(n?(Bi(n(),Ye),Ye.u!==e._unit&&e.target[Mu]&&Rg(e.target,Ye,e._unit,!0),e._fromNumbers=In(Ye.d),e._fromNumber=Ye.n):t&&(Bi(Ua(e.target,e.property,e._tweenType),Ps),e._fromNumbers=In(Ps.d),e._fromNumber=Ps.n),t&&(Bi(t(),st),e._toNumbers=In(st.d),e._strings=In(st.s),e._toNumber=st.o?zc(e._fromNumber,st.n,st.o):st.n))}),this.duration===St&&this.restart(),this}revert(){return super.revert(),ip(this)}then(e){return super.then(e)}}const Iw=(r,e)=>{if(Ir(e,"<")){const t=e[1]==="<",n=r._tail,i=n?n._offset+n._delay:0;return t?i:i+n.duration}},Yo=(r,e)=>{let t=r.iterationDuration;if(t===St&&(t=0),rt(e))return t;if($a(+e))return+e;const n=e,i=r?r.labels:null,s=!Ka(i),a=Iw(r,n),o=!rt(a),l=ow.exec(n);if(l){const c=l[0],u=n.split(c),h=s&&u[0]?i[u[0]]:t,f=o?a:s?h:t,d=+u[1];return zc(f,d,c[0])}else return o?a:s?rt(i[n])?t:i[n]:t};function Nw(r){return Eu((r.iterationDuration+r._loopDelay)*r.iterationCount-r._loopDelay)||St}function Dh(r,e,t,n,i,s){const o=$a(r.duration)&&r.duration<=St?t-St:t;e.composition&&Os(e,o,1,1,pi.AUTO);const l=n?new Lw(n,r,e,o,!1,i,s):new sp(r,e,o);return e.composition&&l.init(!0),Ws(e,l),Bt(e,c=>{const h=c._offset+c._delay+c.duration;h>e.iterationDuration&&(e.iterationDuration=h)}),e.duration=Nw(e),e}let Ig=0;class Uw extends sp{constructor(e={}){super(e,null,0),++Ig,this.id=rt(e.id)?Ig:e.id,this.duration=0,this.labels={};const t=e.defaults,n=_n.defaults;this.defaults=t?rv(t,n):n,this.composition=vn(e.composition,!0),this.onRender=e.onRender||n.onRender;const i=vn(e.playbackEase,n.playbackEase);this._ease=i?cu(i):null,this.iterationDuration=0}add(e,t,n){const i=ul(t),s=ul(e);if(i||s){if(this._hasChildren=!0,i){const a=t;if(ms(n)){const o=n,l=lu(e),c=this.duration,u=this.iterationDuration,h=a.id;let f=0;const d=l.length;l.forEach(m=>{const _={...a};this.duration=c,this.iterationDuration=u,rt(h)||(_.id=h+"-"+f),Dh(_,this,Yo(this,o(m,f,d,this)),m,f,d),f++})}else Dh(a,this,Yo(this,n),e)}else Dh(e,this,Yo(this,t));return this.composition&&this.init(!0),this}}sync(e,t){if(rt(e)||e&&rt(e.pause))return this;e.pause();const n=+(e.effect?e.effect.getTiming().duration:e.duration);return!rt(e)&&!rt(e.persist)&&(e.persist=!0),this.add(e,{currentTime:[0,n],duration:n,delay:0,ease:"linear",playbackEase:"linear"},t)}set(e,t,n){return rt(t)?this:(t.duration=St,t.composition=Kn.replace,this.add(e,t,n))}call(e,t){return rt(e)||e&&!ms(e)?this:this.add({duration:0,delay:0,onComplete:()=>e(this)},t)}label(e,t){return rt(e)||e&&!ps(e)?this:(this.labels[e]=Yo(this,t),this)}remove(e,t){return fv(lu(e),this,t),this}stretch(e){const t=this.duration;if(t===ja(e))return this;const n=e/t,i=this.labels;Bt(this,s=>s.stretch(s.duration*n));for(let s in i)i[s]*=n;return super.stretch(e)}refresh(){return Bt(this,e=>{e.refresh&&e.refresh()}),this}revert(){return super.revert(),Bt(this,e=>e.revert,!0),ip(this)}then(e){return super.then(e)}}const Fw=r=>new Uw(r).init();const Ow=(r=0,e=1,t=0)=>{const n=10**t;return Math.floor((Math.random()*(e-r+1/n)+r)*n)/n},Bw=r=>{let e=r.length,t,n;for(;e;)n=Ow(0,--e),t=r[e],r[e]=r[n],r[n]=t;return r};const kw=(r,e={})=>{let t=[],n=0;const i=e.from,s=e.reversed,a=e.ease,o=!rt(a),c=o&&!rt(a.ease)?a.ease:o?cu(a):null,u=e.grid,h=e.axis,f=e.total,d=rt(i)||i===0||i==="first",m=i==="center",_=i==="last",p=i==="random",g=na(r),x=e.use,T=Ah(g?r[0]:r),y=g?Ah(r[1]):0,b=Z0.exec((g?r[1]:r)+cs),w=e.start||0+(g?T:0);let A=d?0:$a(i)?i:0;return(v,M,N,C)=>{const[L]=dv(v),k=rt(f)?N:f,H=rt(x)?!1:ms(x)?x(L,M,k):Ua(L,x),O=$a(H)||ps(H)&&$a(+H)?+H:M;if(m&&(A=(k-1)/2),_&&(A=k-1),!t.length){for(let V=0;V<k;V++){if(!u)t.push(_g(A-V));else{const P=m?(u[0]-1)/2:A%u[0],ae=m?(u[1]-1)/2:id(A/u[0]),ne=V%u[0],ve=id(V/u[0]),Pe=P-ne,Ne=ae-ve;let X=iv(Pe*Pe+Ne*Ne);h==="x"&&(X=-Pe),h==="y"&&(X=-Ne),t.push(X)}n=gw(...t)}c&&(t=t.map(V=>c(V/n)*n)),s&&(t=t.map(V=>h?V<0?V*-1:-V:_g(n-V))),p&&(t=Bw(t))}const B=g?(y-T)/n:T;let j=(C?Yo(C,rt(e.start)?C.iterationDuration:w):w)+(B*jt(t[O],2)||0);return e.modifier&&(j=e.modifier(j)),b&&(j=`${j}${b[2]}`),j}};const zw=r=>{const t=lu(r)[0];return!t||!tp(t)?console.warn(`${r} is not a valid SVGGeometryElement`):t};const Lh=(r,e,t,n,i)=>{const s=t+n,a=i?Math.max(0,Math.min(s,e)):(s%e+e)%e;return r.getPointAtLength(a)},Ih=(r,e,t=0)=>n=>{const i=+r.getTotalLength(),s=n[ep],a=r.getCTM(),o=t===0;return{from:0,to:i,modifier:l=>{const c=t*i,u=l+c;if(e==="a"){const h=Lh(r,i,u,-1,o),f=Lh(r,i,u,1,o);return _w(f.y-h.y,f.x-h.x)*180/bu}else{const h=Lh(r,i,u,0,o);return e==="x"?s||!a?h.x:h.x*a.a+h.y*a.c+a.e:s||!a?h.y:h.x*a.b+h.y*a.d+a.f}}}},Vw=(r,e=0)=>{const t=zw(r);if(t)return{translateX:Ih(t,"x",e),translateY:Ih(t,"y",e),rotate:Ih(t,"a",e)}};Xd.registerPlugin(pt);const Hw=`
  attribute vec4 aRandom;
  attribute vec3 aColor;

  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;

  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vRandom = aRandom;
    vColor = aColor;

    vec3 pos = position * uSpread;
    pos.z *= 10.0;

    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * aRandom.z + 6.28 * aRandom.w) * mix(0.1, 1.5, aRandom.x);
    mPos.y += sin(t * aRandom.y + 6.28 * aRandom.x) * mix(0.1, 1.5, aRandom.w);
    mPos.z += sin(t * aRandom.w + 6.28 * aRandom.y) * mix(0.1, 1.5, aRandom.z);

    vec4 mvPos = viewMatrix * mPos;
    gl_PointSize = uBaseSize / length(mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`,Gw=`
  precision highp float;

  uniform float uTime;

  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    if (d > 0.5) discard;
    gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
  }
`;function Ww(){const r=document.getElementById("app");r.innerHTML=`
    <div class="template-1-page">
      <canvas id="particlesCanvas"></canvas>
      <canvas id="template1Canvas"></canvas>
    </div>
    <section class="template-1-content">
      <video class="content-bg-video" autoplay muted loop playsinline>
        <source src="/assets/videos/background.mp4" type="video/mp4">
      </video>
      <div class="container template-1-content-inner">
        <h1 class="content-heading">
          <span class="content-letter">Y</span><span class="content-letter">O</span><span class="content-letter">U</span><span class="content-letter">R</span><span class="rc-space">&nbsp;</span><span class="content-letter">C</span><span class="content-letter">O</span><span class="content-letter">N</span><span class="content-letter">T</span><span class="content-letter">E</span><span class="content-letter">N</span><span class="content-letter">T</span><span class="rc-space">&nbsp;</span><span class="content-letter">H</span><span class="content-letter">E</span><span class="content-letter">R</span><span class="content-letter">E</span>
        </h1>
        <p>This section appears after the 3D model transition.</p>
      </div>
    </section>
    <section class="template-1-vault">
      <div class="template-1-vault-inner">
        <h1 class="vault-heading">
          <span class="vault-letter">T</span><span class="vault-letter">H</span><span class="vault-letter">E</span><span class="rc-space">&nbsp;</span><span class="vault-letter">V</span><span class="vault-letter">A</span><span class="vault-letter">U</span><span class="vault-letter">L</span><span class="vault-letter">T</span>
        </h1>
        <div class="vault-cards-track">
          <div class="vault-card">
            <div class="vault-card-flipper">
              <div class="vault-card-front"><img src="/assets/images/cloth 1.jpeg" alt=""></div>
              <div class="vault-card-back"><img src="/assets/images/cloth 2.jpeg" alt=""></div>
            </div>
          </div>
          <div class="vault-card">
            <div class="vault-card-flipper">
              <div class="vault-card-front"><img src="/assets/images/cloth 1.jpeg" alt=""></div>
              <div class="vault-card-back"><img src="/assets/images/cloth 2.jpeg" alt=""></div>
            </div>
          </div>
          <div class="vault-card">
            <div class="vault-card-flipper">
              <div class="vault-card-front"><img src="/assets/images/cloth 1.jpeg" alt=""></div>
              <div class="vault-card-back"><img src="/assets/images/cloth 2.jpeg" alt=""></div>
            </div>
          </div>
          <div class="vault-card">
            <div class="vault-card-flipper">
              <div class="vault-card-front"><img src="/assets/images/cloth 3.jpeg" alt=""></div>
              <div class="vault-card-back"><img src="/assets/images/cloth 4.jpeg" alt=""></div>
            </div>
          </div>
          <div class="vault-card">
            <div class="vault-card-flipper">
              <div class="vault-card-front"><img src="/assets/images/cloth 3.jpeg" alt=""></div>
              <div class="vault-card-back"><img src="/assets/images/cloth 4.jpeg" alt=""></div>
            </div>
          </div>
          <div class="vault-card">
            <div class="vault-card-flipper">
              <div class="vault-card-front"><img src="/assets/images/cloth 3.jpeg" alt=""></div>
              <div class="vault-card-back"><img src="/assets/images/cloth 4.jpeg" alt=""></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="template-1-showcase">
      <div class="showcase-first-screen">
        <img class="section-divider" src="/assets/images/divider1.png" alt="">
        <div class="showcase-content"></div>
      </div>
      <div class="showcase-extra">
        <h1 class="raw-culture-heading">
          <span class="rc-letter">R</span><span class="rc-letter">A</span><span class="rc-letter">W</span><span class="rc-space">&nbsp;</span><span class="rc-letter">C</span><span class="rc-letter">U</span><span class="rc-letter">L</span><span class="rc-letter">T</span><span class="rc-letter">U</span><span class="rc-letter">R</span><span class="rc-letter">E</span>
        </h1>
        <div class="stacked-cards">
          <div class="stacked-card"><div class="stacked-card-inner"></div></div>
          <div class="stacked-card"><div class="stacked-card-inner"></div></div>
          <div class="stacked-card"><div class="stacked-card-inner"></div></div>
          <div class="stacked-card"><div class="stacked-card-inner"></div></div>
        </div>
      </div>
    </section>
  `;const e=document.getElementById("template1Canvas"),t=new Dp,n=window.innerWidth/window.innerHeight,i=new Un(45,n,.01,200);i.position.set(0,0,5);const s=new Am({canvas:e,alpha:!0,antialias:!0});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2));const a=new wy(16777215,1);t.add(a);const o=new Af(16777215,1.5);o.position.set(2,3,4),t.add(o);const l=new Af(16777215,.4);l.position.set(-2,1,-3),t.add(l);let c=null,u=null,h;const f=7,d=.8,m=-Math.PI/1.5,_=1,p=0,g=.45,x={z:f,y:p,rotY:m};new NE().load("/assets/models/scene.gltf",ne=>{c=ne.scene;const ve=new dr().setFromObject(c),Pe=ve.getSize(new W),X=2/Math.max(Pe.x,Pe.y,Pe.z);c.scale.setScalar(X);const ee=ve.getCenter(new W);c.position.sub(ee.multiplyScalar(X));const re=c.position.x,Re=c.position.z,Ae=Pe.x*X/2;c.rotation.y=m,t.add(c),u=Xd.timeline({scrollTrigger:{trigger:".template-1-page",start:"top top",end:"bottom bottom",scrub:.8}}),u.to(x,{z:d,y:g,rotY:_,duration:2,ease:"power2.inOut",onUpdate:()=>{i.position.z=x.z,i.position.y=x.y,c&&(c.rotation.y=x.rotY)}});const Me=document.querySelector(".template-1-content"),Ke={angle:0};u.to(Ke,{angle:Math.PI/2,duration:2,ease:"power1.inOut",onUpdate:()=>{if(!c)return;const $=Ke.angle;c.position.x=re+Ae*(1-Math.cos($)),c.position.z=Re-Ae*Math.sin($),c.rotation.y=_+$}}),u.fromTo(Me,{xPercent:-100},{xPercent:0,duration:2,ease:"power2.inOut"},"<");const he=document.querySelectorAll(".content-letter");u.fromTo(he,{y:-120,opacity:0},{y:0,opacity:1,duration:1,stagger:.1,ease:"power3.out"},"<+=0.5");const De=document.querySelector(".template-1-vault");u.fromTo(De,{yPercent:100},{yPercent:0,duration:2,ease:"power2.inOut"});const Ve=document.querySelectorAll(".vault-letter");u.fromTo(Ve,{y:-120,opacity:0},{y:0,opacity:1,duration:1,stagger:.15,ease:"power3.out"},"<+=0.5");const Ce=document.querySelector(".vault-cards-track"),G=Ce.scrollWidth-window.innerWidth;u.fromTo(Ce,{x:window.innerWidth},{x:-G,duration:4,ease:"none"});const I=document.querySelector(".template-1-showcase");u.to(De,{xPercent:-100,duration:2,ease:"power2.inOut"}),u.fromTo(I,{x:window.innerWidth},{x:0,duration:2,ease:"power2.inOut"},"<"),u.to(I,{x:-window.innerWidth,duration:2,ease:"power2.inOut"});const tt=document.querySelectorAll(".rc-letter");u.fromTo(tt,{y:-120,opacity:0},{y:0,opacity:1,duration:1,stagger:.15,ease:"power3.out"},"<+=0.3");const ze=document.querySelectorAll(".stacked-card");u.fromTo(ze,{y:300,opacity:0},{y:0,opacity:1,duration:1.2,stagger:.4,ease:"power3.out"});const Oe="http://www.w3.org/2000/svg",oe=document.createElementNS(Oe,"svg");oe.style.position="absolute",oe.style.top="0",oe.style.left="0",oe.style.width="100%",oe.style.height="100%",oe.style.pointerEvents="none",oe.style.zIndex="50",oe.style.overflow="visible";const R=document.createElementNS(Oe,"path");R.setAttribute("id","cards-motion-path"),R.setAttribute("fill","none"),R.setAttribute("stroke","rgba(255,0,0,0)"),R.setAttribute("stroke-width","2"),oe.appendChild(R),document.querySelector(".showcase-extra")?.appendChild(oe);const S=Fw({autoplay:!1,defaults:{duration:3e3,ease:"inOutSine"}}),F=Vw(R);S.add(ze,{...F,delay:kw(150)});const Z=()=>{const $=document.querySelector(".showcase-extra");if(!$)return;const me=$.getBoundingClientRect(),ue=me.width,Le=me.height,xe=ue/2,ce=Le/2,le=document.querySelectorAll(".rc-letter");if(le.length<2)return;const ye=le[0],fe=le[le.length-1];ye.getBoundingClientRect(),fe.getBoundingClientRect();const de=ye.offsetLeft+ye.offsetWidth/2,qe=fe.offsetLeft+fe.offsetWidth/2,D=ye.offsetTop,te=xe,ie=Le,pe=qe+120,se=D+50,Q=de-120,we=D+50,He=D-150,_t=ie-200,Ee=`M ${te} ${_t} 
                  L ${te} ${ce} 
                  Q ${pe+50} ${ce}, ${pe} ${se} 
                  A ${(pe-Q)/2} ${se-He} 0 0 0 ${Q} ${we}
                  L ${xe} ${ce}`;R.setAttribute("d",Ee)};Z(),window.addEventListener("resize",Z);const J={progress:0};u.to(J,{progress:1,duration:6,ease:"none",onUpdate:()=>{S.seek(S.duration*J.progress)}})});const y=document.getElementById("particlesCanvas"),b=new Dp,w=new Un(15,window.innerWidth/window.innerHeight,.1,100);w.position.set(0,0,20);const A=new Am({canvas:y,alpha:!0,antialias:!0});A.setSize(window.innerWidth,window.innerHeight),A.setPixelRatio(1),A.setClearColor(0,0);const v=200,M=new Float32Array(v*3),N=new Float32Array(v*4),C=new Float32Array(v*3);for(let ne=0;ne<v;ne++){let ve,Pe,Ne,X;do ve=Math.random()*2-1,Pe=Math.random()*2-1,Ne=Math.random()*2-1,X=ve*ve+Pe*Pe+Ne*Ne;while(X>1||X===0);const ee=Math.cbrt(Math.random());M.set([ve*ee,Pe*ee,Ne*ee],ne*3),N.set([Math.random(),Math.random(),Math.random(),Math.random()],ne*4),C.set([1,1,1],ne*3)}const L=new Si;L.setAttribute("position",new yn(M,3)),L.setAttribute("aRandom",new yn(N,4)),L.setAttribute("aColor",new yn(C,3));const k={uTime:{value:0},uSpread:{value:10},uBaseSize:{value:100}},H=new Wi({vertexShader:Hw,fragmentShader:Gw,uniforms:k,transparent:!0,depthTest:!1}),O=new l_(L,H);b.add(O);const B={x:0,y:0},U=ne=>{B.x=ne.clientX/window.innerWidth*2-1,B.y=-(ne.clientY/window.innerHeight*2-1)};window.addEventListener("mousemove",U);let j=0,V=performance.now();function P(){const ne=window.innerWidth,ve=window.innerHeight;i.aspect=ne/ve,i.updateProjectionMatrix(),s.setSize(ne,ve),w.aspect=ne/ve,w.updateProjectionMatrix(),A.setSize(ne,ve)}window.addEventListener("resize",P);function ae(ne){h=requestAnimationFrame(ae);const ve=ne-V;V=ne,j+=ve*.1,k.uTime.value=j*.001,O.position.x=-B.x,O.position.y=-B.y,O.rotation.x=Math.sin(j*2e-4)*.1,O.rotation.y=Math.cos(j*5e-4)*.15,O.rotation.z+=.001,s.render(t,i),A.render(b,w)}return ae(performance.now()),()=>{cancelAnimationFrame(h),window.removeEventListener("resize",P),window.removeEventListener("mousemove",U),u?.scrollTrigger?.kill(),u?.kill(),s.dispose(),A.dispose(),t.clear(),b.clear()}}kr("/",()=>{Ng()});kr("/services",()=>{Ng(),setTimeout(()=>{const r=document.getElementById("services");r&&r.scrollIntoView({behavior:"smooth"})},50)});kr("/about",()=>{_v()});kr("/contact",()=>{vv()});kr("/work",()=>{xv()});kr("/process",()=>{yv()});kr("/privacy",()=>{Sv()});kr("/terms",()=>{Mv()});kr("/template-1",()=>Ww());const pv=document.createElement("style");pv.textContent=".visible { opacity: 1 !important; transform: translateY(0) !important; }";document.head.appendChild(pv);gv();
