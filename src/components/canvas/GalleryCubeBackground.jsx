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

function GalleryBackground(props) {
  const galleryBackgroundImage = useLoader(TextureLoader, './3d22.jpg')

  return (
    <>
      <group {...props} position={[0, 4, 5]}>
        <mesh>
          <boxBufferGeometry attach='geometry' args={[12, 12, 12]} />
          <meshStandardMaterial map={galleryBackgroundImage} side={BackSide} />
        </mesh>
      </group>
    </>
  )
}

function GalleryCubeBackground() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <group>
        <GalleryBackground />
      </group>
      {/* <FlyControls movementSpeed={0.5} rollSpeed={0.05} /> */}
      {/* <OrbitControls /> */}
    </>
  )
}

export default GalleryCubeBackground
