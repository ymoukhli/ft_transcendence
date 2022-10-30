import { useSphere } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Mesh } from 'three';

const Ball = ({ radius = 1 }: { radius?: number }) => {
  const [sphereRef, api] = useSphere<Mesh>(() => ({
    args: [radius],
    mass: 1,
    type: 'Kinematic',
  }));
  // const { viewport } = useThree();

  const velocityRef = useRef([10, 0, 0]);
  useEffect(() => {
    const unsubscribe = api.velocity.subscribe(
      (v) => (velocityRef.current = v)
    );
    // set delayed starting velocity with random direction
    setTimeout(() => {
      api.velocity.set((Math.random() > 0.5 ? 1 : -1) * 20, 0, 0);
    }, 3000);
    return unsubscribe;
  }, []);

  // collision with map planes
  // usePlane(() => ({
  // position: [0, -viewport.height, 0],
  // rotation: [-Math.PI / 2, 0, 0],
  // onCollide: () => {
  //   console.log({ velocityRef });
  //   api.velocity.set(0, -velocityRef.current[1], 0);
  // },
  // }));

  return (
    <mesh castShadow ref={sphereRef}>
      <sphereGeometry args={[radius ?? 1, 32, 16]} />
      <meshStandardMaterial color="#049ef4" />
    </mesh>
  );
};

export default Ball;
