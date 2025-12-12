import Camera from "../core/Camera";
import CameraController from "../core/CameraController";
import Lighting from "../core/Lighting";
import Fog from "../scene/environment/Fog";

export default function SceneManager() {
  return (
    <>
      <Camera />
      <Lighting />
      <Fog enabled={false} />
      <CameraController />
    </>
  );
}
