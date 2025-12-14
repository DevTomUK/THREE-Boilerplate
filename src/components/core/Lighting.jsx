// Provides configurable scene lighting
// Individual light types can be enabled/disabled via the options prop

import merge from "lodash.merge";

export default function Lighting({ options = {} }) {
  const defaults = {
    enabled: true,
    ambient: { enabled: true, intensity: 1 },
    directional: { enabled: true, intensity: 0.7, position: [10, 20, 25], castShadow: true },
    point: { enabled: false, intensity: 0.8, position: [5, 10, 5], distance: 50 },
    spot: { enabled: false, intensity: 1, position: [15, 30, 10], angle: 0.3, penumbra: 0.5, castShadow: true },
  };

  // Merge user options with defaults
  const config = merge({}, defaults, options);

  if (!config.enabled) return null;

  return (
    <>
      {config.ambient.enabled && <ambientLight {...config.ambient} />}
      {config.directional.enabled && <directionalLight {...config.directional} />}
      {config.point.enabled && <pointLight {...config.point} />}
      {config.spot.enabled && <spotLight {...config.spot} />}
    </>
  );
}
