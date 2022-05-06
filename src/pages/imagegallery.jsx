import dynamic from 'next/dynamic'
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
import { useEffect, useRef, Suspense } from 'react'
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
      <Suspense fallback={null}>
        <Stars />
        <ImageGallery route='/ImageGallery' />
      </Suspense>
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
