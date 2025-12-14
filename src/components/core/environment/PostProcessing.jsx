// Applies post-processing effects to the scene
// Enabled from ./scenePresets.js
// Mounts only when enabled to avoid unnecessary performance cost

import { useRef } from "react";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
  Autofocus,
  Pixelation,
} from "@react-three/postprocessing";

export default function PostProcessing({ options = {} }) {
  const {
    enabled = true,
    bloom = {
      enabled: true,
      luminanceThreshold: 0.8,
      luminanceSmoothing: 1,
      height: 300,
    },
    noise = { enabled: true, opacity: 0.1 },
    vignette = { enabled: true, offset: 0.01, darkness: 1 },
    autofocus = { enabled: true, smoothTime: 0.1, bokehScale: 1 },
    pixelation = { enabled: false },
  } = options;

  if (!enabled) return null;

  const granuleRef = useRef(5);
  const pixelationRef = useRef();

  return (
    <EffectComposer>
      {bloom.enabled && (
        <Bloom
          luminanceThreshold={bloom.luminanceThreshold}
          luminanceSmoothing={bloom.luminanceSmoothing}
          height={bloom.height}
        />
      )}

      {noise.enabled && <Noise opacity={noise.opacity} />}

      {vignette.enabled && (
        <Vignette offset={vignette.offset} darkness={vignette.darkness} />
      )}

      {autofocus.enabled && (
        <Autofocus
          smoothTime={autofocus.smoothTime}
          bokehScale={autofocus.bokehScale}
        />
      )}

      {pixelation.enabled && (
        <Pixelation ref={pixelationRef} granularity={granuleRef.current} />
      )}
    </EffectComposer>
  );
}
