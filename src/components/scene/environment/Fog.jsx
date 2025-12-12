export default function Fog({
  color = 'grey',
  near = 5,
  far = 20,
  enabled = true,
}) {
  if (!enabled) return null;

  return <fog attach="fog" color={color} near={near} far={far} />;
}
