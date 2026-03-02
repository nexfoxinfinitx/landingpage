import './style.css';
import { route, startRouter, resolveRoute } from './router.js';
import { render as renderHome } from './pages/home.js';
import { render as renderAbout } from './pages/about.js';
import { render as renderContact } from './pages/contact.js';
import { render as renderPortfolio } from './pages/portfolio.js';
import { render as renderWorkflow } from './pages/workflow.js';
import { render as renderPrivacy } from './pages/privacy.js';
import { render as renderTerms } from './pages/terms.js';
import { render as renderTemplate1 } from '../templates/template-1.ts';
// Register routes
route('/', () => { renderHome(); });
route('/services', () => {
    renderHome();
    setTimeout(() => {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
});
route('/about', () => { renderAbout(); });
route('/contact', () => { renderContact(); });
route('/work', () => { renderPortfolio(); });
route('/process', () => { renderWorkflow(); });
route('/privacy', () => { renderPrivacy(); });
route('/terms', () => { renderTerms(); });
route('/template-1', () => { return renderTemplate1(); });

// Add global visible style for scroll animations
const style = document.createElement('style');
style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

// Start the router
startRouter();
