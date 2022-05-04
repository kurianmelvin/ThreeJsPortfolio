import React, { Suspense } from 'react'
import Gallery from '@/components/canvas/Gallery'
import {
  OrbitControls,
  Preload,
  MapControls,
  FlyControls,
  ScrollControls,
} from '@react-three/drei'

//  <Page position={[-width * 1, 0, 0]} urls={['/trip1.jpg', '/trip2.jpg', '/trip3.jpg']} />

// const pexel = (id) =>
//   `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
  // Front
  { position: [0, 0, 2], rotation: [0, 0, 0], url: '/b1.jpg' },

  /////
  // Back left
  { position: [-1.8, 0, 1], rotation: [0, 0, 0], url: '/b12.jpeg' },
  // // Back right
  { position: [1.8, 0, 1], rotation: [0, 0, 0], url: '/b13.jpeg' },

  ////
  // Left back 3
  {
    position: [-2, 0, 2],
    rotation: [0, Math.PI / 2.5, 0],
    url: '/b4.jpeg',
  },

  //left middle 2
  {
    position: [-2.15, 0, 4],
    rotation: [0, Math.PI / 2.5, 0],
    url: '/b5.jpg',
  },
  // LEFT FRONT 1
  {
    position: [-2, 0, 6],
    rotation: [0, Math.PI / 2.5, 0],
    url: '/b6.jpeg',
  },

  ////
  ////
  // Right back 3
  {
    position: [2, 0, 2],
    rotation: [0, -Math.PI / 2.5, 0],
    url: '/b7.jpeg',
  },
  // Right middle 2
  {
    position: [2.15, 0, 4],
    rotation: [0, -Math.PI / 2.5, 0],
    url: '/b8.jpeg',
  },
  // right front 1
  {
    position: [2, 0, 6],
    rotation: [0, -Math.PI / 2.5, 0],
    url: '/b9.jpeg',
  },
]

function ImageGallery() {
  return (
    <>
      {/* <Suspense fallback={null}> */}
      <Gallery images={images} />
      {/* </Suspense> */}
    </>
  )
}

export default ImageGallery
