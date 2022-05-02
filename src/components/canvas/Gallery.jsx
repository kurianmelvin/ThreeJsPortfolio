import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import useStore from '@/helpers/store'
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Text,
  Environment,
  MapControls,
  FlyControls,
  OrbitControls,
  FirstPersonControls,
  PointerLockControls,
  TrackballControls,
  ArcballControls,
} from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import getUuid from 'uuid-by-string'

//
const GOLDENRATIO = 1.61803398875
//
// parent function "Gallery" contains child function "Frames"
// Function "Gallery" is the Scene layout.
function Gallery({ images }) {
  return (
    // <Canvas gl={{ alpha: false }} dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
    <>
      <color attach='background' args={['#191920']} />
      <fog attach='fog' args={['#191920', 0, 15]} />
      <Environment preset='city' />
      <group position={[0, -0.5, 5]}>
        <Frames images={images} />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
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
  const ref = useRef('item/01f4ae91-c802-5207-9026-5c333fe5e64e')
  const clicked = useRef()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()

  //
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      //after clicking the image , this sets the location
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 0.3))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      //defalut position when the window loads
      p.set(0, 0, 10)
      q.identity()
    }
  })

  //
  useFrame((state, dt) => {
    // the speed of the camera zoom onto the image gallery
    state.camera.position.lerp(p, 0.015) //smaller the number the slower it zoom in
    state.camera.quaternion.slerp(q, 0.015) //smaller the number the slower it re-adjusts to the images on the left and right
  })
  return (
    <>
      <group
        ref={ref}
        // onClick={(e) => (e.stopPropagation(),setLocation(clicked.current === e.object? '/item/' + e.object.name: '/item/' + e.object.name))} /* prettier-ignore */
        onClick={(e) => (e.stopPropagation(),setLocation(clicked.current = '/item/' + e.object.name))} /* prettier-ignore */
        onPointerMissed={() => setLocation('/imagegallery')}
      >
        {images.map((props) => (
          <>
            <Frame key={props.url} {...props} />
            <FlyControls rollSpeed={0.015} movementSpeed= {0.05} dragToLook={false} />
          </>
        ))}
      </group>
    </>
  )
}

// this function is related to the image and material on the image gallery
function Frame({ url, c = new THREE.Color(), ...props }) {
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const image = useRef()
  const frame = useRef()
  const name = getUuid(url)

  //

  useCursor(hovered)
  useFrame((state) => {
    // inside image zoom and scale
    image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2 /* prettier-ignore */
    image.current.scale.x = THREE.MathUtils.lerp(image.current.scale.x, 0.85 * (hovered ? 0.85 : 1),0.1) /* prettier-ignore */
    image.current.scale.y = THREE.MathUtils.lerp(image.current.scale.y,0.9 * (hovered ? 0.905 : 1),0.1) /* prettier-ignore */
    //the border and hover color of the frames
    frame.current.material.color.lerp(c.set(hovered ? '#2C061F' : '#F7F7F7'),0.1) /* prettier-ignore */
  })
  return (
    <>
      <group
        {...props}
        // scale={hovered ? 1.5 : 0.5}
      >
        <mesh
          name={name}
          onPointerOver={(e) => (e.stopPropagation(), hover(true))}
          onPointerOut={() => hover(false)}
          scale={[1, GOLDENRATIO, 0.05]}
          // scale={[1, GOLDENRATIO, hovered ? 1.5 : 0.01]}
          position={[0, GOLDENRATIO / 2, -1]}
        >
          <boxGeometry />
          {/* the border of the image frames  */}
          <meshStandardMaterial
            color='#151515'
            metalness={0.5}
            roughness={0.5}
            envMapIntensity={2}
          />
          <mesh
            ref={frame}
            raycast={() => null}
            scale={[0.9, 0.93, 0.9]}
            position={[0, 0, 0.2]}
          >
            <boxGeometry />
            <meshBasicMaterial toneMapped={false} fog={false} />
          </mesh>
          {/* this is the Image component coming from DREI lib and the information from here is what is being passed down to the rest of the function */}
          <Image
            //The Raycast allows you to click the image and get the infomation on what was clicked
            // raycast={() => null}

            ref={image}
            raycast={() => null}
            position={[0, 0, 0.7]}
            url={url}
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
export default Gallery
