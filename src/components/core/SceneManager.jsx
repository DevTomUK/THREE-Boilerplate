// Gives control over what the scene looks like - scene presets object is in ./scenePresets.js

import Camera from "../core/Camera";
import CameraController from "../core/CameraController";
import Lighting from "../core/Lighting";
import Fog from "./environment/Fog";
import PostProcessing from "./environment/PostProcessing";
import SkyHDRI from "./environment/SkyHDRI";

import { SCENE_PRESETS } from "./scenePresets";

export default function SceneManager({ preset = "default" }) {
  const config = SCENE_PRESETS[preset];

  return (
    <>
      <Camera {...config.camera} />
      <CameraController />

      <Lighting {...config.lighting} />

      {config.fog?.enabled && <Fog {...config.fog} />}

      {config.environment?.sky && (
        <SkyHDRI options={config.environment.sky} />
      )}

      {config.postProcessing?.enabled && (
        <PostProcessing options={config.postProcessing} />
      )}
    </>
  );
}
