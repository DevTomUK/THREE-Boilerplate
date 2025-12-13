import { Canvas } from '@react-three/fiber'
import './App.css'
import { CameraProvider } from './context/cameraContext'
import World from './components/World'
import UI from './ui/UI'

function App() {

  return (
    <CameraProvider>
      <Canvas shadows>
        <World />
      </Canvas>
        <UI />
    </CameraProvider>
  )
}

export default App
