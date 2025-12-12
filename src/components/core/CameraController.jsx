import { useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { CameraContext } from "../../context/cameraContext";
import * as THREE from "three";

export default function CameraController() {
  const { cameraRef, targetPosition } = useContext(CameraContext);
  
  const target = useRef(new THREE.Vector3(...targetPosition));
  
  useFrame(() => {
    if (!cameraRef.current) return;

    target.current.set(...targetPosition);

    cameraRef.current.position.lerp(target.current, 0.1);

    cameraRef.current.lookAt(0, 0, 0);
  });

  return null;
}
