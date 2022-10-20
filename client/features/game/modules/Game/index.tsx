import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Box } from '@chakra-ui/react';
import React, { createRef, RefAttributes, useRef } from 'react';
import Paddle from 'features/game/components/Paddle';
import useDevControls from 'utils/useDevControls';
import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import { Physics, useSphere } from '@react-three/cannon';
import ControllerWrapper from 'features/game/components/ControllerWrapper';
import useMeasure from 'react-use-measure';
import { useLocalPlayerControls } from 'utils/usePlayerControls';

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
  const {
    zoom,
    position,
    fov,
    initialPlayerPaddlePosition,
    initialOpponentPaddlePosition,
    enableFullControl,
  } = useDevControls({
    position: [0, 0, 30],
    zoom: 1,
    fov: 75,
    initialPlayerPaddlePosition: [38, 0, 0],
    initialOpponentPaddlePosition: [-38, 0, 0],
    enableFullControl: false,
  });
  const [ref, bounds] = useMeasure();
  const { isPressingUp, isPressingDown, isPressingRight, isPressingLeft } =
    useLocalPlayerControls();
  return (
    <Box id="#canvas-container" h={`${(bounds.width * 9) / 16}px`} bg="black">
      <Canvas
        ref={ref}
        dpr={
          typeof window !== 'undefined' ? window.devicePixelRatio : undefined
        }
      >
        <PerspectiveCamera
          fov={fov}
          position={position}
          zoom={zoom}
          makeDefault
          aspect={
            typeof window !== 'undefined'
              ? window.innerWidth / window.innerHeight
              : undefined
          }
        />
        {/* <OrthographicCamera position={position} zoom={zoom} makeDefault /> */}
        <ambientLight color="000000" intensity={1} />
        <directionalLight color="red" position={[1, 1, 5]} />
        <ControllerWrapper>
          <Physics>
            <Cube />
            <Paddle
              initialX={initialPlayerPaddlePosition[0]}
              initialY={initialPlayerPaddlePosition[1]}
              initialZ={initialPlayerPaddlePosition[2]}
              enableFullControl={enableFullControl}
              isPressingUp={isPressingUp}
              isPressingDown={isPressingDown}
              isPressingRight={isPressingRight}
              isPressingLeft={isPressingLeft}
            />

            <Paddle
              initialX={initialOpponentPaddlePosition[0]}
              initialY={initialOpponentPaddlePosition[1]}
              initialZ={initialOpponentPaddlePosition[2]}
              enableFullControl={enableFullControl}
              isPressingUp={false}
              isPressingDown={false}
              isPressingRight={false}
              isPressingLeft={false}
            />
          </Physics>
        </ControllerWrapper>
      </Canvas>
    </Box>
  );
};

export default Game;
