import React, { useMemo, Suspense } from 'react'

import { usePlane, useBox, Physics } from '@react-three/cannon'
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
import { extend, useLoader } from '@react-three/fiber'
import random from 'lodash.random'
import dynamic from 'next/dynamic'
import * as THREE from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'

// import LoadingScreen from '@/components/canvas/LoadingScreen'
import Kanit from '../../../public/kanit.json'
//
//
// HomeBackgroundPlane
const HomeBackgroundPlane = dynamic(
  () => import('@/components/canvas/HomeBackgroundPlane'),
  {
    ssr: false,
  }
)
//
//
//

extend({ TextGeometry })

//this function positions the text
const Char = ({ config, char, i }) => {
  const [ref] = useBox(() => ({
    mass: 10,
    // allowSleep: 'true',
    //positions the text as they fall
    position: [i * 2, 30, 0],
    fixedRotation: 'true',
    // type: 'Dynamic',
  }))

  return (
    <group
    // dispose={null}
    >
      {/* this is the text mesh, adjusting the position here positions the text on the canvas */}
      <mesh
        ref={ref}
        // dispose={null}
      >
        <textGeometry args={[char, config]} />
        <MeshReflectorMaterial
          blur={[0, 0]}
          resolution={1080}
          mixBlur={1}
          mixStrength={100}
          roughness={0}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          // color='white'
          metalness={1.5}
        />
        {/* <meshStandardMaterial color='#fff' /> */}
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

  const configFont = useMemo(
    () => ({
      font,
      size: 4.2,
      height: 0.5,
      curveSegments: 5,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 6,
    }),
    [font]
  )

  return (
    <>
      {/* <ambientLight /> */}

      {/* The Physics gravity determines how much the item bounces apart */}
      {/* increase negative YPosition have closer bounce off  */}
      <Physics gravity={[-0, -15, -20]} step={0}>
        {text.split('.').map((char, i) => {
          return (
            <>
              {/* This sets the position AFTER the useBox position  */}
              {/* This Mesh ROTATION sets the Angle of the Text */}
              {/* Melvin Kurian */}
              <mesh
                position={[-30, -0.4, -10]}
                rotation={[0, 0.6, 0]}
                // dispose={null}
              >
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
              <mesh
                position={[-25, -0.45, -5]}
                rotation={[0, -0.5, 0]}

                // dispose={null}
              >
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
        <HomeBackgroundPlane />
      </Physics>
    </>
  )
}

Wrapper.defaultProps = {
  //   text: 'Melvin Kurian',
  text: 'MELVIN KURIAN',
  text2: 'SOFTWARE ENGINEER',
}

function PhysicsIntro() {
  return (
    <>
      {/* <LoadingScreen /> */}
      {/* <Suspense fallback={null}> */}
      {/* <color attach='background' args={['#191920']} /> */}
      {/* <Sky
          distance={4000}
          // Xpositive = Right, XNegative = Left   // YPositive = Up, YNegative = Sun Down  // ZPositive = Back, ZNegative = Front
          sunPosition={[0, 0.1, 2.5]}
        /> */}
      {/* <Stars /> */}
      {/* <light position={[1, 1, 1]} /> */}

      <Wrapper />
      {/* </Suspense> */}
      <FlyControls
        //rs = 0.005
        rollSpeed={0}
        //ms =0.5
        movementSpeed={3}
        dragToLook={false}
        autoForward={false}
      />
      {/* <OrbitControls /> */}
    </>
  )
}
export default PhysicsIntro
