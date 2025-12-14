import { Canvas } from '@react-three/fiber'
import './App.css'
import { CameraProvider } from './context/cameraContext'
import World from './components/World'
import UI from './ui/UI'
import { useState } from 'react'

function App() {
  const [preset, setPreset] = useState("default"); // or "performance"

  return (
    <CameraProvider>
      <Canvas shadows>
        <World preset={preset} />
      </Canvas>
      <UI setPreset={setPreset} />
    </CameraProvider>
  )
}

export default App