(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}})();const u={};let p=null;function r(e,t){u[e]=t}function w(){return window.location.hash.slice(1)||"/"}function g(){const e=w();if(p&&typeof p=="function"&&(p(),p=null),u[e]){p=u[e](),window.scrollTo(0,0);return}for(const[t,i]of Object.entries(u))if(t.includes(":")){const o=t.split("/"),a=e.split("/");if(o.length===a.length){const s={};let h=!0;for(let d=0;d<o.length;d++)if(o[d].startsWith(":"))s[o[d].slice(1)]=a[d];else if(o[d]!==a[d]){h=!1;break}if(h){p=i(s),window.scrollTo(0,0);return}}}u["/"]&&(p=u["/"](),window.scrollTo(0,0))}function k(){window.addEventListener("hashchange",g),g()}function n(){return`
  <nav class="navbar">
    <div class="container navbar-inner">
      <a href="#/" class="logo">Starter<span>.</span></a>
      <ul class="nav-links">
        <li><a href="#/services">Services</a></li>
        <li><a href="#/work">Work</a></li>
        <li><a href="#/process">Process</a></li>
        <li><a href="#/about">About</a></li>
        <li><a href="#/contact" class="btn btn-sm">Contact Us</a></li>
      </ul>
      <button class="menu-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`}function l(){return`
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
  </footer>`}function c(){const e=document.querySelector(".menu-toggle"),t=document.querySelector(".nav-links");e&&t&&(e.addEventListener("click",()=>{t.classList.toggle("open"),e.classList.toggle("active")}),t.querySelectorAll("a").forEach(i=>{i.addEventListener("click",()=>{t.classList.remove("open"),e.classList.remove("active")})}))}function m(){const e=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&(i.target.classList.add("visible"),e.unobserve(i.target))})},{threshold:.15});document.querySelectorAll(".feature-card, .pricing-card, .testimonial-card, .workflow-step, .portfolio-card, .value-card, .team-member").forEach(t=>{t.style.opacity="0",t.style.transform="translateY(24px)",t.style.transition="opacity .5s ease, transform .5s ease",e.observe(t)})}function b(){const e=document.getElementById("app");e.innerHTML=`
    ${n()}

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

    ${l()}
  `,c(),m()}function S(){const e=document.getElementById("app");e.innerHTML=`
    ${n()}

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

    ${l()}
  `,c(),m()}function P(){const e=document.getElementById("app");e.innerHTML=`
    ${n()}

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

    ${l()}
  `,c();const t=document.getElementById("contact-form");t&&t.addEventListener("submit",i=>{i.preventDefault(),alert("Thanks for reaching out! We'll get back to you within 24 hours. (This is a demo)"),t.reset()})}function T(){const e=document.getElementById("app");e.innerHTML=`
    ${n()}

    <!-- Page Header -->
    <header class="page-header">
      <div class="container">
        <h1>Our Work</h1>
        <p>A selection of projects we're proud of. Each one designed, developed, and delivered with care.</p>
      </div>
    </header>

    <!-- Portfolio Grid -->
    <section class="page-section">
      <div class="container">
        <div class="portfolio-grid">

          <a href="#/project/flowstate" class="portfolio-card">
            <div class="portfolio-thumb">Project Screenshot</div>
            <div class="portfolio-info">
              <h3>Flowstate SaaS Platform</h3>
              <p>A complete redesign and rebuild of a project management SaaS used by 10,000+ teams.</p>
              <div class="portfolio-tags">
                <span class="portfolio-tag">SaaS</span>
                <span class="portfolio-tag">UI/UX</span>
                <span class="portfolio-tag">Full-Stack</span>
              </div>
            </div>
          </a>

          <a href="#/project/novatech" class="portfolio-card">
            <div class="portfolio-thumb">Project Screenshot</div>
            <div class="portfolio-info">
              <h3>NovaTech E-Commerce</h3>
              <p>A premium online store for a consumer electronics brand with 300+ SKUs.</p>
              <div class="portfolio-tags">
                <span class="portfolio-tag">E-Commerce</span>
                <span class="portfolio-tag">Shopify</span>
                <span class="portfolio-tag">Branding</span>
              </div>
            </div>
          </a>

          <a href="#/project/pixelworks" class="portfolio-card">
            <div class="portfolio-thumb">Project Screenshot</div>
            <div class="portfolio-info">
              <h3>Pixelworks Portfolio</h3>
              <p>A minimal, animation-rich portfolio site for an award-winning design studio.</p>
              <div class="portfolio-tags">
                <span class="portfolio-tag">Landing Page</span>
                <span class="portfolio-tag">Animation</span>
              </div>
            </div>
          </a>

          <a href="#/project/medconnect" class="portfolio-card">
            <div class="portfolio-thumb">Project Screenshot</div>
            <div class="portfolio-info">
              <h3>MedConnect Health Portal</h3>
              <p>A patient-facing portal with appointment booking, records access, and telehealth integration.</p>
              <div class="portfolio-tags">
                <span class="portfolio-tag">Healthcare</span>
                <span class="portfolio-tag">Web App</span>
              </div>
            </div>
          </a>

          <a href="#/project/finedge" class="portfolio-card">
            <div class="portfolio-thumb">Project Screenshot</div>
            <div class="portfolio-info">
              <h3>FinEdge Dashboard</h3>
              <p>A real-time analytics dashboard for a fintech startup tracking portfolio performance.</p>
              <div class="portfolio-tags">
                <span class="portfolio-tag">Fintech</span>
                <span class="portfolio-tag">Dashboard</span>
                <span class="portfolio-tag">Data Viz</span>
              </div>
            </div>
          </a>

          <a href="#/project/greenroots" class="portfolio-card">
            <div class="portfolio-thumb">Project Screenshot</div>
            <div class="portfolio-info">
              <h3>GreenRoots Non-Profit</h3>
              <p>A donation-driven website for an environmental non-profit, built for speed and accessibility.</p>
              <div class="portfolio-tags">
                <span class="portfolio-tag">Non-Profit</span>
                <span class="portfolio-tag">Accessibility</span>
              </div>
            </div>
          </a>

        </div>
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

    ${l()}
  `,c(),m()}function j(){const e=document.getElementById("app");e.innerHTML=`
    ${n()}

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

    ${l()}
  `,c(),m()}function C(){const e=document.getElementById("app");e.innerHTML=`
    ${n()}

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

    ${l()}
  `,c()}function A(){const e=document.getElementById("app");e.innerHTML=`
    ${n()}

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

    ${l()}
  `,c()}const v={flowstate:{title:"Flowstate SaaS Platform",subtitle:"A complete redesign and rebuild of a project management tool used by 10,000+ teams worldwide.",meta:[{label:"Client",value:"Flowstate Inc."},{label:"Industry",value:"SaaS / Productivity"},{label:"Services",value:"UI/UX Design, Full-Stack Development, SEO"},{label:"Timeline",value:"12 weeks"},{label:"Tech Stack",value:"React, Node.js, PostgreSQL, Tailwind CSS"}],overview:`<h2>Overview</h2>
      <p>Flowstate is a project management SaaS platform that helps distributed teams plan sprints, track progress, and collaborate in real time. After three years of organic growth, their original interface was showing its age — user onboarding drop-off had reached 45%, and the design no longer reflected their brand positioning as a premium tool for modern teams.</p>
      <p>They came to Starter. with a clear mandate: redesign the entire customer-facing experience, rebuild the marketing site, and improve core app performance — all without disrupting their existing user base.</p>

      <h2 style="margin-top:40px;">Goals</h2>
      <ul>
        <li>Reduce onboarding drop-off from 45% to under 20%</li>
        <li>Modernize the visual identity across marketing site and app</li>
        <li>Improve Lighthouse performance score to 90+</li>
        <li>Increase trial-to-paid conversion by 25%</li>
      </ul>

      <h2 style="margin-top:40px;">Approach</h2>
      <p>We started with a two-week discovery sprint: stakeholder interviews, user session recordings, heatmap analysis, and competitive benchmarking. From there we built a comprehensive design system in Figma, prototyped the new onboarding flow, and ran usability tests with 12 participants before writing a single line of production code.</p>
      <p>Development was split into two parallel tracks — marketing site (static, JAMstack) and app UI (React component library). We shipped in iterative two-week cycles, with design QA baked into every sprint.</p>

      <h2 style="margin-top:40px;">Deliverables</h2>
      <ul>
        <li>Complete design system (60+ components in Figma)</li>
        <li>Redesigned marketing website (12 pages)</li>
        <li>Rebuilt onboarding flow with interactive product tour</li>
        <li>Performance optimization (code splitting, image CDN, lazy loading)</li>
        <li>SEO audit and implementation (meta tags, structured data, sitemap)</li>
      </ul>

      <h2 style="margin-top:40px;">Results</h2>
      <p>Within 60 days of launch:</p>
      <ul>
        <li>Onboarding drop-off decreased from 45% to 18%</li>
        <li>Trial-to-paid conversion increased by 32%</li>
        <li>Lighthouse performance score improved from 54 to 96</li>
        <li>Organic traffic grew 28% month-over-month</li>
      </ul>
      <p style="margin-top:20px;"><em>"Starter. didn't just redesign our product — they helped us rethink how we communicate value to our users. The results speak for themselves."</em> — Alex Rivera, CTO, Flowstate</p>`,ctaTitle:"Want results like these?",ctaText:"Let's talk about how we can help your product grow."},_default:{title:"Project Name",subtitle:"A one-line summary of what this project is about.",meta:[{label:"Client",value:"Client Name"},{label:"Industry",value:"Industry"},{label:"Services",value:"UI/UX, Development"},{label:"Timeline",value:"X weeks"},{label:"Tech Stack",value:"HTML, CSS, JS"}],overview:`<h2>Overview</h2>
      <p>Describe the project at a high level. What does the client do? What problem were they facing? Why did they come to Starter.?</p>

      <h2 style="margin-top:40px;">Goals</h2>
      <ul>
        <li>Goal 1 — e.g., Increase conversion rate by 30%</li>
        <li>Goal 2 — e.g., Modernize the brand's digital presence</li>
        <li>Goal 3 — e.g., Improve page load speed to under 2 seconds</li>
      </ul>

      <h2 style="margin-top:40px;">Approach</h2>
      <p>Describe the process you followed: discovery sessions, wireframing, design iterations, tech decisions, etc.</p>

      <h2 style="margin-top:40px;">Deliverables</h2>
      <ul>
        <li>Responsive website (X pages)</li>
        <li>Custom CMS integration</li>
        <li>SEO audit and implementation</li>
        <li>Analytics dashboard setup</li>
      </ul>

      <h2 style="margin-top:40px;">Results</h2>
      <p>Share measurable outcomes: traffic increase, conversion uplift, performance improvements, client testimonial, etc.</p>`,ctaTitle:"Like what you see?",ctaText:"Let's talk about how we can create similar results for your business."}},f={novatech:{title:"NovaTech E-Commerce",subtitle:"A premium online store for a consumer electronics brand with 300+ SKUs."},pixelworks:{title:"Pixelworks Portfolio",subtitle:"A minimal, animation-rich portfolio site for an award-winning design studio."},medconnect:{title:"MedConnect Health Portal",subtitle:"A patient-facing portal with appointment booking, records access, and telehealth integration."},finedge:{title:"FinEdge Dashboard",subtitle:"A real-time analytics dashboard for a fintech startup tracking portfolio performance."},greenroots:{title:"GreenRoots Non-Profit",subtitle:"A donation-driven website for an environmental non-profit, built for speed and accessibility."}};function W(e){const t=e?.slug||"template";let i;v[t]?i=v[t]:f[t]?i={...v._default,...f[t]}:i=v._default;const o=document.getElementById("app");o.innerHTML=`
    ${n()}

    <!-- Page Header -->
    <header class="page-header">
      <div class="container">
        <a href="#/work" class="back-link">&larr; Back to Portfolio</a>
        <h1>${i.title}</h1>
        <p>${i.subtitle}</p>
      </div>
    </header>

    <!-- Project Meta -->
    <section class="page-section">
      <div class="container">
        <div class="project-meta">
          ${i.meta.map(a=>`
            <div class="project-meta-item">
              <strong>${a.label}</strong>
              <span>${a.value}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Details -->
    <section class="page-section">
      <div class="container" style="max-width:720px;">
        ${i.overview}
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container cta-inner">
        <h2>${i.ctaTitle}</h2>
        <p>${i.ctaText}</p>
        <div class="hero-actions">
          <a href="#/contact" class="btn btn-lg">Start a Project</a>
          <a href="#/work" class="btn btn-lg btn-outline">More Projects</a>
        </div>
      </div>
    </section>

    ${l()}
  `,c()}r("/",()=>{b()});r("/services",()=>{b(),setTimeout(()=>{const e=document.getElementById("services");e&&e.scrollIntoView({behavior:"smooth"})},50)});r("/about",()=>{S()});r("/contact",()=>{P()});r("/work",()=>{T()});r("/process",()=>{j()});r("/privacy",()=>{C()});r("/terms",()=>{A()});r("/project/:slug",e=>{W(e)});const y=document.createElement("style");y.textContent=".visible { opacity: 1 !important; transform: translateY(0) !important; }";document.head.appendChild(y);k();
