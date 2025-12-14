import { Canvas } from '@react-three/fiber';
import { CameraProvider } from './context/cameraContext';
import UI from './ui/UI';
import World from './World';


import { CAMERA_POSITIONS } from './cameraPositions';
import { SCENE_PRESETS } from './scenePresets';
import DemoScene from './scene/DemoScene';

export default function T3Scene({
  preset = 'default',
  children,
  cameraPositions,
  scenePresets,
}) {
  // Merge user overrides with defaults
  const finalCameraPositions = cameraPositions ?? CAMERA_POSITIONS;
  const finalScenePresets = scenePresets ?? SCENE_PRESETS;

  const content = children || <DemoScene />;

  return (
    <CameraProvider initialPositions={finalCameraPositions}>
      <Canvas shadows>
        <World
          preset={preset}
          scenePresets={finalScenePresets}
        >
          {content}
        </World>
      </Canvas>
      <UI />
    </CameraProvider>
  );
}
