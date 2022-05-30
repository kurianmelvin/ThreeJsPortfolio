import React from 'react'

import { Text as TextImpl } from '@react-three/drei'
import { useReflow } from '@react-three/flex'

function Text({
  bold = false,
  anchorX = 'left',
  anchorY = 'top',
  textAlign = 'left',
  ...props
}) {
  const reflow = useReflow()
  const font = bold ? '/Inter-Bold.woff' : '/Inter-Regular.woff'
  return (
    <TextImpl
      anchorX={anchorX}
      anchorY={anchorY}
      textAlign={textAlign}
      font={font}
      onSync={reflow}
      {...props}
    />
  )
}

export default Text
