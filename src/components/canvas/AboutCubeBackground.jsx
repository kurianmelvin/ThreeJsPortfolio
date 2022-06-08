import React, { useRef } from 'react'

import { BackSide } from 'three'

function AboutCubeBackground(props) {
  const ref = useRef()
  return (
    <>
      <ambientLight intensity={1.2} />
      {/* <Environment preset='sunset' /> */}
      <group {...props}>
        {/* <Tree scale={[2.5, 2.2, 2.2]} position={[0, -60, -50]} /> */}
        <mesh ref={ref} position={[0, -20, -20]}>
          <boxBufferGeometry attach='geometry' args={[100, 100, 150]} />
          <meshStandardMaterial
            // color={'#EFEAD8'}
            // attach='material'
            side={BackSide}
          />
        </mesh>
      </group>
      {/* <OrbitControls /> */}
    </>
  )
}

export default AboutCubeBackground
