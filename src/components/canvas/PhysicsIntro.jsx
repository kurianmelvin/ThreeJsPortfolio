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
  FlyControls,
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
  MeshReflectorMaterial,
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
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={2048}
        mixBlur={0}
        mixStrength={50}
        roughness={0}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color='#101010'
        metalness={0.5}
      />
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
    mass: 1,
    //positions the text as they fall
    position: [i * 2, 10, -10],
    fixedRotation: 'true',
    type: 'Dynamic',
  }))

  return (
    //this sets the position AFTER the useBox position
    //This group ROTATION sets the Angle of the Text
    <group>
      {/* this is the text mesh, adjusting the position here positions the text on the canvas */}
      <mesh ref={ref}>
        <textGeometry args={[char, config]} />
        <meshStandardMaterial color={stringToColor(char + i)} />
      </mesh>
    </group>
  )
}

//
//
//
const Wrapper = ({ text, text2 }) => {
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
      {/* The Physics gravity determines how much the item bounces apart */}
      {/* increase negative YPosition have closer bounce off  */}
      <Physics gravity={[0, -20, 0]} step={0}>
        {text.split('.').map((char, i) => {
          return (
            <>
              {/* This sets the position AFTER the useBox position  */}
              {/* This Mesh ROTATION sets the Angle of the Text */}
              {/* Melvin Kurian */}
              <mesh position={[-15, -0.3, -5]} rotation={[0, 0.7, 0]}>
                <Char
                  key={`${char}-${i}`}
                  char={char}
                  i={i}
                  config={configFont}
                />
              </mesh>
            </>
          )
        })}
        {/* This sets the position AFTER the useBox position  */}
        {/* This Mesh ROTATION sets the Angle of the Text */}
        {/* "Software Engineer" */}
        {text2.split('.').map((char, i) => {
          return (
            <>
              <mesh position={[-10, -0.4, -6]} rotation={[0, -0.6, 0.02]}>
                <Char
                  key={`${char}-${i}`}
                  char={char}
                  i={i}
                  config={configFont}
                />
              </mesh>
            </>
          )
        })}
        <Plane position={[0, -3.19, 0]} />
      </Physics>
    </>
  )
}

Wrapper.defaultProps = {
  //   text: 'Melvin Kurian',
  text: 'Melvin Kurian',
  text2: 'Software Engineer',
}

function PhysicsIntro() {
  return (
    <>
      <Wrapper />
      <Sky
        distance={40000}
        // Xpositive = Right, XNegative = Left   // YPositive = Up, YNegative = Sun Down  // ZPositive = Back, ZNegative = Front
        sunPosition={[0, 0.5, 1]}
        // inclination={0}
        azimuth={0.25}
      />
      <Stars factor={5} />
      {/* <Wrapper /> */}
      {/* <Sky /> */}
      <FlyControls
        //rs = 0.005
        rollSpeed={0.005}
        //ms =0.5
        movementSpeed={3}
        dragToLook={false}
        autoForward={false}
      />
    </>
  )
}
export default PhysicsIntro
