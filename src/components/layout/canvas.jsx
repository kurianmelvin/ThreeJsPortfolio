import { useEffect, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Preload,
  MapControls,
  Stars,
  Sky,
} from '@react-three/drei'

import useStore from '@/helpers/store'

const LControl = () => {
  const dom = useStore((state) => state.dom)
  const control = useRef(null)

  useEffect(() => {
    if (control) {
      dom.current.style['touch-action'] = 'auto'
    }
  }, [dom, control])
  //   // @ts-ignore
  return <MapControls ref={control} domElement={dom.current} />
  // return <OrbitControls ref={control} domElement={dom.current} />
  //   // return <OrbitControls />
  // return
}

const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <>
      {/* <div> */}
      <Canvas
        mode='concurrent'
        // camera={{ fov: 35, position: [0, 2, 15] }}
        // gl={{ alpha: true }}
        dpr={[1, 2]}
        onCreated={(state) => state.events.connect(dom.current)}
      >
        <LControl />
        {/* <Preload all /> */}
        {children}
      </Canvas>
      {/* </div> */}
    </>
  )
}

export default LCanvas
