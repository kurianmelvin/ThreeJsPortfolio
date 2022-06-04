import { ScrollControls, Scroll, PerspectiveCamera } from '@react-three/drei'

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

//
function AboutContent() {
  return (
    //
    //
    <>
      {/* need to change the default camera position for the aboutMeData  */}
      <PerspectiveCamera makeDefault position={[0, 0, 25]} />

      <ScrollControls damping={3} pages={5}>
        <Scroll>
          <AboutCubeBackground />
          <group position={[0, 10, -10]} rotation={[0.2, 0, 0]}>
            <AboutMe />
            <HomeButton
              scale={[2, 2, 2]}
              position={[-20, -49, -10]}
              rotation={[0, 0.5, 0]}
            />
            <ArtStandButton
              scale={[6, 6, 6]}
              position={[20, -49.9, -8]}
              rotation={[0, -0.5, 0]}
            />
            <Tree position={[0, -50, -25]} />
          </group>
        </Scroll>
      </ScrollControls>
      {/* <OrbitControls /> */}
    </>
  )
}
// PerspectiveCamera.dispose()
export default AboutContent
