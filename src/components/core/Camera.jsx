import { PerspectiveCamera } from "@react-three/drei";
import { useContext } from "react";
import { CameraContext } from "../../context/cameraContext";

export default function Camera() {
  const { cameraRef } = useContext(CameraContext);

  return (
    <PerspectiveCamera
      makeDefault
      ref={cameraRef}
    />
  );
}
