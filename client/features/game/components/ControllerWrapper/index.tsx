import { KeyboardControls } from '@react-three/drei';
import React, { ReactNode } from 'react';

type KeyboardControlsEntry = {
  name: string;
  keys: string[];
  up?: boolean;
};

type ControllerProps = {
  children: ReactNode;
  map?: KeyboardControlsEntry[];
};

const defaultController = [
  { name: 'up', keys: ['ArrowUp', 'w', 'W'] },
  { name: 'down', keys: ['ArrowDown', 's', 'S'] },
  { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
  { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
];

const ControllerWrapper = ({
  children,
  map = defaultController,
}: ControllerProps) => (
  <KeyboardControls map={map}>{children}</KeyboardControls>
);

export default ControllerWrapper;
