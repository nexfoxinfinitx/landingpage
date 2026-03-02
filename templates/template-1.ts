import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const particleVertex = `
  attribute vec4 aRandom;
  attribute vec3 aColor;

  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;

  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vRandom = aRandom;
    vColor = aColor;

    vec3 pos = position * uSpread;
    pos.z *= 10.0;

    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * aRandom.z + 6.28 * aRandom.w) * mix(0.1, 1.5, aRandom.x);
    mPos.y += sin(t * aRandom.y + 6.28 * aRandom.x) * mix(0.1, 1.5, aRandom.w);
    mPos.z += sin(t * aRandom.w + 6.28 * aRandom.y) * mix(0.1, 1.5, aRandom.z);

    vec4 mvPos = viewMatrix * mPos;
    gl_PointSize = uBaseSize / length(mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`;

const particleFragment = `
  precision highp float;

  uniform float uTime;

  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    if (d > 0.5) discard;
    gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
  }
`;

export function render(): (() => void) | void {
  const app = document.getElementById('app') as HTMLElement;

  app.innerHTML = `
    <div class="template-1-pinned-container" style="width: 100vw; height: 100vh; overflow: hidden; position: relative;">
      <canvas id="particlesCanvas"></canvas>
      <canvas id="template1Canvas"></canvas>
    <section class="template-1-content">
      <video class="content-bg-video" autoplay muted loop playsinline>
        <source src="/assets/videos/background.mp4" type="video/mp4">
      </video>
      <div class="container template-1-content-inner">
        <h1 class="content-heading">
          <span class="content-letter">Y</span><span class="content-letter">O</span><span class="content-letter">U</span><span class="content-letter">R</span><span class="rc-space">&nbsp;</span><span class="content-letter">C</span><span class="content-letter">O</span><span class="content-letter">N</span><span class="content-letter">T</span><span class="content-letter">E</span><span class="content-letter">N</span><span class="content-letter">T</span><span class="rc-space">&nbsp;</span><span class="content-letter">H</span><span class="content-letter">E</span><span class="content-letter">R</span><span class="content-letter">E</span>
        </h1>
        <p>This section appears after the 3D model transition.</p>
      </div>
    </section>
    <section class="template-1-vault">
      <div class="template-1-vault-inner">
        <h1 class="vault-heading">
          <span class="vault-letter">T</span><span class="vault-letter">H</span><span class="vault-letter">E</span><span class="rc-space">&nbsp;</span><span class="vault-letter">V</span><span class="vault-letter">A</span><span class="vault-letter">U</span><span class="vault-letter">L</span><span class="vault-letter">T</span>
        </h1>
        <div class="vault-cards-track">
          <div class="vault-card">
            <div class="vault-card-flipper">
              <div class="vault-card-front"><img src="/assets/images/cloth 1.jpeg" alt=""></div>
              <div class="vault-card-back"><img src="/assets/images/cloth 2.jpeg" alt=""></div>
            </div>
          </div>
          <div class="vault-card">
            <div class="vault-card-flipper">
              <div class="vault-card-front"><img src="/assets/images/cloth 1.jpeg" alt=""></div>
              <div class="vault-card-back"><img src="/assets/images/cloth 2.jpeg" alt=""></div>
            </div>
          </div>
          <div class="vault-card">
            <div class="vault-card-flipper">
              <div class="vault-card-front"><img src="/assets/images/cloth 1.jpeg" alt=""></div>
              <div class="vault-card-back"><img src="/assets/images/cloth 2.jpeg" alt=""></div>
            </div>
          </div>
          <div class="vault-card">
            <div class="vault-card-flipper">
              <div class="vault-card-front"><img src="/assets/images/cloth 3.jpeg" alt=""></div>
              <div class="vault-card-back"><img src="/assets/images/cloth 4.jpeg" alt=""></div>
            </div>
          </div>
          <div class="vault-card">
            <div class="vault-card-flipper">
              <div class="vault-card-front"><img src="/assets/images/cloth 3.jpeg" alt=""></div>
              <div class="vault-card-back"><img src="/assets/images/cloth 4.jpeg" alt=""></div>
            </div>
          </div>
          <div class="vault-card">
            <div class="vault-card-flipper">
              <div class="vault-card-front"><img src="/assets/images/cloth 3.jpeg" alt=""></div>
              <div class="vault-card-back"><img src="/assets/images/cloth 4.jpeg" alt=""></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="template-1-showcase">
      <div class="showcase-first-screen">
        <img class="section-divider" src="/assets/images/divider1.png" alt="">
        <div class="showcase-content"></div>
      </div>
      <div class="showcase-extra">
        <h1 class="raw-culture-heading">
          <span class="rc-letter">R</span><span class="rc-letter">A</span><span class="rc-letter">W</span><span class="rc-space">&nbsp;</span><span class="rc-letter">C</span><span class="rc-letter">U</span><span class="rc-letter">L</span><span class="rc-letter">T</span><span class="rc-letter">U</span><span class="rc-letter">R</span><span class="rc-letter">E</span>
        </h1>
        <div class="stacked-cards">
          <div class="stacked-card">
            <div class="stacked-card-inner">
              <img src="/assets/images/cloth 1.jpeg" alt="">
            </div>
          </div>
          <div class="stacked-card">
            <div class="stacked-card-inner">
              <img src="/assets/images/cloth 2.jpeg" alt="">
            </div>
          </div>
          <div class="stacked-card">
            <div class="stacked-card-inner">
              <img src="/assets/images/cloth 3.jpeg" alt="">
            </div>
          </div>
          <div class="stacked-card">
            <div class="stacked-card-inner">
              <img src="/assets/images/cloth 4.jpeg" alt="">
            </div>
          </div>
        </div>
        <div class="view-all-wrapper">
          <a href="/products" class="btn btn-outline view-all-btn">VIEW ALL PRODUCTS</a>
        </div>
      </div>
    </section>
    </div> <!-- end template-1-pinned-container -->
  `;

  // Render the footer after the pinned container
  const footerEl = document.createElement('section');
  footerEl.className = 'template-1-footer';
  footerEl.innerHTML = `
      <div class="footer-policies">
        <h2 class="policy-heading">our policies are top-notch</h2>
        <div class="policy-cards">
          <div class="policy-card">
            <svg class="policy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 8h11V4a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h1m11 0h3a2 2 0 002-2v-4l-3-4h-3M5 18a2 2 0 100-4 2 2 0 000 4zm11 0a2 2 0 100-4 2 2 0 000 4zM2 12h3M16 12h-5"/></svg>
            <span>Free shipping</span>
          </div>
          <div class="policy-card">
            <svg class="policy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
            <span>Easy Return</span>
          </div>
          <div class="policy-card">
            <svg class="policy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span>Support 24/7</span>
          </div>
          <div class="policy-card">
            <svg class="policy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="6" width="18" height="12" rx="2" ry="2"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span>Secure checkout</span>
          </div>
        </div>
      </div>
      
      <div class="footer-marquee banner-top">
        <div class="marquee-track">
          <span>Wear it your way</span>
          <span>Comfort meets culture</span>
          <span>Fits you. Moves with you.</span>
          <span>Wear it your way</span>
          <span>Comfort meets culture</span>
          <span>Fits you. Moves with you.</span>
          <span>Wear it your way</span>
          <span>Comfort meets culture</span>
          <span>Fits you. Moves with you.</span>
          <span>Wear it your way</span>
          <span>Comfort meets culture</span>
          <span>Fits you. Moves with you.</span>
        </div>
      </div>

      <div class="footer-main">
        <div class="footer-col-logo">
          <h1 class="footer-logo">HOSTELTECH</h1>
          <div class="footer-bottom-info">
            <div class="footer-socials">
              <a href="#">&#9679;</a>
              <a href="#">&#9676;</a>
              <a href="#">&#9654;</a>
            </div>
            <p class="footer-copyright">© 2025 HOSTELTECH, ALL RIGHTS RESERVED</p>
          </div>
        </div>
        <div class="footer-col-links">
          <div class="footer-nav">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Track Your Order</a></li>
            </ul>
          </div>
          <div class="footer-nav">
            <h3>Company</h3>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Contact & FAQ</a></li>
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">LOL Community</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-marquee banner-bottom">
        <div class="marquee-track">
          <span>With thanks, HOSTELTECH.</span><span>With thanks, HOSTELTECH.</span><span>With thanks, HOSTELTECH.</span>
          <span>With thanks, HOSTELTECH.</span><span>With thanks, HOSTELTECH.</span><span>With thanks, HOSTELTECH.</span>
          <span>With thanks, HOSTELTECH.</span><span>With thanks, HOSTELTECH.</span><span>With thanks, HOSTELTECH.</span>
          <span>With thanks, HOSTELTECH.</span><span>With thanks, HOSTELTECH.</span><span>With thanks, HOSTELTECH.</span>
        </div>
      </div>
  `;

  app.appendChild(footerEl);

  const canvas = document.getElementById('template1Canvas') as HTMLCanvasElement;
  const scene = new THREE.Scene();

  const aspect = window.innerWidth / window.innerHeight;
  const camera = new THREE.PerspectiveCamera(45, aspect, 0.01, 200);
  camera.position.set(0, 0, 5);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
  directionalLight.position.set(2, 3, 4);
  scene.add(directionalLight);

  const backLight = new THREE.DirectionalLight(0xffffff, 0.4);
  backLight.position.set(-2, 1, -3);
  scene.add(backLight);

  let model: THREE.Group | null = null;
  let scrollTimeline: gsap.core.Timeline | null = null;
  let animFrameId: number;

  const startCamZ = 7;
  const endCamZ = 0.8;
  const startRotY = -Math.PI / 1.5;
  const endRotY = 1;

  const startCamY = 0;
  const endCamY = 0.45;

  const camState = { z: startCamZ, y: startCamY, rotY: startRotY };

  const loader = new GLTFLoader();

  loader.load('/assets/models/scene.gltf', (gltf) => {
    model = gltf.scene;

    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2.0 / maxDim;
    model.scale.setScalar(scale);

    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center.multiplyScalar(scale));

    const baseX = model.position.x;
    const baseZ = model.position.z;
    const rightEdgeX = (size.x * scale) / 2;

    model.rotation.y = startRotY;
    scene.add(model);

    scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.template-1-pinned-container',
        pin: true,
        start: 'top top',
        end: '+=15000',
        scrub: 0.8,
      },
    });

    // Phase 1: zoom in + rotate to front view
    scrollTimeline.to(camState, {
      z: endCamZ,
      y: endCamY,
      rotY: endRotY,
      duration: 2,
      ease: 'power2.inOut',
      onUpdate: () => {
        camera.position.z = camState.z;
        camera.position.y = camState.y;
        if (model) model.rotation.y = camState.rotY;
      },
    });

    // Phase 2: rotate around right edge ~90° + slide content in from left
    const contentSection = document.querySelector('.template-1-content') as HTMLElement;
    const phase2 = { angle: 0 };

    scrollTimeline.to(phase2, {
      angle: Math.PI / 2,
      duration: 2,
      ease: 'power1.inOut',
      onUpdate: () => {
        if (!model) return;
        const a = phase2.angle;
        model.position.x = baseX + rightEdgeX * (1 - Math.cos(a));
        model.position.z = baseZ - rightEdgeX * Math.sin(a);
        model.rotation.y = endRotY + a;
      },
    });

    scrollTimeline.fromTo(contentSection,
      { xPercent: -100 },
      { xPercent: 0, duration: 2, ease: 'power2.inOut' },
      '<'
    );

    // Phase 2b: stagger each letter of YOUR CONTENT HERE sliding down
    const contentLetters = document.querySelectorAll('.content-letter');
    scrollTimeline.fromTo(contentLetters,
      { y: -120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out' },
      '<+=0.5'
    );

    // Phase 3: slide vault section up over content
    const vaultSection = document.querySelector('.template-1-vault') as HTMLElement;
    scrollTimeline.fromTo(vaultSection,
      { yPercent: 100 },
      { yPercent: 0, duration: 2, ease: 'power2.inOut' },
    );

    // Phase 3b: stagger each letter of THE VAULT sliding down
    const vaultLetters = document.querySelectorAll('.vault-letter');
    scrollTimeline.fromTo(vaultLetters,
      { y: -120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' },
      '<+=0.5'
    );

    // Phase 4: horizontal scroll cards from right to left
    const cardsTrack = document.querySelector('.vault-cards-track') as HTMLElement;
    const totalScroll = cardsTrack.scrollWidth - window.innerWidth;
    scrollTimeline.fromTo(cardsTrack,
      { x: window.innerWidth },
      { x: -totalScroll, duration: 4, ease: 'none' },
    );

    // Phase 5: vault slides out left, showcase slides in from right
    const showcaseSection = document.querySelector('.template-1-showcase') as HTMLElement;
    scrollTimeline.to(vaultSection, {
      xPercent: -100,
      duration: 2,
      ease: 'power2.inOut',
    });
    scrollTimeline.fromTo(showcaseSection,
      { x: window.innerWidth },
      { x: 0, duration: 2, ease: 'power2.inOut' },
      '<'
    );

    // Phase 6: slide showcase left by 100vw to reveal extra section
    scrollTimeline.to(showcaseSection, {
      x: -window.innerWidth,
      duration: 2,
      ease: 'power2.inOut',
    });

    // Phase 6b: stagger each letter of RAW CULTURE sliding down as extra section is revealed
    const rcLetters = document.querySelectorAll('.rc-letter');
    scrollTimeline.fromTo(rcLetters,
      { y: -120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' },
      '<+=0.3'
    );

    // Phase 7: stacked cards slide up one by one from the bottom
    const stackedCards = document.querySelectorAll('.stacked-card');
    scrollTimeline.fromTo(stackedCards,
      { y: 300, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.4, ease: 'power3.out' },
    );

    // Phase 8: slide up one by one and assemble from left to right
    scrollTimeline.to(stackedCards, {
      x: (index) => (index - 1.5) * 320,
      y: -420,
      scale: 1,
      duration: 1.2,
      stagger: 0.3,
      ease: 'power3.inOut',
      onComplete: () => {
        const showcaseExtra = document.querySelector('.showcase-extra');
        showcaseExtra?.classList.add('cards-assembled');
      },
      onReverseComplete: () => {
        const showcaseExtra = document.querySelector('.showcase-extra');
        showcaseExtra?.classList.remove('cards-assembled');
      }
    });

    // Phase 9: fade in the 'View All Products' button below the cards
    const viewAllBtn = document.querySelector('.view-all-wrapper');
    scrollTimeline.fromTo(viewAllBtn,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '+=0.2'
    );
  });

  // --- Particles background ---
  const pCanvas = document.getElementById('particlesCanvas') as HTMLCanvasElement;
  const pScene = new THREE.Scene();
  const pCamera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 100);
  pCamera.position.set(0, 0, 20);

  const pRenderer = new THREE.WebGLRenderer({ canvas: pCanvas, alpha: true, antialias: true });
  pRenderer.setSize(window.innerWidth, window.innerHeight);
  pRenderer.setPixelRatio(1);
  pRenderer.setClearColor(0x000000, 0);

  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);
  const randoms = new Float32Array(particleCount * 4);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    let x: number, y: number, z: number, len: number;
    do {
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      z = Math.random() * 2 - 1;
      len = x * x + y * y + z * z;
    } while (len > 1 || len === 0);
    const r = Math.cbrt(Math.random());
    positions.set([x * r, y * r, z * r], i * 3);
    randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
    colors.set([1, 1, 1], i * 3);
  }

  const pGeometry = new THREE.BufferGeometry();
  pGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  pGeometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 4));
  pGeometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));

  const pUniforms = {
    uTime: { value: 0 },
    uSpread: { value: 10 },
    uBaseSize: { value: 100 },
  };

  const pMaterial = new THREE.ShaderMaterial({
    vertexShader: particleVertex,
    fragmentShader: particleFragment,
    uniforms: pUniforms,
    transparent: true,
    depthTest: false,
  });

  const particles = new THREE.Points(pGeometry, pMaterial);
  pScene.add(particles);

  const mouse = { x: 0, y: 0 };
  const onMouseMove = (e: MouseEvent) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
  };
  window.addEventListener('mousemove', onMouseMove);

  let pElapsed = 0;
  let pLastTime = performance.now();

  function onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    pCamera.aspect = w / h;
    pCamera.updateProjectionMatrix();
    pRenderer.setSize(w, h);
  }
  window.addEventListener('resize', onResize);

  function animate(now: number) {
    animFrameId = requestAnimationFrame(animate);

    const delta = now - pLastTime;
    pLastTime = now;
    pElapsed += delta * 0.1;
    pUniforms.uTime.value = pElapsed * 0.001;

    particles.position.x = -mouse.x;
    particles.position.y = -mouse.y;
    particles.rotation.x = Math.sin(pElapsed * 0.0002) * 0.1;
    particles.rotation.y = Math.cos(pElapsed * 0.0005) * 0.15;
    particles.rotation.z += 0.001;

    renderer.render(scene, camera);
    pRenderer.render(pScene, pCamera);
  }
  animate(performance.now());

  return () => {
    cancelAnimationFrame(animFrameId);
    window.removeEventListener('resize', onResize);
    window.removeEventListener('mousemove', onMouseMove);
    scrollTimeline?.scrollTrigger?.kill();
    scrollTimeline?.kill();
    renderer.dispose();
    pRenderer.dispose();
    scene.clear();
    pScene.clear();
  };
}
