import {
  OrbitControls,
  Preload,
  Html,
  useProgress,
  Loader,
  Sky,
  Cloud,
  Stars,
  Line,
  softShadows,
  Text,
} from '@react-three/drei'
import { useEffect, useRef, Suspense } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
//
import Shader from '@/components/canvas/Shader/Shader'
import BackgroundPlane from '@/components/canvas/Shader/BackgroundPlane'
import ZoomToView from '@/components/canvas/ZoomToView'
// ZoomToView

//
import dynamic from 'next/dynamic'
//
// import Laptop from '@/components/canvas/Laptop'
const Laptop = dynamic(() => import('@/components/canvas/Laptop'), {
  ssr: false,
})
//
// import Welcome from '@/components/canvas/Welcome'
const Welcome = dynamic(() => import('@/components/canvas/Welcome'), {
  ssr: false,
})
//
// import ImageGallery from '@/components/canvas/ImageGallery'
// import Instructions from '@/components/dom/Instructions'
//
// import LoadingScreen from '@/components/canvas/LoadingScreen'
const LoadingScreen = dynamic(
  () => import('@/components/canvas/LoadingScreen'),
  {
    ssr: false,
  }
)
//
//

//
// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
//   ssr: false,
// })

softShadows()
// canvas components goes here
const R3F = () => {
  return (
    <>
      <LoadingScreen />
      {/* <ZoomToView /> */}
      {/* <BackgroundPlane /> */}
      {/* <Shader /> */}
      <Suspense fallback={null}>
        <Sky
          distance={40000}
          // Xpositive = Right, XNegative = Left   // YPositive = Up, YNegative = Sun Down  // ZPositive = Back, ZNegative = Front
          azimuth={0.25}
        />
        <Cloud
          speed={2}
          opacity={0.2}
          width={300}
          depth={2}
          segments={300}
          color='black'
        />
        <Cloud
          Position={[-10, -10, 0]}
          speed={2}
          opacity={0.01}
          width={300}
          depth={2}
          segments={300}
          color='white'
        />

        <Welcome />
        <Laptop />
      </Suspense>

      <OrbitControls />
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
      title: "Melvin's Portfolio",
    },
  }
}
