import { renderNavbar, renderFooter, initMagneticButton } from '../layouts/layout.js';

export function render() {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${renderNavbar()}
    
    <div style="padding-top: 150px; padding-bottom: 100px; min-height: 100vh; position: relative; background: transparent; display: flex; align-items: center; justify-content: center;">
      <div style="width: 100%; max-width: 1200px; padding: 0 5%; display: flex; flex-direction: column; gap: 80px;">
        
        <!-- Top Text -->
        <div style="color: #fff; max-width: 600px;">
           <h1 style="font-size: 4rem; font-weight: bold; margin-bottom: 20px;">About Us</h1>
           <p style="font-size: 1.2rem; line-height: 1.6; color: rgba(255,255,255,0.8);">We are a fast-growing digital solutions agency focused on building modern, scalable, and high-performing digital products.</p>
        </div>

        <!-- Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; width: 100%;">
          <div style="background: #0a0a0a; border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; padding: 40px; display: flex; flex-direction: column; justify-content: flex-start;">
            <h3 style="color: #fff; font-size: 2rem; margin-bottom: 15px;">Who We Are</h3>
            <p style="color: #aaa; font-size: 1.1rem; line-height: 1.6;">As a startup, we bring agility, fresh thinking, and a deep understanding of today's technology landscape to solve real business problems and drive growth.</p>
          </div>
          <div style="background: #0a0a0a; border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; padding: 40px; display: flex; flex-direction: column; justify-content: flex-start;">
            <h3 style="color: #fff; font-size: 2rem; margin-bottom: 15px;">Our Stats</h3>
            <p style="color: #aaa; font-size: 1.1rem; line-height: 1.6;">80+ Projects Shipped<br/>50+ Happy Clients<br/>2+ Years Experience<br/>6 Team Members</p>
          </div>
          <div style="background: #0a0a0a; border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; padding: 40px; display: flex; flex-direction: column; justify-content: flex-start;">
            <h3 style="color: #fff; font-size: 2rem; margin-bottom: 15px;">Our Values</h3>
            <p style="color: #aaa; font-size: 1.1rem; line-height: 1.6;">Results First<br/>True Partnership<br/>Relentless Quality<br/>Continuous Learning</p>
          </div>
        </div>
      </div>
    </div>

    ${renderFooter()}
  `;

  setTimeout(() => {
    initMagneticButton();
  }, 50);

  return () => {
    // cleanup
  };
}
