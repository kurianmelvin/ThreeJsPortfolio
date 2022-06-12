import React from 'react'

//
//
import dynamic from 'next/dynamic'

//
//
// const HomeButton = dynamic(() => import('@/components/canvas/HomeButton'), {
//   ssr: false,
// })

// ExperienceButton
// const ExperienceButton = dynamic(
//   () => import('@/components/canvas/ExperienceButton'),
//   {
//     ssr: false,
//   }
// )

const ItemStand = dynamic(() => import('@/components/canvas/ItemStand'), {
  ssr: false,
})
// import RobotButton from './RobotButton'
const RobotButtonAbout = dynamic(
  () => import('@/components/canvas/RobotButtonAbout'),
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

const GalleryCubeBackground = dynamic(
  () => import('@/components/canvas/GalleryCubeBackground'),
  {
    ssr: false,
  }
)
///
///
//

function GalleryContent() {
  return (
    //
    //
    <>
      {/* <PerspectiveCamera makeDefault position={[-1, 2, 27]} /> */}

      <group position={[0, 0, 0]}>
        <ImageGallery />
        <GalleryCubeBackground />
        {/* <HomeButton
          position={[-1, -0.45, 7]}
          scale={[0.12, 0.12, 0.12]}
          rotation={[0, 0.5, 0]}
        /> */}
        <group position={[0, -0.2, 2]} scale={0.8}>
          <ItemStand
            scale={[0.2, 0.2, 0.2]}
            rotation={[0, 0, 0]}
            position={[0, -1.84, 5]}
          />
          <RobotButtonAbout
            position={[0, -0.55, 5]}
            scale={[0.2, 0.2, 0.2]}
            rotation={[0, 0.1, 0]}
          />
        </group>
        <mesh rotation={[0, 0.15, 0]}>
          <spotLight
            color={'#FFE3A9'}
            // decay={0}
            position={[0, 500, 350]}
            intensity={1}
            angle={Math.PI / 300}
            // distance={20000}
            penumbra={0.08}
          />
        </mesh>
      </group>
    </>
  )
}

export default GalleryContent
