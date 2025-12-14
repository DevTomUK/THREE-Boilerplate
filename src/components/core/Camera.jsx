// Provides a camera from drei
// Supports "perspective" | "orthographic" | "cube"
// Fully configurable via options prop

import { useContext } from "react";
import { PerspectiveCamera, OrthographicCamera, CubeCamera } from "@react-three/drei";
import { CameraContext } from "../../context/cameraContext";
import merge from "lodash.merge";

export default function Camera({ type = "perspective", options = {} }) {
  const { cameraRef } = useContext(CameraContext);

  // Default options per camera type
  const defaultOptions = {
    perspective: { fov: 50, near: 0.1, far: 1000, position: [0, 0, 10] },
    orthographic: { makeDefault: true, near: 0.1, far: 1000, position: [0, 0, 10], zoom: 1 },
    cube: { position: [0, 0, 10] },
  };

  // Merge defaults with user options
  const config = merge({}, defaultOptions[type], options);

  switch (type) {
    case "orthographic":
      return <OrthographicCamera ref={cameraRef} {...config} makeDefault />;

    case "cube":
      return <CubeCamera ref={cameraRef} {...config} />;

    case "perspective":
    default:
      return <PerspectiveCamera ref={cameraRef} {...config} makeDefault />;
  }
}
