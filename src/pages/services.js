import '../styles/flowing-menu.css';
import { renderNavbar, renderFooter, initMagneticButton } from '../layouts/layout.js';
import gsap from 'gsap';

export function render() {
  const app = document.getElementById('app');

  const demoItems = [
    { link: '#', text: 'App Development', image: '/images/appdev.png' },
    { link: '#', text: 'Web Development', image: '/images/webdev.png' },
    { link: '#', text: 'AI Automation', image: '/images/automation.png' },
  ];

  const speed = 15;
  const textColor = '#ffffff';
  const bgColor = 'transparent';
  const marqueeBgColor = '#ffffff';
  const marqueeTextColor = '#12161A';
  const borderColor = '#ffffff';

  const menuItemsHtml = demoItems.map((item, idx) => `
    <div class="menu__item" data-text="${item.text}" data-image="${item.image}" style="border-color: ${borderColor}; ${idx === 0 ? 'border-top: none;' : ''}">
      <a class="menu__item-link" href="${item.link}" style="color: ${textColor}">${item.text}</a>
      <div class="marquee" style="background-color: ${marqueeBgColor}">
        <div class="marquee__inner-wrap">
          <div class="marquee__inner" aria-hidden="true">
            <!-- parts injected via js -->
          </div>
        </div>
      </div>
    </div>
  `).join('');

  app.innerHTML = `
    ${renderNavbar()}
    <div style="height: 100vh; position: relative;">
      <div class="menu-wrap" style="background-color: ${bgColor}; padding-top: 80px; height: 100%; box-sizing: border-box;">
        <nav class="menu">
          ${menuItemsHtml}
        </nav>
      </div>
    </div>
    ${renderFooter()}
  `;

  let timelines = [];
  let resizeListeners = [];
  let mouseListeners = [];
  let marqueeAnimations = [];

  setTimeout(() => {
    initMagneticButton();

    const menuItems = document.querySelectorAll('.menu__item');

    const animationDefaults = { duration: 0.6, ease: 'expo' };
    const distMetric = (x, y, x2, y2) => {
      const xDiff = x - x2;
      const yDiff = y - y2;
      return xDiff * xDiff + yDiff * yDiff;
    };
    const findClosestEdge = (mouseX, mouseY, width, height) => {
      const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
      const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
      return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
    };

    menuItems.forEach((item) => {
      const link = item.querySelector('.menu__item-link');
      const marquee = item.querySelector('.marquee');
      const marqueeInner = item.querySelector('.marquee__inner');
      const text = item.dataset.text;
      const image = item.dataset.image;

      let marqueeAnimation = null;

      const setupMarquee = () => {
        // Clear previous
        marqueeInner.innerHTML = '';

        // Measure part width
        let measurePart = document.createElement('div');
        measurePart.className = 'marquee__part';
        measurePart.style.color = marqueeTextColor;
        measurePart.style.visibility = 'hidden';
        measurePart.innerHTML = `
          <span>${text}</span>
          <div class="marquee__img" style="background-image: url(${image})"></div>
        `;
        marqueeInner.appendChild(measurePart);

        const contentWidth = measurePart.offsetWidth;
        if (contentWidth === 0) return; // Wait until visible layout

        const viewportWidth = window.innerWidth;
        const calcRepetitions = Math.max(4, Math.ceil(viewportWidth / contentWidth) + 2);

        // Build the full HTML
        let innerHtml = '';
        for (let i = 0; i < calcRepetitions; i++) {
          innerHtml += `
            <div class="marquee__part" style="color: ${marqueeTextColor}">
              <span>${text}</span>
              <div class="marquee__img" style="background-image: url(${image})"></div>
            </div>
          `;
        }
        marqueeInner.innerHTML = innerHtml;

        if (marqueeAnimation) {
          marqueeAnimation.kill();
        }

        marqueeAnimation = gsap.to(marqueeInner, {
          x: -contentWidth,
          duration: speed,
          ease: 'none',
          repeat: -1
        });
        marqueeAnimations.push(marqueeAnimation);
      };

      // Ensure fonts/layout are loaded before calculating
      setTimeout(setupMarquee, 50);

      const resizeHandler = () => setTimeout(setupMarquee, 50);
      window.addEventListener('resize', resizeHandler);
      resizeListeners.push({ event: 'resize', handler: resizeHandler });

      const enterHandler = (ev) => {
        const rect = item.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        const y = ev.clientY - rect.top;
        const edge = findClosestEdge(x, y, rect.width, rect.height);

        const tl = gsap.timeline({ defaults: animationDefaults })
          .set(marquee, { y: edge === 'top' ? '-101%' : '101%' }, 0)
          .set(marqueeInner, { y: edge === 'top' ? '101%' : '-101%' }, 0)
          .to([marquee, marqueeInner], { y: '0%' }, 0);
        timelines.push(tl);
      };

      const leaveHandler = (ev) => {
        const rect = item.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        const y = ev.clientY - rect.top;
        const edge = findClosestEdge(x, y, rect.width, rect.height);

        const tl = gsap.timeline({ defaults: animationDefaults })
          .to(marquee, { y: edge === 'top' ? '-101%' : '101%' }, 0)
          .to(marqueeInner, { y: edge === 'top' ? '101%' : '-101%' }, 0);
        timelines.push(tl);
      };

      link.addEventListener('mouseenter', enterHandler);
      link.addEventListener('mouseleave', leaveHandler);
      mouseListeners.push({ element: link, event: 'mouseenter', handler: enterHandler });
      mouseListeners.push({ element: link, event: 'mouseleave', handler: leaveHandler });
    });
  }, 50);

  return () => {
    resizeListeners.forEach(l => window.removeEventListener(l.event, l.handler));
    mouseListeners.forEach(l => l.element.removeEventListener(l.event, l.handler));
    marqueeAnimations.forEach(anim => anim && anim.kill());
    timelines.forEach(tl => tl && tl.kill());
  };
}
