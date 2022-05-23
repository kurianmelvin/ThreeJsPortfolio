import React, { useRef, useState } from 'react'

import { useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three'
import './ImageFadeMaterial'

function SocialGithub() {
  const github = useRef(null)

  const git = useLoader(TextureLoader, './github.png')

  const git2 = useLoader(TextureLoader, './github2.png')
  const trans = useLoader(TextureLoader, './st10.jpg')
  //
  const [hovered, setHover] = useState(false)
  //
  useFrame(() => {
    github.current.dispFactor = THREE.MathUtils.lerp(github.current.dispFactor,!!hovered,0.1) /* prettier-ignore */
  })
  //
  return (
    <>
      <group position={[0, 0, 6]}>
        {/* bottom right Fourth */}
        <mesh
          position={[0, 0, 0]}
          onPointerMove={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
        >
          <planeBufferGeometry />
          <imageFadeMaterial
            ref={github}
            tex={git}
            tex-encoding={THREE.sRGBEncoding}
            tex2={git2}
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

export default SocialGithub
