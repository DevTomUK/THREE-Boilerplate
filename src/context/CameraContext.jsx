import { createContext, useEffect, useRef, useState } from "react";

export const CameraContext = createContext();

export function CameraProvider({ children }) {
  const cameraRef = useRef(null);

  const namedPositions = {
    start: { position: [10, 200, 20], lookAt: [0, 0, 0] },
    lowShot: { position: [0, 20, 100], lookAt: [0, 20, 10] },
    farView: { position: [-20, 500, 180], lookAt: [2, 0, 120] },
  };

  const [targetPosition, setTargetPosition] = useState(namedPositions.start.position);
  const [targetLookAt, setTargetLookAt] = useState(namedPositions.start.lookAt);

  function moveTo(name, look) {
    cameraRef.current.userData.start = true
    if (namedPositions[name]) {
      setTargetPosition(namedPositions[name].position);
      setTargetLookAt(namedPositions[name].lookAt);
    } else {
      setTargetPosition(name)
      setTargetLookAt(look)
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
