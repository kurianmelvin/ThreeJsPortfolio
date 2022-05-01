import React, { useRef, useState, Suspense } from 'react'
import {
  shaderMaterial,
  Stars,
  SpotLight,
  Sky,
  Sparkles,
  Text,
} from '@react-three/drei'
function Welcome() {
  return (
    <>
      <mesh>
        <Suspense fallback={null}>
          <Text
            position={[0, 3, 0]}
            fontSize='1'
            color={'#EC2D2D'}
            letterSpacing={0.02}
          >
            Melvin Kurian Portfolio
          </Text>
        </Suspense>
      </mesh>
    </>
  )
}

export default Welcome
