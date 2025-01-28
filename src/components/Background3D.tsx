'use client';

import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Group } from 'three';

function ParticleField() {
  const ref = useRef<Group | null>(null);
  const { viewport } = useThree();
  
  const count = 3000;
  const positions = new Float32Array(count * 3);
  
  // Fill positions with random values, using viewport size
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * viewport.width * 2;     // x
    positions[i + 1] = (Math.random() - 0.5) * viewport.height * 2; // y
    positions[i + 2] = (Math.random() - 0.5) * 15;                  // z
  }

  // Track mouse position
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    // Smooth mouse movement
    target.current.x += (mouse.current.x * 0.5 - target.current.x) * 0.02;
    target.current.y += (mouse.current.y * 0.5 - target.current.y) * 0.02;

    // Very gentle rotation based on mouse position
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      target.current.y * Math.PI * 0.05,
      0.01
    );
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      target.current.x * Math.PI * 0.05,
      0.01
    );

    // Subtle floating motion
    ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.1;
  });

  return (
    <group ref={ref}>
      <Points positions={positions}>
        <PointMaterial
          transparent
          color="#88ccff"
          size={0.025}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  return (
    <>
      <color attach="background" args={['#000000']} />
      <ParticleField />
    </>
  );
} 