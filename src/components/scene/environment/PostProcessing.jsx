import { useContext, useRef } from "react";
import { CameraContext } from "../../../context/cameraContext";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
  ChromaticAberration,
} from "@react-three/postprocessing";

export default function PostProcessing({ options = {} }) {
  const { enabled = true } = options;

  return (
    <EffectComposer enabled={enabled}>
      <Bloom luminanceThreshold={0.8} luminanceSmoothing={1} height={300} />
      <Noise opacity={0.1} />
      <Vignette offset={0.1} darkness={1} />
      {/* <ChromaticAberration offset={[0.02, 0.002]} /> */}
    </EffectComposer>
  );
}
