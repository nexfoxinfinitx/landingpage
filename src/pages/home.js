import { renderNavbar, renderFooter, initMagneticButton } from '../layouts/layout.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function getHomeHtml() {
  return `
    <!-- ═══════════ HOME / HERO ═══════════ -->
    <section id="home" class="hero-section">

      <div class="hero-content">
        <h1 class="split-target" align="left">WE DONT MAKE NOISE. <br> WE MAKE CONVERSATIONS.</h1>
        <p class="hero-subtitle">From high-performance websites to scalable mobile apps and AI automation systems — we help startups and businesses turn ideas into powerful digital solutions.</p>
        <div class="hero-cta-row">
          <a href="#services" class="btn btn-outline btn-pill">OUR SERVICES</a>
        </div>
      </div>
    </section>
  `;
}

export function initHome() {
  // Return cleanup for the router (or unmount)
  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}


