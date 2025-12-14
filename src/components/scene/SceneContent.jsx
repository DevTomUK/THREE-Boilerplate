// Wrapper for all of the physical/visible objects and meshes within the scene

import Cube from './objects/Cube'
import Floor from './objects/Floor'
import Ocean from './objects/Ocean'
import { TOM } from './objects/TOM'

export default function SceneContent() {

  return (
    <>
      <Cube />
      {/* <Floor /> */}
      <Ocean />
      {/* <TOM /> */}
    </>
  )
}
