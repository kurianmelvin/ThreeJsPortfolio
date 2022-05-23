import React, { useRef, useState } from 'react'

import { useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three'

import './ImageFadeMaterial'

function SocialTwitter() {
  const twitter = useRef(null)
  //
  const twitt = useLoader(TextureLoader, './twitter.png')
  const twitt2 = useLoader(TextureLoader, './twitter2.png')
  const trans = useLoader(TextureLoader, './st10.jpg')
  //
  const [hovered, setHover] = useState(false)
  //
  useFrame(() => {
    twitter.current.dispFactor = THREE.MathUtils.lerp(
      twitter.current.dispFactor,
      !!hovered,
      0.1
    ) /* prettier-ignore */
  })
  return (
    <>
      <group position={[0, 0, 6]}>
        {/* top right second */}
        <mesh
          position={[0, 1.1, 0]}
          onPointerMove={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
        >
          <planeBufferGeometry />
          <imageFadeMaterial
            ref={twitter}
            tex={twitt}
            tex-encoding={THREE.sRGBEncoding}
            tex2={twitt2}
            tex2-encoding={THREE.sRGBEncoding}
            disp={trans}
            disp-encoding={THREE.sRGBEncoding}
            toneMapped={false}
          />
        </mesh>
      </group>
    </>
  )
}

export default SocialTwitter
