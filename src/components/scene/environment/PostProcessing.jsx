import React, { useContext, useRef } from "react";
import { CameraContext } from "../../../context/cameraContext";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
} from "@react-three/postprocessing";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function PostProcessing({ options = {} }) {
  const { cameraRef, focusDistance } = useContext(CameraContext);

  const focusDistanceRef = useRef(10);

  const {
    enabled = true,
    dof = { focalLength: focusDistanceRef.current, bokehScale: 2 },
    bloom = { intensity: 0.3 },
  } = options;

  if (!enabled) return null;

  // the ray cast by the camera?
  const raycaster = useRef(new THREE.Raycaster());
  // the beam from the centre of the view
  const pointer = new THREE.Vector2(0, 0);

  const { scene } = useThree();

  useFrame(() => {
    // use the beam against the current camera view to set the raycaster ref value
    raycaster.current.setFromCamera(pointer, cameraRef.current);
    // get intersections made by the beam
    const intersects = raycaster.current.intersectObjects(scene.children, true);

    // if the first intersect in the array's distance is more than 1m difference to the current focus distance,
    if (intersects[0].distance - focusDistanceRef > 1) {
      // set it to the current intersect distance
      focusDistanceRef.current = intersects[0].distance;
    }
  });

  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={focusDistanceRef}
        focalLength={dof.focalLength}
        bokehScale={dof.bokehScale}
      />
      <Bloom intensity={bloom.intensity} />
    </EffectComposer>
  );
}
