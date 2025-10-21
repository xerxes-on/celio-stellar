import { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeJSScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create glowing torus knots
    const torusKnots: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const geometry = new THREE.TorusKnotGeometry(0.8, 0.3, 100, 16);
      const material = new THREE.MeshPhongMaterial({
        color: i === 0 ? 0x8b5cf6 : i === 1 ? 0xec4899 : 0x06b6d4,
        emissive: i === 0 ? 0x8b5cf6 : i === 1 ? 0xec4899 : 0x06b6d4,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.7,
        wireframe: true,
      });
      const torusKnot = new THREE.Mesh(geometry, material);
      torusKnot.position.set(
        (i - 1) * 3,
        Math.sin(i) * 2,
        Math.cos(i) * 2
      );
      torusKnots.push(torusKnot);
      scene.add(torusKnot);
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8b5cf6, 2, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xec4899, 2, 100);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Create floating geometric shapes
    const geometries = [
      new THREE.IcosahedronGeometry(0.5, 0),
      new THREE.OctahedronGeometry(0.5, 0),
      new THREE.TetrahedronGeometry(0.5, 0),
    ];

    const floatingShapes: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color: Math.random() > 0.5 ? 0x8b5cf6 : 0xec4899,
        emissive: Math.random() > 0.5 ? 0x8b5cf6 : 0xec4899,
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.6,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      floatingShapes.push(mesh);
      scene.add(mesh);
    }

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;

      // Rotate particle system
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      // Animate torus knots
      torusKnots.forEach((knot, index) => {
        knot.rotation.x += 0.01;
        knot.rotation.y += 0.01;
        knot.position.y = Math.sin(time + index) * 2;
      });

      // Animate floating shapes
      floatingShapes.forEach((shape, index) => {
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;
        shape.position.y += Math.sin(time * 2 + index) * 0.002;
        shape.position.x += Math.cos(time * 2 + index) * 0.002;
      });

      // Animate lights
      pointLight1.position.x = Math.sin(time) * 5;
      pointLight1.position.z = Math.cos(time) * 5;
      pointLight2.position.x = Math.cos(time) * 5;
      pointLight2.position.z = Math.sin(time) * 5;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      torusKnots.forEach(knot => {
        knot.geometry.dispose();
        (knot.material as THREE.Material).dispose();
      });
      floatingShapes.forEach(shape => {
        shape.geometry.dispose();
        (shape.material as THREE.Material).dispose();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none opacity-40"
      style={{ zIndex: 1 }}
    />
  );
};
