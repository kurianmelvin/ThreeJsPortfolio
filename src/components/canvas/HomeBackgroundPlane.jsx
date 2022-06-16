import React, { useLayoutEffect } from 'react'

//
// import { usePlane } from '@react-three/cannon'
import {
  MapControls,
  Stars,
  PerspectiveCamera,
  Environment,
  FlyControls,
  OrbitControls,
} from '@react-three/drei'
//
//
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import * as THREE from 'three'
import {
  TextureLoader,
  CubeTextureLoader,
  BackSide,
  NormalBlending,
  AdditiveBlending,
  GreaterDepth,
} from 'three'

// const CubeBackground = dynamic(
//   () => import('@/components/canvas/AboutCubeBackground'),
//   {
//     ssr: false,
//   }
// )
// softShadows()

function HomeCubeBackground(props) {
  const homeBackgroundImage = useLoader(TextureLoader, './3d11.jpg')

  return (
    <>
      <group {...props}>
        <mesh>
          <boxBufferGeometry attach='geometry' args={[200, 200, 200]} />
          <meshStandardMaterial map={homeBackgroundImage} side={BackSide} />
        </mesh>
      </group>
    </>
  )
}

function HomeBackgroundPlane() {
  return (
    <>
      {/* <group> */}
      <HomeCubeBackground />
      {/* </group> */}
      {/* <FlyControls movementSpeed={20} rollSpeed={0.05} /> */}
      {/* <OrbitControls /> */}
    </>
  )
}

export default HomeBackgroundPlane
