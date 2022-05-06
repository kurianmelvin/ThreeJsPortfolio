import React from 'react'
import { useProgress, Html, Stars, Sky } from '@react-three/drei'
//

function LoadingScreen() {
  const { active, progress } = useProgress()

  return active ? (
    <>
      <Html>
        <div className='loadingScreen'>
          <p>Loading...{Math.floor(progress)}%</p>
        </div>
      </Html>
      {/* <Stars /> */}
    </>
  ) : null
}

export default LoadingScreen
