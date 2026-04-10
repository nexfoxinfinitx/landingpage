import '../styles/about.css';
import { renderNavbar, renderFooter, initMagneticButton } from '../layouts/layout.js';

export function getAboutHtml() {
  return `
    <section id="about" class="about-page">

      <!-- ═══════════ HERO / INTRO ═══════════ -->
      <section class="about-hero">
        <h1 class="about-title">About Us</h1>
        <p class="about-lead">We are a fast-growing digital solutions agency focused on building modern, scalable, and high-performance digital products. From startups to growing businesses, we help turn ideas into impactful digital experiences through strategic thinking, cutting-edge technology, and user-focused design.</p>
        <p class="about-lead-sub">Our approach combines innovation with practicality — we don't just build apps and websites, we create solutions that solve real business problems, improve efficiency, and drive measurable growth.</p>
      </section>

      <!-- ═══════════ WHO WE ARE ═══════════ -->
      <section class="about-section">
        <div class="about-section-header">
          <span class="about-diamond">◆</span>
          <h2>Who We Are</h2>
        </div>
        <p class="about-body">We are a team of passionate developers, designers, and problem-solvers who believe in building technology that actually makes a difference.</p>
        <p class="about-body">As a startup, we bring:</p>
        <ul class="about-list">
          <li><span class="about-emoji">⚡</span> <strong>Agility</strong> — faster execution and adaptability</li>
          <li><span class="about-emoji">💡</span> <strong>Fresh Thinking</strong> — modern solutions for modern problems</li>
          <li><span class="about-emoji">🎯</span> <strong>Client Focus</strong> — personalized attention to every project</li>
        </ul>
        <p class="about-body">We work closely with our clients as partners, not just service providers — understanding their vision, challenges, and goals to deliver solutions that truly fit.</p>
      </section>

      <!-- ═══════════ MISSION & VISION ═══════════ -->
      <div class="about-two-col">
        <section class="about-card-block">
          <div class="about-section-header">
            <span class="about-diamond">◆</span>
            <h2>Our Mission</h2>
          </div>
          <p class="about-body">Our mission is to empower businesses with innovative digital solutions that are scalable, reliable, and future-ready.</p>
          <p class="about-body">We aim to:</p>
          <ul class="about-list about-list-clean">
            <li>Simplify complex business processes using technology</li>
            <li>Deliver high-quality digital products at startup-friendly costs</li>
            <li>Help businesses grow faster through smart automation and development</li>
          </ul>
        </section>

        <section class="about-card-block">
          <div class="about-section-header">
            <span class="about-diamond">◆</span>
            <h2>Our Vision</h2>
          </div>
          <p class="about-body">To become a trusted global technology partner for startups and businesses, known for delivering impactful digital solutions that drive real-world success.</p>
        </section>
      </div>

      <!-- ═══════════ STATS ═══════════ -->
      <section class="about-section">
        <div class="about-section-header">
          <span class="about-diamond">◆</span>
          <h2>Our Stats</h2>
        </div>
        <div class="about-stats-grid">
          <div class="about-stat">
            <span class="about-stat-icon">🚀</span>
            <span class="about-stat-number">80+</span>
            <span class="about-stat-label">Projects Successfully Delivered</span>
          </div>
          <div class="about-stat">
            <span class="about-stat-icon">😊</span>
            <span class="about-stat-number">50+</span>
            <span class="about-stat-label">Happy Clients Across Industries</span>
          </div>
          <div class="about-stat">
            <span class="about-stat-icon">⏳</span>
            <span class="about-stat-number">2+</span>
            <span class="about-stat-label">Years of Industry Experience</span>
          </div>
          <div class="about-stat">
            <span class="about-stat-icon">👤</span>
            <span class="about-stat-number">6+</span>
            <span class="about-stat-label">Skilled Team Members</span>
          </div>
          <div class="about-stat">
            <span class="about-stat-icon">🌍</span>
            <span class="about-stat-number">∞</span>
            <span class="about-stat-label">Serving Clients Globally</span>
          </div>
        </div>
      </section>

      <!-- ═══════════ VALUES ═══════════ -->
      <section class="about-section">
        <div class="about-section-header">
          <span class="about-diamond">◆</span>
          <h2>Our Values</h2>
        </div>
        <div class="about-values-grid">
          <div class="about-value-card">
            <h3>Results First</h3>
            <p>We focus on outcomes, not just output — everything we build is designed to deliver measurable results.</p>
          </div>
          <div class="about-value-card">
            <h3>True Partnership</h3>
            <p>We work <em>with</em> you, not just <em>for</em> you. Your success is our priority.</p>
          </div>
          <div class="about-value-card">
            <h3>Relentless Quality</h3>
            <p>We maintain high standards in design, development, and performance.</p>
          </div>
          <div class="about-value-card">
            <h3>Continuous Learning</h3>
            <p>We stay updated with the latest technologies to deliver future-ready solutions.</p>
          </div>
        </div>
      </section>

      <!-- ═══════════ WHY CHOOSE US ═══════════ -->
      <section class="about-section about-why">
        <div class="about-section-header">
          <span class="about-diamond">◆</span>
          <h2>Why Clients Choose Us</h2>
        </div>
        <div class="about-why-grid">
          <div class="about-why-item">
            <span class="about-check">✓</span>
            <span>Fast delivery without compromising quality</span>
          </div>
          <div class="about-why-item">
            <span class="about-check">✓</span>
            <span>Startup-friendly pricing</span>
          </div>
          <div class="about-why-item">
            <span class="about-check">✓</span>
            <span>Custom solutions (no templates, no shortcuts)</span>
          </div>
          <div class="about-why-item">
            <span class="about-check">✓</span>
            <span>Transparent communication</span>
          </div>
          <div class="about-why-item">
            <span class="about-check">✓</span>
            <span>Long-term support and scalability</span>
          </div>
        </div>
      </section>

      <!-- ═══════════ TEAM ═══════════ -->
      <section class="about-section">
        <div class="about-section-header">
          <span class="about-diamond">◆</span>
          <h2>Meet The Team</h2>
        </div>
        <div class="about-team-grid">

          <div class="about-team-card">
            <div class="about-team-avatar" style="background: linear-gradient(135deg, #2ab7a8, #4a6b82);">AD</div>
            <h3>Agnev Davies</h3>
            <span class="about-team-role">Founder & Full Stack Developer</span>
            <p>Leads development with a focus on scalable architecture and modern technologies.</p>
          </div>

          <div class="about-team-card">
            <div class="about-team-avatar" style="background: linear-gradient(135deg, #4a6b82, #16252e);">AN</div>
            <h3>Arun Naidu</h3>
            <span class="about-team-role">Co-Founder & Full Stack Developer</span>
            <p>Specializes in building efficient backend systems and seamless user experiences.</p>
          </div>

          <div class="about-team-card">
            <div class="about-team-avatar" style="background: linear-gradient(135deg, #2ab7a8, #0d3330);">N</div>
            <h3>Nitin</h3>
            <span class="about-team-role">CEO</span>
            <p>Drives business strategy, client relationships, and company growth.</p>
          </div>

        </div>
      </section>

    </section>
  `;
}

export function initAbout() {
  return () => {};
}
