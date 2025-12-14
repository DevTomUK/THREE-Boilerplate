import { Canvas } from '@react-three/fiber'
import './App.css'
import { CameraProvider } from './context/cameraContext'
import World from './components/World'
import UI from './ui/UI'
import { useState } from 'react'
import { CAMERA_POSITIONS } from './components/core/cameraPositions'

function App() {
  const [preset, setPreset] = useState("default"); // or "performance"

  return (
    <CameraProvider initialPositions={CAMERA_POSITIONS}>
      <Canvas shadows>
        <World preset={preset} />
      </Canvas>
      <UI setPreset={setPreset} />
    </CameraProvider>
  )
}

export default App