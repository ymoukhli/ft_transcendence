import React from 'react';
import useDevControls from 'utils/useDevControls';

const Lights = () => {
  const { ambientIntensity, pointLightPos0, pointLightPos1 } = useDevControls({
    pointLightPos0: [10, 10, 5],
    pointLightPos1: [-10, -10, -5],
    ambientIntensity: 0.3,
  });
  return (
    <>
      <ambientLight intensity={ambientIntensity} />
      <pointLight position={pointLightPos0} />
      <pointLight position={pointLightPos1} />
    </>
  );
};

export default Lights;
