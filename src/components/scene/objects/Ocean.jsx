import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { useThree, useLoader, useFrame, extend } from "@react-three/fiber";
import { Water } from "three-stdlib";

extend({ Water });

export default function Ocean() {
  const ref = useRef();
  const gl = useThree((state) => state.gl);

  const waterNormals = useLoader(
    THREE.TextureLoader,
    "/waternormals.jpeg"
  );

  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);

  const config = useMemo(
    () => ({
      textureWidth: 2048,
      textureHeight: 2048,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 2,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals, gl.encoding]
  );

  useFrame((_, delta) => {
    if (ref.current)
      ref.current.material.uniforms.time.value += delta * 0.3;
  });

  return (
    <water
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      position={[0, 0, 0]}
    />
  );
}
