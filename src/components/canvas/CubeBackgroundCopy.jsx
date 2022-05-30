import React, { Suspense, useEffect, useRef, useState } from 'react'

import * as THREE from 'three'
import { BackSide } from 'three'

function CubeBackgroundCopy(props) {
  const ref = useRef()
  return (
    <>
      <ambientLight intensity={1.2} />

      <mesh ref={ref} {...props}>
        <boxBufferGeometry attach='geometry' args={[50, 50, 50]} />
        <meshStandardMaterial
          color={'tomato'}
          attach='material'
          side={BackSide}
          // color-wrapS={THREE.RepeatWrapping}
          // color-wrapT={THREE.RepeatWrapping}
          // color-repeat={[2, 4]}
        />
      </mesh>
    </>
  )
}

export default CubeBackgroundCopy
