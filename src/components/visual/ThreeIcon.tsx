import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { memo, useMemo, useRef } from "react";
import * as THREE from "three";

function SpinningKnot() {
  const mesh = useRef<THREE.Mesh>(null!);

  const brand = useMemo(() => {
    const root = document.documentElement;
    const hsl = getComputedStyle(root).getPropertyValue("--brand").trim();
    return new THREE.Color(`hsl(${hsl})`);
  }, []);

  useFrame((_, delta) => {
    mesh.current.rotation.x += delta * 0.4;
    mesh.current.rotation.y += delta * 0.6;
  });

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[0.8, 0.26, 128, 32]} />
      <meshStandardMaterial color={brand} metalness={0.6} roughness={0.3} />
    </mesh>
  );
}

export const ThreeIcon = memo(function ThreeIcon() {
  return (
    <div aria-hidden className="pointer-events-none select-none">
      <Canvas camera={{ position: [2.6, 2.6, 2.6] }} style={{ width: 160, height: 160 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={0.8} />
        <SpinningKnot />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
});
