// Wrapper for all of the physical/visible objects and meshes within the scene

import Cube from './objects/Cube'
import Floor from './objects/Floor'
import Ocean from './objects/Ocean'
import { TOM } from './objects/TOM'

export default function SceneContent() {

  return (
    <>
      {/* ----- THIS IS THE DEMO SCENE, REMOVE THESE COMPONENTS AND ADD YOUR OWN SCENE HERE ------- */}
      <>
        <Cube />
        {/* <Floor /> */}
        <Ocean />
        {/* <TOM /> */}
      </>
      {/* ------------------------------------------------------------------------------------------ */}
    </>
  )
}
