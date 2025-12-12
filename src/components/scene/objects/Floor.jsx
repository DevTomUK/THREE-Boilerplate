export default function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow castShadow>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color='lightgreen' />
    </mesh>
  )
}
