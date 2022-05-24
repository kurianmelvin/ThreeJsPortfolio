import React, { Suspense, useState } from 'react'

import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'
import {
  // Environment,
  // ContactShadows,
  // shaderMaterial,
  // useGLTF,
  // Stars,
  // SpotLight,
  // Sky,
  // Sparkles,
  // Text,
  // Html,
  OrbitControls,
  // Loader,
  FlyControls,
  // MapControls,
  // Lightformer,
} from '@react-three/drei'

import LaptopComponent from '@/components/canvas/LaptopComponent'
// import useStore from '@/helpers/store'

function Laptop() {
  const [open, setOpen] = useState(false)
  const props = useSpring({ open: Number(open) })
  // const router = useStore((state) => state.router)
  return (
    <>
      {/* pontlight/ambientLight for the laptop */}
      {/* <pointLight
        position={[-0.1, -0, -5.5]}
        intensity={0.4}
        color={'#F9F3EE'}
      /> */}

      {/* // */}
      {/*  */}

      {/* <three.pointLight position={[-0.1, 4, -8.5]} intensity={1.4} /> */}
      <group
        onClick={(e) => (e.stopPropagation(), setOpen(!open))}
        // dispose={null}
      >
        <LaptopComponent
          open={open}
          scale={[1.5, 1.5, 1.5]}
          hinge={props.open.to([0, 1.3], [1.575, -0.425])}
        />
      </group>
      {/* <OrbitControls /> */}
      {/* <FlyControls
        //rs = 0.005
        rollSpeed={0.005}
        //ms =0.5
        movementSpeed={0.5}
        dragToLook={false}
        autoForward={false}
      /> */}
    </>
  )
}

export default Laptop
