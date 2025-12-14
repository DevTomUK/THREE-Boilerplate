import React from 'react'

export default function Game() {
  return (
    <mesh>
        <boxGeometry args={[10, 10, 10]} />
        <meshStandardMaterial />
    </mesh>
  )
}
