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
    <div class="template-1-page">
      <canvas id="particlesCanvas"></canvas>
      <canvas id="template1Canvas"></canvas>
    </div>
    <section class="template-1-content">
      <video class="content-bg-video" autoplay muted loop playsinline>
        <source src="/assets/videos/background.mp4" type="video/mp4">
      </video>
      <div class="container template-1-content-inner">
        <h1>Your Content Here</h1>
        <p>This section appears after the 3D model transition.</p>
      </div>
    </section>
    <section class="template-1-vault">
      <div class="template-1-vault-inner">
        <h1>The Vault</h1>
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
      <img class="section-divider" src="/assets/images/divider 1.png" alt="">
    </section>
  `;

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
        trigger: '.template-1-page',
        start: 'top top',
        end: 'bottom bottom',
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

    // Phase 3: slide vault section up over content
    const vaultSection = document.querySelector('.template-1-vault') as HTMLElement;
    scrollTimeline.fromTo(vaultSection,
      { yPercent: 100 },
      { yPercent: 0, duration: 2, ease: 'power2.inOut' },
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
      { xPercent: 100 },
      { xPercent: 0, duration: 2, ease: 'power2.inOut' },
      '<'
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
