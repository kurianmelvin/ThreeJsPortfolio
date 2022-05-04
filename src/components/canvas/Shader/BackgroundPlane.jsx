import React, { Suspense, useMemo, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
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
} from '@react-three/drei'

function Rig() {
  const camera = useThree((state) => state.camera)

  //
  useFrame(({ clock }) => {
    camera.position.z = Math.sin(clock.elapsedTime) * 0.05
  })
  return (
    <Suspense fallback={null}>
      <Cloud
        position={[0, 0, -10]}
        speed={1}
        opacity={0.5}
        width={50}
        depth={20}
        segments={100}
        color='tomato'
      />
      <Cloud position={[-10, 5, 6]} speed={0.2} opacity={0.5} />

      <Sky
        distance={40000}
        // Xpositive = Right, XNegative = Left   // YPositive = Up, YNegative = Sun Down  // ZPositive = Back, ZNegative = Front
        sunPosition={[0, 0.5, 1]}
        // inclination={0}
        // azimuth={0.25}
      />
      <Stars factor={5} />
    </Suspense>
  )
}

function BackgroundPlane() {
  return (
    <>
      <Rig />
    </>
  )
}
export default BackgroundPlane
