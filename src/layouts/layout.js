// Shared Navbar
import gsap from 'gsap';

export function renderNavbar() {
  const currentPath = window.location.hash.slice(1) || '/';
  
  const navLinks = [
    { path: '/about', label: 'ABOUT' },
    { path: '/services', label: 'SERVICES' },
    { path: '/contact', label: 'CONTACT' }
  ];

  const linksHtml = navLinks.map(link => {
    const isActive = currentPath === link.path;
    const activeClass = isActive ? 'active-nav-link' : '';
    return `<a href="#${link.path}" class="${activeClass}">${link.label}</a>`;
  }).join('\n        ');

  return `
  <nav class="navbar landing-navbar">
    <div class="container navbar-inner">
      <a href="#/" class="logo">CIVION INFOMATICS</a>

      <div class="nav-links pill-nav">
        ${linksHtml}
      </div>

      <div class="nav-actions">
        <a href="#/contact" class="btn btn-outline btn-pill magnetic-btn">LETS WORK</a>
      </div>
    </div>
  </nav>`;
}

export function renderFooter() {
  return ``;
}

export function initMobileMenu() {
  // Kept for basic compatibility if needed later
}

export function initMagneticButton() {
  const magneticBtn = document.querySelector('.magnetic-btn');
  if (!magneticBtn) return;

  // Use gsap quickTo for better performance
  const xTo = gsap.quickTo(magneticBtn, "x", { duration: 0.4, ease: "power3" }),
    yTo = gsap.quickTo(magneticBtn, "y", { duration: 0.4, ease: "power3" });

  magneticBtn.addEventListener("mousemove", (e) => {
    const rect = magneticBtn.getBoundingClientRect();
    // Calculate distance from center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Move it slightly towards mouse (magnetic effect)
    xTo(x * 0.8);
    yTo(y * 0.8);
  });

  magneticBtn.addEventListener("mouseleave", () => {
    // Reset position
    xTo(0);
    yTo(0);
  });
}
