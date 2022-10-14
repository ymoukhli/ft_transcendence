import { useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

const Paddle = () => {
  const paddleRef = useRef<Mesh>(null);
  const isPressingUp = useKeyboardControls((state) => {
    console.log(state);
    return state.up;
  });
  const isPressingDown = useKeyboardControls((state) => state.down);
  const isPressingRight = useKeyboardControls((state) => state.right);
  const isPressingLeft = useKeyboardControls((state) => state.left);

  useFrame(() => {
    if (paddleRef.current) {
      if (isPressingUp) paddleRef.current.position.y += 0.01;
      if (isPressingDown) paddleRef.current.position.y -= 0.01;
      if (isPressingRight) paddleRef.current.position.x += 0.01;
      if (isPressingLeft) paddleRef.current.position.x -= 0.01;
    }
  });

  return (
    <mesh ref={paddleRef}>
      <boxGeometry args={[0.5, 3, 1]} />
      <meshBasicMaterial />
    </mesh>
  );
};

export default Paddle;
