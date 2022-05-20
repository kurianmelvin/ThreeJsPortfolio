import React, { Suspense, useEffect, useRef, useState } from 'react'

import {
  // Environment,
  // useGLTF,
  // ContactShadows,
  // Text,
  // Preload,
  useTexture,
  // TrackballControls,
  // OrbitControls,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import useStore from '@/helpers/store'

function EarthButton(props) {
  const refEarth = useRef(null)
  const router = useStore((state) => state.router)
  const [base, bump, specular] = useTexture([
    '8081_earthmap2k.jpg',
    '8081_earthbump2k.jpg',
    '8081_earthspec2k.jpg',
  ])
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false)
  useEffect(
    () => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'),
    [hovered]
  )
  useFrame((state, delta) => {
    refEarth.current ? (refEarth.current.rotation.y += 0.001) : null
  })
  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      {/* <group> */}
      <mesh
        ref={refEarth}
        {...props}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={(e) => setHovered(false)}
        position={[-40, 15, -60]}
        // rotation={[0, 0, 0]}
        onClick={() => {
          router.push(`/imagegallery`)
        }}
      >
        <sphereGeometry args={[10, 60, 60]} />
        <meshPhongMaterial
          map={base}
          specularMap={specular}
          bumpMap={bump}
          bumpScale={0.5}
        />
      </mesh>
      {/* </group> */}
    </>
  )
}

export default EarthButton
