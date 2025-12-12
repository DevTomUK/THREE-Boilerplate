import { createContext, useRef, useState } from "react";

export const CameraContext = createContext();

export function CameraProvider({ children }) {
  const cameraRef = useRef(null);
  const [targetPosition, setTargetPosition] = useState([0, 0, 0]);
  const [targetLookAt, setTargetLookAt] = useState([0, 0, 0]);

  const namedPositions = {
    start: { position: [10, 200, 20], lookAt: [0, 0, 0] },
    lowShot: { position: [0, 20, 100], lookAt: [0, 20, 10] },
    farView: { position: [-20, 500, 180], lookAt: [2, 0, 120] },
  };

  function moveTo(name) {
    if (namedPositions[name]) {
      setTargetPosition(namedPositions[name].position);
      setTargetLookAt(namedPositions[name].lookAt);
    }
  }

  return (
    <CameraContext.Provider
      value={{
        cameraRef,
        targetPosition,
        setTargetPosition,
        targetLookAt,
        setTargetLookAt,
        moveTo,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
}
