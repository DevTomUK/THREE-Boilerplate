import { useContext, useState } from "react";
import { CameraContext } from "../../../context/cameraContext";

export default function Cube() {
  const { setTargetPosition } = useContext(CameraContext);

  const [position, setPosition] = useState(0);
  const [hovered, setHovered] = useState(false)

  const size = 1;

  function handleClickCube() {
    switch (position) {
      case 0:
        setTargetPosition([5, 3, 5]);
        break;
      case 1:
        setTargetPosition([2, 5, 8]);
        break;
      case 2:
        setTargetPosition([6, 5, 6]);
        break;
    }
    setPosition((curr) => (curr + 1) % 3);
  }

  return (
    <mesh onPointerOver={()=>setHovered(true)} onPointerOut={()=>setHovered(false)} onClick={handleClickCube} position={[0, size / 2, 0]} receiveShadow castShadow>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'lightgrey'} />
    </mesh>
  );
}
