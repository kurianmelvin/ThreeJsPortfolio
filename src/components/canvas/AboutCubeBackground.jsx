import React, { useLayoutEffect, useRef } from 'react'

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

function AboutCubeBackground(props) {
  // const aboutBackgroundImage = useLoader(TextureLoader, './3d41.jpg')
  // const aboutBackgroundImage = useLoader(TextureLoader, './3d18.jpg')
  // const aboutBackgroundImage = useLoader(TextureLoader, './3d13.jpg')
  // const aboutBackgroundImage = useLoader(TextureLoader, './3d42.jpg')
  // const aboutBackgroundImage = useLoader(TextureLoader, './3d47.jpg')
  const aboutBackgroundImage = useLoader(TextureLoader, './3d18.jpg')
  const ref = useRef()
  return (
    <>
      <ambientLight intensity={1} />
      {/* <Environment preset='sunset' /> */}
      <group {...props}>
        {/* <Tree scale={[2.5, 2.2, 2.2]} position={[0, -60, -50]} /> */}
        <mesh ref={ref} position={[0, -20, -20]}>
          <boxBufferGeometry attach='geometry' args={[400, 150, 150]} />
          <meshStandardMaterial
            map={aboutBackgroundImage}
            side={BackSide}
            roughness={0.65}
            metalness={0}
            fog
            emissive={'#D89216'}
          />
        </mesh>
      </group>
      {/* <OrbitControls /> */}
    </>
  )
}

export default AboutCubeBackground
