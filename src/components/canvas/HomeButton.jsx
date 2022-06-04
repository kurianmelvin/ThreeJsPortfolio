import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import useStore from '@/helpers/store'
//

//
import { useLocation } from 'wouter'
// const setRouter = () =>
//   useStore.setState((state) => {
//     state.router = [...state.router, '/']
//   })
// //
//
export default function HomrButton(props) {
  const router = useStore((state) => state.router)
  // const add = useStore((state) => state.add)
  // const router = useStore((state) => Object.keys(state.router), shallow)
  // const router = useStore((state) => Object.keys(state.router), shallow)
  // const { router, dom } = useStore(
  //   (state) => ({ router: state.router, dom: state.dom }),
  //   shallow
  // )
  const [, setLocation] = useLocation()
  const group = useRef()
  const { nodes, materials } = useGLTF('/home.glb')
  const [hovered, setHovered] = useState(false)
  //

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  //

  return (
    <group
      ref={group}
      {...props}
      // dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      // onClick={() => setLocation('/')}
      onClick={() => {
        router.push('/')
      }}
    >
      {/* Mesh for the whole scene */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube052.geometry}
        material={nodes.Cube052.material}
        scale={0.48}
      >
        {/* outdoor water Well */}
        <mesh
          // position={[-5, 0, 0]}
          castShadow
          receiveShadow
          geometry={nodes.Cube229.geometry}
          material={materials.studna}
          rotation={[-0.01, -0.39, 0]}
          scale={[4.62, 3.56, 5.61]}
        />
        {/* front lawn bush */}
        <mesh
          // position={[-5, 0, 0]}
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI, -0.32, -Math.PI]}
          scale={[0.33, 0.33, 0.33]}
        />
        {/* lawn */}
        <mesh
          // position={[-5, 0, 0]}
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials['Material.001']}
          scale={[2.09, 2.09, 2.09]}
        />

        {/* the bare house */}

        <mesh
          // position={[-5, 0, 0]}
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials.omietka}
          scale={[2.09, 2.09, 1.72]}
        />
        {/* the roof */}
        <mesh
          // position={[5, 0, 0]}
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials.tehly}
          scale={[2.09, 2.09, 2.09]}
        />
        {/* roof moldings */}
        <mesh
          // position={[10, 0, 0]}
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={materials.drevo}
          scale={[2.09, 2.09, 2.09]}
        />
        {/* outside house decorations */}
        <mesh
          //  position={[-5, 0, 0]}
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={materials.tehla}
          scale={[7.08, 7.08, 3.22]}
        />
        {/* chimney */}
        <mesh
          //  position={[-5, 0, 0]}
          castShadow
          receiveShadow
          geometry={nodes.Cube100.geometry}
          material={materials.komin}
          scale={[1.58, 1.58, 1.58]}
        />
        {/* front window decorations */}
        <mesh
          //  position={[-5, 0, 0]}
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.sklo}
          rotation={[0, 0.42, 1.57]}
          scale={[0.52, 0.29, 0.39]}
        />
        {/* smoke */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.skla_a_dym_mergedObject002.geometry}
          material={materials.Material}
          scale={[2.09, 2.09, 2.09]}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/home.glb')
