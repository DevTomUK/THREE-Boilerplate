// TOM Model - jsx created using npx gltfjsx

import React, { useContext, useState, useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { CameraContext } from "../../context/cameraContext";
import { useFrame } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";

export function TOM(props) {
  const { moveTo } = useContext(CameraContext);

  const [hovered, setHovered] = useState(false);
  const modelRef = useRef();

  const { scale } = useSpring({
    scale: hovered ? 30 : 25,
    config: { mass: 1, tension: 170, friction: 20 },
  });

  function handleClickTOM() {
      moveTo("lowShot");
  }

  const { nodes, materials } = useGLTF("/TOM-transformed.glb");

  useFrame(({ clock }) => {
    if (!modelRef.current) return;
    const t = clock.getElapsedTime();

    modelRef.current.position.y = Math.sin(t * 0.5) * 1;
    modelRef.current.rotation.y = Math.sin(t * 0.2) * 0.1;
    modelRef.current.rotation.x = Math.sin(t * 0.1) * 0.05;
    modelRef.current.rotation.z = Math.cos(t * 2) * 0.05;
  });

  return (
    <a.group
      ref={modelRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClickTOM}
      {...props}
      dispose={null}
      scale={scale}
      position={[0, 0, 0]}
    >
      <mesh
        geometry={nodes.Text.geometry}
        material={materials["Brushed gold used metal"]}
        ref={(mesh) => mesh && mesh.geometry.center()}
      />
    </a.group>
  );
}

useGLTF.preload("/TOM-transformed.glb");
