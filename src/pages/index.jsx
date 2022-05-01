import dynamic from 'next/dynamic'
import Laptop from '@/components/canvas/Laptop'
import Welcome from '@/components/canvas/Welcome'
import ImageGallery from '@/components/canvas/ImageGallery'
import Instructions from '@/components/dom/Instructions'
import {
  OrbitControls,
  Preload,
  Html,
  useProgress,
  Loader,
  Sky,
  Stars,
} from '@react-three/drei'
import { useEffect, useRef, Suspense } from 'react'
// import Shader from '@/components/canvas/Shader/Shader'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

// canvas components goes here
const R3F = () => {
  return (
    <>
      <Sky />
      <Welcome />
      <Laptop />
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
