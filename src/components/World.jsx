// Wrapper to store all of the world contents for the canvas

import SceneContent from './scene/SceneContent'
import SceneManager from './core/SceneManager'

export default function World({ preset = "default" }) {
  return (
    <>
      <SceneManager preset={preset} />
      <SceneContent />
    </>
  )
}
