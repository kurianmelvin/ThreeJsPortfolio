import React, { Suspense, useEffect, useRef, useState } from 'react'

import { useGLTF, MapControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

//
//

export default function PhoneButtion(props) {
  const group = useRef()
  const refPhone = useRef(null)
  const { nodes, materials } = useGLTF('/iphone 12 pro max.glb')
  const [hovered, setHovered] = useState(false)
  useEffect(
    () => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'),
    [hovered]
  )
  useFrame((state, delta) => {
    refPhone.current ? (refPhone.current.rotation.z += -0.001) : null
  })
  return (
    <>
      {/* <ambientLight intensity={0.5} /> */}
      {/* <MapControls /> */}
      <group
        ref={group}
        {...props}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={(e) => setHovered(false)}
        position={[40, 15, -60]}
        rotation={[0, -0.5, 0]}
        dispose={null}
      >
        <group
          //   ref={refPhone}
          name='phone005'
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: 'phone.005' }}
        >
          <mesh
            // position={[30, 0, 0]}
            name='iphone_12019'
            geometry={nodes.iphone_12019.geometry}
            material={materials['blue metal.001']}
          />
          <mesh
            // position={[28, 0, 0]}
            name='iphone_12019_1'
            geometry={nodes.iphone_12019_1.geometry}
            material={materials['white line.005']}
          />
          <mesh
            // position={[26, 0, 0]}
            name='iphone_12019_2'
            geometry={nodes.iphone_12019_2.geometry}
            material={materials['blue.010']}
          />
          <mesh
            // position={[24, 0, 0]}
            name='iphone_12019_3'
            geometry={nodes.iphone_12019_3.geometry}
            material={materials['red.005']}
          />
          <mesh
            // position={[22, 0, 0]}
            name='back005'
            geometry={nodes.back005.geometry}
            material={nodes.back005.material}
            userData={{ name: 'back.005' }}
          />
          <group
            name='buttons005'
            // position={[20, 0, 0]}
            position={[0.72, -0.06, -0.45]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.58}
            userData={{ name: 'buttons.005' }}
          >
            <mesh
              name='Circle059'
              geometry={nodes.Circle059.geometry}
              material={nodes.Circle059.material}
            />
            <mesh
              name='Circle059_1'
              geometry={nodes.Circle059_1.geometry}
              material={nodes.Circle059_1.material}
            />
          </group>
          <group
            name='camera013'
            // position={[18, 0, 0]}
            position={[0.18, -0.16, -0.98]}
            scale={0.12}
            userData={{ name: 'camera.013' }}
          >
            <mesh
              name='Circle047'
              geometry={nodes.Circle047.geometry}
              material={nodes.Circle047.material}
            />
            <mesh
              name='Circle047_1'
              geometry={nodes.Circle047_1.geometry}
              material={materials['mat.015']}
            />
            <mesh
              name='Circle047_2'
              geometry={nodes.Circle047_2.geometry}
              material={materials['screen.024']}
            />
            <mesh
              name='Circle047_3'
              geometry={nodes.Circle047_3.geometry}
              material={materials['glass.024']}
            />
          </group>
          {/* 
          
          */}
          <group
            name='camera023'
            // position={[16, 0, 0]}
            position={[0.43, -0.16, -0.83]}
            scale={0.12}
            userData={{ name: 'camera.023' }}
          >
            <mesh
              name='Circle057'
              geometry={nodes.Circle057.geometry}
              material={nodes.Circle057.material}
            />
            <mesh
              name='Circle057_1'
              geometry={nodes.Circle057_1.geometry}
              material={materials['mat.025']}
            />
            <mesh
              name='Circle057_2'
              geometry={nodes.Circle057_2.geometry}
              material={materials['screen.034']}
            />
            <mesh
              name='Circle057_3'
              geometry={nodes.Circle057_3.geometry}
              material={materials['glass.034']}
            />
          </group>
          <group
            name='camera024'
            // position={[14, 0, 0]}
            position={[0.43, -0.16, -1.12]}
            scale={0.12}
            userData={{ name: 'camera.024' }}
          >
            <mesh
              name='Circle058'
              geometry={nodes.Circle058.geometry}
              material={nodes.Circle058.material}
            />
            <mesh
              name='Circle058_1'
              geometry={nodes.Circle058_1.geometry}
              material={nodes.Circle058_1.material}
            />
            <mesh
              name='Circle058_2'
              geometry={nodes.Circle058_2.geometry}
              material={nodes.Circle058_2.material}
            />
            <mesh
              name='Circle058_3'
              geometry={nodes.Circle058_3.geometry}
              material={nodes.Circle058_3.material}
            />
          </group>
          {/* 
          
          */}
          <group
            name='flash005'
            // position={[12, 0, 0]}
            position={[0.18, -0.15, -1.18]}
            scale={0.05}
            userData={{ name: 'flash.005' }}
          >
            <mesh
              name='Circle043'
              geometry={nodes.Circle043.geometry}
              material={nodes.Circle043.material}
            />
            <mesh
              name='Circle043_1'
              geometry={nodes.Circle043_1.geometry}
              material={materials['blue.014']}
            />
            <mesh
              name='Circle043_2'
              geometry={nodes.Circle043_2.geometry}
              material={materials['orange.005']}
            />
            <mesh
              name='Circle043_3'
              geometry={nodes.Circle043_3.geometry}
              material={nodes.Circle043_3.material}
            />
          </group>
          {/* 
          
          */}
          <group
            name='lidar005'
            // position={[10, 0, 0]}
            position={[0.18, -0.15, -0.77]}
            scale={0.05}
            userData={{ name: 'lidar.005' }}
          >
            <mesh
              //   position={[7, 0, 0]}
              name='Circle039'
              geometry={nodes.Circle039.geometry}
              material={materials['lidar.011']}
            />
            <mesh
              //   position={[6, 0, 0]}
              name='Circle039_1'
              geometry={nodes.Circle039_1.geometry}
              material={nodes.Circle039_1.material}
            />
          </group>
          {/*
           */}
          <group
            name='Plane005'
            position={[0.3, -0.12, -0.98]}
            scale={1.17}
            userData={{ name: 'Plane.005' }}
          >
            <mesh
              //   position={[6, 0, 0]}
              name='Plane015'
              geometry={nodes.Plane015.geometry}
              material={nodes.Plane015.material}
              //   material-color='gray'
            />

            <mesh
              //   position={[2, 0, 0]}
              name='Plane015_2'
              geometry={nodes.Plane015_2.geometry}
              material={nodes.Plane015_2.material}
              //   material-color='white'
            />
          </group>

          {/* 
          start of front screen
           */}
          <group
            name='switch005'
            position={[-0.65, -0.05, -0.79]}
            // position={[-1.65, -0.05, -0.79]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.98, 0.95, 0.95]}
            userData={{ name: 'switch.005' }}
          >
            <mesh
              name='Plane011'
              geometry={nodes.Plane011.geometry}
              material={nodes.Plane011.material}
              material-color='white'
            />
            <mesh
              name='Plane011_1'
              geometry={nodes.Plane011_1.geometry}
              material={nodes.Plane011_1.material}
              material-color='white'
            />
          </group>
          {/* 
          
          */}
          <group
            name='screen005'
            position={[0, 0, -0.12]}
            userData={{ name: 'screen.005' }}
          >
            <mesh
              //   position={[-2, 0, 0]}
              name='iphone_12015'
              geometry={nodes.iphone_12015.geometry}
              material={nodes.iphone_12015.material}
              material-color='white'
            />
            <mesh
              //   position={[2, 0, 0]}
              name='iphone_12015_1'
              geometry={nodes.iphone_12017_1.geometry}
              material={nodes.iphone_12017_1.material}
              material-color='white'
            />
            <mesh
              //   position={[0, 0, 0]}
              name='iphone_12015_2'
              geometry={nodes.iphone_12015_2.geometry}
              material={materials['?.005']}
              material-color='white'
            />

            <mesh
              //   position={[-2, 0, 0]}
              name='iphone_12015_5'
              geometry={nodes.iphone_12015_5.geometry}
              material={materials['glass.020']}
              material-color='white'
            />
            {/* <mesh
              //   position={[-14, 0, 0]}
              name='iphone_12015_6'
              geometry={nodes.iphone_12015_6.geometry}
              material={materials['screen.020']}
            /> */}
            <mesh
              //   position={[-4, 0, 0]}
              geometry={nodes.iphone_12016_7.geometry}
              material={nodes.iphone_12016_7.material}
              material-color='black'
            />
          </group>
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/iphone 12 pro max.glb')
