import {
  Suspense,
  useRef,
  useState,
  useCallback,
  useEffect,
  forwardRef,
} from 'react'

import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image,
  useFBO,
  PerspectiveCamera,
  //   Text,
  Plane,
  TorusKnot,
  useAspect,
  Line,
  Html,
} from '@react-three/drei'
import { useFrame, useThree, useLoader } from '@react-three/fiber'
import { Flex, Box, useFlexSize, useReflow } from '@react-three/flex'
import { Color, TextureLoader } from 'three'
import * as THREE from 'three'

import Effects from './Effects'
import Geo from './Geo'
import state from './state'
import Text from './Text'
import { WaterPass } from './WaterPass'
import CubeBackground from '@/components/canvas/CubeBackground'
import CubeBackgroundCopy from '@/components/canvas/CubeBackgroundCopy'
//

//

//

//

//

//
function Layercard({
  depth,
  boxWidth,
  boxHeight,
  text,
  textColor,
  color,
  map,
  textScaleFactor,
}) {
  const ref = useRef()
  const { viewport, size } = useThree()
  const pageLerp = useRef(state.top / size.height)
  useFrame(() => {
    const page = (pageLerp.current = THREE.MathUtils.lerp(
      pageLerp.current,
      state.top / size.height,
      0.15
    ))
    if (depth >= 0)
      ref.current.opacity =
        page < state.threshold * 1.7 ? 1 : 1 - (page - state.threshold * 1.7)
  })
  return (
    <>
      <mesh position={[boxWidth / 2, -boxHeight / 2, depth]}>
        <planeBufferGeometry args={[boxWidth, boxHeight]} />
        <meshBasicMaterial
          ref={ref}
          color={color}
          map={map}
          toneMapped={false}
          transparent
          opacity={1}
        />
      </mesh>
      <Text
        bold
        position={[boxWidth / 2, -boxHeight / 2, depth + 1.5]}
        maxWidth={(viewport.width / 4) * 1}
        anchorX='center'
        anchorY='middle'
        fontSize={0.6 * textScaleFactor}
        lineHeight={1}
        letterSpacing={-0.05}
        color={textColor}
      >
        {text}
      </Text>
    </>
  )
}

//
//
function Page({ text, tag, images, textScaleFactor, left = false }) {
  const textures = useLoader(TextureLoader, images)
  const { viewport } = useThree()
  const boxProps = {
    centerAnchor: true,
    grow: 10,
    marginTop: 1,
    marginLeft: left * 1,
    marginRight: !left * 1,
    width: 'auto',
    height: 'auto',
    minWidth: 3,
    minHeight: 3,
    maxWidth: 6,
    maxHeight: 6,
  }
  return (
    <Box
      dir='column'
      align={left ? 'flex-start' : 'flex-end'}
      justify='flex-start'
      width='100%'
      height='auto'
      minHeight='100%'
    >
      <Box
        dir='row'
        width='100%'
        height='auto'
        justify={left ? 'flex-end' : 'flex-start'}
        margin={0}
        grow={1}
        wrap='wrap'
      >
        {textures.map((texture, index) => (
          <Box key={index} {...boxProps}>
            {(width, height) => (
              <mesh>
                <planeBufferGeometry args={[width, height]} />
                <meshBasicMaterial map={texture} toneMapped={false} />
              </mesh>
            )}
          </Box>
        ))}
      </Box>
      <Box marginLeft={1.5} marginRight={1.5} marginTop={2}>
        <Text
          position={[left ? 1 : -1, 0.5, 1]}
          fontSize={textScaleFactor}
          lineHeight={1}
          letterSpacing={-0.05}
          maxWidth={(viewport.width / 4) * 3}
        >
          {tag}
          <meshBasicMaterial color='#cccccc' toneMapped={false} />
        </Text>
      </Box>
      <Box
        marginLeft={left ? 1.5 : 1}
        marginRight={left ? 1 : 1.5}
        marginBottom={1}
      >
        <Text
          bold
          position-z={0.5}
          textAlign={left ? 'left' : 'right'}
          fontSize={1.5 * textScaleFactor}
          lineHeight={1}
          letterSpacing={-0.05}
          color='black'
          maxWidth={(viewport.width / 4) * 3}
        >
          {text}
        </Text>
      </Box>
    </Box>
  )
}
//

