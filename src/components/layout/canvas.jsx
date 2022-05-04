import { useEffect, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Preload,
  MapControls,
  Stars,
  Sky,
} from '@react-three/drei'
import LoadingScreen from '@/components/canvas/LoadingScreen'
import useStore from '@/helpers/store'

const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <>
      <Canvas
        // camera={{ fov: 35, position: [0, 2, 15] }}
        // gl={{ alpha: true }}
        // dpr={[1, 2]}
        onCreated={(state) => state.events.connect(dom.current)}
      >
        {/* <LoadingScreen /> */}
        {children}
      </Canvas>
    </>
  )
}

export default LCanvas
