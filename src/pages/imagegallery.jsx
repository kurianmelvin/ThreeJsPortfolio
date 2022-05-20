import { useEffect, useRef, Suspense } from 'react'

import {
  OrbitControls,
  Preload,
  Html,
  useProgress,
  Loader,
  Sky,
  Stars,
  FlyControls,
} from '@react-three/drei'
import dynamic from 'next/dynamic'
//
// import LoadingScreen from '@/components/canvas/LoadingScreen'
// const LoadingScreen = dynamic(
//   () => import('@/components/canvas/LoadingScreen'),
//   {
//     ssr: false,
//   }
// )
//
//

const ImageGallery = dynamic(() => import('@/components/canvas/ImageGallery'), {
  ssr: false,
})

const R3F = () => {
  return (
    <>
      <ImageGallery route='/ImageGallery' />
    </>
  )
}

const Page = () => {
  return (
    <>
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'ImageGallery',
    },
  }
}
