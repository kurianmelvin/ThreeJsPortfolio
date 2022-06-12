import React, { useRef, useState, useEffect } from 'react'

// import { useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three'

import './ImageFadeMaterial'

//

//

function SocialInstagram(props) {
  const instagram = useRef(null)
  //

  const insta = useLoader(TextureLoader, './instagram1.png')
  // const insta2 = useLoader(TextureLoader, './instagram2.png')
  const trans = useLoader(TextureLoader, './st10.jpg')
  //
  const [hovered, setHover] = useState(false)
  //
  //
  const handleNavigation = () => {
    window.location.href = 'https://www.instagram.com/melvink94'
  }

  useEffect(() => {
    window.addEventListener('onClick', handleNavigation)
    return () => {
      window.removeEventListener('onClick', handleNavigation)
    }
  }, [])
  //
  //
  useFrame(() => {
    instagram.current.dispFactor = THREE.MathUtils.lerp(
      instagram.current.dispFactor,
      !!hovered,
      0.1
    )
  })
  return (
    <>
      <group {...props}>
        {/* top left first  */}
        <mesh
          onPointerMove={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
          //
          onClick={(e) => (e.stopPropagation(),handleNavigation())} /* prettier-ignore */
          //
        >
          <planeBufferGeometry />
          <imageFadeMaterial
            ref={instagram}
            tex={insta}
            tex-encoding={THREE.sRGBEncoding}
            tex2={insta}
            tex2-encoding={THREE.sRGBEncoding}
            disp={trans}
            disp-encoding={THREE.sRGBEncoding}
            toneMapped={true}
          />
        </mesh>
      </group>
    </>
  )
}

export default SocialInstagram
