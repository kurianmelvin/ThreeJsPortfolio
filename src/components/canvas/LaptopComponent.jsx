import React, { useEffect, useRef, useState } from 'react'

import { a as three } from '@react-spring/three'
import { useGLTF, Text3D, useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import * as THREE from 'three'

import useStore from '@/helpers/store'

// const LaptopGif = dynamic(() => import('@/components/canvas/LaptopGif'), {
//   ssr: false,
// })

const Tree = dynamic(() => import('@/components/canvas/Tree'), {
  ssr: false,
})
const LaptopGif = dynamic(() => import('@/components/canvas/LaptopGif'), {
  ssr: false,
})


function LaptopComponent({ open, hinge, ...props }) {
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false)
  const buttonText = useRef()
  const router = useStore((state) => state.router)
  const group = useRef()

  // Load model
  const { nodes, materials } = useGLTF('/mac-draco.glb')

  // useEffect(() => {
  //   document.body.style.cursor = hovered ? 'pointer' : 'auto'
  // }, [hovered])

  // Events and spring animations were added afterwards

  useCursor(hovered)
  useFrame(() => {
    // h? T : F
    buttonText.current.scale.x = THREE.MathUtils.lerp(buttonText.current.scale.x, (hovered ? 1.5 : 0),0.05) /* prettier-ignore */
    buttonText.current.scale.y = THREE.MathUtils.lerp(buttonText.current.scale.y, (hovered ? 1.5 :0),0.05) /* prettier-ignore */
    buttonText.current.scale.z= THREE.MathUtils.lerp(buttonText.current.scale.z, (hovered ? 1.5 :0),0.05) /* prettier-ignore */
    //position
    buttonText.current.position.x= THREE.MathUtils.lerp(buttonText.current.position.x, (hovered ? -5 :0),0.06) /* prettier-ignore */
    buttonText.current.position.y= THREE.MathUtils.lerp(buttonText.current.position.y, (hovered ? 4:0),0.05) /* prettier-ignore */
    buttonText.current.position.z= THREE.MathUtils.lerp(buttonText.current.position.z, (hovered ? 4 :0),0.06) /* prettier-ignore */
  })
  return (
    <>
      <group
        scale={[1.5, 1.5, 1.3]}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={(e) => setHovered(false)}
        ref={group}
        {...props}
        //position responsible for the placement of the whole laptop
        // position={[0, -3, -10]}
        // rotation={[0, 0, 0]}
        // dispose={null}
      >
        {/* the hinge */}
        <three.group rotation-x={hinge} position={[0, 3, -2.5]}>
          <group
            position={[0, 2.96, 0]}
            // position={[0, 2.96, -0.1]}
            // rotation={[Math.PI / 2, 0, 0]}
            rotation={[0, 0, 0]}
            // dispose={null}
          >
            <mesh
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
              position={[0, 0, 2.5]}
              // scale={[8.5, 5.6, 1]}
              scale={[1, 1, 0.01]}
              onClick={() => {
                router.push(`/about`)
              }}
              // onClick={(e) => (e.stopPropagation(), router.push(`/about`))}
            >
              <LaptopGif />

              {/* <Tree scale={[1.75, 1.75, 1.5]} /> */}
            </mesh>
          </group>
        </three.group>
        <mesh
          geometry={nodes.keyboard.geometry}
          material={materials.keys}
          position={[1.79, 0, 3.45]}
          onClick={() => {
            router.push(`/about`)
          }}
        />
        <group
          position={[0, -0.1, 3.39]}
          onClick={() => {
            router.push(`/about`)
          }}
        >
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
      <group
        position={[0, -3, 2]}
        onClick={() => {
          router.push(`/about`)
        }}
      >
        <Text3D
          ref={buttonText}
          font={'/kanit.json'}
          curveSegments={14}
          bevelEnabled={true}
          bevelThickness={0.02}
          bevelSize={0.05}
          bevelOffset={-0.001}
          bevelSegments={8}
          rotation={[-1, 0, 0]}
        >
          <meshStandardMaterial
            attach='material'
            color={'#F77E21'}
            // color={'#F77E21'}
            roughness={0.1}
            metalness={0.1}
            flatShading={true}
          />
          ABOUT ME
        </Text3D>
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
