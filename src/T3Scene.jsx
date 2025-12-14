import { Canvas } from '@react-three/fiber';
import { CameraProvider } from '../context/cameraContext';
import World from './World';
import UI from '../ui/UI';
import { CAMERA_POSITIONS } from './core/cameraPositions';

export default function T3Scene({ preset = 'default', children }) {
  return (
    <CameraProvider initialPositions={CAMERA_POSITIONS}>
      <Canvas shadows>
        <World preset={preset}>
          {children} {/* user-provided objects or default SceneContent */}
        </World>
      </Canvas>
      <UI />
    </CameraProvider>
  );
}
