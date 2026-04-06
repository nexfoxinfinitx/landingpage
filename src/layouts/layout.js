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
    return `<a href="#${link.path}">${link.label}</a>`;
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

export function renderContactFooter() {
  const year = new Date().getFullYear();
  
  return `
  <footer class="site-footer">
    <div class="site-footer-top">
      <div class="container">
        <div class="site-footer-grid">
          <!-- Column 1: Main -->
          <div class="site-footer-col">
            <h4 class="site-footer-heading">MAIN</h4>
            <ul>
              <li><a href="#/">Home</a></li>
              <li><a href="#/about">About Us</a></li>
              <li><a href="#/services">Services</a></li>
              <li><a href="#/contact">Contact</a></li>
            </ul>
          </div>

          <!-- Column 2: Services -->
          <div class="site-footer-col">
            <h4 class="site-footer-heading">SERVICES</h4>
            <ul>
              <li><a href="#/services">Web Development</a></li>
              <li><a href="#/services">App Development</a></li>
              <li><a href="#/services">UI/UX Design</a></li>
              <li><a href="#/services">Cloud Solutions</a></li>
            </ul>
          </div>

          <!-- Column 3: Get In Touch -->
          <div class="site-footer-col">
            <h4 class="site-footer-heading">GET IN TOUCH</h4>
            <ul>
              <li><a href="#/contact">Contact Us</a></li>
              <li><a href="mailto:civion-infomatics.slack.com">Email Us</a></li>
              <li><a href="tel:+918452979365">Call Us</a></li>
            </ul>
          </div>

          <!-- Column 4: About -->
          <div class="site-footer-col site-footer-about">
            <h4 class="site-footer-heading">ABOUT</h4>
            <p>Civion Infomatics is a digital solutions agency specializing in modern, scalable web and mobile applications.</p>
            <p>We help startups and businesses transform ideas into impactful digital experiences.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Big brand text section -->
    <div class="site-footer-brand">
      <div class="site-footer-brand-text">CIVION INFOMATICS</div>
    </div>

    <!-- Bottom bar -->
    <div class="site-footer-bottom">
      <div class="container site-footer-bottom-inner">
        <span>©${year} Civion Infomatics. All Rights Reserved.</span>
        <div class="site-footer-bottom-links">
          <a href="#/privacy">Privacy Policy</a>
          <a href="#/terms">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>`;
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
