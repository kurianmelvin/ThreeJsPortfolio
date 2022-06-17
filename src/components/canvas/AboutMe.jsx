import { useState, useEffect } from 'react'

import { Text } from '@react-three/drei'

function AboutMe() {
  return (
    <>
      <group>
        <AboutStatementImage
          scale={0.85}
          position={[20, 20, -70]}
          rotation={[0, -0.01, 0]}
        />
        <AboutStatement
          TextData='I’m Melvin Kurian'
          TextScale={[50, 50, 1]}
          TextPosition={[-2, 5, 40]}
        />
        <AboutStatement
          TextData=' A Software Engineer from The United States.'
          TextScale={[40, 40, 1]}
          TextPosition={[-2, 0, 35]}
        />
        <AboutStatement
          TextData=' I enjoy creating websites that provide an interactive and immersive user experience,'
          TextScale={[40, 40, 1]}
          TextPosition={[-2, -5, 30]}
        />

        <AboutStatement
          TextData='What you see, is just a small representation
            of what is possible.'
          TextScale={[40, 40, 1]}
          TextPosition={[-2, -10, 25]}
        />
      </group>
      <group rotation={[0, 0.1, 0]} position={[1, 1, 0]}>
        <AboutStatement
          TextData='I am Currently seeking new positions.'
          TextScale={[40, 40, 1]}
          TextPosition={[-5, -110, 0]}
        />
        <AboutStatement
          TextData='If interested contact me via LinkedIn'
          TextScale={[40, 40, 1]}
          TextPosition={[-20, -119, 72]}
        />
      </group>
    </>
  )
}

function AboutStatement({ TextScale, TextPosition, TextData }) {
  const [hovered, setHovered] = useState(false)
  // Change cursor on hover-state
  useEffect(
    () => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'),
    [hovered]
  )
  return (
    //
    <>
      <mesh
        position={[20, 15, -70]}
        rotation={[0, -0.05, -0.01]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Text
          color={hovered ? '#346751' : '#346751'}
          scale={TextScale}
          position={TextPosition}
        >
          {TextData}
        </Text>
      </mesh>
    </>

    //
  )
}

function AboutStatementImage(props) {
  return (
    <>
      <mesh {...props}>
        <planeBufferGeometry args={[250, 70]} />
        <meshLambertMaterial />
      </mesh>
    </>
  )
}

export default AboutMe
