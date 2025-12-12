import useAutoFocus from "../../hooks/autoFocus";
import Camera from "../core/Camera";
import CameraController from "../core/CameraController";
import Lighting from "../core/Lighting";
import Fog from "../scene/environment/Fog";
import PostProcessing from "../scene/environment/PostProcessing";
import SkyHDRI from "../scene/environment/SkyHDRI";

export default function SceneManager() {

   const autoFocusDistance = useAutoFocus(100);

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
            enabled: false,
          },
        }}
      />
      <PostProcessing options={{ enabled: true }} />

      <CameraController />
    </>
  );
}
