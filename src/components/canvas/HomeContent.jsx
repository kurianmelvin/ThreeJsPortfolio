import React, { useEffect } from 'react'

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
import Hello from '@/components/canvas/Hello'
import HomeRobotButton from '@/components/canvas/HomeRobotButton'

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
      {/* <PerspectiveCamera /> */}
      {/* <ambientLight /> */}
      <pointLight position={[0, 10, 10]} intensity={1.2} color={'#F6F6F6'} />

      <group position={[0, 60, -55]}>
        <HomeBackgroundPlane />

        <group position={[0, -100, 0]}>
          <group>
            <PhoneButtion
              position={[30, 27, 0]}
              rotation={[0, -0.1, 0]}
              scale={[8.5, 8, 8]}
            />
            <Laptop scale={[2, 2, 2.5]} position={[0, 16.5, -11]} />
            <Table scale={[55, 20, 30]} />
          </group>

          <group position={[-30, 26, 0]}>
            <EarthButton></EarthButton>
            <Clouds />
          </group>
        </group>
      </group>
      <HomeRobotButton
        rotation={[0, 0.1, 0]}
        position={[0, -40, -90]}
        scale={[8.5, 8, 8]}
      />
      <FlyControls movementSpeed={20} rollSpeed={0.05} />
    </>
  )
  //
  //
}

export default HomeContent
//
//
