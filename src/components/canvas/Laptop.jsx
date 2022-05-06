import LaptopComponent from '@/components/canvas/LaptopComponent'
import React, { Suspense, useState } from 'react'

import {
  Environment,
  ContactShadows,
  shaderMaterial,
  useGLTF,
  Stars,
  SpotLight,
  Sky,
  Sparkles,
  Text,
  Html,
  OrbitControls,
  Loader,
  FlyControls,
  MapControls,
} from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'
import useStore from '@/helpers/store'

function Laptop() {
  const [open, setOpen] = useState(false)
  const props = useSpring({ open: Number(open) })
  const router = useStore((state) => state.router)
  return (
    <>
      {/* pontlight/ambientLight for the laptop */}
      <three.pointLight position={[0, 4, 0]} intensity={1.5} />

      <group
        onClick={(e) => (e.stopPropagation(), setOpen(!open))}
        dispose={null}
      >
        <LaptopComponent
          open={open}
          hinge={props.open.to([0, 1.3], [1.575, -0.425])}
        />
      </group>
    </>
  )
}

export default Laptop
