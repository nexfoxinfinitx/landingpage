import gsap from 'gsap';

/**
 * Liquid-fill Loading Screen
 * Inspired by neoleaf.bytetown.agency
 * 
 * Creates a full-screen overlay with large "civion" text
 * that fills from bottom to top with a wavy/liquid animation.
 */

const LOADING_DURATION = 3; // seconds for the fill animation

export function createLoadingScreen() {
  // Build the DOM
  const overlay = document.createElement('div');
  overlay.id = 'loading-screen';
  overlay.innerHTML = `
    <div class="loader-content">
      <!-- SVG text with liquid clip mask -->
      <svg class="loader-svg" viewBox="0 0 900 200" preserveAspectRatio="xMidYMid meet">
        <defs>
          <clipPath id="liquid-clip">
            <path id="liquid-wave" d="" />
          </clipPath>
        </defs>
        <!-- Background text (dark grey, always visible) -->
        <text 
          x="450" y="160" 
          text-anchor="middle" 
          class="loader-text-bg"
          font-family="'Inter', sans-serif"
          font-weight="800"
          font-size="200"
          fill="#2a2a2a"
        >civion</text>
        <!-- Foreground text (white, clipped by liquid wave) -->
        <text 
          x="450" y="160" 
          text-anchor="middle" 
          class="loader-text-fg"
          font-family="'Inter', sans-serif"
          font-weight="800"
          font-size="200"
          fill="#ffffff"
          clip-path="url(#liquid-clip)"
        >civion</text>
      </svg>
      <div class="loader-counter">
        <span class="loader-counter-label">loading...</span>
        <span class="loader-counter-value" id="loader-percent">0</span>
        <span class="loader-counter-symbol">%</span>
      </div>
    </div>
  `;

  document.body.prepend(overlay);
  return overlay;
}

export function startLoadingAnimation(onComplete) {
  const overlay = document.getElementById('loading-screen');
  if (!overlay) { onComplete?.(); return; }

  const percentEl = document.getElementById('loader-percent');
  const wavePath = document.getElementById('liquid-wave');
  if (!wavePath || !percentEl) { onComplete?.(); return; }

  // SVG viewBox dimensions
  const svgWidth = 900;
  const svgHeight = 200;
  const waveAmplitude = 18;
  const waveFrequency = 3; // number of wave cycles across the width

  // State object for GSAP to tween
  const state = { progress: 0, waveOffset: 0 };

  // Generate the wavy clip-path "d" attribute
  function updateWavePath() {
    const fillY = svgHeight - (state.progress * (svgHeight + 60)) + 30; // extra range so it starts below and ends above
    const segments = 60;
    const segmentWidth = svgWidth / segments;

    let d = `M 0 ${svgHeight + 50}`; // start at bottom-left (well below)

    // Draw upward to the wave line on the left
    d += ` L 0 ${fillY + Math.sin(state.waveOffset) * waveAmplitude}`;

    // Draw the wavy top edge
    for (let i = 1; i <= segments; i++) {
      const x = i * segmentWidth;
      const angle = (i / segments) * Math.PI * 2 * waveFrequency + state.waveOffset;
      const y = fillY + Math.sin(angle) * waveAmplitude;
      d += ` L ${x} ${y}`;
    }

    // Close the path: go to bottom-right, then back to bottom-left
    d += ` L ${svgWidth} ${svgHeight + 50}`;
    d += ` Z`;

    wavePath.setAttribute('d', d);
  }

  // Wave animation (continuous oscillation)
  gsap.to(state, {
    waveOffset: Math.PI * 8,
    duration: LOADING_DURATION,
    ease: 'none',
    onUpdate: updateWavePath,
  });

  // Progress animation (fills from 0 to 1)
  gsap.to(state, {
    progress: 1,
    duration: LOADING_DURATION,
    ease: 'power2.inOut',
    onUpdate: () => {
      percentEl.textContent = Math.round(state.progress * 100);
      updateWavePath();
    },
    onComplete: () => {
      // Short pause at 100% then exit
      gsap.to(overlay, {
        y: '-100vh',
        duration: 0.8,
        ease: 'power3.inOut',
        delay: 0.3,
        onComplete: () => {
          overlay.remove();
          onComplete?.();
        }
      });
    }
  });

  // Initial render
  updateWavePath();
}
