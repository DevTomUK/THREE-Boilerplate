import { Canvas } from '@react-three/fiber'
import './App.css'
import World from './components/scene/World'
import { CameraProvider } from './context/cameraContext'

function App() {

  return (
    <CameraProvider>
      <Canvas>
        <World />
      </Canvas>
    </CameraProvider>
  )
}

export default App
