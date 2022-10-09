import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import Paddle from 'features/game/components/Paddle';
import { useCubeTexture } from '@react-three/drei';
import config from 'config';

type GameProps = {
  gameId: string;
};

const Cube = () => {
  const cubeRef = useRef<Mesh>(null);
  // const texture = useCubeTexture(
  //   ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'ny.png'],
  //   {
  //     path: `${config.textures.ENV_PATH}/skies`,
  //   }
  // );

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry />
      <meshToonMaterial color="#049ef4" />
    </mesh>
  );
};

const Game = ({ gameId }: GameProps) => {
  return (
    <Box id="#canvas-container" h="full">
      <Canvas>
        <ambientLight color="000000" intensity={1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Cube />
        <Paddle />
      </Canvas>
    </Box>
  );
};

export default Game;
