import './styles/style.css';
import './styles/loading.css';
import { inject } from '@vercel/analytics';

import { getHomeHtml, initHome } from './pages/home.js';
import { getAboutHtml, initAbout } from './pages/about.js';
import { getServicesHtml, initServices } from './pages/services.js';
import { getContactHtml, initContact } from './pages/contact.js';

import { renderNavbar, renderContactFooter, initMagneticButton } from './layouts/layout.js';
import { createLoadingScreen, startLoadingAnimation } from './components/LoadingScreen.js';
import { initShaderBackground } from './components/ShaderBackgroundVanilla.js';

// Initialize Vercel Analytics
inject();

// Add global visible style for scroll animations
const style = document.createElement('style');
style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

function initApp() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <canvas id="global-shader-bg" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -1; pointer-events: none;"></canvas>
    ${renderNavbar()}
    ${getHomeHtml()}
    ${getAboutHtml()}
    ${getServicesHtml()}
    ${getContactHtml()}
    ${renderContactFooter()}
  `;

  // Initialize scripts
  setTimeout(() => {
    initShaderBackground(document.getElementById('global-shader-bg'), '#9BD8EC', '#FFF7B2');
    initMagneticButton();
    initHome();
    initAbout();
    initServices();
    initContact();
  }, 50);
}

// Show loading screen on first visit, then start the router
const hasLoaded = sessionStorage.getItem('civion-loaded');

if (!hasLoaded) {
  createLoadingScreen();
  startLoadingAnimation(() => {
    sessionStorage.setItem('civion-loaded', 'true');
    initApp();
  });
} else {
  initApp();
}
