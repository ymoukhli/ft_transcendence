import {
  OrthographicCamera,
  PerspectiveCamera,
  OrbitControls,
} from '@react-three/drei';
import useDevControls from 'utils/useDevControls';

const Cameras = () => {
  const { zoom, cameraPosition, fov, camera0, camera1, orbitCenter } =
    useDevControls({
      cameraPosition: [0, -18, 30],
      zoom: 1,
      fov: 75,
      camera0: true,
      camera1: false,
      orbitCenter: [0, 0, 0],
    });

  return (
    <OrbitControls regress target={orbitCenter} makeDefault enableDamping>
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
    </OrbitControls>
  );
};

export default Cameras;
