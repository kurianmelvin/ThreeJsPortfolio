import { useEffect, useRef, useState } from 'react'

import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  // Text,
  Environment,
  // FlyControls,
  Stars,
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
      <Environment preset='city' />
      <Stars radius={50} depth={500} />
      {/* <group position={[0, -0.5, 0]}> */}
      <group
        position={[0, -0.5, 0]}
        //  dispose={null}
      >
        <Frames images={images} />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeBufferGeometry args={[100, 100]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={0}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color='#101010'
            metalness={0.5}
          />
        </mesh>
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
      p.set(0, 0.5, 10)
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
            {/* <FlyControls
              //rl speed 0.015
              // rollSpeed={0.015}
              //movSpeed 0.05
              movementSpeed={0.04}
              dragToLook={false}
              // autoForward = {false}
            /> */}
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
    // inside image zoom and scale
    // image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2 /* prettier-ignore */
    // image.current.material.zoom = 1 /* prettier-ignore */
    //inside image scale
    image.current.scale.x = THREE.MathUtils.lerp(image.current.scale.x, (hovered ? 1 : 1),0.05) /* prettier-ignore */
    image.current.scale.y = THREE.MathUtils.lerp(image.current.scale.y, (hovered ? 1.2 : 1),0.05) /* prettier-ignore */
    //the border and hover color of the frames

    // frame.current.scale.x = THREE.MathUtils.lerp(frame.current.scale.x, 0.85 * (hovered ? 2.85 : 1),0.01) /* prettier-ignore */
    // frame.current.scale.y = THREE.MathUtils.lerp(frame.current.scale.y,0.905 * (hovered ? 2.905 : 1),0.01) /* prettier-ignore */
    // frame.current.material.color.lerp(c.set(hovered ? '#2C061F' : '#F7F7F7'),0.01) /* prettier-ignore */
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
          //scales the frames
          // scale={[1, 2, 0.05]}
          scale={[hovered ? 3 : 1, GOLDENRATIO, 0.05]}
          // positions the frames
          position={[0, 1, -1]}
          // dispose={null}
        >
          <planeBufferGeometry />
          {/* the border of the image frames  */}
          <meshStandardMaterial
            color='#151515'
            // color='blue'
            // metalness={0.5}
            // roughness={0.5}
            // envMapIntensity={1}
          />
          {/* this mesh deals with the inside border of the image gallery frame  */}

          {/* <mesh
            ref={frame}
            raycast={() => null}
            // scale={[0.9, 0.93, 0.9]}
            scale={[0.9, 0.93, 0.9]}
            // position={[0, 0, 0.2]}
            position={[0, 0, 0.1]}
          > */}
          {/* <boxGeometry /> */}
          {/* inside border of the frame */}
          {/* <meshBasicMaterial color='white' toneMapped={false} fog={false} /> */}
          {/* </mesh> */}

          {/* this is the Image component coming from DREI lib and the information from here is what is being passed down to the rest of the function */}
          <Image
            //The Raycast allows you to click the image and get the infomation on what was clicked
            // raycast={() => null}
            ref={image}
            raycast={() => null}
            toneMapped={true}
            //this positions the images infront of the frame
            position={[0, 0, 1]}
            url={url}
            // scale={[5, 3, 0]}
            alt={''}
          />
        </mesh>
        {/* <Text
          maxWidth={0.1}
          anchorX='left'
          anchorY='top'
          position={[0.5, GOLDENRATIO, 0]}
          fontSize={0.1}
          color={'tomato'}
        >
          X
        </Text> */}
      </group>
    </>
  )
}
// Gallery.dispose()
export default Gallery
