// import { useEffect, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
// import {
//   OrbitControls,
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
// } from '@react-three/drei'

import useStore from '@/helpers/store'

const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <>
      <Canvas onCreated={(state) => state.events.connect(dom.current)}>
        {children}
      </Canvas>
    </>
  )
}

export default LCanvas
