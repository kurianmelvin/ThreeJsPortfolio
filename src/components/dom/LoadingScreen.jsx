import React, { Suspense, useState, useEffect } from 'react'
import {
  Environment,
  ContactShadows,
  shaderMaterial,
  Stars,
  SpotLight,
  Sky,
  Sparkles,
  Text,
  useProgress,
  Html,
  OrbitControls,
  Loader,
} from '@react-three/drei'

//
//

function LoadingScreen() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])
  return (
    <div className='progress-bar-container'>
      <label name='progress-bar'>Loading...</label>
      <progress id='process-bar' value='0' max='100'></progress>
    </div>
  )
}

export default LoadingScreen

// const styles = StyleSheet.create({})
// example code
// import styles from "./MyComponent.module.css";

// export default function MyComponent() {
//   return (
//     <div id={styles["top-bar"]}>
//       <h2>My Component</h2>
//       <InnerComponent id="inner" />
//     </div>
//   );
// }

// function InnerComponent({ id }) {
//   return (
//     <div id={styles[id]}>
//       <h3>Inner Component</h3>
//       <p id={styles.para}>Styled Paragraph</p>
//     </div>
//   );
// }

// #top-bar {
//   width: 90vw;
//   margin: 1rem auto;
//   padding: 1rem;
//   text-align: center;
//   background-color: LightPink;
// }

// #inner {
//   background-color: LightBlue;
//   text-align: left;
// }

// #para {
//   color: red;
// }
