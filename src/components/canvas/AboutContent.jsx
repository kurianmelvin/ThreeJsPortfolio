// eslint-disable-next-line import/order
import {
  ScrollControls,
  Scroll,
  PerspectiveCamera,
  OrbitControls,
} from '@react-three/drei'

//
import dynamic from 'next/dynamic'
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
const AboutTimeline = dynamic(
  () => import('@/components/canvas/AboutTimeline'),
  {
    ssr: false,
  }
)
//
function AboutContent() {
  return (
    //
    //
    <>
      {/* need to change the default camera position for the aboutMeData  */}
      <PerspectiveCamera makeDefault position={[0, 0, 50]} />

      <ScrollControls damping={3} pages={6}>
        <Scroll>
          <AboutCubeBackground />
          {/* <AboutTimeline /> */}
          <group position={[0, 10, -10]} rotation={[0, 0, 0]}>
            <AboutMe />
            <Tree position={[1, -105, -38]} />
          </group>
        </Scroll>
      </ScrollControls>
      {/* <OrbitControls /> */}
    </>
  )
}
// PerspectiveCamera.dispose()
export default AboutContent
