import Camera from "../core/Camera";
import CameraController from "../core/CameraController";
import Lighting from "../core/Lighting";

export default function SceneManager() {
  return (
    <>
      <Camera />
      <Lighting />
      <CameraController />
    </>
  );
}
