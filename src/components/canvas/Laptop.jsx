import React, { useState } from 'react'

import { useSpring } from '@react-spring/core'

import LaptopComponent from '@/components/canvas/LaptopComponent'
// import useStore from '@/helpers/store'

function Laptop(items) {
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

      {/* <three.pointLight position={[-0.1, 4, -8.5]} intensity={1.4} /> */}
      <group
        {...items}
        onClick={(e) => (e.stopPropagation(), setOpen(open))}
        // dispose={null}
      >
        <LaptopComponent
          open={open}
          // scale={[1.5, 1.5, 1.3]}
          hinge={props.open.to([0, -1.3], [1.575, -0.425])}
        />
      </group>
    </>
  )
}

export default Laptop
