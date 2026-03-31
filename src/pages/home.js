import { renderNavbar, renderFooter, initMobileMenu, initMagneticButton } from '../layout.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function render() {
  const app = document.getElementById('app');

  // We wrap each word, then each character in spans to animate them individually.
  app.innerHTML = `
    ${renderNavbar()}

    <main class="landing-main">
      <div class="hero-left">
        <h1 class="split-target" align="left"> WE DONT MAKE NOISE. <br> WE MAKE CONVERSATIONS.</h1>
      </div>
    </main>

    ${renderFooter()}
    `;

  // Initialize animation after a brief tick to let DOM render
  setTimeout(() => {
    initSplitTextAnimation();
    initMagneticButton();
  }, 50);
}

function initSplitTextAnimation() {
  const target = document.querySelector('.split-target');
  if (!target) return;

  // Save original text including <br> tags. We'll split text nodes manually
  // to mimic GSAP SplitText (since we don't have the premium club plugin installed by default in Vite vanilla).
  const contentHtml = target.innerHTML;
  target.innerHTML = '';

  // Simple custom splitting by word and char
  // We handle <br> specifically.
  const parts = contentHtml.split(/(<br\s*\/?>)/i);

  const charsTarget = [];

  parts.forEach(part => {
    if (part.toLowerCase().includes('<br')) {
      target.appendChild(document.createElement('br'));
      return;
    }

    // Split by words first
    const words = part.split(' ');
    words.forEach((word, wordIndex) => {
      if (word === '') return;

      const wordSpan = document.createElement('span');
      wordSpan.className = 'split-word';
      wordSpan.style.display = 'inline-block';
      wordSpan.style.whiteSpace = 'nowrap';

      // Split word into characters
      const chars = word.split('');
      chars.forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.className = 'split-char';
        charSpan.style.display = 'inline-block';
        // important to let transform work properly
        charSpan.style.willChange = 'transform, opacity';
        charSpan.innerText = char;

        wordSpan.appendChild(charSpan);
        charsTarget.push(charSpan);
      });

      target.appendChild(wordSpan);

      // Add space after word if it's not the last word
      if (wordIndex < words.length - 1) {
        const space = document.createTextNode(' ');
        target.appendChild(space);
      }
    });
  });

  // Animate Characters mapping style.txt reference:
  // from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} duration=1.25 stagger=0.05 ease="power3.out"
  // Updated to have a noticeable bounce effect based on user feedback
  gsap.fromTo(charsTarget,
    {
      opacity: 0,
      y: 80, // Start further down for a bigger bounce
      scale: 0.8 // Start slightly smaller
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1, // Slightly longer duration for the bounce to settle
      ease: "elastic.out(1, 0.4)", // strong bounce effect
      stagger: 0.04,
      delay: 0.2
    }
  );
}
