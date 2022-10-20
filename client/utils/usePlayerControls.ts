import { useKeyboardControls } from '@react-three/drei';

export const useLocalPlayerControls = () => {
  const isPressingUp = useKeyboardControls((state) => state.up);
  const isPressingDown = useKeyboardControls((state) => state.down);
  const isPressingRight = useKeyboardControls((state) => state.right);
  const isPressingLeft = useKeyboardControls((state) => state.left);

  return {
    isPressingUp,
    isPressingDown,
    isPressingRight,
    isPressingLeft,
  };
};
