import { Triplet, usePlane } from '@react-three/cannon';
import { Mesh } from 'three';

const MapWall = ({
  position,
  type,
}: {
  position?: Triplet;
  type?: 'Dynamic' | 'Static' | 'Kinematic' | undefined;
}) => {
  const [planeRef] = usePlane<Mesh>(() => ({
    position,
    type,
    rotation: [-Math.PI / 2, 0, 0],
    args: [5, 5],
    mass: 0.1,
  }));

  return (
    <mesh ref={planeRef}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#0f0" />
    </mesh>
  );
};

export default MapWall;
