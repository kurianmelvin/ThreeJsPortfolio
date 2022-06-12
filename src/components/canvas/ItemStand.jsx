import React, { useRef } from 'react'

import { useGLTF } from '@react-three/drei'

export default function ItemStand(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/ItemStand.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['cement/stone']}
      />
    </group>
  )
}

useGLTF.preload('/ItemStand.glb')
