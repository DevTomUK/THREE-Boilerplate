// Uses the scene's camera reference to update position and target with useFrame to smoothly transition with LERP
// Gets positions and targets from CameraContext

import { useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { CameraContext } from "../../context/cameraContext";
import * as THREE from "three";

export default function CameraController({ lerpFactor = 0.05 }) {
  const { cameraRef, targetPosition, targetLookAt } = useContext(CameraContext);

  useFrame(() => {
    if (!cameraRef.current) return;

    const pos = targetPosition.current;
    const look = targetLookAt.current;

    cameraRef.current.position.lerp(new THREE.Vector3(...pos), lerpFactor);
    cameraRef.current.lookAt(new THREE.Vector3(...look));
  });

  return null;
}
