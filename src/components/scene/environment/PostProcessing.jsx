import { useRef } from "react";
import { EffectComposer, Bloom, Noise, Vignette, Autofocus, Pixelation } from "@react-three/postprocessing";
import { useFrame } from "@react-three/fiber";

export default function PostProcessing({ options = {} }) {
  const { enabled = true } = options;
  const granuleRef = useRef(0);
  const pixelationRef = useRef();

  useFrame((state, delta) => {
    granuleRef.current += delta;
    if (pixelationRef.current) {
      pixelationRef.current.granularity = granuleRef.current / 10;
    }
  });

  return (
    <EffectComposer enabled={enabled}>
      <Bloom luminanceThreshold={0.8} luminanceSmoothing={1} height={300} />
      <Noise opacity={0.1} />
      <Vignette offset={0.01} darkness={1} />
      <Autofocus smoothTime={0.1} bokehScale={1} />
      {/* <Pixelation ref={pixelationRef} granularity={granuleRef.current} /> */}
    </EffectComposer>
  );
}
