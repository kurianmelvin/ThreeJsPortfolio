import LaptopComponent from '@/components/canvas/LaptopComponent'
import React, { Suspense, useState } from 'react'

import {
  Environment,
  ContactShadows,
  shaderMaterial,
  Stars,
  SpotLight,
  Sky,
  Sparkles,
  Text,
  Html,
  OrbitControls,
  Loader,
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
      <three.pointLight
        position={[0, 4, 0]}
        intensity={1.5}
        // color={props.open.to([0, 1], ['#f0f0f0', '#d25578'])}
      />
      <Suspense fallback={null}>
        <group onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
          <LaptopComponent
            open={open}
            hinge={props.open.to([0, 1.3], [1.575, -0.425])}
          />
        </group>
        <Environment preset='city' />
      </Suspense>
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, 0, 0]}
        opacity={0.4}
        width={20}
        height={20}
        blur={2}
        far={4.5}
      />
    </>
  )
}

export default Laptop
