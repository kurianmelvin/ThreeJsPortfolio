import React, { useRef, useState, useEffect } from 'react'

import { useGLTF, useAnimations, Text3D } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'


export default function GalleryRobotButton(props) {
  const { nodes, animations } = useGLTF('/robot.glb')
  const buttonText = useRef()
  const { ref, actions, names } = useAnimations(animations)
  //
  //
  //
  // Hover and animation-index states
  const [hovered, setHovered] = useState(false)
  let [index, setIndex] = useState(0)
  //

  useEffect(() => {
    document.body.style.cursor = hovered
      ? actions[names[index]].setDuration(4).setLoop(2, 2).play() && 'pointer'
      : actions[names[index]].stop()
    // Reset and fade in animation after an index has been changed

    // In the clean-up phase, fade it out
    return () => actions[names[index]]
  }, [index, actions, names, hovered])

  useFrame(() => {
    // h? T : F
    buttonText.current.scale.x = THREE.MathUtils.lerp(buttonText.current.scale.x, (hovered ? 3: 0),0.05) /* prettier-ignore */
    buttonText.current.scale.y = THREE.MathUtils.lerp(buttonText.current.scale.y, (hovered ? 3: 0),0.05) /* prettier-ignore */
    buttonText.current.scale.z= THREE.MathUtils.lerp(buttonText.current.scale.z, (hovered ? 3: 0),0.05) /* prettier-ignore */
    //position
    buttonText.current.position.x= THREE.MathUtils.lerp(buttonText.current.position.x, (hovered ? -6:0),0.06) /* prettier-ignore */
    buttonText.current.position.y= THREE.MathUtils.lerp(buttonText.current.position.y, (hovered ? -10:0),0.06) /* prettier-ignore */
    buttonText.current.position.z= THREE.MathUtils.lerp(buttonText.current.position.z, (hovered ? -1 :0),0.06) /* prettier-ignore */
  })
  return (
    <>
      <group
        ref={ref}
        {...props}
        dispose={null}
        onPointerEnter={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        // onClick={() => {
        //   router.push('/')
        // }}
      >
        <group name='Root_Scene'>
          <group
            name='RootNode'
            userData={{ name: 'RootNode' }}

            // onClick={() => setIndex((index + 1) % names.length)}
          >
            <group
              name='RobotArmature'
              rotation={[-Math.PI / 2, 0, -0.05]}
              scale={100}
              userData={{ name: 'RobotArmature' }}
            >
              <group scale={0.002}>
                <Text3D
                  ref={buttonText}
                  font={'/kanit.json'}
                  curveSegments={14}
                  bevelEnabled={true}
                  bevelThickness={0.02}
                  bevelSize={0.05}
                  bevelOffset={-0.001}
                  bevelSegments={8}
                  rotation={[1, -0.0, 0]}
                >
                  <meshStandardMaterial
                    attach='material'
                    color={'#D89216'}
                    // color={'#F77E21'}
                    roughness={0.1}
                    metalness={0.1}
                    flatShading={true}
                  />
                  HOME
                </Text3D>
              </group>
              <primitive object={nodes.Bone} />
            </group>

            <group
              name='HandR'
              position={[0, 2.37, -0.02]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
              userData={{ name: 'Hand.R' }}
            >
              <mesh>
                <skinnedMesh
                  name='HandR_1'
                  geometry={nodes.HandR_1.geometry}
                  material={nodes.HandR_1.material}
                  skeleton={nodes.HandR_1.skeleton}
                />
              </mesh>

              <mesh>
                <skinnedMesh
                  name='HandR_2'
                  geometry={nodes.HandR_2.geometry}
                  material={nodes.HandR_2.material}
                  skeleton={nodes.HandR_2.skeleton}
                />
              </mesh>
            </group>
            <group
              name='HandL'
              position={[0, 2.37, -0.02]}
              rotation={[-Math.PI / 2, 0, -0.6]}
              scale={100}
              userData={{ name: 'Hand.L' }}
            >
              <mesh>
                <skinnedMesh
                  name='HandL_1'
                  geometry={nodes.HandL_1.geometry}
                  material={nodes.HandL_1.material}
                  skeleton={nodes.HandL_1.skeleton}
                />
              </mesh>

              <mesh>
                <skinnedMesh
                  name='HandL_2'
                  geometry={nodes.HandL_2.geometry}
                  material={nodes.HandL_2.material}
                  skeleton={nodes.HandL_2.skeleton}
                />
              </mesh>
            </group>
          </group>
        </group>
      </group>
      {/* <OrbitControls /> */}
    </>
  )
}

// type ActionName =
//   | 'Dance'
//   | 'Death'
//   | 'Idle'
//   | 'Jump'
//   | 'No'
//   | 'Punch'
//   | 'Running'
//   | 'Sitting'
//   | 'Standing'
//   | 'ThumbsUp'
//   | 'Walking'
//   | 'WalkJump'
//   | 'Wave'
//   | 'Yes'
