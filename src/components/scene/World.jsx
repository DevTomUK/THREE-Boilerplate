import React from 'react'
import Camera from '../core/Camera'
import CameraController from '../core/CameraController'
import Lighting from '../core/Lighting'

export default function World() {
  return (
    <>
      <Camera />
      <CameraController />
      <Lighting />
    </>
  )
}
