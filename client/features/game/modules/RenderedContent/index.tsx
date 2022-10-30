import { Physics } from '@react-three/cannon';
import Paddle from 'features/game/components/Paddle';
import useDevControls from 'utils/useDevControls';
import { useLocalPlayerControls } from 'utils/usePlayerControls';
import Cameras from 'features/game/components/Cameras';
import Lights from 'features/game/components/Lights';
import DebugPhysics from 'features/game/components/DebugMode';
import MapWall from 'features/game/components/MapWall';
import Ball from 'features/game/components/Ball';

const RenderedContent = () => {
  const {
    initialPlayerPaddlePosition,
    initialOpponentPaddlePosition,
    sphereRadius,
    planePosition,
    enableDebugPhysics,
  } = useDevControls({
    initialPlayerPaddlePosition: [38, 0, 0],
    initialOpponentPaddlePosition: [-38, 0, 0],
    sphereRadius: 0.8,
    planePosition: [0, 30, 0],
    enableDebugPhysics: true,
  });

  const { isPressingUp, isPressingDown } = useLocalPlayerControls();

  return (
    <>
      <Cameras />
      <Lights />
      <Physics>
        <DebugPhysics enabled={enableDebugPhysics}>
          <Ball radius={sphereRadius} />
          <Paddle
            initialX={initialPlayerPaddlePosition[0]}
            initialY={initialPlayerPaddlePosition[1]}
            initialZ={initialPlayerPaddlePosition[2]}
            isPressingUp={isPressingUp}
            isPressingDown={isPressingDown}
          />

          <Paddle
            initialX={initialOpponentPaddlePosition[0]}
            initialY={initialOpponentPaddlePosition[1]}
            initialZ={initialOpponentPaddlePosition[2]}
            forcePosition
          />
          {/* <MapWall position={planePosition} type="Static" />
          <MapWall
            position={[planePosition[0], -planePosition[1], planePosition[2]]}
            type="Static"
          /> */}
        </DebugPhysics>
      </Physics>
    </>
  );
};

export default RenderedContent;

/*
  if host:
   - send ball and player paddle position to other player
   - receive other player position and update local other player to it
   - calculate if other player or current player hit the ball

  if not host:
   - send current paddle position
   - receive ball and other player position
   - disable physics, wait for host to do calculation
*/
