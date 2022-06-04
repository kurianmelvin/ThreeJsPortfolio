import { useRef, useState, useEffect } from 'react'

import { useAspect } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import './ImageFadeMaterial'
import { TextureLoader, VideoTexture, sRGBEncoding } from 'three'
//

function LaptopGif(props) {
  //

  const [hovered, setHover] = useState(false)
  //
  // const size = useAspect(2, 1)
  const [videoOne] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/LaptopScreenVideoOne.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true,
    })
  )

  const [videoTwo] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/LaptopScreenVideoTwo.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true,
    })
  )

  // useEffect(() => void video1.current.play(), [])
  useEffect(() => {
    // console.log('rendering over and over')
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
    document.body.style.cursor = hovered ? videoTwo.pause() : videoTwo.play()
    document.body.style.cursor = hovered ? videoOne.play() : videoOne.pause()
  }, [hovered])
  // useEffect(() => {
  //   // console.log('rendering over and over video 2')
  //   videoTwo.play()
  // }, [])
  // useEffect(() => {
  //   // console.log('rendering over and over mouse')

  // }, [])

  const materialDefault = new THREE.MeshBasicMaterial({
    map: new THREE.VideoTexture(videoTwo),
  })

  const materialHover = new THREE.MeshBasicMaterial({
    map: new THREE.VideoTexture(videoOne),
  })

  const geometryDefault = new THREE.PlaneBufferGeometry(1, 1)
  const geometryHover = new THREE.PlaneBufferGeometry(1, 1)
  return (
    <>
      <mesh
        // dispose={true}
        // position={[0, 0.5, 1]}
        {...props}
        onPointerMove={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        material={hovered ? materialHover : materialDefault}
        geometry={hovered ? geometryHover : geometryDefault}
      >
        {hovered}
      </mesh>
    </>
  )
}
export default LaptopGif
