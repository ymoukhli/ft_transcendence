import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import Paddle from 'features/game/components/Paddle';
import useDevControls from 'utils/useDevControls';
import { OrthographicCamera } from '@react-three/drei';
import { Physics, useSphere } from '@react-three/cannon';
import ControllerWrapper from 'features/game/components/ControllerWrapper';

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
      <meshToonMaterial color="#049ef4" />
    </mesh>
  );
};

const Game = ({}: GameProps) => {
  const { zoom, position } = useDevControls({ position: [0, 0, 3], zoom: 40 });

  return (
    <Box id="#canvas-container" h="full">
      <Canvas>
        <OrthographicCamera position={position} zoom={zoom} makeDefault />
        <ambientLight color="000000" intensity={1} />
        <directionalLight color="red" position={[1, 1, 5]} />
        <ControllerWrapper>
          <Physics>
            <Cube />
            <Paddle />
          </Physics>
        </ControllerWrapper>
      </Canvas>
    </Box>
  );
};

export default Game;
