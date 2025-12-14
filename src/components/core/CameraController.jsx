// Uses the scene's camera reference to update position and target
// useFrame is used to smoothly transition with LERP

import { useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { CameraContext } from "../../context/cameraContext";
import * as THREE from "three";

export default function CameraController() {
  const { cameraRef, targetPosition, targetLookAt } =
    useContext(CameraContext);

  const currentLookAt = useRef(new THREE.Vector3());
  const targetLookAtVec = useRef(new THREE.Vector3());
  const targetPos = useRef(new THREE.Vector3());

  useFrame(() => {
    if (!cameraRef.current) return;

    targetPos.current.set(...targetPosition);
    cameraRef.current.position.lerp(targetPos.current, 0.05);

    targetLookAtVec.current.set(...targetLookAt);
    currentLookAt.current.lerp(targetLookAtVec.current, 0.05);
    cameraRef.current.lookAt(currentLookAt.current);
  });

  return null;
}
