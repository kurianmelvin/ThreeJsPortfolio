import React, { Suspense, useEffect, useRef, useState } from 'react'

import * as THREE from 'three'
import { BackSide } from 'three'

function CubeBackground(props) {
  const ref = useRef()
  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry attach='geometry' args={[100, 100, 100]} />
      <meshStandardMaterial
        color={'#2a1b3f'}
        attach='material'
        side={BackSide}
        color-wrapS={THREE.RepeatWrapping}
        color-wrapT={THREE.RepeatWrapping}
        color-repeat={[2, 4]}
      />
    </mesh>
  )
}

export default CubeBackground
