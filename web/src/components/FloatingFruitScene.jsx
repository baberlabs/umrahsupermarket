import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useMemo, useRef } from "react";

const FruitModel = ({
  url,
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
  scrollY = 0,
}) => {
  const group = useRef();
  const { scene } = useGLTF(url);
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.getElapsedTime();

    group.current.rotation.y = rotation[1] + t * 0.15;
    group.current.rotation.x = rotation[0] + Math.sin(t * 0.8) * 0.04;

    group.current.position.y = position[1] - scrollY * 0.0008;
  });

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  );
};

export const FloatingFruitScene = ({ scrollY = 0, variant = "home" }) => {
  const homeFruits = [
    {
      url: "/models/avocado.glb",
      position: [2.9, 0.1, -1.2],
      scale: 0.42,
      rotation: [0.08, -0.5, 0],
    },
  ];

  const aboutFruits = [
    {
      url: "/models/avocado.glb",
      position: [2.3, -0.8, -1],
      scale: 0.34,
      rotation: [0.05, -0.4, 0],
    },
  ];

  const fruits = variant === "about" ? aboutFruits : homeFruits;

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[4, 4, 5]} intensity={1.2} />
        <pointLight position={[2, 1, 3]} intensity={0.6} />

        {fruits.map((fruit, index) => (
          <FruitModel key={index} {...fruit} scrollY={scrollY} />
        ))}
      </Canvas>
    </div>
  );
};

useGLTF.preload("/models/avocado.glb");
