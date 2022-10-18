import { useFrame, Vector3 } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Mesh } from 'three';
import { Physics, usePlane, useBox } from '@react-three/cannon';

type PaddleProps = {
  enableFullControl?: boolean /* for development only */;
  initialX?: number;
  initialY?: number;
  initialZ?: number;
  isPressingUp: boolean;
  isPressingDown: boolean;
  isPressingRight: boolean;
  isPressingLeft: boolean;
};

const Paddle = ({
  initialX = 38,
  initialY = 0,
  initialZ = 0,
  enableFullControl = false,
  isPressingUp = false,
  isPressingDown = false,
  isPressingRight = false,
  isPressingLeft = false,
}: PaddleProps) => {
  const paddleRef = useRef<Mesh>(null);

  useFrame(() => {
    if (paddleRef.current) {
      if (isPressingUp) paddleRef.current.position.y += 0.4;
      if (isPressingDown) paddleRef.current.position.y -= 0.4;
      if (enableFullControl) {
        if (isPressingRight) paddleRef.current.position.x += 0.4;
        if (isPressingLeft) paddleRef.current.position.x -= 0.4;
      }
    }
  });

  useEffect(() => {
    if (!enableFullControl && paddleRef.current) {
      paddleRef.current.position.x = initialX;
      paddleRef.current.position.y = initialY;
      paddleRef.current.position.z = initialZ;
    }
  }, [enableFullControl]);

  return (
    <mesh ref={paddleRef} position={[initialX, initialY, initialZ]}>
      <boxGeometry args={[1, 5, 1]} />
      <meshBasicMaterial />
    </mesh>
  );
};

export default Paddle;
