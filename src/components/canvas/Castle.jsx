import React, { useRef } from 'react'

import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  // Text,
  Environment,
  // FlyControls,
  Stars,
} from '@react-three/drei'
import { useGLTF } from '@react-three/drei'

export default function Castle(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Castle.glb')
  return (
    <>
      {/* <ambientLight /> */}
      <group ref={group} {...props} dispose={null}>
        <group position={[0, 0, 0]} scale={1}>
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.polySurface22.geometry}
            material={nodes.polySurface22.material}
            material-color='white'
          />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeBufferGeometry args={[100, 100]} />
            <meshStandardMaterial color='Gray' />
          </mesh>
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/Castle.glb')
