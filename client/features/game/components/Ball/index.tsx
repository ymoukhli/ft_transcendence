import { usePlane, useSphere } from '@react-three/cannon';
import { useStore } from '@react-three/fiber';
import { useGameStore } from 'features/game/stores/gameStore';
import { useCallback, useEffect, useRef } from 'react';
import { Mesh } from 'three';
import useDevControls from 'utils/useDevControls';

export type ScoreData = {
  whoScored: 'player' | 'enemy';
};

type BallProps = {
  radius?: number;
  goalXPosition: number;
  onScore?: (data: ScoreData) => void;
};

const Ball = ({ radius = 1, goalXPosition, onScore }: BallProps) => {
  const gameStore = useGameStore();
  const { mapSize } = useDevControls({ mapSize: 16 });
  const [sphereRef, api] = useSphere<Mesh>(() => ({
    args: [radius],
    mass: 1,
    type: 'Kinematic',
  }));

  const resetBall = useCallback(() => {
    api.velocity.set(0, 0, 0);
    api.position.set(0, 0, 0);

    // set delayed starting velocity with random direction
    setTimeout(() => {
      // api.velocity.set(0, -11, 0);
      api.velocity.set(
        (Math.random() > 0.5 ? 1 : -1) * 20,
        Math.random() > 0.5 ? 10 : -10,
        0
      );
      // api.velocity.set(0, 11, 0);
    }, 3000);
  }, []);

  // resetBall and subscribe to velocity value
  const velocityRef = useRef([10, 0, 0]);
  useEffect(() => {
    const unsubscribe = api.velocity.subscribe(
      (v) => (velocityRef.current = v)
    );
    resetBall();
    return unsubscribe;
  }, []);

  // collision with map top planes
  usePlane(() => ({
    position: [0, mapSize, 0],
    rotation: [Math.PI / 2, 0, 0],
    onCollideBegin: () =>
      api.velocity.set(velocityRef.current[0], -velocityRef.current[1], 0),
  }));

  // collision with map bottom planes
  usePlane(() => ({
    position: [0, -mapSize, 0],
    rotation: [-Math.PI / 2, 0, 0],
    onCollideBegin: () =>
      api.velocity.set(velocityRef.current[0], -velocityRef.current[1], 0),
  }));

  // local player goal
  usePlane(() => ({
    position: [goalXPosition, 0, 0],
    rotation: [0, -Math.PI / 2, 0],
    isTrigger: true,

    onCollideBegin: () => {
      onScore?.({ whoScored: 'enemy' });
      gameStore.enemyScored();
      console.log('enemy scored', gameStore);
      resetBall();
    },
  }));

  // enemy player goal
  usePlane(() => ({
    position: [-goalXPosition, 0, 0],
    rotation: [0, Math.PI / 2, 0],
    isTrigger: true,

    onCollideBegin: () => {
      onScore?.({ whoScored: 'player' });
      gameStore.playerScored();
      console.log('player scored', gameStore);
      resetBall();
    },
  }));

  return (
    <mesh castShadow ref={sphereRef}>
      <sphereGeometry args={[radius ?? 1, 32, 16]} />
      <meshStandardMaterial color="#049ef4" />
    </mesh>
  );
};

export default Ball;
