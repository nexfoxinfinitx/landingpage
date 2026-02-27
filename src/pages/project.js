import { renderNavbar, renderFooter, initMobileMenu } from '../layout.js';

const projects = {
    flowstate: {
        title: 'Flowstate SaaS Platform',
        subtitle: 'A complete redesign and rebuild of a project management tool used by 10,000+ teams worldwide.',
        meta: [
            { label: 'Client', value: 'Flowstate Inc.' },
            { label: 'Industry', value: 'SaaS / Productivity' },
            { label: 'Services', value: 'UI/UX Design, Full-Stack Development, SEO' },
            { label: 'Timeline', value: '12 weeks' },
            { label: 'Tech Stack', value: 'React, Node.js, PostgreSQL, Tailwind CSS' },
        ],
        overview: `<h2>Overview</h2>
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
      <p style="margin-top:20px;"><em>"Starter. didn't just redesign our product — they helped us rethink how we communicate value to our users. The results speak for themselves."</em> — Alex Rivera, CTO, Flowstate</p>`,
        ctaTitle: 'Want results like these?',
        ctaText: "Let's talk about how we can help your product grow.",
    },
    // Generic template data for other projects
    _default: {
        title: 'Project Name',
        subtitle: 'A one-line summary of what this project is about.',
        meta: [
            { label: 'Client', value: 'Client Name' },
            { label: 'Industry', value: 'Industry' },
            { label: 'Services', value: 'UI/UX, Development' },
            { label: 'Timeline', value: 'X weeks' },
            { label: 'Tech Stack', value: 'HTML, CSS, JS' },
        ],
        overview: `<h2>Overview</h2>
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
      <p>Share measurable outcomes: traffic increase, conversion uplift, performance improvements, client testimonial, etc.</p>`,
        ctaTitle: 'Like what you see?',
        ctaText: "Let's talk about how we can create similar results for your business.",
    },
};

// Pretty titles for known slugs
const projectTitles = {
    novatech: { title: 'NovaTech E-Commerce', subtitle: 'A premium online store for a consumer electronics brand with 300+ SKUs.' },
    pixelworks: { title: 'Pixelworks Portfolio', subtitle: 'A minimal, animation-rich portfolio site for an award-winning design studio.' },
    medconnect: { title: 'MedConnect Health Portal', subtitle: 'A patient-facing portal with appointment booking, records access, and telehealth integration.' },
    finedge: { title: 'FinEdge Dashboard', subtitle: 'A real-time analytics dashboard for a fintech startup tracking portfolio performance.' },
    greenroots: { title: 'GreenRoots Non-Profit', subtitle: 'A donation-driven website for an environmental non-profit, built for speed and accessibility.' },
};

export function render(params) {
    const slug = params?.slug || 'template';
    let data;

    if (projects[slug]) {
        data = projects[slug];
    } else if (projectTitles[slug]) {
        data = { ...projects._default, ...projectTitles[slug] };
    } else {
        data = projects._default;
    }

    const app = document.getElementById('app');
    app.innerHTML = `
    ${renderNavbar()}

    <!-- Page Header -->
    <header class="page-header">
      <div class="container">
        <a href="#/work" class="back-link">&larr; Back to Portfolio</a>
        <h1>${data.title}</h1>
        <p>${data.subtitle}</p>
      </div>
    </header>

    <!-- Project Meta -->
    <section class="page-section">
      <div class="container">
        <div class="project-meta">
          ${data.meta.map(m => `
            <div class="project-meta-item">
              <strong>${m.label}</strong>
              <span>${m.value}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Details -->
    <section class="page-section">
      <div class="container" style="max-width:720px;">
        ${data.overview}
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container cta-inner">
        <h2>${data.ctaTitle}</h2>
        <p>${data.ctaText}</p>
        <div class="hero-actions">
          <a href="#/contact" class="btn btn-lg">Start a Project</a>
          <a href="#/work" class="btn btn-lg btn-outline">More Projects</a>
        </div>
      </div>
    </section>

    ${renderFooter()}
  `;

    initMobileMenu();
}
