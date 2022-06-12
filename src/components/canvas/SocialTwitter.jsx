import React, { useRef, useState, useEffect } from 'react'

// import { useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three'

import './ImageFadeMaterial'

function SocialTwitter(props) {
  const twitter = useRef(null)
  //
  // const twitt = useLoader(TextureLoader, './twitter.png')
  const twitt2 = useLoader(TextureLoader, './twitter2.png')
  const trans = useLoader(TextureLoader, './st10.jpg')
  //
  const [hovered, setHover] = useState(false)
  //
  const handleNavigation = () => {
    window.location.href = 'https://twitter.com/KurianMelvin/'
  }

  useEffect(() => {
    window.addEventListener('onClick', handleNavigation)
    return () => {
      window.removeEventListener('onClick', handleNavigation)
    }
  }, [])
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
      <group position={[0, 0, 0]} {...props}>
        {/* top right second */}
        <mesh
          // position={[0, 0, 0]}
          onPointerMove={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
          onClick={(e) => (e.stopPropagation(), handleNavigation())}
        >
          <planeBufferGeometry />
          <imageFadeMaterial
            ref={twitter}
            tex={twitt2}
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
