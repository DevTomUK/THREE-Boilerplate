// Applies post-processing effects to the scene
// Enabled from ./scenePresets.js
// Mounts only when enabled to avoid unnecessary performance cost
// Fully prop-driven with deep merge using lodash.merge

import { useRef } from "react";
import { EffectComposer, Bloom, Noise, Vignette, Autofocus, Pixelation } from "@react-three/postprocessing";
import merge from "lodash.merge";
import { useFrame } from "@react-three/fiber";

export default function PostProcessing({ options = {} }) {
  const defaultOptions = {
    enabled: true,
    bloom: { enabled: true, luminanceThreshold: 0.8, luminanceSmoothing: 1, height: 300 },
    noise: { enabled: true, opacity: 0.1 },
    vignette: { enabled: true, offset: 0.01, darkness: 1 },
    autofocus: { enabled: true, smoothTime: 0.1, bokehScale: 1 },
    pixelation: { enabled: false, granularity: 5 },
  };

  // Deep merge user options with defaults
  const config = merge({}, defaultOptions, options);

  if (!config.enabled) return null;

  const pixelRef = useRef();
  const granuleRef = useRef(config.pixelation.granularity);

  useFrame(() => {
    if (pixelRef.current && config.pixelation.enabled) {
      pixelRef.current.granularity = granuleRef.current;
    }
  });

  return (
    <EffectComposer>
      {config.bloom.enabled && (
        <Bloom
          luminanceThreshold={config.bloom.luminanceThreshold}
          luminanceSmoothing={config.bloom.luminanceSmoothing}
          height={config.bloom.height}
        />
      )}
      {config.noise.enabled && <Noise opacity={config.noise.opacity} />}
      {config.vignette.enabled && (
        <Vignette offset={config.vignette.offset} darkness={config.vignette.darkness} />
      )}
      {config.autofocus.enabled && (
        <Autofocus smoothTime={config.autofocus.smoothTime} bokehScale={config.autofocus.bokehScale} />
      )}
      {config.pixelation.enabled && <Pixelation ref={pixelRef} granularity={granuleRef.current} />}
    </EffectComposer>
  );
}
