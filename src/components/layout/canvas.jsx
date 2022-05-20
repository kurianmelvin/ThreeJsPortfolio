import { useEffect, useRef, Suspense } from 'react'

import { Preload, Html, useProgress, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import useStore from '@/helpers/store'

// softShadows()

const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)
  return (
    <>
      {/* <div className='container'> */}
      <Canvas
        mode='concurrent'
        // style={{
        //   position: 'absolute',
        //   top: 0,
        // }}
        camera={{ fov: 75, far: 1000, position: [0, 0, 10] }}
        dpr={[1, 2]}
        linear={true}
        flat={true}
        // legacy={true}
        frameloop={'demand'}
        onCreated={(state) => state.events.connect(dom.current)}
      >
        {/* <Suspense fallback={<Loading />}> */}
        <Preload all />
        {children}
        {/* <ambientLight intensity={0.4} /> */}
        <pointLight castShadow position={[-0.1, -1, -8]} intensity={1} />

        {/* </Suspense> */}
        {/* <Environment preset='city' /> */}
      </Canvas>
      {/* </div> */}
    </>
  )
}

export default LCanvas
