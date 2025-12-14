import { Canvas } from '@react-three/fiber';
import { CameraProvider } from './context/cameraContext';
import UI from './ui/UI';
import World from './components/World';
import { CAMERA_POSITIONS } from './components/core/cameraPositions';
import DemoScene from './components/scene/DemoScene';

export default function T3Scene({ preset = 'default', children }) {
  // If no children passed in, use DemoScene as fallback
  const content = children || <DemoScene />;

  return (
    <CameraProvider initialPositions={CAMERA_POSITIONS}>
      <Canvas shadows>
        <World preset={preset}>
          {content}
        </World>
      </Canvas>
      <UI />
    </CameraProvider>
  );
}
