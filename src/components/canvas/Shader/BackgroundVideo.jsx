import React, { Suspense, useMemo, useEffect, useRef, useState } from 'react'

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
  useTexture,
  Stage,
  Environment,
  MeshReflectorMaterial,
  useAspect,
} from '@react-three/drei'
import { useFrame, useThree, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

function Scene() {
  const size = useAspect(1800, 1000)
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/v1.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true,
    })
  )
  useEffect(() => void video.play(), [video])
  return (
    <mesh scale={size}>
      <planeBufferGeometry />
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach='map'
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </mesh>
  )
}
function BackgroundVideo() {
  return (
    <>
      {/* <Rig /> */}
      <Scene />
    </>
  )
}

export default BackgroundVideo
