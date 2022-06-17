// eslint-disable-next-line import/order
import { ScrollControls, Scroll, PerspectiveCamera } from '@react-three/drei'
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

function AboutContent() {
  const router = useStore((state) => state.router)
  return (
    //
    //
    <>
      {/* need to change the default camera position for the aboutMeData  */}
      <PerspectiveCamera makeDefault position={[0, 0, 50]}>
        <ScrollControls damping={3} pages={6}>
          <Scroll>
            <group position={[0, 0, -90]}>
              <AboutCubeBackground />
              <AboutRobotButton
                scale={3}
                position={[50, -95, 20]}
                // rotation={[0, -0.6, 0]}
                onClick={() => router.push('/imagegallery')}
              />
              <group position={[0, 10, -10]} rotation={[0, 0, 0]}>
                <AboutMe />
                {/* Big Tree */}
                <Tree
                  scale={3.5}
                  position={[-60, -105, -30]}
                  rotation={[0, 0.71, 0]}
                />
                {/* small Tree */}
                <Tree
                  scale={3}
                  position={[61, -105, -30]}
                  // rotation={[0, -3, 0]}
                />
              </group>
            </group>
          </Scroll>
        </ScrollControls>
      </PerspectiveCamera>
    </>
  )
}
export default AboutContent
