import React, { Suspense, useMemo, useEffect, useRef, useState } from 'react'

import { usePlane, useBox, Physics } from '@react-three/cannon'
import {
  OrbitControls,
  Preload,
  Html,
  useProgress,
  Loader,
  Sky,
  Cloud,
  Stars,
  Line,
  softShadows,
  useTexture,
  Stage,
  Environment,
  MeshReflectorMaterial,
  useAspect,
  FlyControls,
} from '@react-three/drei'
import { useFrame, useThree, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

//
//

function Scene() {
  const [colorMap] = useTexture(['b501.jpg'])
  // const props = useTexture({
  //   colorMap: 'b301.jpeg',
  // })
  return (
    <>
      {/* <Stage intensity={1} contactShadowOpacity={0}> */}
      <ambientLight intensity={5} />
      <Environment
        resolution={2048}
        background={true}
        map={colorMap}
        // files={'t1.jpeg'}
        // path={'/'}
      />
      <group position={[0, -3.2, 0]}>
        <mesh
          map={colorMap}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={0}
            mixStrength={50}
            roughness={0}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color='#101010'
            metalness={0.5}
          />
        </mesh>
      </group>
      {/* </Stage> */}
    </>
  )
}

const Plane = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))

  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color='#ffffff' />
    </mesh>
  )
}
//this plane function is good
//

function Rig() {
  const [colorMap] = useTexture(['t1.jpeg'])
  // const camera = useThree((state) => state.camera)

  //
  // useFrame(({ clock }) => {
  //   camera.position.z = Math.sin(clock.elapsedTime) * 20
  // })
  // //
  // useFrame(({ clock }) => {
  //   camera.position.z = Math.sin(clock.elapsedTime) * 0.05
  // })

  return (
    <Suspense fallback={null}>
      <group position={[0, -3.19, 0]}>
        <mesh
          // map={colorMap}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
        >
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={0}
            mixStrength={50}
            roughness={0}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color='#101010'
            metalness={0.5}
          />
        </mesh>
      </group>
      {/*  */}
      <Sky
        // map={colorMap}
        distance={40000}
        // Xpositive = Right, XNegative = Left   // YPositive = Up, YNegative = Sun Down  // ZPositive = Back, ZNegative = Front
        sunPosition={[0, 0.5, 1]}
        // inclination={0}
        // azimuth={0.25}
      />
      <Stars factor={5} />
    </Suspense>
  )
}

function BackgroundPlane() {
  return (
    <>
      <Rig />
      {/* <Scene /> */}
      {/* <FlyControls
        //rs = 0.005
        rollSpeed={0.005}
        //ms =0.5
        movementSpeed={3}
        dragToLook={false}
        autoForward={false}
      /> */}
      <OrbitControls zoomSpeed={10} enableRotate={false} />
    </>
  )
}
export default BackgroundPlane
