import React, { Suspense, useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { BackSide } from 'three'
const Tree = dynamic(() => import('@/components/canvas/Tree'), {
  ssr: false,
})
function CubeBackground(props) {
  const ref = useRef()
  return (
    <>
      <ambientLight intensity={1.2} />
      <group {...props}>
        <Tree scale={[2, 2, 3]} position={[-10, -15, -30]} />
        <mesh ref={ref} {...props} position={[0, 0, -20]}>
          <boxBufferGeometry attach='geometry' args={[100, 100, 50]} />
          <meshStandardMaterial
            color={'white'}
            attach='material'
            side={BackSide}
            // color-wrapS={THREE.RepeatWrapping}
            // color-wrapT={THREE.RepeatWrapping}
            // color-repeat={[2, 4]}
          />
        </mesh>{' '}
      </group>
      {/* <OrbitControls /> */}
    </>
  )
}

export default CubeBackground
