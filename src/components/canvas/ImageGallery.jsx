import React from 'react'

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
    url: '/g1.jpg',
    text: `The Hiramic\nLegend`,
  },
  // 2 left middle 2
  {
    position: [-2.15, 0, 4],
    rotation: [0, Math.PI / 2.5, 0],
    url: '/g3.jpg',
    text: `The Hiramic\nLegend`,
  },
  //3 Left back 3
  {
    position: [-2, 0, 2],
    rotation: [0, Math.PI / 2.5, 0],
    url: '/g2.jpg',
    text: `The Hiramic\nLegend`,
  },

  ///
  //4 Back left
  // { position: [-1.8, 0, 1], rotation: [0, 0, 0], url: '/b4.jpeg' },
  //
  ////
  // // 5 MIDDLE m3
  // { position: [0.5, 0, 2.5], rotation: [0, 0, 0], url: '/b11.JPG' },
  // //
  // 5 MIDDLE m2
  // { position: [0, 0, 0], rotation: [0, 0, 0], url: '/b11.jpg' },
  //
  // 5 MIDDLE m1
  { position: [0, 0, 2], rotation: [0, 0, 0], url: '/g4.jpg' },
  //
  //
  //6 // Back right
  // { position: [1.8, 0, 1], rotation: [0, 0, 0], url: '/b6.jpeg' },
  ////
  ////
  //7 Right back 3
  {
    position: [2, 0, 2],
    rotation: [0, -Math.PI / 2.5, 0],
    url: '/b7.JPEG',
    text: `The Hiramic\nLegend`,
  },
  //8 Right middle 2
  {
    position: [2.15, 0, 4],
    rotation: [0, -Math.PI / 2.5, 0],
    url: '/b8.jpeg',
    text: `The Hiramic\nLegend`,
  },
  //9 right front 1
  {
    position: [2, 0, 6],
    rotation: [0, -Math.PI / 2.5, 0],
    url: '/g5.jpg',
    text: `The Hiramic\nLegend`,
  },
]

function ImageGallery() {
  return (
    <>
      <Gallery images={images} />
    </>
  )
}

export default ImageGallery
