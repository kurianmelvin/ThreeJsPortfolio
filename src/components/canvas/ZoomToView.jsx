import * as THREE from 'three'
import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useMemo,
} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'

// function randomPos() {
//   const min = 5
//   const max = -5
//   return Math.random() * (max - min) + min
// }

// function Moment({ data, position, zoomToView }) {
//   const meshRef = useRef()

//   const [hover, setHover] = useState(false)
//   const [clicked, setClicked] = useState(false)

//   useEffect(() => {
//     document.body.style.cursor = hover ? 'pointer' : 'grab'
//   }, [hover])

//   useLayoutEffect(() => {
//     meshRef.current.position.x = data.position[0]
//     meshRef.current.position.y = data.position[1]
//     meshRef.current.position.z = data.position[2]
//   })

//   return (
//     <mesh
//       ref={meshRef}
//       onPointerOver={() => {
//         setHover(true)
//       }}
//       onPointerOut={() => {
//         setHover(false)
//       }}
//       onClick={() => {
//         setClicked(!clicked)
//         zoomToView(meshRef)
//       }}
//     >
//       <boxBufferGeometry attach='geometry' args={[0.1, 0.08, 0.003]} />
//       <meshStandardMaterial color={data.color} />
//       {hover || clicked ? (
//         <Html distanceFactor={1}>
//           <div className='content'>
//             hello <br />
//             world
//           </div>
//         </Html>
//       ) : (
//         ''
//       )}
//     </mesh>
//   )
// }

// function Cloud({ momentsData }) {
//   const [zoom, setZoom] = useState(false)
//   const [focus, setFocus] = useState(true)
//   const vec = new THREE.Vector3()
//   useFrame((state) => {
//     const step = 0.05

//     /*
//     Need to find some way to lerp the lookAt
//     */

//     zoom ? vec.set(focus.x, focus.y, focus.z + 0.2) : vec.set(0, 0, 5)
//     //
//     state.camera.position.lerp(vec, step)
//     state.camera.lookAt(0, 0, 0)
//     // Update to new position/lookAt
//     state.camera.updateProjectionMatrix()
//   })

//   // controls.setLookAt( positionX, positionY, positionZ, targetX, targetY, targetZ, true)

//   const zoomToView = (focusRef) => {
//     setZoom(!zoom)
//     setFocus(focusRef.current.position)
//   }

//   return (
//     <instancedMesh>
//       {momentsData.map((moment, i) => {
//         // Set position here so it isn't reset on state change
//         // for individual moment.
//         return <Moment key={i} data={moment} zoomToView={zoomToView} />
//       })}
//     </instancedMesh>
//   )
// }
const roundedSquareWave = (t, delta, a, f) => {
  return ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
}

function Dots() {
  const ref = useRef() // Reference to our InstancedMesh
  const { vec, transform, positions, distances } = useMemo(() => {
    // Variables for intermediary calculations
    const vec = new THREE.Vector3()
    const transform = new THREE.Matrix4()

    // Precompute randomized initial positions (array of Vector3)
    const positions = [...Array(10000)].map((_, i) => {
      const position = new THREE.Vector3()
      // Place in a grid
      // position.x = (i % 100) - 50
      position.y = Math.floor(i / 100) - 50

      // Offset every other column (hexagonal pattern)
      // position.y += (i % 2) * 0.5

      // Add some noise
      // position.x += Math.random() * 0.3
      // position.y += Math.random() * 0.3
      return position
    })

    // Precompute initial distances with octagonal offset
    const right = new THREE.Vector3(1, 0, 0)
    const distances = positions.map((pos) => {
      // See https://www.desmos.com/calculator/4eiqbvjdzm
      return pos.length() + Math.sin(pos.angleTo(right) * 8) * 0.5
    })
    return { vec, transform, positions, distances }
  }, [])
  useFrame(({ clock }) => {
    for (let i = 0; i < 10000; ++i) {
      const dist = distances[i]

      // Distance affects the wave phase
      const t = clock.elapsedTime - dist / 25

      // Oscillates between -0.4 and +0.4 with period of 3.8 seconds
      const wave = roundedSquareWave(t, 0.15 + (0.2 * dist) / 72, 0.4, 1 / 3.8)

      // Scale initial position by our oscillator
      vec.copy(positions[i]).multiplyScalar(wave + 1.3)

      // Apply the Vector3 position to the Matrix4
      transform.setPosition(vec)

      // Update Matrix4 for this instance
      ref.current.setMatrixAt(i, transform)
    }
    ref.current.instanceMatrix.needsUpdate = true
  })
  return (
    <instancedMesh ref={ref} args={[null, null, 10000]}>
      <circleBufferGeometry args={[0.15]} /> {/* Circle with radius of 0.15 */}
      <meshBasicMaterial /> {/* Default to white color */}
    </instancedMesh>
  )
}

function ZoomToView() {
  return (
    <>
      <color attach='background' args={['black']} />
      <Dots />
    </>
  )
}
export default ZoomToView
