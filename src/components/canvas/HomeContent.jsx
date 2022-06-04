import React from 'react'

import { PerspectiveCamera } from '@react-three/drei'

import dynamic from 'next/dynamic'

const Laptop = dynamic(() => import('@/components/canvas/Laptop'), {
  ssr: false,
})

import Clouds from '@/components/canvas/Clouds'
import EarthButton from '@/components/canvas/EarthButton'

const PhysicsIntro = dynamic(() => import('@/components/canvas/PhysicsIntro'), {
  ssr: false,
})

const PhoneButtion = dynamic(() => import('@/components/canvas/PhoneButtion'), {
  ssr: false,
})

function HomeContent() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[-1, 2, 27]} />
      {/* <Suspense fallback={null}> */}
      <PhysicsIntro />
      {/* <Suspense fallback={null}> */}
      <PhoneButtion position={[40, 15, -60]} scale={[10.5, 10, 10]} />
      <Laptop scale={[1, 1, 1]} position={[0, -3, -10]} />
      <group position={[-40, 12, -60]}>
        <EarthButton />
        <Clouds />
      </group>
      {/* </Suspense> */}
      {/* </Suspense> */}
    </>
  )
  //
  //
}

export default HomeContent
//
//
