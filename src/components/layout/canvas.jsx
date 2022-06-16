import { Suspense } from 'react'

import { Preload, FlyControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import useStore from '@/helpers/store'

// softShadows()

const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)
  return (
    <>
      <Canvas
        // className='canvas'
        mode='concurrent'
        style={{ height: '100vh', width: '100vw' }}
        gl={{ antialias: true }}
        camera={{ position: [0, 1, 10] }}
        dpr={[1, 2]}
        // linear={true}
        // flat={true}
        // legacy={true}
        // frameloop={'demand'}
        // onCreated={(state) => state.events.connect(dom.current)}
      >
        {/* <Suspense fallback={null}> */}
        <Preload all />
        {children}
        {/* </Suspense> */}
        <FlyControls />
      </Canvas>

      {/* <Loader /> */}
    </>
  )
}

export default LCanvas
