import React, { useContext } from 'react'
import { CameraContext } from '../../../context/cameraContext'

export default function Cube() {

  const { cameraRef, setTargetPosition } = useContext(CameraContext)

  function handleClickCube() {
    setTargetPosition([5, 5, 5])
  }

  return (
    <mesh onClick={handleClickCube}>
        <boxGeometry />
        <meshStandardMaterial />
    </mesh>
  )
}
