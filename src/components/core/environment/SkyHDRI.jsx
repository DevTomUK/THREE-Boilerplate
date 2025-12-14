import { Sky, Environment } from '@react-three/drei';

export default function SkyHDRI({ options = {} }) {
  const {
    hdri = { enabled: false, path: null, background: false },
    sky = { enabled: true, sunPosition: [1, 1, 0], turbidity: 10, inclination: 0.49, azimuth: 0.25 },
  } = options;

  if (hdri.enabled && hdri.path) {
    return <Environment files={hdri.path} background={hdri.background || false} />;
  }

  if (sky.enabled) {
    return (
      <Sky
        sunPosition={sky.sunPosition}
        turbidity={sky.turbidity}
        inclination={sky.inclination}
        azimuth={sky.azimuth}
      />
    );
  }

  return null;
}
