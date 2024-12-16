import * as THREE from 'three';
// Function to create the wave mesh
export function createWave(radiusTop: number, radiusBottom: number, radiusX: number, radiusY: number, height: number, radialSegments: number, heightSegments: number, thetaStart: number, thetaLength: number): THREE.Mesh {
  const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, true, thetaStart, thetaLength);
  
  // Modify vertices to form an oval shape
  const positionAttribute = geometry.getAttribute('position');
  const vector = new THREE.Vector3();
  for (let i = 0; i < positionAttribute.count; i++) {
      vector.fromBufferAttribute(positionAttribute, i);
      

      // NEED TO CHECK THE BOTTOM HALF OF THE OVAL ITS THE SHOULDER THAT GROWS BUT SLOWER
      // THE TOP HALF OF THE OVAL SHOULD EXPAND FASTER THAN THE BOTTOM

      // 3rd quadrant

      // Adjust the radius for the top and bottom
      const radius = vector.y > 0 ? radiusTop : radiusBottom;
      
      vector.x *= (radiusX / radius);
      vector.z *= (radiusY / radius);
      
      positionAttribute.setXYZ(i, vector.x, vector.y, vector.z);
  }
  positionAttribute.needsUpdate = true;

  // Create a gradient texture
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#edd69d"); //edd69d //47dded
    gradient.addColorStop(0.35, "#edd69d");
    gradient.addColorStop(0.7, "#47dded");
    gradient.addColorStop(1, '#f5f0da');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  const texture = new THREE.CanvasTexture(canvas);
  const bumpTexture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/Rhoyo/rhoyo.github.io-src/refs/heads/main/src/images/wave-bump-map-1.png');
  // Use a light-sensitive material
  const material = new THREE.MeshStandardMaterial({
    map: texture,
    opacity: 0.5,
    roughness: 0.2,  // How rough the surface appears (0 = shiny, 1 = matte)
    metalness: 0.2,  // How metallic the surface appears (0 = non-metallic, 1 = metallic)
    aoMap: bumpTexture,
    emissive: new THREE.Color(0x47dded),
    emissiveIntensity: 0.1,
    transparent: true,
    side: THREE.BackSide, // To make the inside of the wave visible
  });


  // const material = new THREE.MeshBasicMaterial({ color: 0x00aaff, side: THREE.BackSide, wireframe: true }); // Enable wireframe
  const waveMesh = new THREE.Mesh(geometry, material);
  waveMesh.rotation.x = Math.PI / 2;
  waveMesh.rotation.y = Math.PI / 3;
  return waveMesh;
}

// Function to create the particle system for the spray effect
export function createParticles(): THREE.Points {
  const particleCount = 3000;
  const particles = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = Math.random() * 2 - 1;
    positions[i * 3 + 1] = Math.random() * 2 - 1;
    positions[i * 3 + 2] = Math.random() * 15 - 5;
  }

  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  let particleMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.005
  });

  return new THREE.Points(particles, particleMaterial);
}

