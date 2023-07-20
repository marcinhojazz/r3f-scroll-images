import { Image, OrbitControls, Scroll, ScrollControls } from "@react-three/drei";


function Images() {
  return (
    <group>
      <Image url="../../images/image5.jpg" scale={[4, 3, 1]} position={[-1, 0, 1]}/>
      <Image url="../../images/image7.jpg" scale={3} position={[2, -5, 1.1]}/>
      <Image url="../../images/image8.jpg" scale={[1, 3.5, 1]} position={[-2.3, -3.4, 1.2]}/>
      <Image url="../../images/image9.jpg" scale={[1.4, 2, 1]} position={[-0.3, -2, 3.2]}/>
    </group>
  )
}


export const Experience = () => {
  return (
    <>
      {/* <OrbitControls /> */}
      <ScrollControls pages={3} damping={0.75}>
        <Scroll>
          <mesh scale={[5, 8, 0.1]} position={[2, 0, -1.5]}>
            <meshNormalMaterial />
            <boxBufferGeometry />
          </mesh>
          <Images />
        </Scroll>
      </ScrollControls>
    </>
  );
};
