import React, { useEffect, useRef, useState } from 'react'

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
    'earth-specular.png',
  ])
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false)
  //
  //
  // const handleNavigation = () => {
  //   window.location.href = 'https://kurianmelvin.com/'
  // }

  // useEffect(() => {
  //   window.addEventListener('onClick', handleNavigation)
  //   return () => {
  //     window.removeEventListener('onClick', handleNavigation)
  //   }
  // }, [])

  //
  useEffect(
    () => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'),
    [hovered]
  )
  useFrame((state, delta) => {
    refEarth.current ? (refEarth.current.rotation.y += 0.001) : null
  })
  return (
    <>
      <mesh
        ref={refEarth}
        {...props}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={(e) => setHovered(false)}
        rotation={[0, 0, 0]}
        onClick={() => {
          router.push(`/imagegallery`)
        }}
        // onClick={(e) => (e.stopPropagation(),handleNavigation())} /* prettier-ignore */
      >
        <sphereGeometry args={[10, 100, 100]} />
        <meshPhongMaterial
          map={base}
          specularMap={specular}
          bumpMap={bump}
          bumpScale={0.3}
        />
      </mesh>
      {/* </group> */}
    </>
  )
}

export default EarthButton
