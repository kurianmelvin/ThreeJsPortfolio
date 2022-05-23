import React, { useRef, useState } from 'react'

import { useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three'

import './ImageFadeMaterial'

function SocialLinkedin() {
  const linkedin = useRef(null)

  //
  const linked = useLoader(TextureLoader, './linkedin.png')
  const linked2 = useLoader(TextureLoader, './linkedin2.png')
  const trans = useLoader(TextureLoader, './st10.jpg')
  //
  const [hovered, setHover] = useState(false)
  //
  useFrame(() => {
    linkedin.current.dispFactor = THREE.MathUtils.lerp(linkedin.current.dispFactor,!!hovered,0.1) /* prettier-ignore */
  })
  return (
    <>
      <group position={[0, 0, 6]}>
        {/* bottom left Third  */}
        <mesh
          position={[-1.1, 0, 0]}
          onPointerMove={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
        >
          <planeBufferGeometry />
          <imageFadeMaterial
            ref={linkedin}
            tex={linked}
            tex-encoding={THREE.sRGBEncoding}
            tex2={linked2}
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

export default SocialLinkedin
