import { Canvas } from '@react-three/fiber';
import { Box } from '@chakra-ui/react';
import useMeasure from 'react-use-measure';
import RenderedContent from 'features/game/modules/RenderedContent';
import ControllerWrapper from 'features/game/components/ControllerWrapper';

type GameProps = {
  gameId: string;
};

const Game = ({}: GameProps) => {
  const [ref, bounds] = useMeasure();

  return (
    <Box
      id="#canvas-container"
      maxH="100vh"
      h={`${(bounds.width * 9) / 16}px`}
      bg="black"
    >
      <Canvas
        ref={ref}
        dpr={
          typeof window !== 'undefined' ? window.devicePixelRatio : undefined
        }
      >
        <ControllerWrapper>
          <RenderedContent />
        </ControllerWrapper>
      </Canvas>
    </Box>
  );
};

export default Game;
