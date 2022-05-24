import React, { useRef } from 'react'

import {
  // Environment,
  // useGLTF,
  // ContactShadows,
  // Text,
  // Preload,
  useTexture,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function Clouds(props) {
  const [earthClouds] = useTexture(['earth-clouds.jpg'])
  const cloudsRef = useRef(null)

  useFrame((state, delta) => {
    cloudsRef.current ? (cloudsRef.current.rotation.y += 0.0008) : null
  })

  return (
    <>
      <mesh ref={cloudsRef} {...props}>
        <sphereGeometry args={[10.01, 100, 100]} />
        <meshPhongMaterial transparent={true} alphaMap={earthClouds} />
      </mesh>
    </>
  )
}

export default Clouds
