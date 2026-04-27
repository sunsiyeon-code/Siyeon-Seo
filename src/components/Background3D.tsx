import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  
  // Create 2000 points
  const points = useMemo(() => {
    const p = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = time * 0.05;
    ref.current.rotation.y = time * 0.03;
    
    // Slight mouse reaction
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, state.mouse.x * 0.5, 0.1);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, state.mouse.y * 0.5, 0.1);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#FF007F"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <Points positions={points.map(v => v * 1.2)} stride={3}>
        <PointMaterial
          transparent
          color="#FF8C00"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Particles />
        </Float>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black opacity-60" />
    </div>
  );
};

export default Background3D;
