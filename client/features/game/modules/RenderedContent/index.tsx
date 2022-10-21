import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import {
  Debug,
  Physics,
  Triplet,
  usePlane,
  useSphere,
} from '@react-three/cannon';
import Paddle from 'features/game/components/Paddle';
import { Mesh } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import useDevControls from 'utils/useDevControls';
import { useLocalPlayerControls } from 'utils/usePlayerControls';

const Cube = () => {
  const cubeRef = useRef<Mesh>(null);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh castShadow ref={cubeRef}>
      <boxGeometry />
      <meshStandardMaterial color="#049ef4" />
    </mesh>
  );
};

const Sphere = ({ radius = 1 }: { radius?: number }) => {
  const [sphereRef, api] = useSphere(() => ({ args: [radius], mass: 0 }));
  const { viewport } = useThree();

  const velocityRef = useRef([10, 0, 0]);
  useEffect(() => {
    const unsubscribe = api.velocity.subscribe(
      (v) => (velocityRef.current = v)
    );
    return unsubscribe;
  }, []);

  useFrame(({ mouse }) => {
    // if (sphereRef.current) {
    //   sphereRef.current.rotation.x += 0.01;
    //   sphereRef.current.rotation.y += 0.01;
    // }
    // api.angularVelocity.set(mouse.x * 10, mouse.y * 10, 0);
    console.log(mouse.x);
    // api.velocity.set(mouse.x * 20, mouse.y * 20, 0);
  });

  usePlane(() => ({
    position: [0, -viewport.height, 0],
    rotation: [-Math.PI / 2, 0, 0],
    onCollide: () => {
      console.log({ velocityRef });
      api.velocity.set(0, -velocityRef.current[1], 0);
    },
  }));

  return (
    <mesh castShadow ref={sphereRef}>
      <sphereGeometry args={[radius ?? 1, 32, 16]} />
      <meshStandardMaterial color="#049ef4" />
    </mesh>
  );
};

const Plane = ({
  position,
  type,
}: {
  position?: Triplet;
  type?: 'Dynamic' | 'Static' | 'Kinematic' | undefined;
}) => {
  const [planeRef, api] = usePlane<Mesh>(() => ({
    position,
    type,
    rotation: [-Math.PI / 2, 0, 0],
    args: [100, 100],
  }));

  return (
    <mesh ref={planeRef}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#0f0" />
    </mesh>
  );
};

const RenderedContent = () => {
  const {
    zoom,
    cameraPosition,
    fov,
    initialPlayerPaddlePosition,
    initialOpponentPaddlePosition,
    sphereRadius,
    planePosition,
    camera0,
    camera1,
  } = useDevControls({
    cameraPosition: [0, 0, 30],
    zoom: 1,
    fov: 75,
    initialPlayerPaddlePosition: [38, 0, 0],
    initialOpponentPaddlePosition: [-38, 0, 0],
    sphereRadius: 0.8,
    planePosition: [0, 30, 0],
    camera0: false,
    camera1: true,
  });

  const { isPressingUp, isPressingDown, isPressingRight, isPressingLeft } =
    useLocalPlayerControls();

  return (
    <>
      <PerspectiveCamera
        fov={fov}
        position={cameraPosition}
        zoom={zoom}
        makeDefault={camera0}
        aspect={
          typeof window !== 'undefined'
            ? window.innerWidth / window.innerHeight
            : undefined
        }
      />
      <OrthographicCamera
        position={cameraPosition}
        zoom={zoom * 10}
        makeDefault={camera1}
      />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -5]} />
      <Physics>
        <Debug color="red" scale={1}>
          <Sphere radius={sphereRadius} />
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
          {/* <Plane position={planePosition} type="Static" />
          <Plane
            position={[planePosition[0], -planePosition[1], planePosition[2]]}
            type="Static"
          /> */}
        </Debug>
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
