import { useEffect, useRef, useState } from 'react'

import {
  useCursor,
  Image,
  // Text,
  Environment,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import getUuid from 'uuid-by-string'
import { useRoute, useLocation } from 'wouter'

// import useStore from '@/helpers/store'

//
const GOLDENRATIO = 1.61803398875
//
// parent function "Gallery" contains child function "Frames"
// Function "Gallery" is the Scene layout.
function Gallery({ images }) {
  return (
    <>
      <Environment preset='night' />

      <group
        position={[0, -0.5, 0]}
        //  dispose={null}
      >
        <Frames images={images} />
      </group>
    </>
  )
}

//this is the function that deals with the positon and clicked behavior of the gallery
/* prettier-ignore */
function Frames({images, q = new THREE.Quaternion(),  p = new THREE.Vector3(),}) 
{
  /* prettier-ignore */
  // const [hovered, setHover] = useState(false)
  const ref = useRef()
  const clicked = useRef()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()

  //
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      //after clicking the image , this sets the location YPosition determines how close you get to the image
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 1.65, 1))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      //defalut position moving the frames back when the window loads
      p.set(0, 0.5, 11)
      q.identity()
    }
  })

  //
  useFrame((state, dt) => {
    // the speed of the camera zoom onto the image gallery
    state.camera.position.lerp(p, 0.010) //smaller the number the slower it zoom in
    state.camera.quaternion.slerp(q, 0.010) //smaller the number the slower it re-adjusts to the images on the left and right
  })
  return (
    <>
      <group
        ref={ref}
        // onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))} /* prettier-ignore */
        onClick={(e) => (e.stopPropagation(),setLocation(clicked.current = '/item/' + e.object.name))} /* prettier-ignore */
        // onPointerMissed={() => setLocation('/imagegallery')}
        onPointerMissed={() => setLocation('/imagegallery')}
        // dispose={null}
      >
        {images.map((props) => (
          <>
            <Frame key={props.url} {...props} />
           
          </>
        ))}
      </group>
    </>
  )
}

// this function is related to the image and material on the image gallery
function Frame({ url, c = new THREE.Color(), ...props }) {
  const [hovered, hover] = useState(false)
  // const [rnd] = useState(() => Math.random())
  const image = useRef()
  // const frame = useRef()
  const name = getUuid(url)

  //
  useCursor(hovered)
  useFrame(() => {
    //inside image scale
    image.current.scale.x = THREE.MathUtils.lerp(image.current.scale.x, (hovered ? 3 : 1),0.005) /* prettier-ignore */
    image.current.scale.y = THREE.MathUtils.lerp(image.current.scale.y, (hovered ? 1.5 :1),0.005) /* prettier-ignore */
    //the border and hover color of the frames
  })
  return (
    <>
      <group
        {...props}
        // dispose={null}
      >
        <mesh
          name={name}
          onPointerOver={(e) => (e.stopPropagation(), hover(true))}
          onPointerOut={() => hover(false)}
          scale={[2, 2, 0.1]}
          position={[0, 1, -1]}
        >
          <planeBufferGeometry />
          {/* the border of the image frames  */}
          <meshDepthMaterial color='black' />

          {/* this is the Image component coming from DREI lib and the information from here is what is being passed down to the rest of the function */}
          <Image
            //The Raycast allows you to click the image and get the infomation on what was clicked

            ref={image}
            raycast={() => null}
            toneMapped={false}
            //this positions the images infront of the frame
            position={[0, 0, 0.2]}
            url={url}
            alt={''}
          />
        </mesh>
      </group>
    </>
  )
}

export default Gallery
