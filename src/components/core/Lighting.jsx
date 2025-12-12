export default function Lighting() {
  return (
    <>
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.4} position={[10, 20, 25]} />
    </>
  )
}
