import React from 'react'

//
// import { usePlane } from '@react-three/cannon'
//
//
import { useLoader } from '@react-three/fiber'
import { TextureLoader, BackSide } from 'three'

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
      <HomeCubeBackground />
    </>
  )
}

export default HomeBackgroundPlane
