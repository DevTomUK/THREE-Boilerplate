import { useRef } from "react";
import Camera from "../core/Camera";
import CameraController from "../core/CameraController";
import Lighting from "../core/Lighting";
import Fog from "../scene/environment/Fog";
import PostProcessing from "../scene/environment/PostProcessing";
import SkyHDRI from "../scene/environment/SkyHDRI";
import { useFrame } from "@react-three/fiber";

export default function SceneManager() {


  return (
    <>
      <Camera />
      <Lighting />
      <Fog enabled={false} mode="exp" />
      <SkyHDRI
        options={{
          hdri: {
            enabled: true,
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
