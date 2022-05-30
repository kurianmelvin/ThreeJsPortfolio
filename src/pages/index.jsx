import React, { useEffect, useRef, Suspense } from 'react'

import { Html, useProgress } from '@react-three/drei'
// import { useFrame, useThree } from '@react-three/fiber'
//
import dynamic from 'next/dynamic'
// import * as THREE from 'three'
// import { BackSide } from 'three'
// import Shader from '@/components/canvas/Shader/Shader'
// import BackgroundPlane from '@/components/canvas/Shader/BackgroundPlane'
// import ZoomToView from '@/components/canvas/ZoomToView'
// ZoomToView
// import { useProgress, Html, Stars, Sky } from '@react-three/drei'
//
//
// import Laptop from '@/components/canvas/Laptop'
const Laptop = dynamic(() => import('@/components/canvas/Laptop'), {
  ssr: false,
})
//
// import Welcome from '@/components/canvas/Welcome'
// const Welcome = dynamic(() => import('@/components/canvas/Welcome'), {
//   ssr: false,
// })

import Clouds from '@/components/canvas/Clouds'
import EarthButton from '@/components/canvas/EarthButton'
// const EarthButton = dynamic(() => import('@/components/canvas/EarthButton'), {
//   ssr: false,
// })
//
//
// import Welcome from '@/components/canvas/Welcome'
const PhysicsIntro = dynamic(() => import('@/components/canvas/PhysicsIntro'), {
  ssr: false,
})
//
//
//
const PhoneButtion = dynamic(() => import('@/components/canvas/PhoneButtion'), {
  ssr: false,
})

// const PhoneContact = dynamic(() => import('@/components/canvas/PhoneContact'), {
//   ssr: false,
// })

// const SocialGithub = dynamic(() => import('@/components/canvas/SocialGithub'), {
//   ssr: false,
// })
// const SocialLinkedin = dynamic(
//   () => import('@/components/canvas/SocialLinkedin'),
//   {
//     ssr: false,
//   }
// )

// const SocialInstagram = dynamic(
//   () => import('@/components/canvas/SocialInstagram'),
//   {
//     ssr: false,
//   }
// )
// const SocialTwitter = dynamic(
//   () => import('@/components/canvas/SocialTwitter'),
//   {
//     ssr: false,
//   }
// )

// import ImageGallery from '@/components/canvas/ImageGallery'
// import Instructions from '@/components/dom/Instructions'
//

// const LoadingScreen = dynamic(
//   () => import('@/components/canvas/LoadingScreen'),
//   {
//     ssr: false,
//   }
// )
//
//
// const BackgroundVideo = dynamic(
//   () => import('@/components/canvas/Shader/BackgroundVideo'),
//   {
//     ssr: false,
//   }
// )

//
// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
//   ssr: false,
// })

// softShadows()

//

// canvas components goes here
const R3F = () => {
  return (
    <>
      <Suspense fallback={null}>
        <PhysicsIntro />
        {/* <Suspense fallback={null}>
          <PhoneButtion position={[40, 15, -60]} scale={[10.5, 10, 10]} />
          <Laptop />
          <group position={[-40, 12, -60]}>
            <EarthButton />
            <Clouds />
          </group>
        </Suspense> */}
        {/* <AboutMe /> */}
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
      title: 'Melvin Kurian Portfolio',
    },
  }
}
