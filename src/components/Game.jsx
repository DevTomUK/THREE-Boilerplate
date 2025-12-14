import React, { useContext } from 'react'
import { CameraContext } from '../context/cameraContext'

export default function Game() {

  const { moveTo } = useContext(CameraContext)

  return (
    <mesh onClick={()=>moveTo("home")}>
        <boxGeometry args={[10, 10, 10]} />
        <meshStandardMaterial />
    </mesh>
  )
}
