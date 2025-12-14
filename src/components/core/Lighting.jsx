// Provides configurable scene lighting
// Individual light types can be enabled/disabled via the config object

export default function Lighting({
  enabled = true,
  lights = {
    ambient: true,
    directional: true,
    point: false,
    spot: false,
  },
}) {
  if (!enabled) return null;

  return (
    <>
      {lights.ambient && <ambientLight intensity={1} />}

      {lights.directional && (
        <directionalLight
          intensity={0.7}
          position={[10, 20, 25]}
          castShadow
        />
      )}

      {lights.point && (
        <pointLight
          intensity={0.8}
          position={[5, 10, 5]}
          distance={50}
        />
      )}

      {lights.spot && (
        <spotLight
          intensity={1}
          position={[15, 30, 10]}
          angle={0.3}
          penumbra={0.5}
          castShadow
        />
      )}
    </>
  );
}
