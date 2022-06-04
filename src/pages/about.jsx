// import Instructions from '@/components/dom/Instructions'
import dynamic from 'next/dynamic'

const AboutContent = dynamic(() => import('@/components/canvas/AboutContent'), {
  ssr: false,
})

const R3F = () => {
  return (
    <>
      <AboutContent route='/about' />
    </>
  )
}

const Page = () => {
  return (
    <>
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'About Me',
    },
  }
}
