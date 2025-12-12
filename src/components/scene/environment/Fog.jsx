export default function Fog({ mode = 'linear', color = 'grey', near = 5, far = 20, density = 0.05, enabled = true }) {
  if (!enabled) return null;

  if (mode === 'exp') {
    return <fogExp2 attach="fog" color={color} density={density} />;
  }

  return <fog attach="fog" color={color} near={near} far={far} />;
}
