import React from 'react'

//
// import { usePlane } from '@react-three/cannon'
//
//
import { useLoader } from '@react-three/fiber'
import { TextureLoader, BackSide } from 'three'

function GalleryBackground(props) {
  const galleryBackgroundImage = useLoader(TextureLoader, './3d22.jpg')

  return (
    <>
      <group {...props} position={[0, 4, 5]}>
        <mesh>
          <boxBufferGeometry attach='geometry' args={[12, 12, 20]} />
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
    </>
  )
}

export default GalleryCubeBackground
