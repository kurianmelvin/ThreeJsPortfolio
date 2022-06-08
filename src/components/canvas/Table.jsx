import React, { useRef } from 'react'

import { useGLTF } from '@react-three/drei'

export default function Table(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Table.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Material}
        position={[0, 0.57, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 1.01]}
      />
    </group>
  )
}

useGLTF.preload('/Table.glb')
