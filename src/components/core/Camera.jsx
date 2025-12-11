import { PerspectiveCamera } from '@react-three/drei'
import React, { useContext } from 'react'
import { CameraContext } from '../../context/cameraContext'

export default function Camera() {

  const { position } = useContext(CameraContext)
  return (
    <>
        <PerspectiveCamera makeDefault position={position} />
    </>
  )
}
