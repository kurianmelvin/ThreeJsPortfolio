import React, { useMemo, useRef } from 'react'

import { useBox, Physics } from '@react-three/cannon'
import { GradientTexture } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import dynamic from 'next/dynamic'
// import * as THREE from 'three'
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

// softShadows()
extend({ TextGeometry })

//this function positions the text
const Char = ({ config, char, i }) => {
  const [ref] = useBox(() => ({
    mass: 1,
    allowSleep: 'true',
    //positions the text as they fall
    position: [i * 2, 30, 0],
    fixedRotation: 'true',
    // type: 'Dynamic',
  }))

  return (
    <>
      {/* <ambientLight /> */}
      <group
      // dispose={null}
      >
        {/* this is the text mesh, adjusting the position here positions the text on the canvas */}
        <mesh
          ref={ref}
          // dispose={null}
        >
          <textGeometry args={[char, config]} />
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={['#fff', '#30475E']} // Colors need to match the number of stops
              // size={1024} // Size is optional, default = 1024
            />
          </meshBasicMaterial>
        </mesh>
      </group>
    </>
  )
}

//
//
//
const Wrapper = ({ text, text2 }) => {
  const loader = new FontLoader()
  const font = loader.parse(Kanit)
  const textOne = useRef()
  const textTwo = useRef()
  const configFont = useMemo(
    () => ({
      font,
      size: 4.2,
      height: 0.2,
      curveSegments: 8,
      bevelEnabled: true,
      bevelThickness: 0.5,
      bevelSize: 0.05,
      bevelOffset: 0.01,
      bevelSegments: 6,
    }),
    [font]
  )

  return (
    <>
      {/* The Physics gravity determines how much the item bounces apart */}
      {/* increase negative YPosition have closer bounce off  */}
      <Physics gravity={[0, -15, -20]} step={0}>
        {text.split('.').map((char, i) => {
          return (
            <>
              {/* This sets the position AFTER the useBox position  */}
              {/* This Mesh ROTATION sets the Angle of the Text */}
              {/* Melvin Kurian */}
              <mesh
                ref={textOne}
                position={[-30, -0.4, -10]}
                rotation={[0, 0.6, 0]}
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
                ref={textTwo}
                position={[-25, -0.45, -5]}
                rotation={[0, -0.5, 0]}
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
  text: 'MELVIN  KURIAN',
  text2: 'SOFTWARE  ENGINEER',
}

function PhysicsIntro() {
  return (
    <>
      <Wrapper />

      {/* <OrbitControls /> */}
    </>
  )
}
export default PhysicsIntro
