import React from 'react'

//
import { usePlane, useBox, Physics } from '@react-three/cannon'
// import {
//   OrbitControls,
//   FlyControls,
//   Preload,
//   Html,
//   useProgress,
//   Loader,
//   Sky,
//   Cloud,
//   Stars,
//   Line,
//   softShadows,
//   Text,
//   Stage,
//   MeshReflectorMaterial,
// } from '@react-three/drei'
//
//

// const red = new THREE.MeshLambertMaterial({ color: 'red' })
// const sphere = new THREE.SphereGeometry(1, 28, 28)

const FloorPlane = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))

  return (
    <mesh
      //   receiveShadow
      ref={ref}
      // dispose={null}
    >
      <planeGeometry args={[300, 500]} />
      <meshStandardMaterial color='#1B262C' />
    </mesh>
  )
}
const BackPlane = (props) => {
  const [backref] = usePlane(() => ({ ...props }))

  return (
    <mesh
      //   receiveShadow
      ref={backref}
      // dispose={null}
    >
      <planeGeometry args={[500, 500]} />
      <meshStandardMaterial color='#1B262C' />
    </mesh>
  )
}

// Lights
//purple light
//    <BackPlane position={[0, -1, -100]} />
function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={300}
      height={10}
      color={color}
      intensity={brightness}
      position={[0, -3.19, 0]}
      lookAt={[0, 0, 0]}
      //   penumbra={1}
      //   castShadow
    />
  )
}
//blue light
function LeftLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={20}
      height={100}
      intensity={brightness}
      color={color}
      position={[-2, 0, -100]}
      rotation={[0, 90, 0]}
      //   castShadow
    />
  )
}
//purple light
function RightLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={20}
      height={100}
      intensity={brightness}
      color={color}
      position={[-2, 0, -100]}
      rotation={[0, 180, 0]}
      //   castShadow
    />
  )
}

function HomeBackgroundPlane() {
  return (
    <>
      {/* // */}
      {/* // */}
      <FloorPlane position={[0, -3.19, 0]} />
      <BackPlane position={[0, 0, -100]} />
      {/* //purple light */}
      {/* <KeyLight brightness={3} color={'white'} /> */}
      {/* //blue light */}
      <LeftLight brightness={40} color={'#00ADB5'} />
      {/* //purple light */}
      <RightLight brightness={50} color={'#ffbdf4'} />
    </>
  )
}

export default HomeBackgroundPlane
