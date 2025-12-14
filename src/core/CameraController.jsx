// Uses the scene's camera reference to update position and target with useFrame to smoothly transition with LERP
// Gets positions and targets from CameraContext

import { useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { CameraContext } from "../context/cameraContext";
import * as THREE from "three";

export default function CameraController({ lerpFactor = 0.05 }) {
  const { cameraRef, targetPosition, targetLookAt } = useContext(CameraContext);

  const smoothLookAt = useRef(new THREE.Vector3());

  useFrame(() => {
    if (!cameraRef.current) return;

    // Smooth position
    cameraRef.current.position.lerp(
      new THREE.Vector3(...targetPosition.current),
      lerpFactor
    );

    // Smooth lookAt target
    smoothLookAt.current.lerp(
      new THREE.Vector3(...targetLookAt.current),
      lerpFactor
    );

    cameraRef.current.lookAt(smoothLookAt.current);
  });

  return null;
}
