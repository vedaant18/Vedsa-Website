import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#1D4ED8"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.3;
      ring1Ref.current.rotation.y = t * 0.2;
      ring1Ref.current.position.y = Math.sin(t * 0.5) * 2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.2;
      ring2Ref.current.rotation.z = t * 0.3;
      ring2Ref.current.position.y = Math.cos(t * 0.3) * 2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = t * 0.4;
      ring3Ref.current.rotation.z = -t * 0.1;
      ring3Ref.current.position.x = Math.sin(t * 0.4) * 3;
    }
  });

  return (
    <>
      <mesh ref={ring1Ref} position={[-5, 0, -10]}>
        <torusGeometry args={[3, 0.1, 16, 100]} />
        <meshStandardMaterial
          color="#2563EB"
          transparent
          opacity={0.3}
          emissive="#1D4ED8"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh ref={ring2Ref} position={[5, 0, -15]}>
        <torusGeometry args={[2.5, 0.15, 16, 100]} />
        <meshStandardMaterial
          color="#0EA5E9"
          transparent
          opacity={0.3}
          emissive="#0EA5E9"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh ref={ring3Ref} position={[0, -3, -12]}>
        <torusGeometry args={[2, 0.12, 16, 100]} />
        <meshStandardMaterial
          color="#2563EB"
          transparent
          opacity={0.3}
          emissive="#2563EB"
          emissiveIntensity={0.5}
        />
      </mesh>
    </>
  );
}

function WaveGrid() {
  const gridRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (gridRef.current) {
      const time = state.clock.elapsedTime;
      const geometry = gridRef.current.geometry;
      const positions = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] = Math.sin(x * 0.3 + time) * Math.cos(z * 0.3 + time) * 0.5;
      }
      geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, 0]}>
      <planeGeometry args={[40, 40, 50, 50]} />
      <meshStandardMaterial
        color="#1D4ED8"
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#2563EB" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0EA5E9" />
        <Particles />
        <FloatingRings />
        <WaveGrid />
      </Canvas>
    </div>
  );
}
