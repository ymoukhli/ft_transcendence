import { useKeyboardControls } from '@react-three/drei';
import { useFrame, Vector3 } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { Physics, usePlane, useBox } from '@react-three/cannon';

type PaddleProps = {
  initialPosition?: Vector3;
};

const Paddle = ({ initialPosition = [26, 0, 0] }: PaddleProps) => {
  const paddleRef = useRef<Mesh>(null);
  const isPressingUp = useKeyboardControls((state) => state.up);
  const isPressingDown = useKeyboardControls((state) => state.down);
  const isPressingRight = useKeyboardControls((state) => state.right);
  const isPressingLeft = useKeyboardControls((state) => state.left);

  useFrame(() => {
    if (paddleRef.current) {
      if (isPressingUp) paddleRef.current.position.y += 0.4;
      if (isPressingDown) paddleRef.current.position.y -= 0.4;
      if (isPressingRight) paddleRef.current.position.x += 0.4;
      if (isPressingLeft) paddleRef.current.position.x -= 0.4;
    }
  });

  return (
    <mesh ref={paddleRef} position={initialPosition}>
      <boxGeometry args={[1, 5, 1]} />
      <meshBasicMaterial />
    </mesh>
  );
};

export default Paddle;
