export default function Fog({
  enabled = true,
  mode = 'linear',   
  color = '#dddddd',
  near = 1,           
  far = 1000,          
  density = 0.0005,     
}) {
  if (!enabled) return null;

  return mode === 'exp' ? (
    <fogExp2 attach="fog" color={color} density={density} />
  ) : (
    <fog attach="fog" color={color} near={near} far={far} />
  );
}
