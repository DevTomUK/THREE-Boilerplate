// Provides scene fog - linear and exponential fog modes can be passed in with mode

export default function Fog({
  enabled = true,
  mode = "linear",
  color = "#dddddd",
  near = 1,
  far = 1000,
  density = 0.0005,
}) {
  if (!enabled) return null;

  // Exponential fog (FogExp2)
  if (mode === "exp") {
    return <fogExp2 attach="fog" color={color} density={density} />;
  }

  // Linear fog (Fog)
  return <fog attach="fog" color={color} near={near} far={far} />;
}
