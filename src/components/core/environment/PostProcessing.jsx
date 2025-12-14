// Applies post-processing effects to the scene
// Enabled from ./scenePresets.js
// Mounts only when enabled to avoid unnecessary performance cost
// Updated to expose options

import { useRef, useFrame } from "react";
import { EffectComposer, Bloom, Noise, Vignette, Autofocus, Pixelation } from "@react-three/postprocessing";

export default function PostProcessing({ options = {} }) {
  const defaultOptions = {
    enabled: true,
    bloom: { enabled: true, luminanceThreshold: 0.8, luminanceSmoothing: 1, height: 300 },
    noise: { enabled: true, opacity: 0.1 },
    vignette: { enabled: true, offset: 0.01, darkness: 1 },
    autofocus: { enabled: true, smoothTime: 0.1, bokehScale: 1 },
    pixelation: { enabled: false, granularity: 5 },
  };

  const config = {
    ...defaultOptions,
    ...options,
    bloom: { ...defaultOptions.bloom, ...(options?.bloom || {}) },
    noise: { ...defaultOptions.noise, ...(options?.noise || {}) },
    vignette: { ...defaultOptions.vignette, ...(options?.vignette || {}) },
    autofocus: { ...defaultOptions.autofocus, ...(options?.autofocus || {}) },
    pixelation: { ...defaultOptions.pixelation, ...(options?.pixelation || {}) },
  };

  if (!config.enabled) return null;

  const pixelRef = useRef();
  const granuleRef = useRef(config.pixelation.granularity);

  useFrame((state, delta) => {
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
      {config.vignette.enabled && <Vignette offset={config.vignette.offset} darkness={config.vignette.darkness} />}
      {config.autofocus.enabled && <Autofocus smoothTime={config.autofocus.smoothTime} bokehScale={config.autofocus.bokehScale} />}
      {config.pixelation.enabled && <Pixelation ref={pixelRef} granularity={granuleRef.current} />}
    </EffectComposer>
  );
}
