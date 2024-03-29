import React, { useRef, useState, useEffect } from 'react'

import { useGLTF, useAnimations, Text3D } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import useStore from '@/helpers/store'

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
  //
  //   useEffect()
  // Change animation when the index changes
  //   useCursor(hovered)
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
    buttonText.current.scale.x = THREE.MathUtils.lerp(buttonText.current.scale.x, (hovered ? 2.5: 0),0.05) /* prettier-ignore */
    buttonText.current.scale.y = THREE.MathUtils.lerp(buttonText.current.scale.y, (hovered ? 2.5: 0),0.05) /* prettier-ignore */
    buttonText.current.scale.z= THREE.MathUtils.lerp(buttonText.current.scale.z, (hovered ? 2.5: 0),0.05) /* prettier-ignore */
    //position
    buttonText.current.position.x= THREE.MathUtils.lerp(buttonText.current.position.x, (hovered ? -10:0),0.06) /* prettier-ignore */
    buttonText.current.position.y= THREE.MathUtils.lerp(buttonText.current.position.y, (hovered ? -12:0),0.06) /* prettier-ignore */
    buttonText.current.position.z= THREE.MathUtils.lerp(buttonText.current.position.z, (hovered ? 0 :0),0.06) /* prettier-ignore */
  })
  return (
    <>
      <group
        ref={ref}
        {...props}
        dispose={null}
        onPointerEnter={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <group name='Root_Scene'>
          <group
            name='RootNode'
            userData={{ name: 'RootNode' }}
            // onClick={() => setIndex((index + 1) % names.length)}
          >
            <group
              name='RobotArmature'
              rotation={[-Math.PI / 2, 0, -0.7]}
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
                  rotation={[1, 0, 0]}
                >
                  <meshStandardMaterial
                    attach='material'
                    color={'#346751'}
                    // color={'#F77E21'}
                    roughness={0.1}
                    metalness={0.1}
                    flatShading={true}
                  />
                  H O B B I E S
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
              rotation={[-Math.PI / 2, 0, 0]}
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
    </>
  )
}

// type ActionName =
//   | 'Dance' 0
//   | 'Death' 1
//   | 'Idle' 2
//   | 'Jump' 3
//   | 'No' 4
//   | 'Punch' 5
//   | 'Running' 6
//   | 'Sitting' 7
//   | 'Standing' 8
//   | 'ThumbsUp' 9
//   | 'Walking' 10
//   | 'WalkJump' 11
//   | 'Wave' 12
//   | 'Yes' 13
