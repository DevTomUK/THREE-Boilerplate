import { Canvas } from '@react-three/fiber'
import './App.css'
import World from './components/scene/World'

function App() {

  return (
    <>
      <Canvas>
        <World />
      </Canvas>
    </>
  )
}

export default App
