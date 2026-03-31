// Shared Navbar
import gsap from 'gsap';

export function renderNavbar() {
  return `
  <nav class="navbar landing-navbar">
    <div class="container navbar-inner">
      <a href="#/" class="logo">CIVION INFOMATICS</a>

      <div class="nav-links pill-nav">
        <a href="#/services">SERVICES</a>
        <a href="#/about">ABOUT</a>
        <a href="#/contact">CONTACT</a>
      </div>

      <div class="nav-actions">
        <a href="#/contact" class="btn btn-outline btn-pill magnetic-btn">LETS WORK</a>
      </div>
    </div>
  </nav>`;
}

export function renderFooter() {
  // Removing old footer as the minimalist landing page design does not show one initially.
  // We can leave this empty or return an empty string for the home page.
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
