// import React, {
//   useState,
//   useEffect,
//   useRef,
//   useLayoutEffect,
//   useMemo,
// } from 'react'

// import { OrbitControls, Html } from '@react-three/drei'
// import { Canvas, useFrame } from '@react-three/fiber'
// import * as THREE from 'three'

// // ;<Trail
// //   width={1}
// //   length={10}
// //   local={false}
// //   color={'#F8D628'}
// //   target={ref}
// //   interval={1}
// //   decay={10}
// // />

// ///
// // ;<Lightformer
// //   form='circle' // circle | ring | rect (optional, default = rect)
// //   intensity={1} // power level (optional = 1)
// //   color='white' // (optional = white)
// //   scale={[1, 1]} // Scale it any way you prefer (optional = [1, 1])
// //   // target={[-10, -10, -10]} // Target position (optional = undefined)
// // />

// // function randomPos() {
// //   const min = 5
// //   const max = -5
// //   return Math.random() * (max - min) + min
// // }

// // function Moment({ data, position, zoomToView }) {
// //   const meshRef = useRef()

// //   const [hover, setHover] = useState(false)
// //   const [clicked, setClicked] = useState(false)

// //   useEffect(() => {
// //     document.body.style.cursor = hover ? 'pointer' : 'grab'
// //   }, [hover])

// //   useLayoutEffect(() => {
// //     meshRef.current.position.x = data.position[0]
// //     meshRef.current.position.y = data.position[1]
// //     meshRef.current.position.z = data.position[2]
// //   })

// //   return (
// //     <mesh
// //       ref={meshRef}
// //       onPointerOver={() => {
// //         setHover(true)
// //       }}
// //       onPointerOut={() => {
// //         setHover(false)
// //       }}
// //       onClick={() => {
// //         setClicked(!clicked)
// //         zoomToView(meshRef)
// //       }}
// //     >
// //       <boxBufferGeometry attach='geometry' args={[0.1, 0.08, 0.003]} />
// //       <meshStandardMaterial color={data.color} />
// //       {hover || clicked ? (
// //         <Html distanceFactor={1}>
// //           <div className='content'>
// //             hello <br />
// //             world
// //           </div>
// //         </Html>
// //       ) : (
// //         ''
// //       )}
// //     </mesh>
// //   )
// // }

// // function Cloud({ momentsData }) {
// //   const [zoom, setZoom] = useState(false)
// //   const [focus, setFocus] = useState(true)
// //   const vec = new THREE.Vector3()
// //   useFrame((state) => {
// //     const step = 0.05

// //     /*
// //     Need to find some way to lerp the lookAt
// //     */

// //     zoom ? vec.set(focus.x, focus.y, focus.z + 0.2) : vec.set(0, 0, 5)
// //     //
// //     state.camera.position.lerp(vec, step)
// //     state.camera.lookAt(0, 0, 0)
// //     // Update to new position/lookAt
// //     state.camera.updateProjectionMatrix()
// //   })

// //   // controls.setLookAt( positionX, positionY, positionZ, targetX, targetY, targetZ, true)

// //   const zoomToView = (focusRef) => {
// //     setZoom(!zoom)
// //     setFocus(focusRef.current.position)
// //   }

// //   return (
// //     <instancedMesh>
// //       {momentsData.map((moment, i) => {
// //         // Set position here so it isn't reset on state change
// //         // for individual moment.
// //         return <Moment key={i} data={moment} zoomToView={zoomToView} />
// //       })}
// //     </instancedMesh>
// //   )
// // }
// const roundedSquareWave = (t, delta, a, f) => {
//   return ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
// }

// function Dots() {
//   const ref = useRef() // Reference to our InstancedMesh
//   const { vec, transform, positions, distances } = useMemo(() => {
//     // Variables for intermediary calculations
//     const vec = new THREE.Vector3()
//     const transform = new THREE.Matrix4()

//     // Precompute randomized initial positions (array of Vector3)
//     const positions = [...Array(10000)].map((_, i) => {
//       const position = new THREE.Vector3()
//       // Place in a grid
//       // position.x = (i % 100) - 50
//       position.y = Math.floor(i / 100) - 50

//       // Offset every other column (hexagonal pattern)
//       // position.y += (i % 2) * 0.5

//       // Add some noise
//       // position.x += Math.random() * 0.3
//       // position.y += Math.random() * 0.3
//       return position
//     })

//     // Precompute initial distances with octagonal offset
//     const right = new THREE.Vector3(1, 0, 0)
//     const distances = positions.map((pos) => {
//       // See https://www.desmos.com/calculator/4eiqbvjdzm
//       return pos.length() + Math.sin(pos.angleTo(right) * 8) * 0.5
//     })
//     return { vec, transform, positions, distances }
//   }, [])
//   useFrame(({ clock }) => {
//     for (let i = 0; i < 10000; ++i) {
//       const dist = distances[i]

//       // Distance affects the wave phase
//       const t = clock.elapsedTime - dist / 25

//       // Oscillates between -0.4 and +0.4 with period of 3.8 seconds
//       const wave = roundedSquareWave(t, 0.15 + (0.2 * dist) / 72, 0.4, 1 / 3.8)

//       // Scale initial position by our oscillator
//       vec.copy(positions[i]).multiplyScalar(wave + 1.3)

//       // Apply the Vector3 position to the Matrix4
//       transform.setPosition(vec)

//       // Update Matrix4 for this instance
//       ref.current.setMatrixAt(i, transform)
//     }
//     ref.current.instanceMatrix.needsUpdate = true
//   })
//   return (
//     <instancedMesh ref={ref} args={[null, null, 10000]}>
//       <circleBufferGeometry args={[0.15]} /> {/* Circle with radius of 0.15 */}
//       <meshBasicMaterial /> {/* Default to white color */}
//     </instancedMesh>
//   )
// }

