import React, { useMemo } from 'react'
import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { usePlane, useBox, Physics } from '@react-three/cannon'
import random from 'lodash.random'

import Kanit from '../../../public/kanit.json'

import { extend, useLoader } from '@react-three/fiber'
//
//
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
//
//
//

extend({ TextGeometry })
//
//

const Plane = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))

  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color='#ffffff' />
    </mesh>
  )
}
//this plane function is good
//
function stringToColor(str) {
  let hash = 0

  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.substr(-2)
  }

  return color
}
//
// this color function is good
//
//  rotation={[-Math.PI / 2, 0, 0]}
//
//
//this function positions the text
const Char = ({ config, char, i }) => {
  const [ref] = useBox(() => ({
    mass: 10,
    //positions the text as they fall
    position: [i * 2, 5, -5],
    // fixedRotation: 'true',

    type: 'Dynamic',
  }))

  return (
    <group>
      {/* this is the text mesh, adjusting the position here positions the text on the canvas */}
      <mesh ref={ref}>
        <textGeometry args={[char, config]} />
        <meshStandardMaterial color={'#9c6398'} />
      </mesh>
    </group>
  )
}

//
//
//
const Wrapper = ({ text }) => {
  const loader = new FontLoader()
  const font = loader.parse(Kanit)
  //   const font = useLoader(
  //     FontLoader,
  //     'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json'
  //   )
  const configFont = useMemo(
    () => ({
      font,
      size: 1.8,
      height: 0.3,
      //   curveSegments: 2,
      //   bevelEnabled: true,
      //   bevelThickness: 0.1,
      //   bevelSize: 0.1,
      //   bevelOffset: 0,
      //   bevelSegments: 6,
    }),
    [font]
  )

  return (
    <>
      <ambientLight />
      {/* <spotLight
        penumbra={0.5}
        angle={0.5}
        intensity={1.5}
        position={[-400, 200, 50]}
        castShadow
      /> */}

      <Physics gravity={[0, -10, 0]} step={0}>
        {text.split('').map((char, i) => {
          return (
            <Char key={`${char}-${i}`} char={char} i={i} config={configFont} />
          )
        })}

        <Plane position={[0, -5, 0]} />
      </Physics>
    </>
  )
}

Wrapper.defaultProps = {
  //   text: 'Melvin Kurian',
  text: 'Melvin Kurian',
}

function PhysicsIntro() {
  return (
    <>
      <Wrapper />

      {/* <Wrapper /> */}
      <Sky />
      <OrbitControls />
    </>
  )
}
export default PhysicsIntro
