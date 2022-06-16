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
import * as THREE from 'three'
import { TextureLoader } from 'three'

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

  const insta = useLoader(TextureLoader, './3d17.jpg')
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
      {/* <spotLight /> */}
      <mesh
        position={[20, 20, -70]}
        rotation={[0, -0.1, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* <circleBufferGeometry args={[30]} /> */}
        {/* <boxBufferGeometry args={[60, 20, 5]} /> */}
        <planeBufferGeometry args={[150, 500]} />

        <meshStandardMaterial
          map={insta}
          roughness={0.65}
          // metalness={0.91}
          // fog
          // emissive={'#D89216'}
        />
        <Text
          font={
            'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
          }
          color={hovered ? '#346751' : '#346751'}
          // scale={hovered ? [100, 100, 100] : [50, 50, 1]}
          scale={[50, 50, 1]}
          position={[-2, 0, 20]}
        >
          I’m Melvin Kurian
        </Text>
        <Text
          font={
            'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
          }
          color={hovered ? '#346751' : '#346751'}
          scale={hovered ? [40, 40, 40] : [0, 0, 0]}
          position={[-2, -5, 20]}
        >
          I’m a software Engineer from The United States.
        </Text>
      </mesh>

      {/* <group position={[-100, 15, -81]}>
        <Image scale={[100, 60, 0.1]} url='/3d14.jpg' alt={''} />
        <Text
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          font={
            'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
          }
          color={hovered ? 'hotpink' : 'black'}
          scale={hovered ? [100, 100, 100] : [20, 20, 1]}
          position={[0, 15, 20]}
        >
          I’m Melvin Kurian
        </Text>
        <Text
          font={
            'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
          }
          color={Textcolor}
          scale={30}
          position={[0, 10, 15]}
        >
          I’m a software Engineer from The United States.
        </Text>
        <Text
          font={
            'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
          }
          color={Textcolor}
          scale={[20, 20, 1]}
          position={[0, -4.5, 1]}
        >
          I enjoy creating high-end interactive experiences and products.
        </Text>
        <Text
          font={
            'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
          }
          color={Textcolor}
          scale={[20, 20, 1]}
          position={[0, -6.5, 1]}
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
          position={[0, -8.5, 1]}
        >
          So my future wishes are to be in a role related to that, as a Web or
          Mobile Developer.
        </Text>
      </group> */}
      {/* ////////////////// */}
      {/* <group position={[80, 15, -50]}>
        <Image scale={[100, 60, 0.1]} url='/3d26.jpg' alt={''} />
        <Text
          font={
            'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
          }
          color={Textcolor}
          scale={30}
          position={[0, 10, 15]}
        >
          I’m a software Engineer from The United States.
        </Text>
        <Text
          font={
            'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
          }
          color={Textcolor}
          scale={[20, 20, 1]}
          position={[0, -4.5, 1]}
        >
          I enjoy creating high-end interactive experiences and products.
        </Text>
        <Text
          font={
            'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
          }
          color={Textcolor}
          scale={[20, 20, 1]}
          position={[0, -6.5, 1]}
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
          position={[0, -8.5, 1]}
        >
          So my future wishes are to be in a role related to that, as a Web or
          Mobile Developer.
        </Text>
      </group> */}
    </>

    //
  )
}
export default AboutMe