// function ZoomToView() {
//   return (
//     <>
//       <color attach='background' args={['black']} />
//       <Dots />
//     </>
//   )
// }
// export default ZoomToView

// // Moving forward useFrame

// // import React, { useRef, useState, Suspense } from "react";
// // import * as THREE from "three";
// // import { Canvas, useFrame, useLoader } from "react-three-fiber";
// // import JSONfont from "../Roboto_Regular.json";
// // import lava from "../lavatile.jpg";
// // import carbon_fiber from "../Carbon.png";

// // function TextMesh(props) {
// //   const [hovered, setHover] = useState(false);
// //   const mesh = useRef();

// //   // actions to perform in current frame
// //   useFrame(() => {
// //     mesh.current.position.z = mesh.current.position.y += 0.01;
// //     mesh.current.geometry.center();
// //   });

// //   // create lava texture
// //   const lava_texture = useLoader(THREE.TextureLoader, lava);
// //   lava_texture.wrapS = THREE.RepeatWrapping;
// //   lava_texture.wrapT = THREE.RepeatWrapping;
// //   lava_texture.repeat.set(0.05, 0.05);

// //   // create carbon fiber texture
// //   const cf_texture = useLoader(THREE.TextureLoader, carbon_fiber);
// //   cf_texture.wrapS = THREE.RepeatWrapping;
// //   cf_texture.wrapT = THREE.RepeatWrapping;
// //   cf_texture.repeat.set(1, 1);

// //   // load in font
// //   const font = new THREE.FontLoader().parse(JSONfont);

// //   // configure font mesh
// //   const textOptions = {
// //     font,
// //     size: 5,
// //     height: hovered ? 0 : 1
// //   };

// //   const getTexture = () => {
// //     const textureMap = {
// //       lava: lava_texture,
// //       carbonFiber: cf_texture
// //     };

// //     return textureMap[props.texture];
// //   };

// //   return (
// //     <mesh
// //       {...props}
// //       ref={mesh}
// //       onPointerOver={(e) => setHover(true)}
// //       onPointerOut={(e) => setHover(false)}
// //     >
// //       <textGeometry attach="geometry" args={["three.js", textOptions]} />
// //       <meshStandardMaterial attach="material" args={[{ map: getTexture() }]} />
// //     </mesh>
// //   );
// // }

// // export default function App() {
// //   const textures = ["lava", "carbonFiber"];
// //   const [selected, setSelected] = useState(textures[0]);

// //   const switchTexture = () => {
// //     const index = textures.indexOf(selected);
// //     if (index < textures.length - 1) {
// //       setSelected(textures[index + 1]);
// //       return;
// //     }

// //     setSelected(textures[0]);
// //     return;
// //   };

// //   const canvasStyle = {
// //     width: "100vw",
// //     height: "100vh"
// //   };

// //   const buttonStyle = {
// //     position: "absolute",
// //     zIndex: 100,
// //     top: "5px",
// //     left: "5px"
// //   };

// //   return (
// //     <>
// //       <Canvas
// //         style={canvasStyle}
// //         camera={{ position: [0, 0, 10] }}
// //         onCreated={({ gl }) => gl.setClearColor("#333")}
// //       >
// //         <Suspense fallback={null}>
// //           <ambientLight intensity={1} />
// //           <TextMesh position={[0, 0, 0]} texture={selected} />
// //         </Suspense>
// //       </Canvas>
// //       <button style={buttonStyle} onClick={switchTexture}>
// //         switch texture
// //       </button>
// //     </>
// //   );
// // }

// //---------------------------------------------
// {
//   /* <Html
//               className='HTMLcontent'
//               occlude
//               onOcclude={setHtmlHidden}
//               style={{
//                 // transition: 'all 0.01s',
//                 opacity: htmlHidden ? 0 : 1,
//               }}
//               //  transform: `scale(${htmlHidden ? 0.5 : 1})`,
//               transform
//               rotation-x={-Math.PI / 2}
//               position={[0, 0, 0]}

//               // distanceFactor={10}
//               // fullscreen
//               // sprite={false}
//             >
//               <div className='grid-container'>
//                 <div
//                   onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
//                   onPointerOut={(e) => (e.stopPropagation(), setHovered(false))}
//                   onClick={() => {
//                     router.push(`/imagegallery`)
//                   }}
//                 >
//                   Hobbies
//                 </div>

//                 <div
//                 // onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
//                 // onPointerOut={(e) => (e.stopPropagation(), setHovered(false))}
//                 // onClick={() => {
//                 //   router.push(`/box`)
//                 // }}
//                 >
//                   About
//                 </div>
//                 <div>Project</div>
//                 <div>Connect</div>
//               </div>
//             </Html> */
// }
// {
//   /* <mesh
//               material={materials['screen.001']}
//               geometry={nodes['Cube008_2'].geometry}
//             /> */
// }
// -----------------------------
//
//
//
// function Test() {
//   const camera = useThree((state) => state.camera)
//   useEffect(() => {
//     camera.position.set([0, 0, 0])
//     //  camera.rotation.set(0, 0.5, 0)
//     camera.updateProjectionMatrix()
//   }, [])
//   return null
// }

// const handleNavigation = () => {
//   window.location.href = 'https://github.com/kurianmelvin'
// }

// function SceneCamera() {
//   const { camera } = useThree()

//   useEffect(() => {
//     // camera.fov = 75
//     // camera.near = 1
//     // camera.far = 1000
//     camera.position.set([0, 0, 25])
//     // camera.rotateY(60)
//     camera.updateProjectionMatrix()
//   }, [])
//   return <PerspectiveCamera makeDefault></PerspectiveCamera>
// }
//
//
