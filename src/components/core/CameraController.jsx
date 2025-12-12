import { useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { CameraContext } from "../../context/cameraContext";
import * as THREE from "three";

export default function CameraController() {
  const { cameraRef, targetPosition, targetLookAt } = useContext(CameraContext);

  const currentLookAt = useRef(new THREE.Vector3(...targetLookAt));
  const targetPos = useRef(new THREE.Vector3(...targetPosition));

  useFrame(() => {
    if (!cameraRef.current) return;

    targetPos.current.set(...targetPosition);
    cameraRef.current.position.lerp(targetPos.current, 0.05);

    currentLookAt.current.lerp(new THREE.Vector3(...targetLookAt), 0.05);
    cameraRef.current.lookAt(currentLookAt.current);
  });

  return null;
}
