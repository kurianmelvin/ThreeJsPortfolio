import React, { useRef } from 'react'

import {
  useGLTF,
  // OrbitControls,
  MeshReflectorMaterial,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import dynamic from 'next/dynamic'

// ExperienceButton

function Tree(props) {
  const group = useRef()
  const tree = useRef()

  const { nodes, materials } = useGLTF('/tree1.glb')

  useFrame((state, delta) => {
    tree.current ? (tree.current.rotation.y += 0.0005) : null
  })
  return (
    <>
      {/* <ambientLight /> */}
      <group
        ref={group}
        {...props}
        // scale={[1.8, 1.8, 1.8]}

        // dispose={null}
      >
        {/* <group ref={tree}> */}
        <group>
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
        {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <boxBufferGeometry args={[50, 40]} />

          <MeshReflectorMaterial
            blur={[100, 300]}
            resolution={1080}
            mixBlur={0}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color='#413F42'
            metalness={0.5}
          />
        </mesh> */}
      </group>
    </>
  )
}

export default Tree

useGLTF.preload('/tree1.glb')
