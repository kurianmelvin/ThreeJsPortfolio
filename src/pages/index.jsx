import React, { Suspense } from 'react'

import dynamic from 'next/dynamic'

const HomeContent = dynamic(() => import('@/components/canvas/HomeContent'), {
  ssr: false,
})

// canvas components goes here
const R3F = () => {
  return (
    <>
      <Suspense fallback={null}>
        <HomeContent route='/' />
      </Suspense>
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
      title: 'Melvin Kurian Portfolio',
    },
  }
}
