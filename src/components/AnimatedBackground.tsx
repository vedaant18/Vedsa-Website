import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';

function Particles({ scrollSpeed }: { scrollSpeed: number }) {
  const groupRef = useRef<THREE.Group>(null);
  
  const spheres = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50
        ],
        scale: Math.random() * 0.3 + 0.1
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const speed = 0.05 + scrollSpeed * 0.2;
      groupRef.current.rotation.y = state.clock.elapsedTime * speed;
      groupRef.current.rotation.x = state.clock.elapsedTime * speed * 0.6;
    }
  });

  return (
    <group ref={groupRef}>
      {spheres.map((sphere, i) => (
        <mesh key={i} position={sphere.position as [number, number, number]}>
          <sphereGeometry args={[sphere.scale, 16, 16]} />
          <meshStandardMaterial
            color="#1D4ED8"
            transparent
            opacity={0.6}
            emissive="#1D4ED8"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingRings({ scrollSpeed }: { scrollSpeed: number }) {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const speed = 0.5 + scrollSpeed * 0.8;
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.3 * speed;
      ring1Ref.current.rotation.y = t * 0.2 * speed;
      ring1Ref.current.position.y = Math.sin(t * 0.5 * speed) * 2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.2 * speed;
      ring2Ref.current.rotation.z = t * 0.3 * speed;
      ring2Ref.current.position.y = Math.cos(t * 0.3 * speed) * 2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = t * 0.4 * speed;
      ring3Ref.current.rotation.z = -t * 0.1 * speed;
      ring3Ref.current.position.x = Math.sin(t * 0.4 * speed) * 3;
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

function WaveGrid({ scrollSpeed }: { scrollSpeed: number }) {
  const gridRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (gridRef.current) {
      const time = state.clock.elapsedTime * (0.5 + scrollSpeed * 0.8);
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
  const [scrollSpeed, setScrollSpeed] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = Math.abs(currentScrollY - lastScrollY) / 100;
      lastScrollY = currentScrollY;
      setScrollSpeed(scrollVelocity);
      
      setTimeout(() => {
        setScrollSpeed(prev => prev * 0.95);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#2563EB" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0EA5E9" />
        <Particles scrollSpeed={scrollSpeed} />
        <FloatingRings scrollSpeed={scrollSpeed} />
        <WaveGrid scrollSpeed={scrollSpeed} />
      </Canvas>
    </div>
  );
}
