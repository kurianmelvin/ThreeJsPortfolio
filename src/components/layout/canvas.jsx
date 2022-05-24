// import { useEffect, useRef, Suspense } from 'react'
import { Preload, FlyControls } from '@react-three/drei'
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
        gl={{ antialias: true }}
        camera={{ fov: 75, far: 1000, position: [0, 0, 10] }}
        dpr={[1, 2]}
        linear={true}
        flat={true}
        // legacy={true}
        // frameloop={'demand'}
        onCreated={(state) => state.events.connect(dom.current)}
      >
        {/* <Suspense fallback={<Loading />}> */}
        <Preload all />
        {children}
        {/* </Suspense> */}
      </Canvas>
      {/* </div> */}
    </>
  )
}

export default LCanvas
