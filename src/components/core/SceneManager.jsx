import { useRef } from "react";
import Camera from "../core/Camera";
import CameraController from "../core/CameraController";
import Lighting from "../core/Lighting";
import Fog from "../scene/environment/Fog";
import PostProcessing from "../scene/environment/PostProcessing";
import SkyHDRI from "../scene/environment/SkyHDRI";
import { useFrame } from "@react-three/fiber";
import { Pixelation } from "@react-three/postprocessing";

export default function SceneManager() {


  return (
    <>
      <Camera />
      <Lighting enabled={true} />
      <Fog enabled={true} mode="exp" />
      <SkyHDRI
        options={{
          hdri: {
            enabled: true,
            path: "/hdris/qwantani_dusk_2_puresky_2k.hdr",
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
