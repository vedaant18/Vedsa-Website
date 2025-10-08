
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Particles() {
  const groupRef = useRef<THREE.Group>(null);
  
  const spheres = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 300; i++) {
      const starType = Math.random();
      temp.push({
        position: [
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100
        ],
        scale: Math.random() * 0.08 + 0.02,
        color: starType > 0.8 ? '#E0F2FE' : starType > 0.6 ? '#FEF3C7' : '#FFFFFF',
        intensity: Math.random() * 0.5 + 0.5
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.01;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.004;
    }
  });

  return (
    <group ref={groupRef}>
      {spheres.map((sphere, i) => (
        <mesh key={i} position={sphere.position as [number, number, number]}>
          <sphereGeometry args={[sphere.scale, 8, 8]} />
          <meshStandardMaterial
            color={sphere.color}
            transparent
            opacity={0.8}
            emissive={sphere.color}
            emissiveIntensity={sphere.intensity}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.0225;
      ring1Ref.current.rotation.y = t * 0.015;
      ring1Ref.current.position.y = Math.sin(t * 0.045) * 1.5;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.015;
      ring2Ref.current.rotation.z = t * 0.0225;
      ring2Ref.current.position.y = Math.cos(t * 0.03) * 1.5;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = t * 0.03;
      ring3Ref.current.rotation.z = -t * 0.0075;
      ring3Ref.current.position.x = Math.sin(t * 0.0375) * 2;
    }
  });

  return (
    <>
      <mesh ref={ring1Ref} position={[-5, 0, -10]}>
        <torusGeometry args={[3, 0.08, 12, 80]} />
        <meshStandardMaterial
          color="#9333EA"
          transparent
          opacity={0.25}
          emissive="#7C3AED"
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh ref={ring2Ref} position={[5, 0, -15]}>
        <torusGeometry args={[2.5, 0.1, 12, 80]} />
        <meshStandardMaterial
          color="#EC4899"
          transparent
          opacity={0.25}
          emissive="#DB2777"
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh ref={ring3Ref} position={[0, -3, -12]}>
        <torusGeometry args={[2, 0.09, 12, 80]} />
        <meshStandardMaterial
          color="#6366F1"
          transparent
          opacity={0.25}
          emissive="#4F46E5"
          emissiveIntensity={0.4}
        />
      </mesh>
    </>
  );
}

function WaveGrid() {
  const gridRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (gridRef.current) {
      const time = state.clock.elapsedTime * 0.15;
      const geometry = gridRef.current.geometry;
      const positions = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] = Math.sin(x * 0.2 + time) * Math.cos(z * 0.2 + time) * 0.3;
      }
      geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, 0]}>
      <planeGeometry args={[40, 40, 35, 35]} />
      <meshStandardMaterial
        color="#4C1D95"
        wireframe
        transparent
        opacity={0.12}
        emissive="#6D28D9"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

function NebulaClouds() {
  const cloud1Ref = useRef<THREE.Mesh>(null);
  const cloud2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (cloud1Ref.current) {
      cloud1Ref.current.rotation.z = t * 0.0015;
      cloud1Ref.current.position.x = Math.sin(t * 0.005) * 2;
    }
    if (cloud2Ref.current) {
      cloud2Ref.current.rotation.z = -t * 0.001;
      cloud2Ref.current.position.x = Math.cos(t * 0.0075) * 2;
    }
  });

  return (
    <>
      <mesh ref={cloud1Ref} position={[-8, 5, -20]}>
        <sphereGeometry args={[4, 16, 16]} />
        <meshStandardMaterial
          color="#9333EA"
          transparent
          opacity={0.08}
          emissive="#7C3AED"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh ref={cloud2Ref} position={[10, -4, -25]}>
        <sphereGeometry args={[5, 16, 16]} />
        <meshStandardMaterial
          color="#EC4899"
          transparent
          opacity={0.06}
          emissive="#DB2777"
          emissiveIntensity={0.15}
        />
      </mesh>
    </>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.15} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#A855F7" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#EC4899" />
        <pointLight position={[0, 10, -10]} intensity={0.4} color="#6366F1" />
        <Particles />
        <FloatingRings />
        <WaveGrid />
        <NebulaClouds />
      </Canvas>
    </div>
  );
}
