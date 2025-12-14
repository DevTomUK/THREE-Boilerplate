// Provides scene fog with linear or exponential modes
// Fully configurable via options

export default function Fog({ options = {} }) {
  const defaults = {
    enabled: true,
    mode: "linear", 
    color: "#dddddd",
    near: 1,
    far: 1000, 
    density: 0.0005,
  };

  // Merge user options with defaults
  const config = { ...defaults, ...options };

  if (!config.enabled) return null;

  if (config.mode === "exp") {
    return <fogExp2 attach="fog" color={config.color} density={config.density} />;
  }

  return <fog attach="fog" color={config.color} near={config.near} far={config.far} />;
}
