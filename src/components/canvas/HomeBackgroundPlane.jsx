import React, { Suspense } from 'react'

//
import { usePlane, useBox, Physics } from '@react-three/cannon'
import {
  OrbitControls,
  MapControls,
  //
  FlyControls,
  Environment,
} from '@react-three/drei'
//
//
import dynamic from 'next/dynamic'
const CubeBackground = dynamic(
  () => import('@/components/canvas/CubeBackground'),
  {
    ssr: false,
  }
)
// softShadows()

function FloorPlane({ color, ...props }) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))

  return (
    <>
      <mesh
        //   receiveShadow
        ref={ref}
        // dispose={null}
      >
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  )
}

////BACK WALL PLANE////

// function BackPlane({ color, ...props }) {
//   const [backref] = usePlane(() => ({ ...props }))

//   return (
//     <mesh
//       receiveShadow
//       ref={backref}
//       // dispose={null}
//     >
//       <planeGeometry args={[500, 500]} />
//       <meshStandardMaterial color={color} />
//       {/* <meshStandardMaterial color='white' /> */}
//     </mesh>
//   )
// }

// Lights
//purple light
//    <BackPlane position={[0, -1, -100]} />
function MiddleLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={0.2}
      height={100.01}
      color={color}
      intensity={brightness}
      position={[0, 0, -99.9]}
      // lookAt={[0, 0, 0]}

      castShadow
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
      position={[-0.6, 0, -100]}
      rotation={[0, 90, -0.11]}
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
      position={[0.6, 0, -100]}
      rotation={[0, 180, 0.11]}
    />
  )
}

function HomeBackgroundPlane() {
  return (
    <>
      {/* <BackPlane color={'#2a1b3f'} position={[0, 0, -100]} /> */}

      {/* <FloorPlane color={'#E4FBFF'} position={[0, -3.19, 0]} /> */}
      <FloorPlane color={'#E4FBFF'} position={[0, -3.19, 0]} />
      <Suspense fallback={null}>
        <CubeBackground scale={[2, 2, 2]} position={[0, 0, 0]} />
      </Suspense>
      <MiddleLight brightness={100} color={'#FFFFFF'} />

      <LeftLight brightness={40} color={'#30AADD'} />
      <RightLight brightness={50} color={'#F806CC'} />

      <FlyControls
        //rs = 0.005
        rollSpeed={0.03}
        //ms =0.5
        movementSpeed={10}
        dragToLook={false}
        autoForward={false}
        position={[0, 100, 200]}
      />
      {/* <MapControls enableRotate={false} /> */}
      {/* <OrbitControls enableDamping={false} /> */}
    </>
  )
}

export default HomeBackgroundPlane