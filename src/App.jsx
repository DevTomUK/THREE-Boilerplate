import { Canvas } from '@react-three/fiber'
import './App.css'
import { CameraProvider } from './context/cameraContext'
import World from './components/World'

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
