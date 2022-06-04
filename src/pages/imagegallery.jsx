import dynamic from 'next/dynamic'
//

const GalleryContent = dynamic(
  () => import('@/components/canvas/GalleryContent'),
  {
    ssr: false,
  }
)
const R3F = () => {
  return (
    <>
      <GalleryContent route='/imagegallery' />
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
