import { renderNavbar, renderFooter, initMagneticButton } from '../layouts/layout.js';
import { initLineWaves } from '../components/LineWavesVanilla.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lineWavesCleanup = null;

export function render() {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${renderNavbar()}

    <!-- ═══════════ HOME / HERO ═══════════ -->
    <section id="home" class="hero-section">
      <div class="hero-bg-canvas" id="hero-bg-canvas"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="split-target" align="left">WE DONT MAKE NOISE. <br> WE MAKE CONVERSATIONS.</h1>
        <p class="hero-subtitle">From high-performance websites to scalable mobile apps and AI automation systems — we help startups and businesses turn ideas into powerful digital solutions.</p>
        <div class="hero-cta-row">
          <a href="#/services" class="btn btn-outline btn-pill">OUR SERVICES</a>
        </div>
      </div>
    </section>

    ${renderFooter()}
  `;

  // Initialize all interactive bits after DOM renders
  setTimeout(() => {
    initMagneticButton();
    initLineWavesBackground();
  }, 50);

  // Return cleanup for the router
  return () => {
    if (lineWavesCleanup) {
      lineWavesCleanup();
      lineWavesCleanup = null;
    }
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}

// ─── LineWaves Background ───
function initLineWavesBackground() {
  const container = document.getElementById('hero-bg-canvas');
  if (!container) return;

  lineWavesCleanup = initLineWaves(container, {
    speed: 0.3,
    innerLineCount: 32,
    outerLineCount: 36,
    warpIntensity: 1,
    rotation: -45,
    edgeFadeWidth: 0,
    colorCycleSpeed: 1,
    brightness: 0.2,
    color1: '#16252e',
    color2: '#4a6b82',
    color3: '#2ab7a8',
    enableMouseInteraction: true,
    mouseInfluence: 2
  });
}


