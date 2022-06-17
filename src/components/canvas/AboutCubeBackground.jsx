import React, { useLayoutEffect, useRef } from 'react'

import { useLoader } from '@react-three/fiber'
import { TextureLoader, BackSide } from 'three'
//
//
function AboutCubeBackground(props) {
  const aboutBackgroundImage = useLoader(TextureLoader, './3d18.jpg')
  const ref = useRef()
  return (
    <>
      <ambientLight intensity={1} />
      <group {...props}>
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
    </>
  )
}
export default AboutCubeBackground
