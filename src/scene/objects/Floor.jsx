// Basic floor using a plane mesh - receives shadows

export default function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color='lightgreen' />
    </mesh>
  )
}
