import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import Paddle from "features/game/components/Paddle";

type GameProps = {
  gameId: string;
};

const Cube = () => {
  const cubeRef = useRef<Mesh>(null);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};

const Game = ({ gameId }: GameProps) => {
  return (
    <Box id="#canvas-container" h="full">
      <Canvas>
        <ambientLight color="yellow" intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Cube />
        <Paddle />
      </Canvas>
    </Box>
  );
};

export default Game;
