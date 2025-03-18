"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Background3D() {
  const [mousePos, setMousePos] = useState([0, 0]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 2 - 1; // Normaliza para -1 a 1
      const y = (clientY / window.innerHeight) * 2 - 1;
      setMousePos([x * 5, -y * 5]); // Multiplica para aumentar o efeito
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      {/* Iluminação dinâmica baseada no mouse */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[mousePos[0], mousePos[1], 2]}
        intensity={1}
      />

      {/* Esfera animada */}
      <Sphere args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial color="#ff9000" distort={0.5} speed={2} />
      </Sphere>

      {/* Permite girar a câmera */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
