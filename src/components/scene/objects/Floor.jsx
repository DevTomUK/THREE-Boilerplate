export default function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial />
    </mesh>
  )
}
