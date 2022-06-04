// import {
//   Suspense,
//   useRef,
//   useState,
//   useCallback,
//   useEffect,
//   forwardRef,
// } from 'react'

// import {
//   Preload,
//   ScrollControls,
//   Scroll,
//   useScroll,
//   Image,
//   useFBO,
//   PerspectiveCamera,
//   //   Text,
//   Plane,
//   TorusKnot,
//   useAspect,
//   Line,
//   Html,
//   OrbitControls,
// } from '@react-three/drei'
// import { useFrame, useThree, useLoader } from '@react-three/fiber'
// import { Flex, Box, useFlexSize, useReflow } from '@react-three/flex'
// import { Color, TextureLoader } from 'three'
// import * as THREE from 'three'

// import aboutMeData from './aboutMeData'
// import Text from './Text'

// //

// //

// //

// //
// function Layercard({
//   depth,
//   boxWidth,
//   boxHeight,
//   text,
//   textColor,
//   color,
//   map,
//   textScaleFactor,
// }) {
//   const ref = useRef()
//   const { viewport, size } = useThree()
//   const pageLerp = useRef(aboutMeData.top / size.height)
//   useFrame(() => {
//     const page = (pageLerp.current = THREE.MathUtils.lerp(
//       pageLerp.current,
//       aboutMeData.top / size.height,
//       0.15
//     ))
//     if (depth >= 0)
//       ref.current.opacity =
//         page < aboutMeData.threshold * 1.7
//           ? 1
//           : 1 - (page - aboutMeData.threshold * 1.7)
//   })
//   return (
//     <>
//       <mesh position={[boxWidth / 2, -boxHeight / 2, depth]}>
//         <planeBufferGeometry args={[boxWidth, boxHeight]} />
//         <meshBasicMaterial
//           ref={ref}
//           color={color}
//           map={map}
//           toneMapped={false}
//           transparent
//           opacity={1}
//         />
//       </mesh>
//       <Text
//         bold
//         position={[boxWidth / 2, -boxHeight / 2, depth + 1.5]}
//         maxWidth={(viewport.width / 4) * 1}
//         anchorX='center'
//         anchorY='middle'
//         fontSize={0.6 * textScaleFactor}
//         lineHeight={1}
//         letterSpacing={-0.05}
//         color={textColor}
//       >
//         {text}
//       </Text>
//     </>
//   )
// }

// //
// //
// function Page({ text, tag, images, textScaleFactor, left = false }) {
//   const textures = useLoader(TextureLoader, images)
//   const { viewport } = useThree()
//   const boxProps = {
//     centerAnchor: true,
//     grow: 5,
//     marginTop: 1,
//     marginLeft: left * 1,
//     marginRight: !left * 1,
//     width: 'auto',
//     height: 'auto',
//     minWidth: 3,
//     minHeight: 3,
//     maxWidth: 6,
//     maxHeight: 6,
//   }
//   return (
//     <Box
//       dir='column'
//       align={left ? 'flex-start' : 'flex-end'}
//       justify='flex-start'
//       width='100%'
//       height='auto'
//       minHeight='100%'
//     >
//       <Box
//         dir='row'
//         width='100%'
//         height='auto'
//         justify={left ? 'flex-end' : 'flex-start'}
//         margin={0}
//         grow={1}
//         wrap='wrap'
//       >
//         {textures.map((texture, index) => (
//           <Box key={index} {...boxProps}>
//             {(width, height) => (
//               <mesh>
//                 <planeBufferGeometry args={[width, height]} />
//                 <meshBasicMaterial map={texture} toneMapped={false} />
//               </mesh>
//             )}
//           </Box>
//         ))}
//       </Box>
//       <Box marginLeft={1.5} marginRight={1.5} marginTop={2}>
//         <Text
//           // the green tag text
//           position={[left ? 1 : -1, 2, 1]}
//           fontSize={textScaleFactor}
//           lineHeight={1}
//           letterSpacing={-0.05}
//           maxWidth={(viewport.width / 4) * 3}
//         >
//           {tag}
//           <meshBasicMaterial color='green' toneMapped={false} />
//         </Text>
//       </Box>
//       <Box
//         marginLeft={left ? 1.5 : 1}
//         marginRight={left ? 1 : 1.5}
//         marginBottom={1}
//       >
//         <Text
//           bold
//           position-z={0.5}
//           textAlign={left ? 'left' : 'right'}
//           fontSize={1.5 * textScaleFactor}
//           lineHeight={1}
//           letterSpacing={-0.05}
//           color='purple'
//           maxWidth={(viewport.width / 4) * 3}
//         >
//           {text}
//         </Text>
//       </Box>
//     </Box>
//   )
// }
// //

// function Content(props) {
//   const group = useRef()
//   const { viewport, size } = useThree()
//   const [bW, bH] = useAspect(1920, 1920, 0.5)
//   const texture = useLoader(TextureLoader, aboutMeData.depthbox[0].image)
//   const vec = new THREE.Vector3()
//   const pageLerp = useRef(aboutMeData.top / size.height)
//   useFrame(() => {
//     const page = (pageLerp.current = THREE.MathUtils.lerp(
//       pageLerp.current,
//       aboutMeData.top / size.height,
//       0.15
//     ))
//     const y = page * viewport.height
//     const sticky = aboutMeData.threshold * viewport.height
//     group.current.position.lerp(
//       vec.set(
//         0,
//         page < aboutMeData.threshold ? y : sticky,
//         page < aboutMeData.threshold ? 0 : page * 1.25
//       ),
//       0.15
//     )
//   })

//   const sizesRef = useRef([])
//   const scale = Math.min(0.9, viewport.width / 2)
//   return (
//     <group ref={group} {...props}>
//       <Flex
//         dir='column'
//         position={[-viewport.width / 2, viewport.height / 2, 0]}
//         size={[viewport.width, viewport.height, 0]}
//       >
//         {aboutMeData.content.map((props, index) => (
//           <Page
//             key={index}
//             left={!(index % 2)}
//             textScaleFactor={scale}
//             {...props}
//           />
//         ))}
//         <Box
//           dir='row'
//           width='100%'
//           height='100%'
//           align='center'
//           justify='center'
//         >
//           <Box centerAnchor>
//             {/* {aboutMeData.lines.map((props, index) => (
//               <Line key={index} {...props} />
//             ))} */}
//             <Text
//               bold
//               position={[2, 1, -10]}
//               // position-z={0.5}
//               anchorX='center'
//               anchorY='middle'
//               fontSize={1.5 * scale}
//               lineHeight={1}
//               letterSpacing={-0.05}
//               color='tomato'
//               maxWidth={(viewport.width / 4) * 3}
//             >
//               {aboutMeData.depthbox[0].text}
//             </Text>
//           </Box>
//         </Box>
//         <Box
//           dir='row'
//           width='100%'
//           height='100%'
//           align='center'
//           justify='center'
//         >
//           <Box>
//             <Layercard
//               {...aboutMeData.depthbox[0]}
//               text={aboutMeData.depthbox[1].text}
//               boxWidth={bW}
//               boxHeight={bH}
//               map={texture}
//               textScaleFactor={scale}
//             />
//             {/* <Geo position={[bW / 2, -bH / 2, aboutMeData.depthbox[1].depth]} /> */}
//           </Box>
//         </Box>
//       </Flex>
//     </group>
//   )
// }
// //
// function ScrollAbout() {
//   return (
//     <>
//       <group>
//         <Content />
//       </group>
//     </>
//   )
// }

// export default ScrollAbout
