import React, { useRef } from 'react'

import { useGLTF, OrbitControls } from '@react-three/drei'

export default function Museum(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/museum.glb')
  return (
    <>
      {/* <hemisphereLight /> */}
      <group ref={group} {...props} dispose={null}>
        <mesh
          position={[0, 0, 0]}
          castShadow
          receiveShadow
          geometry={nodes.group558278867.geometry}
          material={nodes.group558278867.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group793193501.geometry}
          material={nodes.group793193501.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group853941034.geometry}
          material={nodes.group853941034.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group395243803.geometry}
          material={nodes.group395243803.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group156993652.geometry}
          material={nodes.group156993652.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group679396173.geometry}
          material={nodes.group679396173.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2071380911.geometry}
          material={nodes.group2071380911.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1603487672.geometry}
          material={nodes.group1603487672.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1339811408.geometry}
          material={nodes.group1339811408.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1119418461.geometry}
          material={nodes.group1119418461.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1472700541.geometry}
          material={nodes.group1472700541.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group512350333.geometry}
          material={nodes.group512350333.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group235302768.geometry}
          material={nodes.group235302768.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1491188202.geometry}
          material={nodes.group1491188202.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group106362295.geometry}
          material={nodes.group106362295.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1816711665.geometry}
          material={nodes.group1816711665.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group385438159.geometry}
          material={nodes.group385438159.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group951535573.geometry}
          material={nodes.group951535573.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1109735787.geometry}
          material={nodes.group1109735787.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group685826189.geometry}
          material={nodes.group685826189.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2028696911.geometry}
          material={nodes.group2028696911.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1095830216.geometry}
          material={nodes.group1095830216.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1309208548.geometry}
          material={nodes.group1309208548.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group186786767.geometry}
          material={nodes.group186786767.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1616067568.geometry}
          material={nodes.group1616067568.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1270363260.geometry}
          material={nodes.group1270363260.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group451846365.geometry}
          material={nodes.group451846365.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group444994120.geometry}
          material={nodes.group444994120.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group156784534.geometry}
          material={nodes.group156784534.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1951516249.geometry}
          material={nodes.group1951516249.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1393902976.geometry}
          material={nodes.group1393902976.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1837047216.geometry}
          material={nodes.group1837047216.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1909547896.geometry}
          material={nodes.group1909547896.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group753964367.geometry}
          material={nodes.group753964367.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1000520769.geometry}
          material={nodes.group1000520769.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1583201579.geometry}
          material={nodes.group1583201579.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1382739565.geometry}
          material={nodes.group1382739565.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2062431263.geometry}
          material={nodes.group2062431263.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group75686781.geometry}
          material={nodes.group75686781.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1437060300.geometry}
          material={nodes.group1437060300.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group225625397.geometry}
          material={nodes.group225625397.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group105443015.geometry}
          material={nodes.group105443015.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group595301121.geometry}
          material={nodes.group595301121.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group788417226.geometry}
          material={nodes.group788417226.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1458335180.geometry}
          material={nodes.group1458335180.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group213812882.geometry}
          material={nodes.group213812882.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group606078640.geometry}
          material={nodes.group606078640.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group847881384.geometry}
          material={nodes.group847881384.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1371771369.geometry}
          material={nodes.group1371771369.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group978509735.geometry}
          material={nodes.group978509735.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1141365167.geometry}
          material={nodes.group1141365167.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group545739199.geometry}
          material={nodes.group545739199.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1782528961.geometry}
          material={nodes.group1782528961.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group737223835.geometry}
          material={nodes.group737223835.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1253325173.geometry}
          material={nodes.group1253325173.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1763089326.geometry}
          material={nodes.group1763089326.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group305948286.geometry}
          material={nodes.group305948286.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group408010818.geometry}
          material={nodes.group408010818.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1828905400.geometry}
          material={nodes.group1828905400.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group289701105.geometry}
          material={nodes.group289701105.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1177557850.geometry}
          material={nodes.group1177557850.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group105343201.geometry}
          material={nodes.group105343201.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1535588417.geometry}
          material={nodes.group1535588417.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1803084662.geometry}
          material={nodes.group1803084662.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group456557493.geometry}
          material={nodes.group456557493.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1540935937.geometry}
          material={nodes.group1540935937.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1119068404.geometry}
          material={nodes.group1119068404.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group905927526.geometry}
          material={nodes.group905927526.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1275729763.geometry}
          material={nodes.group1275729763.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1626102476.geometry}
          material={nodes.group1626102476.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group878764180.geometry}
          material={nodes.group878764180.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1628366236.geometry}
          material={nodes.group1628366236.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1074998792.geometry}
          material={nodes.group1074998792.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group473534304.geometry}
          material={nodes.group473534304.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1919172939.geometry}
          material={nodes.group1919172939.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group941573683.geometry}
          material={nodes.group941573683.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group689699802.geometry}
          material={nodes.group689699802.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group719696710.geometry}
          material={nodes.group719696710.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1582220023.geometry}
          material={nodes.group1582220023.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group786746219.geometry}
          material={nodes.group786746219.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1612683714.geometry}
          material={nodes.group1612683714.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2070349130.geometry}
          material={nodes.group2070349130.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group421408822.geometry}
          material={nodes.group421408822.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1445583488.geometry}
          material={nodes.group1445583488.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group355929292.geometry}
          material={nodes.group355929292.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1152276223.geometry}
          material={nodes.group1152276223.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1862415445.geometry}
          material={nodes.group1862415445.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group611629637.geometry}
          material={nodes.group611629637.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1602336966.geometry}
          material={nodes.group1602336966.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1124408868.geometry}
          material={nodes.group1124408868.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1857119668.geometry}
          material={nodes.group1857119668.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group500464953.geometry}
          material={nodes.group500464953.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1455548625.geometry}
          material={nodes.group1455548625.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1468362515.geometry}
          material={nodes.group1468362515.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2105402985.geometry}
          material={nodes.group2105402985.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1160397180.geometry}
          material={nodes.group1160397180.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1091641609.geometry}
          material={nodes.group1091641609.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group736884139.geometry}
          material={nodes.group736884139.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1152385336.geometry}
          material={nodes.group1152385336.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1130656699.geometry}
          material={nodes.group1130656699.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1543168720.geometry}
          material={nodes.group1543168720.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1039395514.geometry}
          material={nodes.group1039395514.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1334371727.geometry}
          material={nodes.group1334371727.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group813056379.geometry}
          material={nodes.group813056379.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1809820998.geometry}
          material={nodes.group1809820998.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group10346748.geometry}
          material={nodes.group10346748.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2112429792.geometry}
          material={nodes.group2112429792.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group211431947.geometry}
          material={nodes.group211431947.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group816687984.geometry}
          material={nodes.group816687984.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group926669453.geometry}
          material={nodes.group926669453.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1528594373.geometry}
          material={nodes.group1528594373.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1467423962.geometry}
          material={nodes.group1467423962.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group687796025.geometry}
          material={nodes.group687796025.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group130928917.geometry}
          material={nodes.group130928917.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1612415429.geometry}
          material={nodes.group1612415429.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group655502935.geometry}
          material={nodes.group655502935.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1676229897.geometry}
          material={nodes.group1676229897.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1144291049.geometry}
          material={nodes.group1144291049.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1306171476.geometry}
          material={nodes.group1306171476.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group987291424.geometry}
          material={nodes.group987291424.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group746919320.geometry}
          material={nodes.group746919320.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1339173816.geometry}
          material={nodes.group1339173816.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group893310571.geometry}
          material={nodes.group893310571.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1403900220.geometry}
          material={nodes.group1403900220.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group653255495.geometry}
          material={nodes.group653255495.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1393377224.geometry}
          material={nodes.group1393377224.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group817131897.geometry}
          material={nodes.group817131897.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group171464486.geometry}
          material={nodes.group171464486.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1878837649.geometry}
          material={nodes.group1878837649.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group581973353.geometry}
          material={nodes.group581973353.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group23952374.geometry}
          material={nodes.group23952374.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1395289111.geometry}
          material={nodes.group1395289111.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1627557934.geometry}
          material={nodes.group1627557934.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group437430424.geometry}
          material={nodes.group437430424.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group515196585.geometry}
          material={nodes.group515196585.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2019681819.geometry}
          material={nodes.group2019681819.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1323174899.geometry}
          material={nodes.group1323174899.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group47128674.geometry}
          material={nodes.group47128674.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group662681037.geometry}
          material={nodes.group662681037.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1922693587.geometry}
          material={nodes.group1922693587.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2059776764.geometry}
          material={nodes.group2059776764.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1286342099.geometry}
          material={nodes.group1286342099.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1683773052.geometry}
          material={nodes.group1683773052.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group698087350.geometry}
          material={nodes.group698087350.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1741250938.geometry}
          material={nodes.group1741250938.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1572677279.geometry}
          material={nodes.group1572677279.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1718152709.geometry}
          material={nodes.group1718152709.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1269588491.geometry}
          material={nodes.group1269588491.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1997188865.geometry}
          material={nodes.group1997188865.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group970994157.geometry}
          material={nodes.group970994157.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1847679348.geometry}
          material={nodes.group1847679348.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group951100885.geometry}
          material={nodes.group951100885.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group510514645.geometry}
          material={nodes.group510514645.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1166453318.geometry}
          material={nodes.group1166453318.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group217126318.geometry}
          material={nodes.group217126318.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group735194319.geometry}
          material={nodes.group735194319.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1921485170.geometry}
          material={nodes.group1921485170.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group301491399.geometry}
          material={nodes.group301491399.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1054471281.geometry}
          material={nodes.group1054471281.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group205419474.geometry}
          material={nodes.group205419474.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1420295288.geometry}
          material={nodes.group1420295288.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group25114988.geometry}
          material={nodes.group25114988.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1118100631.geometry}
          material={nodes.group1118100631.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1725697437.geometry}
          material={nodes.group1725697437.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group184178257.geometry}
          material={nodes.group184178257.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group781724333.geometry}
          material={nodes.group781724333.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group297819367.geometry}
          material={nodes.group297819367.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1561007983.geometry}
          material={nodes.group1561007983.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1863174073.geometry}
          material={nodes.group1863174073.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group300968442.geometry}
          material={nodes.group300968442.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group134311729.geometry}
          material={nodes.group134311729.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1037452180.geometry}
          material={nodes.group1037452180.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1829744985.geometry}
          material={nodes.group1829744985.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group836965925.geometry}
          material={nodes.group836965925.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group442276339.geometry}
          material={nodes.group442276339.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1792313635.geometry}
          material={nodes.group1792313635.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group98896653.geometry}
          material={nodes.group98896653.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group600005579.geometry}
          material={nodes.group600005579.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1073564548.geometry}
          material={nodes.group1073564548.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group385181051.geometry}
          material={nodes.group385181051.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2017456734.geometry}
          material={nodes.group2017456734.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group824366368.geometry}
          material={nodes.group824366368.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group376553879.geometry}
          material={nodes.group376553879.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group751140733.geometry}
          material={nodes.group751140733.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group509457303.geometry}
          material={nodes.group509457303.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group859216634.geometry}
          material={nodes.group859216634.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group331018328.geometry}
          material={nodes.group331018328.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1306372579.geometry}
          material={nodes.group1306372579.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group541450566.geometry}
          material={nodes.group541450566.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1896792954.geometry}
          material={nodes.group1896792954.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1249156701.geometry}
          material={nodes.group1249156701.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group59519514.geometry}
          material={nodes.group59519514.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1758808322.geometry}
          material={nodes.group1758808322.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1152030370.geometry}
          material={nodes.group1152030370.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group646320872.geometry}
          material={nodes.group646320872.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1015826012.geometry}
          material={nodes.group1015826012.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group904285013.geometry}
          material={nodes.group904285013.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1130400940.geometry}
          material={nodes.group1130400940.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group556990475.geometry}
          material={nodes.group556990475.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1619256056.geometry}
          material={nodes.group1619256056.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group669582912.geometry}
          material={nodes.group669582912.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group923624317.geometry}
          material={nodes.group923624317.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group585813106.geometry}
          material={nodes.group585813106.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group126734517.geometry}
          material={nodes.group126734517.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group133960766.geometry}
          material={nodes.group133960766.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group415312585.geometry}
          material={nodes.group415312585.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group994435842.geometry}
          material={nodes.group994435842.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group225737016.geometry}
          material={nodes.group225737016.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1062268536.geometry}
          material={nodes.group1062268536.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2117956718.geometry}
          material={nodes.group2117956718.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1895582349.geometry}
          material={nodes.group1895582349.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1811452555.geometry}
          material={nodes.group1811452555.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1670985981.geometry}
          material={nodes.group1670985981.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group923441934.geometry}
          material={nodes.group923441934.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1058581117.geometry}
          material={nodes.group1058581117.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2114372762.geometry}
          material={nodes.group2114372762.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1179631534.geometry}
          material={nodes.group1179631534.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group66988368.geometry}
          material={nodes.group66988368.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1913381968.geometry}
          material={nodes.group1913381968.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1541018001.geometry}
          material={nodes.group1541018001.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group430607043.geometry}
          material={nodes.group430607043.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1306183598.geometry}
          material={nodes.group1306183598.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1612212464.geometry}
          material={nodes.group1612212464.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group113827863.geometry}
          material={nodes.group113827863.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1243931879.geometry}
          material={nodes.group1243931879.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1006743311.geometry}
          material={nodes.group1006743311.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group315541822.geometry}
          material={nodes.group315541822.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1658352869.geometry}
          material={nodes.group1658352869.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1831067715.geometry}
          material={nodes.group1831067715.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1753053384.geometry}
          material={nodes.group1753053384.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group847827532.geometry}
          material={nodes.group847827532.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1470396162.geometry}
          material={nodes.group1470396162.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2046983663.geometry}
          material={nodes.group2046983663.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1076267666.geometry}
          material={nodes.group1076267666.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group712584971.geometry}
          material={nodes.group712584971.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1227638399.geometry}
          material={nodes.group1227638399.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group446732189.geometry}
          material={nodes.group446732189.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1598359833.geometry}
          material={nodes.group1598359833.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group892327519.geometry}
          material={nodes.group892327519.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1298870441.geometry}
          material={nodes.group1298870441.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1239384211.geometry}
          material={nodes.group1239384211.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group355774953.geometry}
          material={nodes.group355774953.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group818549658.geometry}
          material={nodes.group818549658.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group900819563.geometry}
          material={nodes.group900819563.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group929612289.geometry}
          material={nodes.group929612289.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1687301553.geometry}
          material={nodes.group1687301553.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group532493009.geometry}
          material={nodes.group532493009.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1919377780.geometry}
          material={nodes.group1919377780.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2045025349.geometry}
          material={nodes.group2045025349.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group814859118.geometry}
          material={nodes.group814859118.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1046121253.geometry}
          material={nodes.group1046121253.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1935671988.geometry}
          material={nodes.group1935671988.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1064013175.geometry}
          material={nodes.group1064013175.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group75796785.geometry}
          material={nodes.group75796785.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1262900591.geometry}
          material={nodes.group1262900591.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2078206245.geometry}
          material={nodes.group2078206245.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1197950498.geometry}
          material={nodes.group1197950498.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1568859442.geometry}
          material={nodes.group1568859442.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1335157833.geometry}
          material={nodes.group1335157833.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group547703653.geometry}
          material={nodes.group547703653.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group436196863.geometry}
          material={nodes.group436196863.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1925979723.geometry}
          material={nodes.group1925979723.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group689543294.geometry}
          material={nodes.group689543294.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1953011220.geometry}
          material={nodes.group1953011220.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1550529219.geometry}
          material={nodes.group1550529219.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group46833628.geometry}
          material={nodes.group46833628.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1197149261.geometry}
          material={nodes.group1197149261.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group579515118.geometry}
          material={nodes.group579515118.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1509469304.geometry}
          material={nodes.group1509469304.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group824438575.geometry}
          material={nodes.group824438575.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group184946839.geometry}
          material={nodes.group184946839.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group127838828.geometry}
          material={nodes.group127838828.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1909283635.geometry}
          material={nodes.group1909283635.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group770025373.geometry}
          material={nodes.group770025373.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group509701915.geometry}
          material={nodes.group509701915.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1074306167.geometry}
          material={nodes.group1074306167.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group388462857.geometry}
          material={nodes.group388462857.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group672181691.geometry}
          material={nodes.group672181691.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group12172249.geometry}
          material={nodes.group12172249.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group402116473.geometry}
          material={nodes.group402116473.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group788581122.geometry}
          material={nodes.group788581122.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group222000862.geometry}
          material={nodes.group222000862.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group329349715.geometry}
          material={nodes.group329349715.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1879261887.geometry}
          material={nodes.group1879261887.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group23491936.geometry}
          material={nodes.group23491936.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group976447201.geometry}
          material={nodes.group976447201.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1573283374.geometry}
          material={nodes.group1573283374.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group785973574.geometry}
          material={nodes.group785973574.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group455293825.geometry}
          material={nodes.group455293825.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1546167565.geometry}
          material={nodes.group1546167565.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group533934872.geometry}
          material={nodes.group533934872.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1932422079.geometry}
          material={nodes.group1932422079.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group528488880.geometry}
          material={nodes.group528488880.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1198513584.geometry}
          material={nodes.group1198513584.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1192616731.geometry}
          material={nodes.group1192616731.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group929391989.geometry}
          material={nodes.group929391989.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1177702170.geometry}
          material={nodes.group1177702170.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group857161800.geometry}
          material={nodes.group857161800.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group400124179.geometry}
          material={nodes.group400124179.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1911331951.geometry}
          material={nodes.group1911331951.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1665268555.geometry}
          material={nodes.group1665268555.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1681908965.geometry}
          material={nodes.group1681908965.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1812069592.geometry}
          material={nodes.group1812069592.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1651869101.geometry}
          material={nodes.group1651869101.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group154454957.geometry}
          material={nodes.group154454957.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1186270125.geometry}
          material={nodes.group1186270125.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group171118105.geometry}
          material={nodes.group171118105.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group367850045.geometry}
          material={nodes.group367850045.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group753674544.geometry}
          material={nodes.group753674544.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1587879543.geometry}
          material={nodes.group1587879543.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group804159442.geometry}
          material={nodes.group804159442.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1287345721.geometry}
          material={nodes.group1287345721.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1557905185.geometry}
          material={nodes.group1557905185.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2024195597.geometry}
          material={nodes.group2024195597.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group735239933.geometry}
          material={nodes.group735239933.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1544712778.geometry}
          material={nodes.group1544712778.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1219295476.geometry}
          material={nodes.group1219295476.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2126527913.geometry}
          material={nodes.group2126527913.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1244568021.geometry}
          material={nodes.group1244568021.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group899513411.geometry}
          material={nodes.group899513411.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1911355160.geometry}
          material={nodes.group1911355160.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1062011139.geometry}
          material={nodes.group1062011139.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group73410125.geometry}
          material={nodes.group73410125.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1311150488.geometry}
          material={nodes.group1311150488.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2110581328.geometry}
          material={nodes.group2110581328.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1344338862.geometry}
          material={nodes.group1344338862.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1961516531.geometry}
          material={nodes.group1961516531.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1771344309.geometry}
          material={nodes.group1771344309.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group751472569.geometry}
          material={nodes.group751472569.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2080281926.geometry}
          material={nodes.group2080281926.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1369817832.geometry}
          material={nodes.group1369817832.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group88707448.geometry}
          material={nodes.group88707448.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1049410118.geometry}
          material={nodes.group1049410118.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2095192521.geometry}
          material={nodes.group2095192521.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1448667406.geometry}
          material={nodes.group1448667406.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1549837728.geometry}
          material={nodes.group1549837728.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1477098803.geometry}
          material={nodes.group1477098803.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1929389870.geometry}
          material={nodes.group1929389870.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1242706511.geometry}
          material={nodes.group1242706511.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1144021954.geometry}
          material={nodes.group1144021954.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group626262805.geometry}
          material={nodes.group626262805.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1904635372.geometry}
          material={nodes.group1904635372.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1594239108.geometry}
          material={nodes.group1594239108.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1688889200.geometry}
          material={nodes.group1688889200.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1703264061.geometry}
          material={nodes.group1703264061.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1782296052.geometry}
          material={nodes.group1782296052.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1619407380.geometry}
          material={nodes.group1619407380.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1859011954.geometry}
          material={nodes.group1859011954.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1364822039.geometry}
          material={nodes.group1364822039.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1235415903.geometry}
          material={nodes.group1235415903.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1995761516.geometry}
          material={nodes.group1995761516.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1115359105.geometry}
          material={nodes.group1115359105.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1553841508.geometry}
          material={nodes.group1553841508.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group105689231.geometry}
          material={nodes.group105689231.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group467325900.geometry}
          material={nodes.group467325900.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group541514119.geometry}
          material={nodes.group541514119.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1576561107.geometry}
          material={nodes.group1576561107.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group632498847.geometry}
          material={nodes.group632498847.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1864360718.geometry}
          material={nodes.group1864360718.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group203201695.geometry}
          material={nodes.group203201695.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group752100876.geometry}
          material={nodes.group752100876.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1404363902.geometry}
          material={nodes.group1404363902.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1075895241.geometry}
          material={nodes.group1075895241.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1371311738.geometry}
          material={nodes.group1371311738.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group127411739.geometry}
          material={nodes.group127411739.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1830727818.geometry}
          material={nodes.group1830727818.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1357403981.geometry}
          material={nodes.group1357403981.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1745940168.geometry}
          material={nodes.group1745940168.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2002124771.geometry}
          material={nodes.group2002124771.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group241899545.geometry}
          material={nodes.group241899545.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1263316200.geometry}
          material={nodes.group1263316200.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1833184471.geometry}
          material={nodes.group1833184471.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2001957084.geometry}
          material={nodes.group2001957084.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group891112010.geometry}
          material={nodes.group891112010.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1396290152.geometry}
          material={nodes.group1396290152.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1931637953.geometry}
          material={nodes.group1931637953.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group357513652.geometry}
          material={nodes.group357513652.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group956321908.geometry}
          material={nodes.group956321908.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1753567872.geometry}
          material={nodes.group1753567872.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group769636369.geometry}
          material={nodes.group769636369.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group534020221.geometry}
          material={nodes.group534020221.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group711840015.geometry}
          material={nodes.group711840015.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group97155813.geometry}
          material={nodes.group97155813.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1568142614.geometry}
          material={nodes.group1568142614.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2146855340.geometry}
          material={nodes.group2146855340.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group675918024.geometry}
          material={nodes.group675918024.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group293922591.geometry}
          material={nodes.group293922591.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group864879357.geometry}
          material={nodes.group864879357.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group921998379.geometry}
          material={nodes.group921998379.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group264464703.geometry}
          material={nodes.group264464703.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group91263425.geometry}
          material={nodes.group91263425.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1951381207.geometry}
          material={nodes.group1951381207.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2074748746.geometry}
          material={nodes.group2074748746.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1000806966.geometry}
          material={nodes.group1000806966.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2028189401.geometry}
          material={nodes.group2028189401.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group940561981.geometry}
          material={nodes.group940561981.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2050161935.geometry}
          material={nodes.group2050161935.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group703127098.geometry}
          material={nodes.group703127098.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group292599048.geometry}
          material={nodes.group292599048.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1919109755.geometry}
          material={nodes.group1919109755.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1424782400.geometry}
          material={nodes.group1424782400.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group663085472.geometry}
          material={nodes.group663085472.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group105444082.geometry}
          material={nodes.group105444082.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group595185670.geometry}
          material={nodes.group595185670.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group701395682.geometry}
          material={nodes.group701395682.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1283921501.geometry}
          material={nodes.group1283921501.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1018203292.geometry}
          material={nodes.group1018203292.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2133182541.geometry}
          material={nodes.group2133182541.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group106317538.geometry}
          material={nodes.group106317538.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1938891523.geometry}
          material={nodes.group1938891523.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group247591528.geometry}
          material={nodes.group247591528.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group711681750.geometry}
          material={nodes.group711681750.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1857984115.geometry}
          material={nodes.group1857984115.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1599896015.geometry}
          material={nodes.group1599896015.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group111938270.geometry}
          material={nodes.group111938270.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group948203316.geometry}
          material={nodes.group948203316.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group75088275.geometry}
          material={nodes.group75088275.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1490605984.geometry}
          material={nodes.group1490605984.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1334333405.geometry}
          material={nodes.group1334333405.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1928049530.geometry}
          material={nodes.group1928049530.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group654276883.geometry}
          material={nodes.group654276883.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1453341120.geometry}
          material={nodes.group1453341120.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group83015016.geometry}
          material={nodes.group83015016.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group964600792.geometry}
          material={nodes.group964600792.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group600230728.geometry}
          material={nodes.group600230728.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1727740389.geometry}
          material={nodes.group1727740389.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1406771414.geometry}
          material={nodes.group1406771414.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group189716328.geometry}
          material={nodes.group189716328.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group112368651.geometry}
          material={nodes.group112368651.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group913434661.geometry}
          material={nodes.group913434661.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group371814758.geometry}
          material={nodes.group371814758.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group850004370.geometry}
          material={nodes.group850004370.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1962159996.geometry}
          material={nodes.group1962159996.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group522044841.geometry}
          material={nodes.group522044841.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1969822118.geometry}
          material={nodes.group1969822118.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1346723458.geometry}
          material={nodes.group1346723458.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group748488795.geometry}
          material={nodes.group748488795.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1942338856.geometry}
          material={materials['mat25.001']}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1459109709.geometry}
          material={nodes.group1459109709.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1358131081.geometry}
          material={nodes.group1358131081.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group172966811.geometry}
          material={nodes.group172966811.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2065800685.geometry}
          material={nodes.group2065800685.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1319333405001.geometry}
            material={nodes.group1319333405001.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1319333405001_1.geometry}
            material={nodes.group1319333405001_1.material}
          />
        </group>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1052967642001.geometry}
            material={nodes.group1052967642001.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1052967642001_1.geometry}
            material={nodes.group1052967642001_1.material}
          />
        </group>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1278885950001.geometry}
            material={nodes.group1278885950001.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1278885950001_1.geometry}
            material={nodes.group1278885950001_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1278885950001_2.geometry}
            material={nodes.group1278885950001_2.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1278885950001_3.geometry}
            material={nodes.group1278885950001_3.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1278885950001_4.geometry}
            material={nodes.group1278885950001_4.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1278885950001_5.geometry}
            material={nodes.group1278885950001_5.material}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1673927740.geometry}
          material={nodes.group1673927740.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1699245277001.geometry}
            material={nodes.group1699245277001.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1699245277001_1.geometry}
            material={nodes.group1699245277001_1.material}
          />
        </group>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1166085555001.geometry}
            material={nodes.group1166085555001.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1166085555001_1.geometry}
            material={nodes.group1166085555001_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1166085555001_2.geometry}
            material={nodes.group1166085555001_2.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1166085555001_3.geometry}
            material={nodes.group1166085555001_3.material}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group391671949.geometry}
          material={nodes.group391671949.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1960564749001.geometry}
            material={nodes.group1960564749001.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1960564749001_1.geometry}
            material={nodes.group1960564749001_1.material}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group149663869.geometry}
          material={nodes.group149663869.material}
          rotation={[-Math.PI, 0, 0]}
        />
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1268834663001.geometry}
            material={nodes.group1268834663001.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1268834663001_1.geometry}
            material={nodes.group1268834663001_1.material}
          />
        </group>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group998806699001.geometry}
            material={nodes.group998806699001.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group998806699001_1.geometry}
            material={nodes.group998806699001_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group998806699001_2.geometry}
            material={nodes.group998806699001_2.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group998806699001_3.geometry}
            material={nodes.group998806699001_3.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group998806699001_4.geometry}
            material={nodes.group998806699001_4.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group998806699001_5.geometry}
            material={nodes.group998806699001_5.material}
          />
        </group>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group51170195001.geometry}
            material={nodes.group51170195001.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group51170195001_1.geometry}
            material={nodes.group51170195001_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group51170195001_2.geometry}
            material={nodes.group51170195001_2.material}
          />
        </group>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1238446102001.geometry}
            material={nodes.group1238446102001.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1238446102001_1.geometry}
            material={nodes.group1238446102001_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group1238446102001_2.geometry}
            material={nodes.group1238446102001_2.material}
          />
        </group>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group510920513001.geometry}
            material={nodes.group510920513001.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.group510920513001_1.geometry}
            material={nodes.group510920513001_1.material}
          />
        </group>
      </group>
      {/* <OrbitControls /> */}
    </>
  )
}

useGLTF.preload('/museum.glb')
