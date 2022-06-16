import { useEffect, useRef, Suspense } from 'react'

import { Loader } from '@react-three/drei'

import useStore from '@/helpers/store'

//
//
const containerStyles = { transform: 'scale(5)' }
const Dom = ({ children }) => {
  const ref = useRef(null)
  useEffect(() => {
    useStore.setState({ dom: ref })
  }, [])

  return (
    <>
      <Loader containerStyles={containerStyles} />

      {/* <Suspense fallback={null}> */}
      <div
        // className='fullscreen'
        // style={{
        //   position: 'relative',
        //   top: 0,
        //   backgroundColor: '#FFC300',
        //   // height: '100vh',
        //   // width: '100vW',
        //   zIndex: -0.1,
        //   //   color: 'yellow',
        // }}
        ref={ref}
      >
        {children}
      </div>
      {/* </Suspense> */}
    </>
  )
}

export default Dom
