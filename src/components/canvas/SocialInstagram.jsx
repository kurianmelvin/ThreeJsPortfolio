import React, { useRef, useState } from 'react'

import { useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three'

import './ImageFadeMaterial'

//

//

function SocialInstagram() {
  const instagram = useRef(null)
  //

  const insta = useLoader(TextureLoader, './instagram1.png')
  const insta2 = useLoader(TextureLoader, './instagram2.png')
  const trans = useLoader(TextureLoader, './st1.jpg')
  //
  const [hovered, setHover] = useState(false)
  //
  useFrame(() => {
    instagram.current.dispFactor = THREE.MathUtils.lerp(
      instagram.current.dispFactor,
      !!hovered,
      0.1
    ) /* prettier-ignore */
    // secondImage.current.dispFactor = THREE.MathUtils.lerp(secondImage.current.dispFactor,!!hovered,0.1) /* prettier-ignore */
    // thirdImage.current.dispFactor = THREE.MathUtils.lerp(thirdImage.current.dispFactor,!!hovered,0.1) /* prettier-ignore */
    // fourthImage.current.dispFactor = THREE.MathUtils.lerp(fourthImage.current.dispFactor,!!hovered,0.1) /* prettier-ignore */
  })
  return (
    <>
      <group position={[0, 0, 6]}>
        {/* top left first  */}
        <mesh
          position={[-1.1, 1.1, 0]}
          onPointerMove={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
        >
          <planeBufferGeometry />
          <imageFadeMaterial
            ref={instagram}
            tex={insta2}
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
