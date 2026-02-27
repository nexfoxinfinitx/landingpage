// Shared Navbar and Footer components

export function renderNavbar() {
  return `
  <nav class="navbar">
    <div class="container navbar-inner">
      <a href="#/" class="logo">Starter<span>.</span></a>

      <div class="icon-menu">
        <a href="#/" class="icon-link">
          <span class="icon-link-icon"><img src="/assets/icons/home.png" alt="Home" /></span>
          <span class="icon-link-title">Home</span>
        </a>
        <a href="#/services" class="icon-link">
          <span class="icon-link-icon"><img src="/assets/icons/Services.png" alt="Services" /></span>
          <span class="icon-link-title">Services</span>
        </a>
        <a href="#/work" class="icon-link">
          <span class="icon-link-icon"><img src="/assets/icons/work.png" alt="Work" /></span>
          <span class="icon-link-title">Work</span>
        </a>
        <a href="#/process" class="icon-link">
          <span class="icon-link-icon"><img src="/assets/icons/process.png" alt="Process" /></span>
          <span class="icon-link-title">Process</span>
        </a>
        <a href="#/about" class="icon-link">
          <span class="icon-link-icon"><img src="/assets/icons/about.png" alt="About" /></span>
          <span class="icon-link-title">About</span>
        </a>
        <a href="#/contact" class="icon-link">
          <span class="icon-link-icon"><img src="/assets/icons/contact.png" alt="Contact" /></span>
          <span class="icon-link-title">Contact</span>
        </a>
      </div>

      <button class="menu-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
}

export function renderFooter() {
  return `
  <footer class="footer">
    <div class="container footer-inner">
      <a href="#/" class="logo">Starter<span>.</span></a>
      <div class="footer-links">
        <a href="#/services">Services</a>
        <a href="#/work">Work</a>
        <a href="#/process">Process</a>
        <a href="#/about">About</a>
        <a href="#/contact">Contact</a>
        <a href="#/privacy">Privacy</a>
        <a href="#/terms">Terms</a>
      </div>
      <p class="copyright">&copy; 2026 Starter. All rights reserved.</p>
    </div>
  </footer>`;
}

export function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.classList.remove('active');
      });
    });
  }
}
