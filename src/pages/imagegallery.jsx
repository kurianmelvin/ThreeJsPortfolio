import dynamic from 'next/dynamic'
import {
  OrbitControls,
  Preload,
  Html,
  useProgress,
  Loader,
  Sky,
  Stars,
  FlyControls,
} from '@react-three/drei'
const ImageGallery = dynamic(() => import('@/components/canvas/ImageGallery'), {
  ssr: false,
})

const R3F = () => {
  return (
    <>
      <ImageGallery route='/' />
      <Stars />
    </>
  )
}

const Page = () => {
  return (
    <>
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'ImageGallery',
    },
  }
}
