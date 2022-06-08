import React, { useRef } from 'react'

import { useGLTF } from '@react-three/drei'
import dynamic from 'next/dynamic'
const Laptop = dynamic(() => import('@/components/canvas/Laptop'), {
  ssr: false,
})
export default function WorkDesk(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/WorkDesk.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <Laptop position={[-0.32, 0.7, -1]} scale={[0.05, 0.05, 0.05]} />
      <group
        position={[-0.32, 0.7, -0.72]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.06, 1.06, 1.06]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Desk_Mat_Mat_Black_0.geometry}
          material={materials.Material}
          position={[0, 0, -0.02]}
          //   rotation={[0, 0, -Math.PI]}
        />
      </group>
      <group position={[-0.08, 0.99, -0.6]}>
        <group
        // rotation={[Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials['Material.001']}
            position={[-0.26, -0.31, -0.11]}
          />
        </group>
      </group>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk_top.geometry}
        material={nodes.desk_top.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.up_Button.geometry}
        material={nodes.up_Button.material}
        position={[0.15, 0.64, -0.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.downButton.geometry}
        material={nodes.downButton.material}
        position={[0.2, 0.64, -0.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen.geometry}
        material={materials.ON}
        position={[0.09, 0.64, -0.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Small_Plant.geometry}
        material={materials.Plant_Shader}
        position={[-0.86, 0.9, -0.9]}
        rotation={[-Math.PI / 2, 0, 1.46]}
        scale={[0.02, 0.01, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={nodes.Cube025.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025_1.geometry}
        material={nodes.Cube025_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025_2.geometry}
        material={nodes.Cube025_2.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025_3.geometry}
        material={nodes.Cube025_3.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025_4.geometry}
        material={nodes.Cube025_4.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={nodes.Cube028.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028_1.geometry}
        material={nodes.Cube028_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028_2.geometry}
        material={nodes.Cube028_2.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028_3.geometry}
        material={nodes.Cube028_3.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028_4.geometry}
        material={nodes.Cube028_4.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamp.geometry}
        material={materials.material_0}
        position={[0.25, 1.18, -0.95]}
        rotation={[-Math.PI / 2, 0, 0.63]}
        scale={[0.55, 0.55, 0.55]}
      />
    </group>
  )
}

useGLTF.preload('/WorkDesk.glb')
