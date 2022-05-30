import React from 'react'

import { Flex, Box } from '@react-three/flex'

//

//

const Layout = () => (
  <Flex justifyContent='center' alignItems='center'>
    <Box centerAnchor>
      <mesh geometry={box} />
    </Box>
    <Box centerAnchor flexGrow={1}>
      <mesh geometry={torus} />
    </Box>
  </Flex>
)

function TestingFlex() {
  return <div>TestingFlex</div>
}

export default TestingFlex
