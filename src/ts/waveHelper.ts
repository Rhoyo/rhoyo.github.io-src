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

    const material = new THREE.MeshBasicMaterial({ color: 0x00aaff, side: THREE.BackSide, wireframe: true }); // Enable wireframe
    const waveMesh = new THREE.Mesh(geometry, material);
    waveMesh.rotation.x = Math.PI / 2;
    waveMesh.rotation.y = Math.PI / 3;
    return waveMesh;
}

// Function to create the particle system for the spray effect
export function createParticles(radiusX: number, radiusY: number, height: number, thetaLength: number): THREE.Points {
  const particleCount = 1000;
  const particles = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleVelocities = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const theta = thetaLength + Math.PI * 1.25 + Math.random() * 0.1 - 0.05; // Spread particles around thetaStart
    const x = radiusX * Math.cos(theta);
    const y = radiusY * Math.sin(theta);
    const z = Math.random() * height - height / 2;

    particlePositions[i * 3] = x;
    particlePositions[i * 3 + 1] = y;
    particlePositions[i * 3 + 2] = z;

    particleVelocities[i * 3] = (Math.random() - 0.5) * 2;
    particleVelocities[i * 3 + 1] = (Math.random() - 0.5) * 2;
    particleVelocities[i * 3 + 2] = (Math.random() - 0.5) * 2;
  }

  particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  particles.setAttribute('velocity', new THREE.BufferAttribute(particleVelocities, 3));

  let particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });

  return new THREE.Points(particles, particleMaterial);
}

