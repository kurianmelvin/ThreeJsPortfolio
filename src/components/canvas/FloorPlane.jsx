import React from 'react'

//
import { usePlane } from '@react-three/cannon'
import {
  MapControls,
  Stars,
  PerspectiveCamera,
  Environment,
} from '@react-three/drei'
//
//
import { useFrame, useLoader } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import * as THREE from 'three'
import { TextureLoader } from 'three'
import { BackSide, NormalBlending, AdditiveBlending, GreaterDepth } from 'three'

export function FloorPlane() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <boxBufferGeometry args={[100, 100]} />
        <meshStandardMaterial color='#04293A' />
      </mesh>
    </>
  )
}
