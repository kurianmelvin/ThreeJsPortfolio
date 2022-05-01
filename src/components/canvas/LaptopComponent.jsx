import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Instructions from '@/components/dom/Instructions'
import {
  Environment,
  ContactShadows,
  shaderMaterial,
  useGLTF,
  Stars,
  SpotLight,
  Sky,
  Sparkles,
  Text,
  Html,
  OrbitControls,
  Loader,
} from '@react-three/drei'
import { a as three } from '@react-spring/three'
import useStore from '@/helpers/store'

const vec = new THREE.Vector3()

function LaptopComponent({ open, hinge, ...props }) {
  const router = useStore((state) => state.router)
  const group = useRef()
  // Load model
  const { nodes, materials } = useGLTF('/mac-draco.glb')
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false)
  useEffect(
    () => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'),
    [hovered]
  )

  // The view was auto-generated by: https://github.com/pmndrs/gltfjsx
  // Events and spring animations were added afterwards
  return (
    <>
      <group
        ref={group}
        {...props}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={(e) => setHovered(false)}
        dispose={null}
        position={[0, -3, -6]}
      >
        <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
          <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              material={materials.aluminium}
              geometry={nodes['Cube008'].geometry}
            />
            <mesh
              material={materials['matte.001']}
              geometry={nodes['Cube008_1'].geometry}
            />
            <Html
              className='content'
              rotation-x={-Math.PI / 2}
              position={[0, 0.14, -0.09]}
              transform
              occlude
            >
              <div
                className='wrapper'
                onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
                onPointerOut={(e) => setHovered(false)}
                onClick={() => {
                  router.push(`/imagegallery`)
                }}
              >
                <Instructions />
              </div>
            </Html>
          </group>
        </three.group>
        <mesh
          material={materials.keys}
          geometry={nodes.keyboard.geometry}
          position={[1.79, 0, 3.45]}
        />
        <group position={[0, -0.1, 3.39]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes['Cube002'].geometry}
          />
          <mesh
            material={materials.trackpad}
            geometry={nodes['Cube002_1'].geometry}
          />
        </group>
        <mesh
          material={materials.touchbar}
          geometry={nodes.touchbar.geometry}
          position={[0, -0.03, 1.2]}
        />
      </group>
    </>
  )
}

export default LaptopComponent
