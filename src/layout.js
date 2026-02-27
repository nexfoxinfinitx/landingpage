// Shared Navbar and Footer components

export function renderNavbar() {
    return `
  <nav class="navbar">
    <div class="container navbar-inner">
      <a href="#/" class="logo">Starter<span>.</span></a>
      <ul class="nav-links">
        <li><a href="#/services">Services</a></li>
        <li><a href="#/work">Work</a></li>
        <li><a href="#/process">Process</a></li>
        <li><a href="#/about">About</a></li>
        <li><a href="#/contact" class="btn btn-sm">Contact Us</a></li>
      </ul>
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
