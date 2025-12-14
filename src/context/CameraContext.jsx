// Stores the context for the camera position and lookAt (target) and exports it for use in camera controller
// Stores named positions so that the camera can be moved using exported moveTo(name) function anywhere in app
// Sets position and target which is used by the camera controller to move it

import { createContext, useRef, useState } from "react";

export const CameraContext = createContext();

export function CameraProvider({ children, initialPositions = {} }) {
  const cameraRef = useRef();

  // Default positions
  const defaultPositions = {
    start: { position: [20, 120, 50], lookAt: [0, 0, 0] },
    mediumShot: { position: [30, 40, 10], lookAt: [0, 0, 0] },
    lowShot: { position: [-20, 2, 180], lookAt: [0, 0, 0] },
  };

  // Merge user-provided positions with defaults to ensure start exists
  const namedPositions = { ...defaultPositions, ...initialPositions };

  // Determine initial camera position key
  const initialKey = Object.keys(namedPositions)[0]; // first key guaranteed to exist
  const initialTarget = namedPositions[initialKey];

  // Current target refs for CameraController
  const targetPosition = useRef(initialTarget.position);
  const targetLookAt = useRef(initialTarget.lookAt);

  // Track current camera position name
  const [positionName, setPositionName] = useState(initialKey);

  // Move to a named position
  function moveTo(name) {
    const target = namedPositions[name];
    if (!target) return;
    setPositionName(name);
    targetPosition.current = target.position;
    targetLookAt.current = target.lookAt;
  }

  // Track a moving object
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
        trackTarget,
        positionName,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
}
