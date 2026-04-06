import { renderNavbar, renderFooter, initMagneticButton } from '../layouts/layout.js';
import { initScrollStack } from '../components/ScrollStackVanilla.js';

export function render() {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${renderNavbar()}
    
    <div class="scroll-stack-wrapper" style="min-height: 100vh;">
      <div style="text-align: center; color: #fff; padding: 120px 20px 40px;">
         <h1 style="font-size: 4rem; font-weight: bold; margin-bottom: 20px;">About Us</h1>
         <p style="font-size: 1.2rem; line-height: 1.6; color: rgba(255,255,255,0.8); max-width: 600px; margin: 0 auto;">We are a fast-growing digital solutions agency focused on building modern, scalable, and high-performing digital products.</p>
      </div>

      <div class="scroll-stack-scroller" id="about-scroll-stack">
        <div class="scroll-stack-inner">
          
          <div class="scroll-stack-card-wrapper">
            <div class="scroll-stack-card" style="background: #111; border: 1px solid #333;">
              <h3 style="font-size: 2.5rem; margin-bottom: 15px;">Who We Are</h3>
              <p style="color: #aaa; font-size: 1.3rem; line-height: 1.6;">As a startup, we bring agility, fresh thinking, and a deep understanding of today's technology landscape to solve real business problems and drive growth.</p>
            </div>
          </div>
          
          <div class="scroll-stack-card-wrapper">
            <div class="scroll-stack-card" style="background: #1a1a1a; border: 1px solid #444;">
              <h3 style="font-size: 2.5rem; margin-bottom: 15px;">Our Stats</h3>
              <p style="color: #bbb; font-size: 1.3rem; line-height: 1.6;">80+ Projects Shipped<br/>50+ Happy Clients<br/>2+ Years Experience<br/>6 Team Members</p>
            </div>
          </div>
          
          <div class="scroll-stack-card-wrapper">
            <div class="scroll-stack-card" style="background: #222; border: 1px solid #555;">
              <h3 style="font-size: 2.5rem; margin-bottom: 15px;">Our Values</h3>
              <p style="color: #ccc; font-size: 1.3rem; line-height: 1.6;">Results First<br/>True Partnership<br/>Relentless Quality<br/>Continuous Learning</p>
            </div>
          </div>
          
          <div class="scroll-stack-end"></div>
        </div>
      </div>
    </div>

    ${renderFooter()}
  `;

  let cleanupScrollStack;

  setTimeout(() => {
    initMagneticButton();

    const container = document.getElementById('about-scroll-stack');
    if (container) {
      cleanupScrollStack = initScrollStack(container, {
        itemDistance: 100,
        itemScale: 0.03,
        itemStackDistance: 30,
        stackPosition: '20%',
        scaleEndPosition: '10%',
        baseScale: 0.85,
        rotationAmount: 0,
        blurAmount: 0,
        useWindowScroll: true
      });
    }
  }, 50);

  return () => {
    if (cleanupScrollStack) cleanupScrollStack();
  };
}
