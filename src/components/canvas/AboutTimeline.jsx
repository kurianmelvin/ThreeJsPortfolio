import { useState, createRef, Suspense } from 'react'

// import { Canvas } from '@react-three/fiber'
import { Nodes, Node } from '@/components/canvas/Nodes'

export default function AboutTimeline() {
  const [[a, b, c, d, e]] = useState(() => [...Array(5)].map(createRef))
  return (
    // <Canvas orthographic camera={{ zoom: 80 }} dpr={[1, 2]}>
    <Suspense fallback={null}>
      <group scale={10}>
        <Nodes dashed color='#ff1050' lineWidth={1}>
          <Node
            ref={a}
            name='a'
            position={[-2, 2.5, 0]}
            connectedTo={[b, c, e]}
          />
          <Node ref={b} name='b' position={[0, 1, 0]} connectedTo={[d, a]} />
          <Node ref={c} name='c' position={[-0.25, 0, 0]} />
          <Node ref={d} name='d' position={[2, 0.5, 0]} />
          <Node ref={e} name='e' position={[-0.5, -1, 0]} />
        </Nodes>
      </group>
    </Suspense>
    // </Canvas>
  )
}
