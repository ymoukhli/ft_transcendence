import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Mesh } from 'three';
import { useBox } from '@react-three/cannon';

type PaddleProps = {
  initialX?: number;
  initialY?: number;
  initialZ?: number;
  isPressingUp?: boolean;
  isPressingDown?: boolean;
  forcePosition?: boolean;
  positionX?: number;
  positionY?: number;
  positionZ?: number;
};

const Paddle = ({
  initialX = 38,
  initialY = 0,
  initialZ = 0,
  isPressingUp = false,
  isPressingDown = false,
  forcePosition = false,
  positionX = -38,
  positionY = 0,
  positionZ = 0,
}: PaddleProps) => {
  const [paddleRef, api] = useBox<Mesh>(() => ({
    mass: 0,
    position: [initialX, initialY, initialZ],
    args: [1, 5, 10],
    type: 'Static',
  }));

  const currentPositionRef = useRef([initialX, initialY, initialZ]);
  useEffect(() => {
    const unsubscribe = api.position.subscribe(
      (v) => (currentPositionRef.current = v)
    );
    return unsubscribe;
  }, []);

  useFrame(() => {
    if (paddleRef.current) {
      if (forcePosition) {
        api.position.set(positionX, positionY, positionZ);
      } else {
        if (isPressingUp) {
          api.position.set(
            currentPositionRef.current[0],
            currentPositionRef.current[1] + 0.4,
            currentPositionRef.current[2]
          );
        }
        if (isPressingDown) {
          api.position.set(
            currentPositionRef.current[0],
            currentPositionRef.current[1] - 0.4,
            currentPositionRef.current[2]
          );
        }
      }
    }
  });

  return (
    <mesh castShadow ref={paddleRef} position={[initialX, initialY, initialZ]}>
      <boxGeometry args={[1, 5, 0.5]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Paddle;
