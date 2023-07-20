import { Image, OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

function Images() {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <group>
      <Image url="../../images/image5.jpg" scale={[3, height, 1]} position={[-1, 0, 1]}/>
      <Image url="../../images/image7.jpg" scale={3} position={[2, -5, 1.1]}/>
      <Image url="../../images/image8.jpg" scale={[2, -height, 1]} position={[-3.3, -3.4, 1.2]}/>
      <Image url="../../images/image9.jpg" scale={[1.4, 2, 1]} position={[-0.3, -2, 3.2]}/>
      <mesh scale={[5, -height - 2, 0.1]} position={[6, -5, -1.5]}>
        <meshNormalMaterial />
        <boxBufferGeometry />
      </mesh>
    </group>
  )
}


export const Experience = () => {
  return (
    <>
      {/* <OrbitControls /> */}
      <ScrollControls pages={3} damping={0.75} horizontal={false} infinite={true}>
        <Scroll>
          
          <Images />
        </Scroll>
        <Scroll html>
          <group>
            <div className="container-h">
              <h1>Alkimera XR</h1>
            </div>
          </group>
        </Scroll>
      </ScrollControls>
    </>
  );
};
