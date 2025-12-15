// Wrapper for all of the physical/visible objects and meshes within the scene

import Cube from './objects/Cube'
import Floor from './objects/Floor'

export default function DemoScene() {

  return (
    <>
      {/* ------- THIS IS THE DEMO SCENE, THIS RENDERS ON A CONDITION WHERE THE USER HAS INPUT NO 3D OBJECTS -------- */}
      <>
        <Cube />
        <Floor />
      </>
      {/* ---------------------------------------------------------------------------------------------------------- */}
    </>
  )
}
