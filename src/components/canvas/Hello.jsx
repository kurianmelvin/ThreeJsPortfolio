import React, { useEffect, useState, useRef } from 'react'

import { a, useSpring } from '@react-spring/three'
import {
  useGLTF,
  useTexture,
  useAnimations,
  Text,
  Text3D,
  useCursor,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Hello(props) {
  const [hovered, setHovered] = useState(false)
  const image = useRef()
  //   const { color, scale } = useSpring({
  //     scale: hovered ? [10.15, 10.15, 10] : [1, 1, 1],
  //     color: hovered ? 'hotpink' : 'aquamarine',
  //   })
  // Change cursor on hover-state
  //   useEffect(
  //     () => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'),
  //     [hovered]
  //   )
  useCursor(hovered)

  useFrame(() => {
    // inside image zoom and scale
    // image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2 /* prettier-ignore */
    // image.current.material.zoom = 1 /* prettier-ignore */
    //inside image scale
    image.current.scale.x = THREE.MathUtils.lerp(image.current.scale.x, (hovered ? 3 : 1),0.005) /* prettier-ignore */
    image.current.scale.y = THREE.MathUtils.lerp(image.current.scale.y, (hovered ? 1.5 :1),0.005) /* prettier-ignore */
    image.current.scale.z= THREE.MathUtils.lerp(image.current.scale.y, (hovered ? 1.5 :1),0.005) /* prettier-ignore */
    //the border and hover color of the frames

    // frame.current.scale.x = THREE.MathUtils.lerp(frame.current.scale.x, 0.85 * (hovered ? 2.85 : 1),0.01) /* prettier-ignore */
    // frame.current.scale.y = THREE.MathUtils.lerp(frame.current.scale.y,0.905 * (hovered ? 2.905 : 1),0.01) /* prettier-ignore */
    // frame.current.material.color.lerp(c.set(hovered ? '#2C061F' : '#F7F7F7'),0.01) /* prettier-ignore */
  })
  return (
    <group {...props} dispose={null}>
      <Text3D
        ref={image}
        font={'/kanit.json'}
        curveSegments={14}
        bevelEnabled={true}
        bevelThickness={0.02}
        bevelSize={0.05}
        bevelOffset={0}
        bevelSegments={8}
        // color={hovered ? 'hotpink' : 'aquamarine'}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshNormalMaterial />
        Hobbies
      </Text3D>
      {/* </a.mesh> */}
    </group>
  )
}
//  <Text3D
//           font={'/kanit.json'}
//           bevelEnabled
//           bevelOffset={0.001}
//           bevelThickness={0.01}
//           bevelSize={0.05}
//           scale={5}
//           position={[-30, 10, -75]}
//         >
//           I’m a software engineer from The United States.
//           <meshStandardMaterial>
//             <GradientTexture
//               stops={[0, 1]} // As many stops as you want
//               colors={['#fff', '#30475E']} // Colors need to match the number of stops
//               // size={1024} // Size is optional, default = 1024
//             />
//           </meshStandardMaterial>
//         </Text3D>

/* <a.mesh
        position={[0, 1, 1]}
        scale={scale}
        color={'black'}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}

        // scale={[10, 10, 10]}
      > */

/* <circleGeometry args={[1, 64]} />
        <a.meshStandardMaterial color={color} /> */
