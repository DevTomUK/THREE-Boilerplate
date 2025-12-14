// SkyHDRI.jsx
// Provides a scene background: HDRI or procedural sky
// Fully configurable via options passed in props

import { Sky, Environment } from "@react-three/drei";

export default function SkyHDRI({ options }) {
  // Default options
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

  // Merge user options with defaults
  const config = { ...defaults, ...options };
  const hdri = { ...defaults.hdri, ...(options?.hdri || {}) };
  const sky = { ...defaults.sky, ...(options?.sky || {}) };

  // Render HDRI if enabled and path is provided
  if (hdri.enabled && hdri.path) {
    return <Environment files={hdri.path} background={hdri.background} />;
  }

  // Render procedural sky if enabled
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
