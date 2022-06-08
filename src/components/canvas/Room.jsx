import React, { useRef } from 'react'

import { useGLTF, Environment } from '@react-three/drei'

export default function Room(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <Environment preset='city' />
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name='bab480ef616d4a7a8147ccd55fd2a8c6fbx'
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name='RootNode'>
              <group name='_Ventilations' rotation={[-Math.PI / 2, 0, 0]}>
                <group
                  name='Ventilation_002'
                  position={[-86.028, -64.114, 8.805]}
                  scale={[1.2, 1, 0.741]}
                >
                  <group name='Object_5' position={[102.245, -52.092, -12.44]}>
                    <mesh
                      name='Ventilation_002_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Ventilation_002_NOIR_0.geometry}
                      material={nodes.Ventilation_002_NOIR_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Ventilation_003'
                  position={[-52.027, -52.193, 8.805]}
                  rotation={[0, 0, Math.PI / 4]}
                  scale={[1, 1, 0.741]}
                >
                  <group name='Object_8' position={[102.245, -52.092, -12.44]}>
                    <mesh
                      name='Ventilation_003_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Ventilation_003_NOIR_0.geometry}
                      material={nodes.Ventilation_003_NOIR_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Ventilation_004'
                  position={[-52.027, -52.193, 190.097]}
                  rotation={[0, 0, Math.PI / 4]}
                  scale={[1, 1, 0.741]}
                >
                  <group name='Object_11' position={[102.245, -52.092, -12.44]}>
                    <mesh
                      name='Ventilation_004_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Ventilation_004_NOIR_0.geometry}
                      material={nodes.Ventilation_004_NOIR_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Ventilation_005'
                  position={[-64.309, 83.749, 8.805]}
                  scale={[1.395, 1, 0.741]}
                >
                  <group name='Object_14' position={[102.245, -52.092, -12.44]}>
                    <mesh
                      name='Ventilation_005_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Ventilation_005_NOIR_0.geometry}
                      material={nodes.Ventilation_005_NOIR_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Ventilation_006'
                  position={[-64.309, 83.749, 170.725]}
                  scale={[1.395, 1, 0.741]}
                >
                  <group name='Object_17' position={[102.245, -52.092, -12.44]}>
                    <mesh
                      name='Ventilation_006_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Ventilation_006_NOIR_0.geometry}
                      material={nodes.Ventilation_006_NOIR_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Ventilation_007'
                  position={[-88.96, 5.233, 6.682]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[1.602, 1, 0.589]}
                >
                  <group name='Object_20' position={[102.245, -52.092, -12.44]}>
                    <mesh
                      name='Ventilation_007_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Ventilation_007_NOIR_0.geometry}
                      material={nodes.Ventilation_007_NOIR_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Ventilation_001'
                  position={[150.597, -82.737, 20]}
                  rotation={[Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.639, 1, 0.588]}
                >
                  <group name='Object_23' position={[102.245, -52.092, -12.44]}>
                    <mesh
                      name='Ventilation_001_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Ventilation_001_NOIR_0.geometry}
                      material={nodes.Ventilation_001_NOIR_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Ventilation_008'
                  position={[107.271, -70.115, 57.691]}
                  scale={[1, 1, 0.741]}
                >
                  <group name='Object_26' position={[102.245, -52.092, -12.44]}>
                    <mesh
                      name='Ventilation_008_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Ventilation_008_NOIR_0.geometry}
                      material={nodes.Ventilation_008_NOIR_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Ventilation_009'
                  position={[150.597, 97.143, 20]}
                  rotation={[Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.639, 1, 0.588]}
                >
                  <group name='Object_29' position={[102.245, -52.092, -12.44]}>
                    <mesh
                      name='Ventilation_009_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Ventilation_009_NOIR_0.geometry}
                      material={nodes.Ventilation_009_NOIR_0.material}
                    />
                  </group>
                </group>
              </group>
              <group name='_Lumieres' rotation={[-Math.PI / 2, 0, 0]}>
                <group
                  name='Lumiere_001'
                  position={[-85.917, -63.603, 165.613]}
                >
                  <group name='Object_33' position={[1.437, 114.945, -96.157]}>
                    <mesh
                      name='Lumiere_001_LUMIERE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Lumiere_001_LUMIERE_0.geometry}
                      material={nodes.Lumiere_001_LUMIERE_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Lumiere_002'
                  position={[-106.801, -112.022, 187.226]}
                  rotation={[0, 0, Math.PI / 2]}
                >
                  <group name='Object_36' position={[1.437, 114.945, -96.157]}>
                    <mesh
                      name='Lumiere_002_LUMIERE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Lumiere_002_LUMIERE_0.geometry}
                      material={nodes.Lumiere_002_LUMIERE_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Lumiere_003'
                  position={[-115.522, -65.121, 86.623]}
                  rotation={[0, Math.PI / 2, 0]}
                >
                  <group name='Object_39' position={[1.437, 114.945, -96.157]}>
                    <mesh
                      name='Lumiere_003_LUMIERE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Lumiere_003_LUMIERE_0.geometry}
                      material={nodes.Lumiere_003_LUMIERE_0.material}
                    />
                  </group>
                </group>
                <group name='Lumiere_004' position={[-84.48, 54.315, 0]}>
                  <mesh
                    name='Lumiere_004_LUMIERE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Lumiere_004_LUMIERE_0.geometry}
                    material={nodes.Lumiere_004_LUMIERE_0.material}
                  />
                </group>
                <group name='Lumiere_005' position={[-84.48, 54.315, 0]}>
                  <mesh
                    name='Lumiere_005_LUMIERE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Lumiere_005_LUMIERE_0.geometry}
                    material={nodes.Lumiere_005_LUMIERE_0.material}
                  />
                </group>
                <group name='Lumiere_006' position={[0, 0, -20]}>
                  <mesh
                    name='Lumiere_006_LUMIERE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Lumiere_006_LUMIERE_0.geometry}
                    material={nodes.Lumiere_006_LUMIERE_0.material}
                  />
                </group>
                <group
                  name='Lumiere_007'
                  position={[-40.484, 26.65, 209.078]}
                  rotation={[0, 0, Math.PI / 2]}
                >
                  <group name='Object_48' position={[1.437, 114.945, -96.157]}>
                    <mesh
                      name='Lumiere_007_LUMIERE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Lumiere_007_LUMIERE_0.geometry}
                      material={nodes.Lumiere_007_LUMIERE_0.material}
                    />
                  </group>
                </group>
                <group name='Lumiere_008' position={[47.113, 105.031, 210.561]}>
                  <group name='Object_51' position={[8.729, 114.945, -94.493]}>
                    <mesh
                      name='Lumiere_008_LUMIERE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Lumiere_008_LUMIERE_0.geometry}
                      material={nodes.Lumiere_008_LUMIERE_0.material}
                    />
                  </group>
                </group>
                <group name='Lumiere_009' position={[53.635, 117.413, 139.593]}>
                  <group
                    name='Object_54'
                    position={[-94.493, 114.946, -3.646]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name='Lumiere_009_LUMIERE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Lumiere_009_LUMIERE_0.geometry}
                      material={nodes.Lumiere_009_LUMIERE_0.material}
                    />
                  </group>
                </group>
                <group name='Lumiere_010' position={[-31.35, 117.413, 139.593]}>
                  <group
                    name='Object_57'
                    position={[-94.493, 114.946, -3.646]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name='Lumiere_010_LUMIERE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Lumiere_010_LUMIERE_0.geometry}
                      material={nodes.Lumiere_010_LUMIERE_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Lumiere_011'
                  position={[140.292, 117.413, 139.593]}
                >
                  <group
                    name='Object_60'
                    position={[-94.493, 114.946, -3.646]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name='Lumiere_011_LUMIERE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Lumiere_011_LUMIERE_0.geometry}
                      material={nodes.Lumiere_011_LUMIERE_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Lumiere_012'
                  position={[144.472, 39.083, 40.417]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group
                    name='Object_63'
                    position={[-94.493, 114.946, -3.646]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name='Lumiere_012_LUMIERE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Lumiere_012_LUMIERE_0.geometry}
                      material={nodes.Lumiere_012_LUMIERE_0.material}
                    />
                  </group>
                </group>
                <group name='Lumiere_013' position={[1.542, 115.295, 66.078]}>
                  <group name='Object_66' position={[54.3, 114.945, -93.101]}>
                    <mesh
                      name='Lumiere_013_LUMIERE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Lumiere_013_LUMIERE_0.geometry}
                      material={nodes.Lumiere_013_LUMIERE_0.material}
                    />
                  </group>
                </group>
                <group name='Lumiere_014' position={[1.542, 115.295, 66.078]}>
                  <group name='Object_69' position={[54.3, 114.945, -93.101]}>
                    <mesh
                      name='Lumiere_014_LUMIERE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Lumiere_014_LUMIERE_0.geometry}
                      material={nodes.Lumiere_014_LUMIERE_0.material}
                    />
                  </group>
                </group>
                <group name='Lumiere_015' position={[1.542, 115.295, 66.078]}>
                  <group name='Object_72' position={[54.3, 114.945, -93.101]}>
                    <mesh
                      name='Lumiere_015_LUMIERE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Lumiere_015_LUMIERE_0.geometry}
                      material={nodes.Lumiere_015_LUMIERE_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Lumiere_016'
                  position={[-93.47, 42.158, 46.43]}
                  rotation={[0, -Math.PI / 4, Math.PI / 2]}
                >
                  <group name='Object_75' position={[-12.3, 114.636, -95.922]}>
                    <mesh
                      name='Lumiere_016_LUMIERE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Lumiere_016_LUMIERE_0.geometry}
                      material={nodes.Lumiere_016_LUMIERE_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Lumiere_017'
                  position={[-93.47, 47.537, 46.43]}
                  rotation={[0, -Math.PI / 4, Math.PI / 2]}
                >
                  <group name='Object_78' position={[-12.3, 114.636, -95.922]}>
                    <mesh
                      name='Lumiere_017_LUMIERE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Lumiere_017_LUMIERE_0.geometry}
                      material={nodes.Lumiere_017_LUMIERE_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Lumiere_018'
                  position={[-93.47, 25.21, 46.43]}
                  rotation={[0, -Math.PI / 4, Math.PI / 2]}
                >
                  <group name='Object_81' position={[-12.3, 114.636, -95.922]}>
                    <mesh
                      name='Lumiere_018_LUMIERE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Lumiere_018_LUMIERE_0.geometry}
                      material={nodes.Lumiere_018_LUMIERE_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Lumiere_019'
                  position={[-93.47, 30.588, 46.43]}
                  rotation={[0, -Math.PI / 4, Math.PI / 2]}
                >
                  <group name='Object_84' position={[-12.3, 114.636, -95.922]}>
                    <mesh
                      name='Lumiere_019_LUMIERE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Lumiere_019_LUMIERE_0.geometry}
                      material={nodes.Lumiere_019_LUMIERE_0.material}
                    />
                  </group>
                </group>
                <group name='Lumiere_020' position={[105, 7.143, 0]}>
                  <mesh
                    name='Lumiere_020_LUMIERE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Lumiere_020_LUMIERE_0.geometry}
                    material={nodes.Lumiere_020_LUMIERE_0.material}
                  />
                </group>
              </group>
              <group name='_Chambre' rotation={[-Math.PI / 2, 0, 0]}>
                <group name='Lit_ORANGE' position={[105, 7.143, 0]}>
                  <group
                    name='Lit_GRIS'
                    position={[2.5, 43.292, 28.73]}
                    scale={[1.02, 1, 1]}
                  >
                    <group name='Object_92' position={[-2.5, -43.292, -32.035]}>
                      <mesh
                        name='Lit_GRIS_GRIS_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.Lit_GRIS_GRIS_0.geometry}
                        material={nodes.Lit_GRIS_GRIS_0.material}
                      />
                    </group>
                  </group>
                  <group
                    name='Lit_NOIR'
                    position={[2.5, -12.021, 28.269]}
                    scale={[1.02, 1, 1]}
                  >
                    <group name='Object_95' position={[-2.5, 12.021, -30.449]}>
                      <mesh
                        name='Lit_NOIR_NOIR_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.Lit_NOIR_NOIR_0.geometry}
                        material={nodes.Lit_NOIR_NOIR_0.material}
                      />
                    </group>
                  </group>
                  <group
                    name='Lit_BLANC'
                    position={[2.5, 64.962, 30.079]}
                    scale={[1.02, 1, 1]}
                  >
                    <group name='Object_98' position={[-2.5, -64.962, -30.079]}>
                      <mesh
                        name='Lit_BLANC_BLANC_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.Lit_BLANC_BLANC_0.geometry}
                        material={nodes.Lit_BLANC_BLANC_0.material}
                      />
                    </group>
                  </group>
                  <mesh
                    name='Lit_ORANGE_ORANGE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Lit_ORANGE_ORANGE_0.geometry}
                    material={nodes.Lit_ORANGE_ORANGE_0.material}
                  />
                </group>
                <group name='Tele_NOIR' position={[107.5, -68.708, 35]}>
                  <group name='Object_101' position={[-2.5, 75.851, 0]}>
                    <mesh
                      name='Tele_NOIR_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Tele_NOIR_NOIR_0.geometry}
                      material={nodes.Tele_NOIR_NOIR_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Tapis_03_ORANGE'
                  position={[-86.89, -108.643, 0.361]}
                >
                  <group name='Object_104' position={[7.238, 0.151, -0.5]}>
                    <mesh
                      name='Tapis_03_ORANGE_ORANGE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Tapis_03_ORANGE_ORANGE_0.geometry}
                      material={nodes.Tapis_03_ORANGE_ORANGE_0.material}
                    />
                  </group>
                </group>
                <group name='Tapis_02_BLEU' position={[-64.462, 27.954, 0.361]}>
                  <group name='Object_107' position={[0, 20.674, -0.5]}>
                    <mesh
                      name='Tapis_02_BLEU_BLEU_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Tapis_02_BLEU_BLEU_0.geometry}
                      material={nodes.Tapis_02_BLEU_BLEU_0.material}
                    />
                  </group>
                </group>
                <group name='Tapis_01_BLEU' position={[20.417, -22.823, 0.361]}>
                  <group name='Object_110' position={[0, 0, -0.5]}>
                    <mesh
                      name='Tapis_01_BLEU_BLEU_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Tapis_01_BLEU_BLEU_0.geometry}
                      material={nodes.Tapis_01_BLEU_BLEU_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Caisse_03_BLANC'
                  position={[105.676, -117.576, 20]}
                >
                  <group name='Object_113' position={[-128.571, 128.571, -40]}>
                    <mesh
                      name='Caisse_03_BLANC_BLANC_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Caisse_03_BLANC_BLANC_0.geometry}
                      material={nodes.Caisse_03_BLANC_BLANC_0.material}
                    />
                  </group>
                  <group name='Caisse_03_NOIR'>
                    <group
                      name='Object_116'
                      position={[-128.571, 128.571, -40]}
                    >
                      <mesh
                        name='Caisse_03_NOIR_NOIR_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.Caisse_03_NOIR_NOIR_0.geometry}
                        material={nodes.Caisse_03_NOIR_NOIR_0.material}
                      />
                    </group>
                  </group>
                </group>
                <group name='Caisse_02_BLANC' position={[82.129, -120.601, 0]}>
                  <group name='Object_119' position={[-128.571, 128.571, -40]}>
                    <mesh
                      name='Caisse_02_BLANC_BLANC_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Caisse_02_BLANC_BLANC_0.geometry}
                      material={nodes.Caisse_02_BLANC_BLANC_0.material}
                    />
                  </group>
                  <group name='Caisse_02_NOIR'>
                    <group
                      name='Object_122'
                      position={[-128.571, 128.571, -40]}
                    >
                      <mesh
                        name='Caisse_02_NOIR_NOIR_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.Caisse_02_NOIR_NOIR_0.geometry}
                        material={nodes.Caisse_02_NOIR_NOIR_0.material}
                      />
                    </group>
                  </group>
                </group>
                <group name='Caisse_01_BLANC' position={[128.571, -114.218, 0]}>
                  <group name='Object_125' position={[-128.571, 128.571, -40]}>
                    <mesh
                      name='Caisse_01_BLANC_BLANC_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Caisse_01_BLANC_BLANC_0.geometry}
                      material={nodes.Caisse_01_BLANC_BLANC_0.material}
                    />
                  </group>
                  <group name='Caisse_01_NOIR'>
                    <group
                      name='Object_128'
                      position={[-128.571, 128.571, -40]}
                    >
                      <mesh
                        name='Caisse_01_NOIR_NOIR_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.Caisse_01_NOIR_NOIR_0.geometry}
                        material={nodes.Caisse_01_NOIR_NOIR_0.material}
                      />
                    </group>
                  </group>
                </group>
                <group name='Bac_fleurs_BLANC' position={[0, 0, -40]}>
                  <group name='Plante_VERT' position={[3.247, 91.751, 84.701]}>
                    <group name='Object_133' position={[24.523, 20.24, -2.729]}>
                      <mesh
                        name='Plante_VERT_VERT_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.Plante_VERT_VERT_0.geometry}
                        material={nodes.Plante_VERT_VERT_0.material}
                      />
                    </group>
                  </group>
                  <mesh
                    name='Bac_fleurs_BLANC_BLANC_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Bac_fleurs_BLANC_BLANC_0.geometry}
                    material={nodes.Bac_fleurs_BLANC_BLANC_0.material}
                  />
                </group>
                <group name='Carres_muraux_GRIS' position={[0, 0, -40]}>
                  <group name='Prise_murale_NOIR'>
                    <group
                      name='Cable_charge_NOIR'
                      position={[58.157, 97.275, 40]}
                    >
                      <mesh
                        name='Cable_charge_NOIR_NOIR_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.Cable_charge_NOIR_NOIR_0.geometry}
                        material={nodes.Cable_charge_NOIR_NOIR_0.material}
                      />
                    </group>
                    <mesh
                      name='Prise_murale_NOIR_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Prise_murale_NOIR_NOIR_0.geometry}
                      material={nodes.Prise_murale_NOIR_NOIR_0.material}
                    />
                  </group>
                  <mesh
                    name='Carres_muraux_GRIS_GRIS_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Carres_muraux_GRIS_GRIS_0.geometry}
                    material={nodes.Carres_muraux_GRIS_GRIS_0.material}
                  />
                </group>
                <group name='Fenetres_VITRE' position={[0, 0, -40]}>
                  <mesh
                    name='Fenetres_VITRE_VITRE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Fenetres_VITRE_VITRE_0.geometry}
                    material={nodes.Fenetres_VITRE_VITRE_0.material}
                  />
                </group>
                <group name='Stores_NOIR' position={[0, 0, 17.931]}>
                  <mesh
                    name='Stores_NOIR_NOIR_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Stores_NOIR_NOIR_0.geometry}
                    material={nodes.Stores_NOIR_NOIR_0.material}
                  />
                </group>
                <group name='Tablette_NOIR' position={[105, 7.143, 0]}>
                  <mesh
                    name='Tablette_NOIR_NOIR_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Tablette_NOIR_NOIR_0.geometry}
                    material={nodes.Tablette_NOIR_NOIR_0.material}
                  />
                </group>
                <group name='Tasse_BLANC' position={[75.926, 94.756, 39.907]}>
                  <mesh
                    name='Tasse_BLANC_BLANC_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Tasse_BLANC_BLANC_0.geometry}
                    material={nodes.Tasse_BLANC_BLANC_0.material}
                  />
                </group>
                <group name='Vetement_001' position={[-95.968, -47.692, 88.1]}>
                  <group name='Object_150' position={[22.165, 98.696, -88.1]}>
                    <mesh
                      name='Vetement_001_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Vetement_001_NOIR_0.geometry}
                      material={nodes.Vetement_001_NOIR_0.material}
                    />
                  </group>
                </group>
                <group name='Vetement_002' position={[-85.782, -47.692, 88.1]}>
                  <group name='Object_153' position={[22.165, 98.696, -88.1]}>
                    <mesh
                      name='Vetement_002_GRIS_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Vetement_002_GRIS_0.geometry}
                      material={nodes.Vetement_002_GRIS_0.material}
                    />
                  </group>
                </group>
                <group name='Vetement_003' position={[-75.693, -47.692, 88.1]}>
                  <group name='Object_156' position={[22.165, 98.696, -88.1]}>
                    <mesh
                      name='Vetement_003_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Vetement_003_NOIR_0.geometry}
                      material={nodes.Vetement_003_NOIR_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Vetement_004'
                  position={[-93.918, -44.771, 21.923]}
                  scale={[1.15, 1, 1]}
                >
                  <group name='Object_159' position={[7.449, 98.696, -18.004]}>
                    <mesh
                      name='Vetement_004_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Vetement_004_NOIR_0.geometry}
                      material={nodes.Vetement_004_NOIR_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Vetement_005'
                  position={[-93.57, -44.38, 18.004]}
                  scale={[1.15, 1, 1]}
                >
                  <group name='Object_162' position={[7.449, 98.696, -18.004]}>
                    <mesh
                      name='Vetement_005_ORANGE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Vetement_005_ORANGE_0.geometry}
                      material={nodes.Vetement_005_ORANGE_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Vetement_006'
                  position={[-78.721, -45.113, 18.004]}
                  scale={[1.15, 1, 1]}
                >
                  <group name='Object_165' position={[7.449, 98.696, -18.004]}>
                    <mesh
                      name='Vetement_006_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Vetement_006_NOIR_0.geometry}
                      material={nodes.Vetement_006_NOIR_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Vetement_007'
                  position={[-78.709, -44.585, 21.923]}
                  scale={[1.15, 1, 1]}
                >
                  <group name='Object_168' position={[7.449, 98.696, -18.004]}>
                    <mesh
                      name='Vetement_007_GRIS_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Vetement_007_GRIS_0.geometry}
                      material={nodes.Vetement_007_GRIS_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Tringle_METAL'
                  position={[-69.563, -47.264, 146.102]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                  <mesh
                    name='Tringle_METAL_METAL_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Tringle_METAL_METAL_0.geometry}
                    material={nodes.Tringle_METAL_METAL_0.material}
                  />
                </group>
              </group>
              <group name='_Cuisine' rotation={[-Math.PI / 2, 0, 0]}>
                <group name='Plan_travail_NOIR' position={[-84.48, 54.315, 0]}>
                  <mesh
                    name='Plan_travail_NOIR_NOIR_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Plan_travail_NOIR_NOIR_0.geometry}
                    material={nodes.Plan_travail_NOIR_NOIR_0.material}
                  />
                </group>
                <group name='Facade_BLANC' position={[-84.48, 54.315, 0]}>
                  <group
                    name='Poignee_facade_METAL'
                    position={[-2.894, 3.592, 31.949]}
                  >
                    <group
                      name='Object_178'
                      position={[2.894, -3.592, -51.949]}
                    >
                      <mesh
                        name='Poignee_facade_METAL_METAL_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.Poignee_facade_METAL_METAL_0.geometry}
                        material={nodes.Poignee_facade_METAL_METAL_0.material}
                      />
                    </group>
                    <group
                      name='Torchon_ORANGE'
                      position={[6.682, -1.849, -2.326]}
                      rotation={[Math.PI / 2, 0, 0]}
                    >
                      <mesh
                        name='Torchon_ORANGE_ORANGE_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.Torchon_ORANGE_ORANGE_0.geometry}
                        material={nodes.Torchon_ORANGE_ORANGE_0.material}
                      />
                    </group>
                  </group>
                  <mesh
                    name='Facade_BLANC_BLANC_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Facade_BLANC_BLANC_0.geometry}
                    material={nodes.Facade_BLANC_BLANC_0.material}
                  />
                </group>
                <group name='Evier_METAL' position={[-84.48, 54.315, 0]}>
                  <mesh
                    name='Evier_METAL_METAL_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Evier_METAL_METAL_0.geometry}
                    material={nodes.Evier_METAL_METAL_0.material}
                  />
                </group>
                <group name='Robinet_METAL' position={[-84.48, 54.315, 0]}>
                  <mesh
                    name='Robinet_METAL_METAL_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Robinet_METAL_METAL_0.geometry}
                    material={nodes.Robinet_METAL_METAL_0.material}
                  />
                </group>
                <group name='Four_NOIR' position={[-84.48, 54.315, 0]}>
                  <group name='Four_VITRE'>
                    <mesh
                      name='Four_VITRE_VITRE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Four_VITRE_VITRE_0.geometry}
                      material={nodes.Four_VITRE_VITRE_0.material}
                    />
                  </group>
                  <group
                    name='Grille_four_METAL'
                    position={[-21.431, -49.299, 25.746]}
                  >
                    <group
                      name='Object_191'
                      position={[21.431, 49.299, -36.601]}
                    >
                      <mesh
                        name='Grille_four_METAL_METAL_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.Grille_four_METAL_METAL_0.geometry}
                        material={nodes.Grille_four_METAL_METAL_0.material}
                      />
                    </group>
                  </group>
                  <mesh
                    name='Four_NOIR_NOIR_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Four_NOIR_NOIR_0.geometry}
                    material={nodes.Four_NOIR_NOIR_0.material}
                  />
                </group>
                <group name='Credance_ORANGE' position={[-84.48, 54.315, 0]}>
                  <mesh
                    name='Credance_ORANGE_ORANGE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Credance_ORANGE_ORANGE_0.geometry}
                    material={nodes.Credance_ORANGE_ORANGE_0.material}
                  />
                </group>
                <group
                  name='Poignee_03_METAL'
                  position={[-51.438, 81.091, 58.886]}
                >
                  <group
                    name='Object_196'
                    position={[-33.042, -26.775, -58.886]}
                  >
                    <mesh
                      name='Poignee_03_METAL_METAL_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Poignee_03_METAL_METAL_0.geometry}
                      material={nodes.Poignee_03_METAL_METAL_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Poignee_02_METAL'
                  position={[-54.738, 81.091, 132.453]}
                >
                  <group
                    name='Object_199'
                    position={[-29.742, -26.775, -55.884]}
                  >
                    <mesh
                      name='Poignee_02_METAL_METAL_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Poignee_02_METAL_METAL_0.geometry}
                      material={nodes.Poignee_02_METAL_METAL_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Poignee_01_METAL'
                  position={[-100.336, 57.72, 127.106]}
                  rotation={[0, 0, Math.PI / 2]}
                >
                  <group
                    name='Object_202'
                    position={[-29.742, -26.775, -55.884]}
                  >
                    <mesh
                      name='Poignee_01_METAL_METAL_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Poignee_01_METAL_METAL_0.geometry}
                      material={nodes.Poignee_01_METAL_METAL_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Poignee_04_METAL'
                  position={[-100.336, 4.508, 127.106]}
                  rotation={[0, 0, Math.PI / 2]}
                >
                  <group
                    name='Object_205'
                    position={[-29.742, -26.775, -55.884]}
                  >
                    <mesh
                      name='Poignee_04_METAL_METAL_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Poignee_04_METAL_METAL_0.geometry}
                      material={nodes.Poignee_04_METAL_METAL_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Casserole_METAL'
                  position={[-115.585, 65.332, 35.249]}
                  rotation={[0, 0, -0.087]}
                >
                  <mesh
                    name='Casserole_METAL_METAL_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Casserole_METAL_METAL_0.geometry}
                    material={nodes.Casserole_METAL_METAL_0.material}
                  />
                </group>
                <group name='Gobelet_VITRE' position={[-130.742, 80.95, 49.89]}>
                  <mesh
                    name='Gobelet_VITRE_VITRE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Gobelet_VITRE_VITRE_0.geometry}
                    material={nodes.Gobelet_VITRE_VITRE_0.material}
                  />
                </group>
              </group>
              <group name='_Post_it' rotation={[-Math.PI / 2, 0, 0]}>
                <group
                  name='Post_it_009'
                  position={[113.771, 113.876, 72.938]}
                  rotation={[-Math.PI / 6, -0.175, 0]}
                >
                  <group name='Object_213' position={[42.857, 85.714, -40]}>
                    <mesh
                      name='Post_it_009_GRIS_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Post_it_009_GRIS_0.geometry}
                      material={nodes.Post_it_009_GRIS_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Post_it_008'
                  position={[93.149, 111.031, 68.01]}
                  rotation={[-Math.PI / 6, -0.087, 0]}
                >
                  <group name='Object_216' position={[42.857, 85.714, -40]}>
                    <mesh
                      name='Post_it_008_VERT_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Post_it_008_VERT_0.geometry}
                      material={nodes.Post_it_008_VERT_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Post_it_007'
                  position={[87.306, 113.695, 72.624]}
                  rotation={[-Math.PI / 6, Math.PI / 9, 0]}
                >
                  <group name='Object_219' position={[42.857, 85.714, -40]}>
                    <mesh
                      name='Post_it_007_JAUNE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Post_it_007_JAUNE_0.geometry}
                      material={nodes.Post_it_007_JAUNE_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Post_it_006'
                  position={[-53.541, -53.129, 62.231]}
                  rotation={[0.388, -0.361, 0.857]}
                >
                  <group name='Object_222' position={[42.857, 85.714, -40]}>
                    <mesh
                      name='Post_it_006_VERT_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Post_it_006_VERT_0.geometry}
                      material={nodes.Post_it_006_VERT_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Post_it_005'
                  position={[-57.555, -57.142, 68.678]}
                  rotation={[0, 0, Math.PI / 4]}
                >
                  <group name='Object_225' position={[42.857, 85.714, -40]}>
                    <mesh
                      name='Post_it_005_BLEU_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Post_it_005_BLEU_0.geometry}
                      material={nodes.Post_it_005_BLEU_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Post_it_004'
                  position={[-69.832, 82.835, 68.678]}
                  rotation={[0, 0.175, 0]}
                >
                  <group name='Object_228' position={[42.857, 85.714, -40]}>
                    <mesh
                      name='Post_it_004_GRIS_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Post_it_004_GRIS_0.geometry}
                      material={nodes.Post_it_004_GRIS_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Post_it_003'
                  position={[-61.868, 82.835, 82.127]}
                  rotation={[0, -0.087, 0]}
                >
                  <group name='Object_231' position={[42.857, 85.714, -40]}>
                    <mesh
                      name='Post_it_003_VERT_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Post_it_003_VERT_0.geometry}
                      material={nodes.Post_it_003_VERT_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Post_it_002'
                  position={[-73.89, 82.835, 83.77]}
                  rotation={[0, 0.087, 0]}
                >
                  <group name='Object_234' position={[42.857, 85.714, -40]}>
                    <mesh
                      name='Post_it_002_JAUNE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Post_it_002_JAUNE_0.geometry}
                      material={nodes.Post_it_002_JAUNE_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Post_it_001'
                  position={[-58.634, 82.835, 98.801]}
                  rotation={[0, -0.262, 0]}
                >
                  <group name='Object_237' position={[42.857, 85.714, -40]}>
                    <mesh
                      name='Post_it_001_BLEU_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Post_it_001_BLEU_0.geometry}
                      material={nodes.Post_it_001_BLEU_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Post_it_010'
                  position={[64.397, 44.807, 40.085]}
                  rotation={[-Math.PI / 2, -0.262, 0]}
                >
                  <group name='Object_240' position={[42.857, 85.714, -40]}>
                    <mesh
                      name='Post_it_010_JAUNE_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Post_it_010_JAUNE_0.geometry}
                      material={nodes.Post_it_010_JAUNE_0.material}
                    />
                  </group>
                </group>
                <group
                  name='Post_it_011'
                  position={[58.877, 37.49, 40.085]}
                  rotation={[-Math.PI / 2, 0.175, 0]}
                >
                  <group name='Object_243' position={[42.857, 85.714, -40]}>
                    <mesh
                      name='Post_it_011_BLEU_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Post_it_011_BLEU_0.geometry}
                      material={nodes.Post_it_011_BLEU_0.material}
                    />
                  </group>
                </group>
              </group>
              <group name='_Base' rotation={[-Math.PI / 2, 0, 0]}>
                <group name='Porte_ORANGE' position={[0, 0, -40]}>
                  <group
                    name='Battant_Porte_ORANGE'
                    position={[-128.234, -31.106, 132.474]}
                  >
                    <group
                      name='Object_249'
                      position={[128.234, 114.737, -132.474]}
                    >
                      <mesh
                        name='Battant_Porte_ORANGE_ORANGE_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.Battant_Porte_ORANGE_ORANGE_0.geometry}
                        material={nodes.Battant_Porte_ORANGE_ORANGE_0.material}
                      />
                    </group>
                  </group>
                  <group name='Panneau_porte_NOIR' position={[0, 0, 20]}>
                    <mesh
                      name='Panneau_porte_NOIR_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Panneau_porte_NOIR_NOIR_0.geometry}
                      material={nodes.Panneau_porte_NOIR_NOIR_0.material}
                    />
                  </group>
                  <group name='Panneau_porte_GRIS' position={[0, 0, 20]}>
                    <mesh
                      name='Panneau_porte_GRIS_GRIS_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Panneau_porte_GRIS_GRIS_0.geometry}
                      material={nodes.Panneau_porte_GRIS_GRIS_0.material}
                    />
                  </group>
                  <mesh
                    name='Porte_ORANGE_ORANGE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Porte_ORANGE_ORANGE_0.geometry}
                    material={nodes.Porte_ORANGE_ORANGE_0.material}
                  />
                </group>
                <group name='Mur_BLANC' position={[-84.48, 54.315, 0]}>
                  <group name='Mur_GRIS'>
                    <mesh
                      name='Mur_GRIS_GRIS_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Mur_GRIS_GRIS_0.geometry}
                      material={nodes.Mur_GRIS_GRIS_0.material}
                    />
                  </group>
                  <group name='Toit_NOIR'>
                    <mesh
                      name='Toit_NOIR_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Toit_NOIR_NOIR_0.geometry}
                      material={nodes.Toit_NOIR_NOIR_0.material}
                    />
                  </group>
                  <mesh
                    name='Mur_BLANC_BLANC_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Mur_BLANC_BLANC_0.geometry}
                    material={nodes.Mur_BLANC_BLANC_0.material}
                  />
                </group>
                <group name='Sous_mur_ORANGE' position={[166.46, 148.61, 0]}>
                  <mesh
                    name='Sous_mur_ORANGE_ORANGE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Sous_mur_ORANGE_ORANGE_0.geometry}
                    material={nodes.Sous_mur_ORANGE_ORANGE_0.material}
                  />
                </group>
                <group name='Socle_GRIS'>
                  <group name='Object_264' position={[0, 0, -40]}>
                    <mesh
                      name='Socle_GRIS_GRIS_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Socle_GRIS_GRIS_0.geometry}
                      material={nodes.Socle_GRIS_GRIS_0.material}
                    />
                  </group>
                </group>
                <group name='Sous_socle_NOIR'>
                  <group name='Object_267' position={[0, 0, -40]}>
                    <mesh
                      name='Sous_socle_NOIR_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Sous_socle_NOIR_NOIR_0.geometry}
                      material={nodes.Sous_socle_NOIR_NOIR_0.material}
                    />
                  </group>
                </group>
                <group name='Fenetres_BLANC' position={[0, 0, -40]}>
                  <mesh
                    name='Fenetres_BLANC_BLANC_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Fenetres_BLANC_BLANC_0.geometry}
                    material={nodes.Fenetres_BLANC_BLANC_0.material}
                  />
                </group>
                <group name='Damier_NOIR'>
                  <group name='Object_272' position={[0, 0, -40]}>
                    <mesh
                      name='Damier_NOIR_NOIR_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Damier_NOIR_NOIR_0.geometry}
                      material={nodes.Damier_NOIR_NOIR_0.material}
                    />
                  </group>
                </group>
                <group name='Panneau_mur_NOIR' position={[-84.48, 54.315, 0]}>
                  <mesh
                    name='Panneau_mur_NOIR_NOIR_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Panneau_mur_NOIR_NOIR_0.geometry}
                    material={nodes.Panneau_mur_NOIR_NOIR_0.material}
                  />
                </group>
              </group>
              <group name='_Livres' rotation={[-Math.PI / 2, 0, 0]}>
                <group
                  name='Livre_001'
                  position={[144.037, 97.431, 40.261]}
                  rotation={[0, -0.262, 0]}
                  scale={0.819}
                >
                  <group name='Pages_BLANC_001'>
                    <mesh
                      name='Pages_BLANC_001_BLANC_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Pages_BLANC_001_BLANC_0.geometry}
                      material={nodes.Pages_BLANC_001_BLANC_0.material}
                    />
                  </group>
                  <mesh
                    name='Livre_001_BLEU_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Livre_001_BLEU_0.geometry}
                    material={nodes.Livre_001_BLEU_0.material}
                  />
                </group>
                <group
                  name='Livre_002'
                  position={[136.576, 97.431, 40.092]}
                  scale={0.819}
                >
                  <group name='Pages_BLANC_002'>
                    <mesh
                      name='Pages_BLANC_002_BLANC_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Pages_BLANC_002_BLANC_0.geometry}
                      material={nodes.Pages_BLANC_002_BLANC_0.material}
                    />
                  </group>
                  <mesh
                    name='Livre_002_JAUNE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Livre_002_JAUNE_0.geometry}
                    material={nodes.Livre_002_JAUNE_0.material}
                  />
                </group>
                <group name='Livre_003' position={[132.699, 97.431, 40.092]}>
                  <group name='Pages_BLANC_003'>
                    <mesh
                      name='Pages_BLANC_003_BLANC_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Pages_BLANC_003_BLANC_0.geometry}
                      material={nodes.Pages_BLANC_003_BLANC_0.material}
                    />
                  </group>
                  <mesh
                    name='Livre_003_VERT_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Livre_003_VERT_0.geometry}
                    material={nodes.Livre_003_VERT_0.material}
                  />
                </group>
                <group
                  name='Livre_004'
                  position={[128.899, 97.431, 40.092]}
                  scale={0.819}
                >
                  <group name='Pages_BLANC_004'>
                    <mesh
                      name='Pages_BLANC_004_BLANC_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Pages_BLANC_004_BLANC_0.geometry}
                      material={nodes.Pages_BLANC_004_BLANC_0.material}
                    />
                  </group>
                  <mesh
                    name='Livre_004_NOIR_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Livre_004_NOIR_0.geometry}
                    material={nodes.Livre_004_NOIR_0.material}
                  />
                </group>
                <group
                  name='Livre_005'
                  position={[125.412, 97.431, 40.092]}
                  scale={0.819}
                >
                  <group name='Pages_BLANC_005'>
                    <mesh
                      name='Pages_BLANC_005_BLANC_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Pages_BLANC_005_BLANC_0.geometry}
                      material={nodes.Pages_BLANC_005_BLANC_0.material}
                    />
                  </group>
                  <mesh
                    name='Livre_005_GRIS_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Livre_005_GRIS_0.geometry}
                    material={nodes.Livre_005_GRIS_0.material}
                  />
                </group>
                <group
                  name='Livre_006'
                  position={[115.354, 97.431, 40.355]}
                  rotation={[0, 0.436, 0]}
                  scale={[0.819, 0.819, 0.819]}
                >
                  <group name='Pages_BLANC_006'>
                    <mesh
                      name='Pages_BLANC_006_BLANC_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Pages_BLANC_006_BLANC_0.geometry}
                      material={nodes.Pages_BLANC_006_BLANC_0.material}
                    />
                  </group>
                  <mesh
                    name='Livre_006_VERT_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Livre_006_VERT_0.geometry}
                    material={nodes.Livre_006_VERT_0.material}
                  />
                </group>
                <group
                  name='Livre_007'
                  position={[111.662, 96.997, 49.906]}
                  rotation={[-Math.PI / 2, -1.484, -Math.PI / 2]}
                  scale={[1, 0.64, 0.64]}
                >
                  <group name='Pages_BLANC_007'>
                    <mesh
                      name='Pages_BLANC_007_BLANC_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Pages_BLANC_007_BLANC_0.geometry}
                      material={nodes.Pages_BLANC_007_BLANC_0.material}
                    />
                  </group>
                  <mesh
                    name='Livre_007_JAUNE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Livre_007_JAUNE_0.geometry}
                    material={nodes.Livre_007_JAUNE_0.material}
                  />
                </group>
                <group
                  name='Livre_008'
                  position={[111.662, 96.997, 45.896]}
                  rotation={[Math.PI / 2, -1.484, Math.PI / 2]}
                  scale={[1, 0.8, 0.8]}
                >
                  <group name='Pages_BLANC_008'>
                    <mesh
                      name='Pages_BLANC_008_BLANC_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Pages_BLANC_008_BLANC_0.geometry}
                      material={nodes.Pages_BLANC_008_BLANC_0.material}
                    />
                  </group>
                  <mesh
                    name='Livre_008_BLEU_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Livre_008_BLEU_0.geometry}
                    material={nodes.Livre_008_BLEU_0.material}
                  />
                </group>
                <group
                  name='Livre_009'
                  position={[113.662, 96.997, 41.879]}
                  rotation={[0, -Math.PI / 2, 0]}
                >
                  <group name='Pages_BLANC_009'>
                    <mesh
                      name='Pages_BLANC_009_BLANC_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Pages_BLANC_009_BLANC_0.geometry}
                      material={nodes.Pages_BLANC_009_BLANC_0.material}
                    />
                  </group>
                  <mesh
                    name='Livre_009_BLEU_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Livre_009_BLEU_0.geometry}
                    material={nodes.Livre_009_BLEU_0.material}
                  />
                </group>
                <group
                  name='Livre_010'
                  position={[94.681, 14.568, 34.203]}
                  rotation={[-1.706, 0.239, -1.539]}
                >
                  <group name='Pages_BLANC_010'>
                    <mesh
                      name='Pages_BLANC_010_BLANC_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Pages_BLANC_010_BLANC_0.geometry}
                      material={nodes.Pages_BLANC_010_BLANC_0.material}
                    />
                  </group>
                  <mesh
                    name='Livre_010_ORANGE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Livre_010_ORANGE_0.geometry}
                    material={nodes.Livre_010_ORANGE_0.material}
                  />
                </group>
              </group>
              <group name='_Boites' rotation={[-Math.PI / 2, 0, 0]}>
                <group
                  name='Boite_009'
                  position={[-105.098, 88.368, 74.785]}
                  rotation={[0, 0, -0.087]}
                >
                  <mesh
                    name='Boite_009_NOIR_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Boite_009_NOIR_0.geometry}
                    material={nodes.Boite_009_NOIR_0.material}
                  />
                </group>
                <group name='Boite_001' position={[-101.379, 91.568, 74.785]}>
                  <mesh
                    name='Boite_001_ORANGE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Boite_001_ORANGE_0.geometry}
                    material={nodes.Boite_001_ORANGE_0.material}
                  />
                </group>
                <group name='Boite_002' position={[-109.061, 87.61, 74.806]}>
                  <mesh
                    name='Boite_002_JAUNE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Boite_002_JAUNE_0.geometry}
                    material={nodes.Boite_002_JAUNE_0.material}
                  />
                </group>
                <group name='Boite_003' position={[-114, 88.269, 74.746]}>
                  <mesh
                    name='Boite_003_METAL_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Boite_003_METAL_0.geometry}
                    material={nodes.Boite_003_METAL_0.material}
                  />
                </group>
                <group
                  name='Boite_004'
                  position={[-110.872, 94.809, 74.785]}
                  rotation={[0, 0, -0.175]}
                >
                  <mesh
                    name='Boite_004_BLEU_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Boite_004_BLEU_0.geometry}
                    material={nodes.Boite_004_BLEU_0.material}
                  />
                </group>
                <group
                  name='Boite_005'
                  position={[-108.827, 95.087, 81.713]}
                  rotation={[0, 0, 0.175]}
                >
                  <mesh
                    name='Boite_005_VERT_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Boite_005_VERT_0.geometry}
                    material={nodes.Boite_005_VERT_0.material}
                  />
                </group>
                <group name='Boite_006' position={[-107.035, 95.645, 74.785]}>
                  <mesh
                    name='Boite_006_JAUNE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Boite_006_JAUNE_0.geometry}
                    material={nodes.Boite_006_JAUNE_0.material}
                  />
                </group>
                <group
                  name='Boite_007'
                  position={[-114.317, 91.301, 95.403]}
                  rotation={[0, 0, -0.087]}
                >
                  <mesh
                    name='Boite_007_JAUNE_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Boite_007_JAUNE_0.geometry}
                    material={nodes.Boite_007_JAUNE_0.material}
                  />
                </group>
                <group
                  name='Boite_008'
                  position={[-105.829, 92.572, 95.403]}
                  rotation={[0, 0, 0.087]}
                >
                  <mesh
                    name='Boite_008_BLEU_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.Boite_008_BLEU_0.geometry}
                    material={nodes.Boite_008_BLEU_0.material}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
