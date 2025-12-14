// Basic cube mesh to demonstrate hover effects, and movement of camera using moveTo function

import { useContext, useState } from "react";
import { CameraContext } from "../../../context/cameraContext";

export default function Cube() {
  const { moveTo } = useContext(CameraContext);
  const [hovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cameraNames = ["start", "mediumShot", "lowShot"]; // Add your own custom cameraPositions here from ../../cameraPositions.js - these are the default/fallback in the context, but you can overwrite them in the js.
  const size = 10;

  function handleClickCube() {
    const name = cameraNames[currentIndex];
    moveTo(name);
    setCurrentIndex((prev) => (prev + 1) % cameraNames.length);
  }

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClickCube}
      position={[0, size / 2, 0]}
      receiveShadow
      castShadow
    >
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "lightgrey"} />
    </mesh>
  );
}
