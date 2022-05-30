import React, { useRef } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'

//
//
//

function Tree(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/tree1.glb')
  return (
    <>
      <ambientLight />
      <group ref={group} {...props} dispose={null}>
        <group scale={1}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_0.geometry}
            material={nodes.mesh_0.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_2.geometry}
            material={nodes.mesh_2.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_1.geometry}
            material={nodes.mesh_1.material}
          />
        </group>
      </group>
    </>
  )
}

export default Tree

useGLTF.preload('/tree1.glb')
