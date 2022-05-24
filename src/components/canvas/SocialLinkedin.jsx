import React, { useRef, useState, useEffect } from 'react'

// import { useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three'

import './ImageFadeMaterial'

function SocialLinkedin(props) {
  const linkedin = useRef(null)

  //
  const linked = useLoader(TextureLoader, './linkedin.png')
  const linked2 = useLoader(TextureLoader, './linkedin2.png')
  const trans = useLoader(TextureLoader, './st10.jpg')
  //
  const [hovered, setHover] = useState(false)
  //
  const handleNavigation = () => {
    window.location.href = 'https://www.linkedin.com/in/kurianmelvin/'
  }

  useEffect(() => {
    window.addEventListener('onClick', handleNavigation)
    return () => {
      window.removeEventListener('onClick', handleNavigation)
    }
  }, [])

  //
  useFrame(() => {
    linkedin.current.dispFactor = THREE.MathUtils.lerp(linkedin.current.dispFactor,!!hovered,0.1) /* prettier-ignore */
  })
  return (
    <>
      <group position={[0, 0, 0]} {...props}>
        {/* bottom left Third  */}
        <mesh
          // position={[-1.1, 0, 0]}
          onPointerMove={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
          onClick={(e) => (e.stopPropagation(), handleNavigation())}
        >
          <planeBufferGeometry />
          <imageFadeMaterial
            ref={linkedin}
            tex={linked2}
            tex-encoding={THREE.sRGBEncoding}
            tex2={linked}
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
