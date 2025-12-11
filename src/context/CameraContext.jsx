import { createContext, useRef, useState } from "react";

export const CameraContext = createContext();

export function CameraProvider({ children }) {
  const cameraRef = useRef(null);

  const [targetPosition, setTargetPosition] = useState([10, 10, 10]);

  return (
    <CameraContext.Provider value={{ cameraRef, targetPosition, setTargetPosition }}>
      {children}
    </CameraContext.Provider>
  );
}
