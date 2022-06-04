import React, { useEffect, useRef, useState } from 'react'

// import Instructions from '@/components/dom/Instructions'
import { a as three } from '@react-spring/three'
import { useGLTF } from '@react-three/drei'
import dynamic from 'next/dynamic'

// import * as THREE from 'three'
import useStore from '@/helpers/store'
// import LoadingScreen from '@/components/canvas/LoadingScreen'
const LaptopGif = dynamic(() => import('@/components/canvas/LaptopGif'), {
  ssr: false,
})
// const vec = new THREE.Vector3()

function LaptopComponent({ open, hinge, ...props }) {
  const router = useStore((state) => state.router)
  const group = useRef()

  // Load model
  const { nodes, materials } = useGLTF('/mac-draco.glb')
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  // Events and spring animations were added afterwards
  return (
    <>
      <group
        ref={group}
        {...props}
        //position responsible for the placement of the whole laptop
        // position={[0, -3, -10]}
        rotation={[0, 0, 0]}
        // dispose={null}
      >
        <three.group rotation-x={hinge} position={[0, -0.04, 0.43]}>
          <group
            position={[0, 2.96, -0.1]}
            rotation={[Math.PI / 2, 0, 0]}
            // dispose={null}
          >
            <mesh
              onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
              onPointerOut={(e) => setHovered(false)}
              geometry={nodes.Cube008.geometry}
              material={nodes.Cube008.material}
            />
            <mesh
              geometry={nodes.Cube008_1.geometry}
              material={materials['matte.001']}
            />
            {/* getting the videos from the LaptopGif Component */}
            <mesh
              rotation-x={-Math.PI / 2}
              position={[0, 0, 0]}
              scale={[8.5, 5.6, 1]}
              onClick={() => {
                router.push(`/about`)
              }}
              // onClick={(e) => (e.stopPropagation(), router.push(`/about`))}
            >
              <LaptopGif />
            </mesh>
          </group>
        </three.group>
        <mesh
          geometry={nodes.keyboard.geometry}
          material={materials.keys}
          position={[1.79, 0, 3.45]}
        />
        <group position={[0, -0.1, 3.39]}>
          <mesh
            geometry={nodes.Cube002.geometry}
            material={nodes.Cube002.material}
          />

          <mesh
            geometry={nodes.Cube002_1.geometry}
            material={materials.trackpad}
          />
        </group>
        <mesh
          material={materials.touchbar}
          geometry={nodes.touchbar.geometry}
          position={[0, -0.03, 1.2]}
        />
      </group>
    </>
  )
}

export default LaptopComponent
useGLTF.preload('/mac-draco.glb')
{
  /* <Text
              rotation-x={-Math.PI / 2}
              position={[0, 0, 0.4]}
              fontSize='1'
              color={'tomato'}
              letterSpacing={0.02}
              overflowWrap={'normal'}
              // onClick={() => {
              //   router.push(`/`)
              // }}
            >
              About Me
            </Text> */
}
