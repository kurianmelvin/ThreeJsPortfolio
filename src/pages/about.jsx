// import Instructions from '@/components/dom/Instructions'
import dynamic from 'next/dynamic'

// import AboutMe from '@/components/canvas/AboutMe'

// const AboutMe = dynamic(() => import('@/components/dom/AboutMe'), {
//   ssr: false,
// })

const ScrollAbout = dynamic(() => import('@/components/canvas/ScrollAbout'), {
  ssr: false,
})
// const Box = dynamic(() => import('@/components/canvas/Box'), {
//   ssr: false,
// })

// const DOM = () => {
//   return (
//     // Step 5 - delete Instructions components
//     <AboutMe route='/AboutMe' />
//   )
// }

const R3F = () => {
  return (
    <>
      <ScrollAbout route='/ScrollAbout' />
    </>
  )
}

const Page = () => {
  return (
    <>
      {/* <DOM /> */}
      {/* @ts-ignore */}
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
