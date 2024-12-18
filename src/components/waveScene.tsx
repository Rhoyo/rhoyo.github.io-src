import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { createWave, createParticles } from '../ts/waveHelper';

const WaveScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  // Wave Vars
  const [radiusTop, setRadiusTop] = useState(1);
  const [radiusBottom, setRadiusBottom] = useState(1);
  const [radiusX, setRadiusX] = useState(10); // Radius for X-axis
  const [radiusY, setRadiusY] = useState(6); // Radius for Y-axis
  const [height, setHeight] = useState(100);
  const [radialSegments, setRadialSegments] = useState(8);
  const [heightSegments, setHeightSegments] = useState(10);
  const [thetaLength, setThetaLength] = useState(Math.PI * 0.5); // Start at 0.5 radian
  const thetaStart = Math.PI * 1.5; // 225 degrees in radians

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222); 
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const light = new THREE.DirectionalLight(0xf5f0da, 5); // increase the light's intensity
    light.position.set(0, 1000, -500); // set the light's position to a high altitude
    light.target.position.set(0, 0, 0); // set the light's target to the origin
    
    scene.add(light); 
    scene.add(camera);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);
    let animationID: number;

    // Create initial wave/tunnel and shoulder geometry
    let wave = createWave(
      radiusTop,
      radiusBottom, 
      radiusX, 
      radiusY, 
      height, 
      radialSegments, 
      heightSegments, 
      thetaStart, 
      thetaLength);
    const particles = createParticles();
    wave.add(particles);
    scene.add(wave);

    // Add portfolio elements (example: a simple box)
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.z = -50;
    scene.add(box);

    // Update wave geometry on scroll
    const handleScroll = (event: WheelEvent) => {
      // console.log(thetaLength);
      if (event.deltaY > 0) {
        // Scrolling up

        // Wave dynamics effects
        setThetaLength(prev => Math.min(2 * Math.PI, prev + 0.1));
        setRadialSegments(prev => Math.min(64, prev + 0.8));
        setHeightSegments(prev => Math.min(64, prev + 0.8));
        // Barrel Surf Effect
        setRadiusX(prev => Math.min(30, prev + 0.75));
        setRadiusY(prev => Math.min(18, prev + 0.75));

      } else {
        // Scrolling down

        // Wave dynamics effects
        setThetaLength(prev => Math.max(0, prev - 0.1));
        setRadialSegments(prev => Math.max(8, prev - 0.8));
        setHeightSegments(prev => Math.max(8, prev - 0.8));
        // Barrel Surf Effect
        setRadiusX(prev => Math.max(10, prev - 0.75));
        setRadiusY(prev => Math.max(6, prev - 0.75));

      }
    };

    window.addEventListener('wheel', handleScroll);
    // Animation loop
    const animate = () => { 
      animationID = requestAnimationFrame(animate);
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
      // Remove renderer from DOM
      if (renderer.domElement && currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      // Dispose wave geometry
      wave.geometry.dispose();

      // Dispose other objects in the scene (example: box)
      box.geometry.dispose();
      box.material.dispose();

      // Cancel animation frame
      cancelAnimationFrame(animationID);

      // Remove event listeners
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [radiusTop, radiusBottom, radiusX, radiusY, height, radialSegments, heightSegments, thetaLength]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Update wave geometry
    const scene = new THREE.Scene();
    const wave = createWave(
      radiusTop,
      radiusBottom, 
      radiusX, 
      radiusY, 
      height, 
      radialSegments, 
      heightSegments, 
      thetaStart, 
      thetaLength);
    scene.add(wave);

  }, [radiusTop, radiusBottom, radiusX, radiusY, height, radialSegments, heightSegments, thetaLength]);

  return <div ref={mountRef} />;
};

export default WaveScene;
