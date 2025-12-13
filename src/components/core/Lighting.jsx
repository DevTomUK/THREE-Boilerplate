export default function Lighting({ enabled }) {


  if (!enabled) return
  else return (
    <>
        <ambientLight intensity={1} />
        <directionalLight intensity={0.7} position={[10, 20, 25]} castShadow />
    </>
  )
}
