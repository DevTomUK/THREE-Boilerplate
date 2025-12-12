export default function Fog({
  enabled = true,
  mode = 'linear',   
  color = '#87ceeb',
  near = 1,           
  far = 100,          
  density = 0.05,     
}) {
  if (!enabled) return null;

  return mode === 'exp' ? (
    <fogExp2 attach="fog" color={color} density={density} />
  ) : (
    <fog attach="fog" color={color} near={near} far={far} />
  );
}
