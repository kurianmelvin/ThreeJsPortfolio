import React, { useEffect, useRef, useState } from 'react'

import { useGLTF } from '@react-three/drei'

import useStore from '@/helpers/store'
//
//
//
//
export default function ExperienceButton(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/experienceButton.gltf')
  const [hovered, setHovered] = useState(false)
  //
  //
  const router = useStore((state) => state.router)
  //
  //

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  return (
    <>
      <group
        ref={group}
        {...props}
        // dispose={null}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={(e) => setHovered(false)}
        onClick={() => {
          router.push(`/about`)
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Inset.geometry}
          material={nodes.Inset.material}
          scale={[0.02, 0, 0.05]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stud_Holder.geometry}
          material={nodes.Stud_Holder.material}
          position={[-0.01, 0.01, -0.04]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.01, 0.02, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Backboard.geometry}
          material={nodes.Backboard.material}
          position={[0.01, 0.02, 0]}
          // position={[-1, 1, 0]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={[-0.01, 0.03, 0.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Outset.geometry}
          material={nodes.Outset.material}
          position={[0, 0.01, 0]}
          scale={[0.03, 0.01, 0.05]}
        />
        <mesh
          // position={[1, 0.01, 0]}
          castShadow
          receiveShadow
          geometry={nodes.Pad.geometry}
          material={nodes.Pad.material}
          scale={[0.02, 0, 0.05]}
        />
        <group position={[0, 0.01, -0.045]} rotation={[0, 0, -0.27]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_5.geometry}
            material={nodes.mesh_5.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_5_1.geometry}
            material={nodes.mesh_5_1.material}
          />
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/experienceButton.gltf')
