import Camera from "../core/Camera";
import CameraController from "../core/CameraController";
import Lighting from "../core/Lighting";
import Fog from "../scene/environment/Fog";
import SkyHDRI from "../scene/environment/SkyHDRI";

export default function SceneManager() {
  return (
    <>
      <Camera />
      <Lighting />
      <Fog enabled={false} mode="exp" />
      <SkyHDRI
        options={{
          hdri: {
            enabled: false,
            path: "/hdris/citrus_orchard_road_puresky_2k.hdr",
            background: true,
          },
          sky: {
            enabled: false
          }
        }}
      />

      <CameraController />
    </>
  );
}
