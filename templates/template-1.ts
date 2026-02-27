import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function render(): (() => void) | void {
  const app = document.getElementById('app') as HTMLElement;

  app.innerHTML = `
    <div class="template-1-page">
      <canvas id="template1Canvas"></canvas>
    </div>
    <section class="template-1-content">
      <div class="container">
        <h1>Your Content Here</h1>
        <p>This section appears after the 3D model transition.</p>
      </div>
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
  });

  function onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', onResize);

  function animate() {
    animFrameId = requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  return () => {
    cancelAnimationFrame(animFrameId);
    window.removeEventListener('resize', onResize);
    scrollTimeline?.scrollTrigger?.kill();
    scrollTimeline?.kill();
    renderer.dispose();
    scene.clear();
  };
}
