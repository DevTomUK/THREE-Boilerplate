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
      <Camera type={config.camera.type} options={config.camera.options} />
      <CameraController lerpFactor={config.lerpFactor} />
      <Lighting options={config.lighting.options} />
      <Fog options={config.fog?.options} />
      <SkyHDRI options={config.environment?.sky?.options} />
      <PostProcessing options={config.postProcessing?.options} />
    </>
  );
}
