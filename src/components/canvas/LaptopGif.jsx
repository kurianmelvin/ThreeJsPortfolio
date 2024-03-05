import { useRef, useState, useEffect } from 'react'

import { useAspect } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

//

function LaptopGif(props) {
  const ref = useRef(null)
  const size = useAspect(2, 1)
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/LaptopScreenVideoOne.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true,
    })
  )
  useEffect(() => void video.play(), [video])

  return (
    <>
      <mesh
        ref={ref}
        {...props}
        scale={size}
        position={[0,2.5,1]}
        // dispose={null}
      >
        <planeGeometry args={[0.26, 0.35]} 
        />
        <meshBasicMaterial toneMapped={false}>
          <videoTexture
            attach='map'
            args={[video]}
            encoding={THREE.sRGBEncoding}
          />
        </meshBasicMaterial>
      </mesh>
    </>
  )
}
export default LaptopGif