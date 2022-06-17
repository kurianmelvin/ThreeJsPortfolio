import React from 'react'

import { FlyControls } from '@react-three/drei'
//
import dynamic from 'next/dynamic'

import useStore from '@/helpers/store'

const ItemStand = dynamic(() => import('@/components/canvas/ItemStand'), {
  ssr: false,
})
// import RobotButton from './RobotButton'
const GalleryRobotButton = dynamic(
  () => import('@/components/canvas/GalleryRobotButton'),
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

function GalleryContent() {
  const router = useStore((state) => state.router)

  return (
    //
    <>
      <group position={[0, 0, 0]}>
        <ImageGallery />
        <GalleryCubeBackground />
        <group position={[0, -0.2, 2]} scale={1}>
          <ItemStand
            scale={[0.2, 0.2, 0.2]}
            rotation={[0, 0, 0]}
            position={[0, -1.84, 5]}
          />
          <GalleryRobotButton
            position={[0, -0.55, 5]}
            scale={[0.2, 0.2, 0.2]}
            rotation={[0, 0.1, 0]}
            onClick={() => router.push('/')}
          />
        </group>
        <mesh rotation={[0, 0.15, 0]}>
          <spotLight
            color={'#FFE3A9'}
            position={[0, 500, 500]}
            intensity={1}
            angle={Math.PI / 300}
            penumbra={0.08}
          />
        </mesh>
      </group>
      <FlyControls movementSpeed={0.5} rollSpeed={0.05} />
    </>
  )
}

export default GalleryContent
