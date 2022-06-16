// eslint-disable-next-line import/order
import {
  ScrollControls,
  Scroll,
  PerspectiveCamera,
  OrbitControls,
  FlyControls,
} from '@react-three/drei'
import dynamic from 'next/dynamic'

import useStore from '@/helpers/store'
//
//
//Background Cube with plane
const AboutCubeBackground = dynamic(
  () => import('@/components/canvas/AboutCubeBackground'),
  {
    ssr: false,
  }
)
//
//Tree Gltf
const Tree = dynamic(() => import('@/components/canvas/Tree'), {
  ssr: false,
})
//
//Home button router
const HomeButton = dynamic(() => import('@/components/canvas/HomeButton'), {
  ssr: false,
})
//
//Gallery Art stand button
const ArtStandButton = dynamic(
  () => import('@/components/canvas/ArtStandButton'),
  {
    ssr: false,
  }
)
// About Me content
const AboutMe = dynamic(() => import('@/components/canvas/AboutMe'), {
  ssr: false,
})
const AboutRobotButton = dynamic(
  () => import('@/components/canvas/AboutRobotButton'),
  {
    ssr: false,
  }
)
//
// function disposeCamera() {
//   return PerspectiveCamera.dispose()
// }

function AboutContent() {
  const router = useStore((state) => state.router)
  return (
    //
    //
    <>
      {/* need to change the default camera position for the aboutMeData  */}
      <PerspectiveCamera makeDefault position={[0, 0, 50]}>
        <ScrollControls damping={2} pages={6}>
          <Scroll>
            <group position={[0, 0, -90]}>
              <AboutCubeBackground />
              <AboutRobotButton
                scale={3}
                position={[50, -95, 20]}
                rotation={[0, -0.5, 0]}
                onClick={
                  () => router.push('/imagegallery')
                  // () => router.push('/')
                  // e.stopPropagation(),
                  // (e) => PerspectiveCamera.dispose()
                }
              />
              {/* <AboutTimeline /> */}
              <group position={[0, 10, -10]} rotation={[0, 0, 0]}>
                <AboutMe />
                <Tree
                  scale={3.5}
                  position={[-60, -105, -38]}
                  rotation={[0, -0.7, 0]}
                />
                <Tree scale={3} position={[60, -105, -38]} />
              </group>
            </group>
          </Scroll>
        </ScrollControls>
      </PerspectiveCamera>
      {/* <FlyControls movementSpeed={20} rollSpeed={0.05} /> */}
      {/* <OrbitControls /> */}
    </>
  )
}
// PerspectiveCamera.dispose()
export default AboutContent
