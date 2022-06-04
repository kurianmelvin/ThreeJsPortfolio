import React, { useRef, useState, useEffect } from 'react'

// import { useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three'
import './ImageFadeMaterial'

function SocialGithub(props) {
  const github = useRef(null)

  const git = useLoader(TextureLoader, './github.png')

  // const git2 = useLoader(TextureLoader, './github2.png')
  // const trans = useLoader(TextureLoader, './st10.jpg')
  //
  const [hovered, setHover] = useState(false)
  //
  const handleNavigation = () => {
    window.location.href = 'https://github.com/kurianmelvin'
  }

  useEffect(() => {
    window.addEventListener('onClick', handleNavigation)
    return () => {
      window.removeEventListener('onClick', handleNavigation)
    }
  }, [])

  //
  useFrame(() => {
    github.current.dispFactor = THREE.MathUtils.lerp(github.current.dispFactor,!!hovered,0.1) /* prettier-ignore */
  })
  //
  return (
    <>
      <group position={[0, 0, 0]} {...props}>
        {/* bottom right Fourth */}
        <mesh
          // position={[0, 0, 0]}
          onPointerMove={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
          onClick={(e) => (e.stopPropagation(), handleNavigation())}
        >
          <planeBufferGeometry />
          <imageFadeMaterial
            ref={github}
            tex={git}
            tex-encoding={THREE.sRGBEncoding}
            tex2={git}
            tex2-encoding={THREE.sRGBEncoding}
            disp={git}
            disp-encoding={THREE.sRGBEncoding}
            toneMapped={false}
          />
        </mesh>
      </group>
    </>
  )
}

export default SocialGithub
