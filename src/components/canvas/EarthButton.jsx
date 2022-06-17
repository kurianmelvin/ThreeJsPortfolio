import React, { useEffect, useRef, useState } from 'react'

import { useTexture, Text, Text3D, useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import useStore from '@/helpers/store'

function EarthButton(props) {
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false)
  const buttonText = useRef()
  const refEarth = useRef(null)
  const router = useStore((state) => state.router)
  //texture import
  const [base, bump, specular] = useTexture([
    '8081_earthmap2k.jpg',
    '8081_earthbump2k.jpg',
    'earth-specular.png',
  ])

  //
  // const handleNavigation = () => {
  //   window.location.href = 'https://kurianmelvin.com/'
  // }

  // useEffect(() => {
  //   window.addEventListener('onClick', handleNavigation)
  //   return () => {
  //     window.removeEventListener('onClick', handleNavigation)
  //   }
  // }, [])

  //
  // useEffect(
  //   () => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'),
  //   [hovered]
  // )
  useCursor(hovered)
  useFrame((state, delta) => {
    refEarth.current ? (refEarth.current.rotation.y += 0.002) : null
  })
  useFrame(() => {
    // h? T : F
    buttonText.current.scale.x = THREE.MathUtils.lerp(buttonText.current.scale.x, (hovered ? 5 : 0),0.05) /* prettier-ignore */
    buttonText.current.scale.y = THREE.MathUtils.lerp(buttonText.current.scale.y, (hovered ? 5 :0),0.05) /* prettier-ignore */
    buttonText.current.scale.z= THREE.MathUtils.lerp(buttonText.current.scale.z, (hovered ? 5 :0),0.05) /* prettier-ignore */
    //position
    buttonText.current.position.x= THREE.MathUtils.lerp(buttonText.current.position.x, (hovered ? -15 :0),0.02) /* prettier-ignore */
    buttonText.current.position.y= THREE.MathUtils.lerp(buttonText.current.position.y, (hovered ? 10.4 :0),0.4) /* prettier-ignore */
    buttonText.current.position.z= THREE.MathUtils.lerp(buttonText.current.position.z, (hovered ? 5 :0),0.005) /* prettier-ignore */
  })
  return (
    <>
      <group
        {...props}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={(e) => setHovered(false)}
        onClick={() => {
          router.push(`/imagegallery`)
        }}
      >
        <mesh
          ref={refEarth}
          // rotation={[0, 0, 0]}
        >
          <sphereGeometry args={[10, 100, 100]} />
          <meshPhongMaterial
            map={base}
            specularMap={specular}
            bumpMap={bump}
            bumpScale={0.3}
          />
        </mesh>

        <group>
          <Text3D
            ref={buttonText}
            font={'/kanit.json'}
            curveSegments={14}
            bevelEnabled={true}
            bevelThickness={0.02}
            bevelSize={0.05}
            bevelOffset={-0.001}
            bevelSegments={8}
            rotation={[0, 0.5, 0]}
          >
            <meshStandardMaterial
              attach='material'
              color={'#F77E21'}
              // color={'#0AA1DD'}
              roughness={0.1}
              metalness={0.1}
              flatShading={true}
            />
            HOBBIES
          </Text3D>
        </group>
      </group>
      {/* </group> */}
    </>
  )
}

export default EarthButton
