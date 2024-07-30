import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const WaveScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [radiusTop, setRadiusTop] = useState(5)
  const [radiusBottom, setRadiusBottom] = useState(5)
  const [height, setHeight] = useState(100)
  const [radialSegments, setRadialSegments] = useState(8);
  const [heightSegments, setHeightSegments] = useState(32);
  const [thetaLength, setThetaLength] = useState(Math.PI * 0.5); // <<< start at 0.5 radian


  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    // Create initial wave/tunnel geometry
    let wave = createWave();
    scene.add(wave);

    // Add portfolio elements (example: a simple box)
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.z = -50;
    scene.add(box);

    // Function to create the wave mesh
    function createWave() {
      const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, true, 0, thetaLength);
      const material = new THREE.MeshBasicMaterial({ color: 0x00aaff, side: THREE.BackSide, wireframe: true }); // Enable wireframe
      const waveMesh = new THREE.Mesh(geometry, material);
      waveMesh.rotation.x = Math.PI / 2;
      return waveMesh;
    }

    // Update wave geometry on scroll
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        // Scrolling up
        setThetaLength(prev => Math.min(2 * Math.PI, prev + 0.1));
        setRadialSegments(prev => Math.min(64, prev + 1));
        setRadiusBottom(prev => Math.min(20, prev + 1));
      } else {
        // Scrolling down
        setThetaLength(prev => Math.max(0, prev - 0.1));
        setRadialSegments(prev => Math.max(8, prev - 1));
        setRadiusBottom(prev => Math.max(5, prev - 1));
      }
    };

    window.addEventListener('wheel', handleScroll);

    // Animation loop
    const animate = () => { 
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      currentMount.removeChild(renderer.domElement);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [radiusTop, radiusBottom, height, radialSegments, heightSegments, thetaLength]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Update wave geometry
    const scene = new THREE.Scene();
    const wave = createWave();
    scene.add(wave);

    function createWave() {
      const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, true, 0, thetaLength);
      const material = new THREE.MeshBasicMaterial({ color: 0x00aaff, side: THREE.BackSide, wireframe: true }); // Enable wireframe
      const waveMesh = new THREE.Mesh(geometry, material);
      waveMesh.rotation.x = Math.PI / 2;
      return waveMesh;
    }

  }, [radiusTop, radiusBottom, height, radialSegments, heightSegments, thetaLength]);

  return <div ref={mountRef} />;
};

export default WaveScene;
