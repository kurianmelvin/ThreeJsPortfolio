import React, { Suspense } from 'react'

// import {
//   OrbitControls,
//   Preload,
//   MapControls,
//   FlyControls,
//   ScrollControls,
//   Stars,
//   Sky,
// } from '@react-three/drei'

import Gallery from '@/components/canvas/Gallery'

//  <Page position={[-width * 1, 0, 0]} urls={['/trip1.jpg', '/trip2.jpg', '/trip3.jpg']} />

// const pexel = (id) =>
//   `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
  //1 LEFT FRONT 1
  {
    position: [-2, 0, 6],
    rotation: [0, Math.PI / 2.5, 0],
    url: '/b1.jpeg',
  },
  // 2 left middle 2
  {
    position: [-2.15, 0, 4],
    rotation: [0, Math.PI / 2.5, 0],
    url: '/b2.jpeg',
  },
  //3 Left back 3
  {
    position: [-2, 0, 2],
    rotation: [0, Math.PI / 2.5, 0],
    url: '/b3.JPEG',
  },

  ///
  //4 Back left
  { position: [-1.8, 0, 1], rotation: [0, 0, 0], url: '/b4.jpeg' },
  //
  ////
  // // 5 MIDDLE m3
  // { position: [0.5, 0, 2.5], rotation: [0, 0, 0], url: '/b11.JPG' },
  // //
  // 5 MIDDLE m2
  { position: [0, 0, 0], rotation: [0, 0, 0], url: '/b11.jpg' },
  //
  // 5 MIDDLE m1
  { position: [0, 0, 6], rotation: [0, 0, 0], url: '/b5.JPG' },
  //
  //
  //6 // Back right
  { position: [1.8, 0, 1], rotation: [0, 0, 0], url: '/b6.jpeg' },
  ////
  ////
  //7 Right back 3
  {
    position: [2, 0, 2],
    rotation: [0, -Math.PI / 2.5, 0],
    url: '/b7.JPEG',
  },
  //8 Right middle 2
  {
    position: [2.15, 0, 4],
    rotation: [0, -Math.PI / 2.5, 0],
    url: '/b8.jpeg',
  },
  //9 right front 1
  {
    position: [2, 0, 6],
    rotation: [0, -Math.PI / 2.5, 0],
    url: '/b9.jpeg',
  },
]

function ImageGallery() {
  return (
    <>
      <Suspense fallback={null}>
        {/* <Stars
        // radius={100}
        // depth={1000}
        // count={5000}
        // factor={50}
        // saturation={10}
        // fade={true}
        /> */}
        {/* <Sky
          distance={1000}
          sunPosition={[0, 10, 0]}
          // inclination={10}
          // azimuth={10}
          mieCoefficient={100}
          mieDirectionalG={1}
          rayleigh={100}
          turbidity={100}
        /> */}
        <Gallery images={images} />
      </Suspense>
    </>
  )
}

export default ImageGallery
