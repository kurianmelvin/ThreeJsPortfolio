import { useRef, useState, Suspense } from 'react'

import {
  shaderMaterial,
  Stars,
  SpotLight,
  Sky,
  Sparkles,
  Text,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import useStore from '@/helpers/store'
//
//

const BoxComponent = ({ route }) => {
  const router = useStore((s) => s.router)
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef(null)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
      : null
  })
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <mesh>
        <Suspense fallback={null}>
          <Text position={[0, 0, 0]} fontSize='1' color='tomato'>
            hello world!
          </Text>
        </Suspense>
      </mesh>
      <mesh
        ref={mesh}
        onClick={() => router.push(route)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.1 : 1}
        position={[0, -1.5, 0]}
      >
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color={route === '/' ? 'orange' : 'hotpink'} />
      </mesh>
      <directionalLight position={[5, 5, 5]} />
      <ambientLight position={[1, 0, 4]} />
    </>
  )
}
export default BoxComponent
