import React, { useRef, useState, useEffect } from 'react'

import {
  useGLTF,
  useAnimations,
  // Environment,
  // Lightformer,
  // OrbitControls,
  useCursor,
  //   useAnimations,
} from '@react-three/drei'

export default function HomeRobotButton(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/robot.glb')

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
  return (
    <>
      {/* <ambientLight intensity={2} /> */}
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
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
              userData={{ name: 'RobotArmature' }}
            >
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
