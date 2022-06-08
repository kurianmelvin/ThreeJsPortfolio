import React, { useRef } from 'react'

import { useGLTF } from '@react-three/drei'

export default function SmallTable(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/SmallTable.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor.geometry}
        material={nodes.floor.material}
        position={[-0.15, 0.07, 0]}
        scale={3.1}
        material-color={'tomato'}
      /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={nodes.Circle.material}
        position={[-0.19, 0.46, -0.04]}
        scale={3.43}
        // material-color={'tomato'}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[-0.19, 0.99, -0.04]}
        scale={3.43}
        // material-color={'tomato'}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leg.geometry}
        material={nodes.leg.material}
        position={[-0.19, 0.22, -0.04]}
        scale={3.43}
        // material-color={'tomato'}
      />
    </group>
  )
}

useGLTF.preload('/SmallTable.glb')
