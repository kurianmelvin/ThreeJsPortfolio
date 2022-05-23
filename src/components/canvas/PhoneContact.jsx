import React, { useRef, useState } from 'react'

import { useTexture, useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import './ImageFadeMaterial'

function PhoneContact({ ...props }) {
  const firstImage = useRef(null)
  const secondImage = useRef(null)
  const thirdImage = useRef(null)
  const fourthImage = useRef(null)

  const [
    dispTexture,
    instagram,
    instagramTwo,
    twitter,
    twitterTwo,
    github,
    githubTwo,
    linkedin,
    linkedinTwo,
  ] = useTexture([
    'bg2.jpg',
    'instagram.png',
    'instagram3.png',
    'twitter2.png',
    'twitter.png',
    'github.png',
    'github2.png',
    'linkedin4.png',
    'linkedin.png',
  ])
  const [hovered, setHover] = useState(false)
  useCursor(hovered)
  useFrame((state) => {
    firstImage.current.dispFactor = THREE.MathUtils.lerp(firstImage.current.dispFactor,!hovered,0.1) /* prettier-ignore */
    secondImage.current.dispFactor = THREE.MathUtils.lerp(secondImage.current.dispFactor,!hovered,0.1) /* prettier-ignore */
    thirdImage.current.dispFactor = THREE.MathUtils.lerp(thirdImage.current.dispFactor,!hovered,0.1) /* prettier-ignore */
    /* prettier-ignore */
    fourthImage.current.dispFactor = THREE.MathUtils.lerp(fourthImage.current.dispFactor,!hovered,0.1) /* prettier-ignore */
  })
  return (
    <>
      <group
        {...props}
        position={[0, 0, 6]}
        //   dispose={null}
      >
        {/* top left first  */}
        <mesh
          position={[-1.1, 1.1, 0]}
          onPointerMove={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
          //   dispose={null}
        >
          <planeBufferGeometry />
          <imageFadeMaterial
            ref={firstImage}
            tex={instagram}
            tex-encoding={THREE.sRGBEncoding}
            tex2={instagramTwo}
            tex2-encoding={THREE.sRGBEncoding}
            disp={dispTexture}
            disp-encoding={THREE.sRGBEncoding}
            toneMapped={false}
          />
        </mesh>

        {/* top right second */}
        <mesh
          position={[0, 1.1, 0]}
          onPointerMove={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
        >
          <planeBufferGeometry />
          <imageFadeMaterial
            ref={secondImage}
            tex={twitter}
            tex-encoding={THREE.sRGBEncoding}
            tex2={twitterTwo}
            tex2-encoding={THREE.sRGBEncoding}
            disp={dispTexture}
            disp-encoding={THREE.sRGBEncoding}
            toneMapped={false}
          />
        </mesh>
        {/* bottom left Third  */}
        <mesh
          position={[-1.1, 0, 0]}
          onPointerMove={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
          //   dispose={null}
        >
          <planeBufferGeometry />
          <imageFadeMaterial
            ref={thirdImage}
            tex={github}
            tex-encoding={THREE.sRGBEncoding}
            tex2={githubTwo}
            tex2-encoding={THREE.sRGBEncoding}
            disp={dispTexture}
            disp-encoding={THREE.sRGBEncoding}
            toneMapped={false}
          />
        </mesh>
        {/* bottom right Fourth */}
        <mesh
          position={[0, 0, 0]}
          onPointerMove={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
          //   dispose={null}
        >
          <planeBufferGeometry />
          <imageFadeMaterial
            ref={fourthImage}
            tex={linkedin}
            tex-encoding={THREE.sRGBEncoding}
            tex2={linkedinTwo}
            tex2-encoding={THREE.sRGBEncoding}
            disp={dispTexture}
            disp-encoding={THREE.sRGBEncoding}
            toneMapped={false}
          />
        </mesh>
      </group>
    </>
  )
}

export default PhoneContact
