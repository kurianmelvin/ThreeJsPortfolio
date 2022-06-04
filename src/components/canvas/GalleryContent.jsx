import React from 'react'

import dynamic from 'next/dynamic'
import { PerspectiveCamera, FlyControls } from '@react-three/drei'
const HomeButton = dynamic(() => import('@/components/canvas/HomeButton'), {
  ssr: false,
})

// ExperienceButton
const ExperienceButton = dynamic(
  () => import('@/components/canvas/ExperienceButton'),
  {
    ssr: false,
  }
)
//
//
//
const ImageGallery = dynamic(() => import('@/components/canvas/ImageGallery'), {
  ssr: false,
})

function GalleryContent() {
  return (
    //
    //
    <>
      {/* <PerspectiveCamera makeDefault position={[-1, 2, 27]} /> */}
      <ImageGallery />

      <group>
        <HomeButton
          position={[-1, -0.45, 7]}
          scale={[0.12, 0.12, 0.12]}
          rotation={[0, 0.5, 0]}
        />
        <ExperienceButton
          scale={[7, 7, 7]}
          rotation={[0, 1.2, 0]}
          position={[1, -0.45, 7]}
        />
        <mesh rotation={[0, 0.15, 0]}>
          <spotLight
            color={'white'}
            position={[0, 0, 40]}
            intensity={2}
            angle={Math.PI / 80}
            // distance={20}
          />
        </mesh>
      </group>
    </>
  )
}

export default GalleryContent
