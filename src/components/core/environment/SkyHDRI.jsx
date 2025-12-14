// Provides a scene background: HDRI or procedural sky
// Fully configurable via options passed in props, with deep merge

import { Sky, Environment } from "@react-three/drei";
import merge from "lodash.merge";

export default function SkyHDRI({ options = {} }) {
  const defaults = {
    hdri: {
      enabled: false,
      path: null,
      background: false,
    },
    sky: {
      enabled: true,
      sunPosition: [1, 1, 0],
      turbidity: 10,
      inclination: 0.49,
      azimuth: 0.25,
    },
  };

  // Deep merge defaults with user options
  const config = merge({}, defaults, options);

  // Render HDRI if enabled and path is provided
  if (config.hdri.enabled && config.hdri.path) {
    return <Environment files={config.hdri.path} background={config.hdri.background} />;
  }

  // Render procedural sky if enabled
  if (config.sky.enabled) {
    return (
      <Sky
        sunPosition={config.sky.sunPosition}
        turbidity={config.sky.turbidity}
        inclination={config.sky.inclination}
        azimuth={config.sky.azimuth}
      />
    );
  }

  return null;
}
