import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Continuous rotation
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.008;

    // Mouse position
    const targetX = state.pointer.x * 0.5;
    const targetY = state.pointer.y * 0.5;

    // Smoothly move the object toward the mouse
    meshRef.current.position.x +=
      (targetX - meshRef.current.position.x) * 0.03;

    meshRef.current.position.y +=
      (targetY - meshRef.current.position.y) * 0.03;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />

        <meshStandardMaterial
          color="#38bdf8"
          wireframe
          emissive="#0284c7"
          emissiveIntensity={1}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <pointLight
        position={[5, 5, 5]}
        intensity={30}
        color="#38bdf8"
      />

      <pointLight
        position={[-5, -3, 2]}
        intensity={15}
        color="#2563eb"
      />

      <FloatingCube />

      <Sparkles
        count={80}
        scale={8}
        size={2}
        speed={0.4}
        color="#38bdf8"
      />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-3d">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 50,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}