function Content(props) {
  const group = useRef()
  const { viewport, size } = useThree()
  const [bW, bH] = useAspect(1920, 1920, 0.5)
  const texture = useLoader(TextureLoader, state.depthbox[0].image)
  const vec = new THREE.Vector3()
  const pageLerp = useRef(state.top / size.height)
  useFrame(() => {
    const page = (pageLerp.current = THREE.MathUtils.lerp(
      pageLerp.current,
      state.top / size.height,
      0.15
    ))
    const y = page * viewport.height
    const sticky = state.threshold * viewport.height
    group.current.position.lerp(
      vec.set(
        0,
        page < state.threshold ? y : sticky,
        page < state.threshold ? 0 : page * 1.25
      ),
      0.15
    )
  })

  const sizesRef = useRef([])
  const scale = Math.min(1, viewport.width / 16)
  return (
    <group ref={group} {...props}>
      <Flex
        dir='column'
        position={[-viewport.width / 2, viewport.height / 2, 0]}
        size={[viewport.width, viewport.height, 0]}
      >
        {state.content.map((props, index) => (
          <Page
            key={index}
            left={!(index % 2)}
            textScaleFactor={scale}
            {...props}
          />
        ))}
        <Box
          dir='row'
          width='100%'
          height='100%'
          align='center'
          justify='center'
        >
          <Box centerAnchor>
            {/* {state.lines.map((props, index) => (
              <Line key={index} {...props} />
            ))} */}
            <Text
              bold
              position-z={0.5}
              anchorX='center'
              anchorY='middle'
              fontSize={1.5 * scale}
              lineHeight={1}
              letterSpacing={-0.05}
              color='black'
              maxWidth={(viewport.width / 4) * 3}
            >
              {state.depthbox[0].text}
            </Text>
          </Box>
        </Box>
        <Box
          dir='row'
          width='100%'
          height='100%'
          align='center'
          justify='center'
        >
          <Box>
            <Layercard
              {...state.depthbox[0]}
              text={state.depthbox[1].text}
              boxWidth={bW}
              boxHeight={bH}
              map={texture}
              textScaleFactor={scale}
            />
            <Geo position={[bW / 2, -bH / 2, state.depthbox[1].depth]} />
          </Box>
        </Box>
      </Flex>
    </group>
  )
}
//
// function Title() {
//   return (
//     <Box
//       flexDirection='column'
//       alignItems='center'
//       justifyContent='center'
//       width='100%'
//       height='100%'
//     >
//       <Box margin={0.05}>
//         <Text fontSize={0.5} letterSpacing={0.1}>
//           REACT
//         </Text>
//       </Box>
//       <Box margin={0.05}>
//         <Text fontSize={0.5} letterSpacing={0.1}>
//           THREEjs
//         </Text>
//       </Box>
//       <Box margin={0.05}>
//         <Text color='black' anchorX='center' anchorY='middle'>
//           hello world!
//         </Text>
//       </Box>
//     </Box>
//   )
// }
//

// function BackGrid() {
//   const { scene } = useThree()
//   useEffect(() => {
//     scene.fog = new THREE.FogExp2('#fff', 0.05)
//   }, [scene])

