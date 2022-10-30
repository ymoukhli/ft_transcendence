import { Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useGameStore } from 'features/game/stores/gameStore';

const Score = () => {
  const { viewport } = useThree();
  const gameStore = useGameStore();

  return (
    <Text
      scale={[10, 10, 10]}
      color="white"
      anchorX="center"
      anchorY="middle"
      position={[0, viewport.height / 4, -2]}
    >
      {`${gameStore.enemyScore} - ${gameStore.playerScore}`}
    </Text>
  );
};

export default Score;
