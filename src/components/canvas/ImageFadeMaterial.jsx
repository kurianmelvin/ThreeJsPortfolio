import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'

export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 0.5,
    dispFactor: 1,
    tex: undefined,
    tex2: undefined,
    disp: undefined,
  },
  `varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1 );
      }`,
  `varying vec2 vUv;
      uniform sampler2D tex;
      uniform sampler2D tex2;
      uniform sampler2D disp;
      uniform float _rot;
      uniform float dispFactor;
      uniform float effectFactor;
      void main() {
        vec2 uv = vUv;
        vec4 disp = texture2D(disp, uv);
        vec2 distortedPosition = vec2(uv.x, uv.y + dispFactor * (disp.r*effectFactor));
        vec2 distortedPosition2 = vec2(uv.x, uv.y - (1.0 - dispFactor) * (disp.r*effectFactor));
        vec4 _texture = texture2D(tex, distortedPosition);
        vec4 _texture2 = texture2D(tex2, distortedPosition2);
        vec4 finalTexture = mix(_texture, _texture2, dispFactor);
        gl_FragColor = finalTexture;
      
        #include <encodings_fragment>
      }`
)

extend({ ImageFadeMaterial })
// #include <tonemapping_fragment>