//   return (
//     <Plane
//       position={[0, -1, -8]}
//       rotation={[Math.PI / 2, 0, 0]}
//       args={[80, 80, 128, 128]}
//     >
//       <meshStandardMaterial color='black' wireframe />
//     </Plane>
//   )
// }
//
// function RotatingObj() {
//   const ref = useRef(null)
//   useFrame(
//     ({ clock }) =>
//       (ref.current.rotation.x = ref.current.rotation.y = clock.getElapsedTime())
//   )
//   return (
//     <TorusKnot
//       ref={ref}
//       position={[0, 0, 0]}
//       scale={[0.3, 0.3, 0.3]}
//       args={[1, 0.4, 128, 32]}
//     >
//       <meshStandardMaterial />
//     </TorusKnot>
//   )
// }
//

// function Images(props) {
//   const { width, height } = useThree((state) => state.viewport)
//   const data = useScroll()
//   const group = useRef()
//   useFrame(() => {
//     group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
//     group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
//     group.current.children[2].material.zoom =
//       1 + data.range(1.15 / 3, 1 / 3) / 3
//     group.current.children[3].material.zoom =
//       1 + data.range(1.15 / 3, 1 / 3) / 2
//     group.current.children[4].material.zoom =
//       1 + data.range(1.25 / 3, 1 / 3) / 1
//     group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3
//     group.current.children[5].material.grayscale =
//       1 - data.range(1.6 / 3, 1 / 3)
//     group.current.children[6].material.zoom =
//       1 + (1 - data.range(2 / 3, 1 / 3)) / 3
//   })
//   return (
//     <group ref={group} {...props}>
//       <Image
//         position={[-8, 2, 2]}
//         scale={[4, 5, 0.01]}
//         url='/img1.jpg'
//         alt={''}
//       />
//       <Image position={[2, 0, 1]} scale={3} url='/img6.jpg' alt={''} />
//       <Image
//         position={[-2.3, -height, 2]}
//         scale={[1, 3, 1]}
//         url='/trip2.jpg'
//         alt={''}
//       />
//       <Image
//         position={[-0.6, -height, 3]}
//         scale={[1, 2, 1]}
//         url='/img8.jpg'
//         alt={''}
//       />
//       <Image
//         position={[0.75, -height, 3.5]}
//         scale={1.5}
//         url='/trip4.jpg'
//         alt={''}
//       />
//       <Image
//         position={[0, -height * 1.5, 2.5]}
//         scale={[1.5, 3, 1]}
//         url='/img3.jpg'
//         alt={''}
//       />
//       <Image
//         position={[0, -height * 2 - height / 4, 0]}
//         scale={[width, height / 2, 1]}
//         url='/img7.jpg'
//         alt={''}
//       />
//     </group>
//   )
// }

function ScrollAbout() {
  return (
    <>
      <ScrollControls damping={6} pages={5}>
        <Scroll>
          {/* <Images /> */}
          {/* <BackGrid /> */}
          {/* <Layercard /> */}
          <CubeBackground position={[0, 0, -30]} />
          <Content position={[0, -20, 0]} />
        </Scroll>
        {/* <Scroll>
          <Images />
          <BackGrid />
          <Layercard />
          <Content></Content>
          <CubeBackgroundCopy position={[0, -50, 0]} />
        </Scroll> */}

        {/*  */}
        {/* <Page onChangePages={setPages} /> */}
        {/* <Scroll html>
          <div className='scrollArea' ref={scrollArea} onScroll={onScroll}>
            <div style={{ height: `${pages * 100}vh` }} />
          </div>
        </Scroll> */}
        {/* <Scroll html>
          <h1
            style={{
              position: 'absolute',
              top: '60vh',
              left: '0.5em',
              backgroundColor: 'white',
            }}
          >
            to
          </h1>
          <h1
            style={{
              position: 'absolute',
              top: '120vh',
              left: '60vw',
              backgroundColor: 'white',
            }}
          >
            be
          </h1>
          <h1
            style={{
              position: 'absolute',
              top: '198.5vh',
              left: '0.5vw',
              fontSize: '5vw',
              backgroundColor: 'white',
            }}
          >
            home
          </h1>
        </Scroll> */}
        {/* <Effects /> */}
      </ScrollControls>
    </>
  )
}

export default ScrollAbout
