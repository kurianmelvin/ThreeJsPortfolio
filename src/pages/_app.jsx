import React, { useEffect } from 'react'

import { Loader } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import Dom from '@/components/layout/dom'
import Header from '@/config'
import partition from '@/helpers/partition'
import useStore from '@/helpers/store'

import '@/styles/index.css'

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: false,
})

const Balance = ({ child }) => {
  const [r3f, dom] = partition(child, (c) => c.props.r3f === true)

  return (
    <>
      <Dom>{dom}</Dom>
      <LCanvas>{r3f}</LCanvas>
    </>
  )
}

//Title should be "index"
function App({ Component, pageProps = { title: 'index' } }) {
  const router = useRouter()

  useEffect(() => {
    useStore.setState({ router })
  }, [])

  //
  //
  //
  // const router = useRouter()

  // useEffect(() => {
  //   const handleRouteChange = (url, { shallow }) => {
  //     console.log(
  //       `App is changing to ${url} ${
  //         shallow ? 'with' : 'without'
  //       } shallow routing`
  //     )
  //   }
  //   useStore.setState({ router })
  //   router.events.on('routeChangeStart', handleRouteChange)

  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method:
  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange)
  //   }
  // }, [])

  const child = Component(pageProps).props.children

  return (
    <>
      <Header title={pageProps.title} />
      <Balance child={child} />
    </>
  )
}

export default App
