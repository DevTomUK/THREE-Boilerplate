// Provides a camera from drei
// Type can be set to: "perspective" | "orthographic" | "cube"
// Props can be passed in from parent to customise

import {
  PerspectiveCamera,
  OrthographicCamera,
  CubeCamera,
} from "@react-three/drei";
import { useContext } from "react";
import { CameraContext } from "../../context/cameraContext";

export default function Camera({ type = "perspective", ...props }) {
  const { cameraRef } = useContext(CameraContext);

  switch (type) {
    case "orthographic":
      return (
        <OrthographicCamera
          makeDefault
          ref={cameraRef}
          {...props}
        />
      );

    case "cube":
      return (
        <CubeCamera
          ref={cameraRef}
          {...props}
        />
      );

    case "perspective":
    default:
      return (
        <PerspectiveCamera
          makeDefault
          ref={cameraRef}
          {...props}
        />
      );
  }
}
