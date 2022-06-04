import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import useStore from '@/helpers/store'

export default function ArtStandButton(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/artStand3.glb')
  const [hovered, setHovered] = useState(false)
  //
  const router = useStore((state) => state.router)
  //
  //

  // const handleNavigation = () => {
  //   router.push(`/imagegallery`)
  // }

  // useEffect(() => {
  //   window.addEventListener('onClick', handleNavigation)
  //   return () => {
  //     window.removeEventListener('onClick', handleNavigation)
  //   }
  // }, [])
  //
  //
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  //
  return (
    <group
      ref={group}
      {...props}
      //dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onClick={() => {
        router.push(`/imagegallery`)
      }}
      // onClick={(e) => (e.stopPropagation(), handleNavigation())}
    >
      <group
        position={[-0.22, 0.96, -0.12]}
        rotation={[-1.56, 0, 0]}
        scale={[39.37, 39.37, 39.37]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={nodes.mesh_0_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_3.geometry}
          material={nodes.mesh_0_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_4.geometry}
          material={nodes.mesh_0_4.material}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/artStand3.glb')
