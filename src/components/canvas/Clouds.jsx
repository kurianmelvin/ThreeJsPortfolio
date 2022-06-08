import React, { useRef } from 'react'

import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function Clouds(props) {
  const [earthClouds] = useTexture(['earth-clouds.jpg'])
  const cloudsRef = useRef(null)

  useFrame((state, delta) => {
    cloudsRef.current ? (cloudsRef.current.rotation.y += 0.002) : null
  })

  return (
    <>
      <mesh ref={cloudsRef} {...props}>
        <sphereBufferGeometry args={[10.01, 100, 100]} />
        <meshPhongMaterial transparent={true} alphaMap={earthClouds} />
      </mesh>
    </>
  )
}

export default Clouds
