import { useRef, useState, useEffect } from 'react'

import {
  useAspect,
  Image,
  useScroll,
  Text,
  Text3D,
  GradientTexture,
} from '@react-three/drei'
import { useFrame, useThree, useLoader } from '@react-three/fiber'
import { Flex, Box } from '@react-three/flex'
import { TextureLoader } from 'three'
import * as THREE from 'three'

import aboutMeData from '@/components/canvas/aboutMeData'
// import Text from '@/components/canvas/Text'

//
//
function AboutMe() {
  return (
    <>
      {/* <Images /> */}
      {/* <AboutStatement Textcolor={'black'} /> */}
      <AboutStatement Textcolor={'white'} />
    </>
  )
}

function AboutStatement({ Textcolor }) {
  const [hovered, setHovered] = useState(false)
  //   const [index, setIndex] = useState(4)
  // Animate the selection halo
  // const { color, scale } = useSpring({
  //   scale: hovered ? [10.15, 10.15, 10] : [1, 1, 1],
  //   color: hovered ? 'hotpink' : 'aquamarine',
  // })
  // Change cursor on hover-state
  useEffect(
    () => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'),
    [hovered]
  )
  return (
    //
    <>
      <group position={[0, 2, -85]}>
        <Image scale={[100, 60, 0.1]} url='/3d2.jpg' alt={''} />
        <Text
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          font={
            'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
          }
          color={hovered ? 'hotpink' : 'aquamarine'}
          scale={hovered ? [100, 100, 100] : [20, 20, 1]}
          position={[0, 2, 3]}
        >
          I’m Melvin Kurian
        </Text>
        <Text
          font={
            'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
          }
          color={Textcolor}
          scale={[20, 20, 1]}
          position={[0, -2, 0]}
        >
          I’m a software Engineer from The United States.
        </Text>
        <Text
          font={
            'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
          }
          color={Textcolor}
          scale={[20, 20, 1]}
          position={[0, -4.5, 0]}
        >
          I enjoy creating high-end interactive experiences and products.
        </Text>
        <Text
          font={
            'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
          }
          color={Textcolor}
          scale={[20, 20, 1]}
          position={[0, -6.5, 0]}
        >
          For the first time we finally have the ability to change how we surf
          the web.
        </Text>
        <Text
          font={
            'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
          }
          color={Textcolor}
          scale={[20, 20, 1]}
          position={[0, -8.5, 0]}
        >
          So my future wishes are to be in a role related to that, as a Web or
          Mobile Developer.
        </Text>
      </group>
    </>

    //
  )
}
export default AboutMe
