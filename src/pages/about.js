import '../styles/card-swap.css';
import { renderNavbar, renderFooter, initMagneticButton } from '../layouts/layout.js';
import gsap from 'gsap';

export function render() {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${renderNavbar()}
    
    <div style="padding-top: 80px; min-height: 100vh; position: relative; background: transparent; overflow: hidden; display: flex; align-items: center; justify-content: center;">
      <div style="height: 600px; width: 100%; max-width: 1200px; position: relative;">
        <!-- Left Side Text -->
        <div style="position: absolute; left: 10%; top: 20%; color: #fff; max-width: 400px; z-index: 10;">
           <h1 style="font-size: 4rem; font-weight: bold; margin-bottom: 20px;">About Us</h1>
           <p style="font-size: 1.2rem; line-height: 1.6; color: rgba(255,255,255,0.8);">We are a fast-growing digital solutions agency focused on building modern, scalable, and high-performing digital products.</p>
        </div>

        <div class="card-swap-container" style="width: 500px; height: 400px;">
          <div class="card" style="width: 500px; height: 400px; display: flex; flex-direction: column; justify-content: center; padding: 40px; box-sizing: border-box;">
            <h3 style="color: #fff; font-size: 2rem; margin-bottom: 10px;">Who We Are</h3>
            <p style="color: #aaa; font-size: 1.2rem; line-height: 1.5;">As a startup, we bring agility, fresh thinking, and a deep understanding of today's technology landscape to solve real business problems and drive growth.</p>
          </div>
          <div class="card" style="width: 500px; height: 400px; display: flex; flex-direction: column; justify-content: center; padding: 40px; box-sizing: border-box;">
            <h3 style="color: #fff; font-size: 2rem; margin-bottom: 10px;">Our Stats</h3>
            <p style="color: #aaa; font-size: 1.2rem; line-height: 1.5;">80+ Projects Shipped<br/>50+ Happy Clients<br/>2+ Years Experience<br/>6 Team Members</p>
          </div>
          <div class="card" style="width: 500px; height: 400px; display: flex; flex-direction: column; justify-content: center; padding: 40px; box-sizing: border-box;">
            <h3 style="color: #fff; font-size: 2rem; margin-bottom: 10px;">Our Values</h3>
            <p style="color: #aaa; font-size: 1.2rem; line-height: 1.5;">Results First<br/>True Partnership<br/>Relentless Quality<br/>Continuous Learning</p>
          </div>
        </div>
      </div>
    </div>

    ${renderFooter()}
  `;

  let intervalId;
  let timeline;
  let mouseListeners = [];

  setTimeout(() => {
    initMagneticButton();

    const container = document.querySelector('.card-swap-container');
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.card'));
    if (cards.length === 0) return;

    const cardDistance = 60;
    const verticalDistance = 70;
    const delay = 5000;
    const pauseOnHover = false;
    const skewAmount = 6;
    
    const config = {
      ease: 'elastic.out(0.6,0.9)',
      durDrop: 2,
      durMove: 2,
      durReturn: 2,
      promoteOverlap: 0.9,
      returnDelay: 0.05
    };

    const total = cards.length;
    let order = cards.map((_, i) => i);

    const makeSlot = (i, distX, distY, totalCnt) => ({
      x: i * distX,
      y: -i * distY,
      z: -i * distX * 1.5,
      zIndex: totalCnt - i
    });

    const placeNow = (el, slot, skew) => {
      gsap.set(el, {
        x: slot.x,
        y: slot.y,
        z: slot.z,
        xPercent: -50,
        yPercent: -50,
        skewY: skew,
        transformOrigin: 'center center',
        zIndex: slot.zIndex,
        force3D: true
      });
    };

    cards.forEach((card, i) => {
      placeNow(card, makeSlot(i, cardDistance, verticalDistance, total), skewAmount);
    });

    const swap = () => {
      if (order.length < 2) return;

      const front = order[0];
      const rest = order.slice(1);
      const elFront = cards[front];
      
      const tl = gsap.timeline();
      timeline = tl;

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel('promote', '-=' + (config.durDrop * config.promoteOverlap));
      
      rest.forEach((idx, i) => {
        const el = cards[idx];
        const slot = makeSlot(i, cardDistance, verticalDistance, total);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(el, {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          duration: config.durMove,
          ease: config.ease
        }, 'promote+=' + (i * 0.15));
      });

      const backSlot = makeSlot(total - 1, cardDistance, verticalDistance, total);
      tl.addLabel('return', 'promote+=' + (config.durMove * config.returnDelay));
      tl.call(() => {
        gsap.set(elFront, { zIndex: backSlot.zIndex });
      }, undefined, 'return');

      tl.to(elFront, {
        x: backSlot.x,
        y: backSlot.y,
        z: backSlot.z,
        duration: config.durReturn,
        ease: config.ease
      }, 'return');

      tl.call(() => {
        order = [...rest, front];
      });
    };

    intervalId = setInterval(swap, delay);

    if (pauseOnHover) {
      const pause = () => {
        if (timeline) timeline.pause();
        clearInterval(intervalId);
      };
      const resume = () => {
        if (timeline) timeline.play();
        intervalId = setInterval(swap, delay);
      };
      container.addEventListener('mouseenter', pause);
      container.addEventListener('mouseleave', resume);
      mouseListeners.push({ element: container, event: 'mouseenter', handler: pause });
      mouseListeners.push({ element: container, event: 'mouseleave', handler: resume });
    }

  }, 50);

  return () => {
    if (intervalId) clearInterval(intervalId);
    if (timeline) timeline.kill();
    mouseListeners.forEach(l => l.element.removeEventListener(l.event, l.handler));
  };
}
