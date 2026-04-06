import './styles/style.css';
import './styles/loading.css';
import { route, startRouter } from './utils/router.js';
import { render as renderHome } from './pages/home.js';
import { render as renderAbout } from './pages/about.js';
import { render as renderServices } from './pages/services.js';
import { render as renderContact } from './pages/contact.js';
import { render as renderPrivacy } from './pages/privacy.js';
import { render as renderTerms } from './pages/terms.js';
import { render as renderTemplate1 } from '../templates/template-1.ts';
import { createLoadingScreen, startLoadingAnimation } from './components/LoadingScreen.js';

// Register routes — active pages only
route('/', () => { return renderHome(); });
route('/about', () => { return renderAbout(); });
route('/services', () => { return renderServices(); });
route('/contact', () => { return renderContact(); });
route('/privacy', () => { return renderPrivacy(); });
route('/terms', () => { return renderTerms(); });
route('/template-1', () => { return renderTemplate1(); });

// Add global visible style for scroll animations
const style = document.createElement('style');
style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

// Show loading screen on first visit, then start the router
const hasLoaded = sessionStorage.getItem('civion-loaded');

if (!hasLoaded) {
  createLoadingScreen();
  startLoadingAnimation(() => {
    sessionStorage.setItem('civion-loaded', 'true');
    startRouter();
  });
} else {
  startRouter();
}
