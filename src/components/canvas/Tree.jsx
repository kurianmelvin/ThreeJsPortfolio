import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import {
  useGLTF,
  // OrbitControls,
  MeshReflectorMaterial,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

// ExperienceButton

function Tree(props) {
  const group = useRef()
  const tree = useRef()

  const { nodes, materials } = useGLTF('/tree1.glb')

  useFrame((state, delta) => {
    tree.current ? (tree.current.rotation.y += 0.00009) : null
  })
  return (
    <>
      {/* <ambientLight /> */}
      <group
        ref={group}
        {...props}
        scale={[1.5, 1.5, 1.5]}

        // dispose={null}
      >
        <group ref={tree} scale={1}>
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
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeBufferGeometry args={[50, 40]} />

          <MeshReflectorMaterial
            blur={[0, 100]}
            resolution={1080}
            mixBlur={0}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color='#101010'
            metalness={0.5}
          />
        </mesh>
      </group>
    </>
  )
}

export default Tree

useGLTF.preload('/tree1.glb')
