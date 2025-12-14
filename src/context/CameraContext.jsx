// Stores the context for the camera position and lookAt (target) and exports it for use in camera controller
// Stores named positions so that the camera can be moved using exported moveTo(name) function anywhere in app
// Sets position and target which is used by the camera controller to move it

import { createContext, useRef, useState } from "react";

export const CameraContext = createContext();

export function CameraProvider({ children }) {
  const cameraRef = useRef();

  // Named positions stored here for global access
  const namedPositions = {
    start: { position: [20, 120, 50], lookAt: [0, 0, 0] },
    mediumShot: { position: [30, 40, 10], lookAt: [0, 0, 0] },
    lowShot: { position: [-20, 2, 180], lookAt: [0, 0, 0] },
  }

  // Current position/target xyz for CameraController - uses refs to avoid state updating with useFrames for tracking
  const targetPosition = useRef([20, 120, 50]);
  const targetLookAt = useRef([0, 0, 0]);

  // Moves camera to a named position
  function moveTo(name) {
    const target = namedPositions[name];
    if (!target) return;

    targetPosition.current = target.position;
    targetLookAt.current = target.lookAt;
  }

  // Allows tracking of an object, updating ref each frame
  function trackTarget(position, target) {
    targetPosition.current = position;
    targetLookAt.current = target;
  
  }

  return (
    <CameraContext.Provider
      value={{
        cameraRef,
        targetPosition,
        targetLookAt,
        moveTo,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
}
