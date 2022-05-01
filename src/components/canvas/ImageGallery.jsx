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

const pexel = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
  // Front
  { position: [0, 0, 2.5], rotation: [0, 0, 0], url: pexel(1103970) },
  // Back left
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430) },
  // Back right
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
  // Left back 3
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(327482),
  },
  //left middle 2
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(325185),
  },
  // left front 1
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(358574),
  },
  // Right back 3
  {
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(227675),
  },
  // Right middle 2
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(911738),
  },
  // right front 1
  {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(1738986),
  },
]

function ImageGallery() {
  return (
    <>
      <Suspense fallback={null}>
        <Gallery images={images} />
      </Suspense>
    </>
  )
}

export default ImageGallery
