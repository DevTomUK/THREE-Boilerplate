import React from 'react'
import Camera from './Camera'
import CameraController from './CameraController'
import Lighting from './Lighting'

export default function Scene() {
  return (
    <>
      <Camera />
      <CameraController />
      <Lighting />
    </>
  )
}
