import { useContext, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CameraContext } from '../../../context/cameraContext'

export function Boat(props) {
  const { moveTo, cameraRef } = useContext(CameraContext)
  const shipRef = useRef()
  const [direction, setDirection] = useState(1)

  const { nodes, materials } = useGLTF('/boat-transformed.glb')

  const handleClick = () => {
    setDirection(prev => -prev)
  }

  useFrame((state, delta) => {
    if (!cameraRef.current.userData.start) return
    if (!shipRef.current) return

    shipRef.current.position.x += delta * 20 * direction

    if (shipRef.current.position.x > 200 || shipRef.current.position.x < -200) {
      shipRef.current.position.y -= delta * 2
    }

    const camTarget = [
      -shipRef.current.position.x / 5,
      40,
      -shipRef.current.position.z / 5
    ]
    const lookAt = [
      shipRef.current.position.x,
      shipRef.current.position.y + 20,
      shipRef.current.position.z
    ]
    moveTo(camTarget, lookAt)
  })

  return (
    <group
      ref={shipRef}
      onClick={handleClick}
      {...props}
      dispose={null}
      scale={20}
      position={[-200, 0, -450]}
      rotation={[-Math.PI / 2, Math.PI / 2, Math.PI / 2]}
    >
      <mesh geometry={nodes.dutch_ship_large_02_hull.geometry} material={materials.dutch_ship_large_02_hull} />
      <mesh geometry={nodes.dutch_ship_large_02_rigging.geometry} material={materials.dutch_ship_large_02_rigging} />
      <mesh geometry={nodes.dutch_ship_large_02_sails.geometry} material={materials.dutch_ship_large_02_sails} />
    </group>
  )
}

useGLTF.preload('/boat-transformed.glb')
