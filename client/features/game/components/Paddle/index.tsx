import { useRef } from "react";
import { Mesh } from "three";

const Paddle = () => {
  const paddleRef = useRef<Mesh>(null);

  return (
    <mesh ref={paddleRef}>
      <boxGeometry args={[0.5, 3, 1]} />
      <meshBasicMaterial />
    </mesh>
  );
};

export default Paddle;
