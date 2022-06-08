import React from 'react'

import {
  PerspectiveCamera,
  OrbitControls,
  FlyControls,
} from '@react-three/drei'
import dynamic from 'next/dynamic'

const Laptop = dynamic(() => import('@/components/canvas/Laptop'), {
  ssr: false,
})

import Clouds from '@/components/canvas/Clouds'
import EarthButton from '@/components/canvas/EarthButton'

const Table = dynamic(() => import('@/components/canvas/Table'), {
  ssr: false,
})

const PhoneButtion = dynamic(() => import('@/components/canvas/PhoneButtion'), {
  ssr: false,
})

const HomeBackgroundPlane = dynamic(
  () => import('@/components/canvas/HomeBackgroundPlane'),
  {
    ssr: false,
  }
)
const SmallTable = dynamic(() => import('@/components/canvas/SmallTable'), {
  ssr: false,
})

function HomeContent() {
  return (
    <>
      <PerspectiveCamera position={[0, 0, 1]} />
      {/* <ambientLight /> */}
      <pointLight position={[0, 10, 10]} intensity={1.2} color={'#F6F6F6'} />

      <group position={[0, 60, -55]}>
        <HomeBackgroundPlane />
        <group position={[0, -100, 0]}>
          <group position={[40, 20.5, -30]}>
            <PhoneButtion position={[-0.5, 3.5, 0]} scale={[10.5, 10, 10]} />
            <SmallTable position={[0, -21, 0]} scale={[10, 10, 10]} />
          </group>

          <group>
            <Laptop scale={[1.5, 1.5, 1.5]} position={[0, 16.5, -7]} />
            <Table scale={[20, 20, 20]} />
          </group>

          <group position={[-40, 20.5, -30]}>
            <EarthButton />
            <Clouds />
            <SmallTable position={[2, -21, 0]} scale={[10, 10, 10]} />
          </group>
        </group>
      </group>
    </>
  )
  //
  //
}

export default HomeContent
//
//
