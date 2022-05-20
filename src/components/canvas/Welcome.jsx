import { Suspense, useMemo } from 'react'

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
  Text,
  Stage,
} from '@react-three/drei'
import * as THREE from 'three'
//
//
/* prettier-ignore */

function Welcome() {
  return (
    <>
      <mesh>
        <Suspense fallback={null}>
          <Text
            position={[-7, -1.75, -5]}
            rotation={[0, Math.PI / 2.5, 0]}
            fontSize='1'
            color={'tomato'}
            letterSpacing={0.02}
            maxWidth={100}
            lineHeight={'normal'}
            direction='ltr'
            outlineColor={'#fff'}
            textAlign={'center'}
            outlineWidth={10}
            // strokeColor={'#000'}
            // depthOffset = {0.5}
          >
            Melvin Kurian
          </Text>
          <Text
            position={[-7, -2.6, -5]}
            rotation={[0, Math.PI / 2.5, 0]}
            fontSize='1'
            color={'tomato'}
            letterSpacing={0.02}
          >
            Software Engineer
          </Text>
        </Suspense>
      </mesh>
    </>
  )
}

export default Welcome
