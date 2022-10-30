import { Debug } from '@react-three/cannon';
import React, { ReactNode } from 'react';
import useDevControls from 'utils/useDevControls';

type DebugPhysicsProps = {
  enabled?: boolean;
  children?: ReactNode | ReactNode[] | null | string;
};

const DebugPhysics = ({ enabled = false, children }: DebugPhysicsProps) => {
  const { isEnabled } = useDevControls({ isEnabled: enabled });

  return isEnabled ? (
    <Debug color="red" scale={1}>
      {children}
    </Debug>
  ) : (
    <>{children}</>
  );
};

export default DebugPhysics;
