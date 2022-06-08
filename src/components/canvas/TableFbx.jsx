import { Suspense } from 'react'

import {
  //   Environment,
  OrbitControls,
  //   useFBX,
  useTexture,
  useCubeTexture,
} from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export default function TableFbx() {
  const fbx = useLoader(FBXLoader, '/Table_FBX.fbx')
  const [base, bump] = useTexture(['OakWood.jpg', 'wood_bump.jpg'])
  //   envMap = useCubeTexture(['OakWood.jpg', 'wood_bump.jpg'], { path: '/' })

  const materialDefault = new THREE.MeshPhongMaterial({
    map: new THREE.Texture(base),
  })

  fbx.children.forEach((mesh, i) => {
    mesh.material = materialDefault
  })
  return (
    <>
      {/* // */}

      <primitive object={fbx} scale={5} />

      {/* <OrbitControls /> */}
    </>
  )
}
