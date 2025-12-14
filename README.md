# THREE.js Boilerplate

A simple boilerplate for quickly setting up a THREE.js (R3F) scene.  
Features smooth camera animations, lighting, fog, and a working example to get you started.


![File Structure]("https://github.com/DevTomUK/THREE-Boilerplate/blob/main/public/demo/layout.png?raw=true")
![3D Scene]("https://github.com/DevTomUK/THREE-Boilerplate/blob/main/public/demo/scene.png?raw=true")
![With post processing effects]("https://github.com/DevTomUK/THREE-Boilerplate/blob/main/public/demo/scene2.png?raw=true")

---

## Contains:

### Components

#### `World.jsx`
- Contains the full 3D scene, wrapping the Scene Manager, and Scene Content together.

---

#### Core

##### `SceneManager.jsx`
- Wraps all of the scene's core components

##### Environment
- For environmental features, sky, fog, environment maps, etc.
- `Fog.jsx` - Creates fog in scene with input options. use "exp" for Exponential fog, or any other value for Linear.
- `SkyHDRI.jsx` - Sets the scene background. Uses an HDRI image if provided; otherwise falls back to a Drei procedural Sky. Both can be disabled via options.
- `PostProcessing` - Sets up effects for the scene - Bloom, vignette, autofocus, etc.

##### `Camera.jsx`
- Provides a camera using **@react-three/drei**
- Supports switching camera types via a `type` prop:
  - `"perspective"` (default)
  - `"orthographic"`
  - `"cube"`
- Registers the selected camera as the scene’s default
- Camera reference is exposed through `CameraContext` for external control

##### `CameraController.jsx`
- Smoothly animates the camera between current position and target using **LERP**.
- Reads `targetPosition` and `targetLookAt` from `CameraContext`.

##### `Lighting.jsx`
- Uses `ambientLight` at intensity 0.6
- Uses `directionalLight` at intensity 0.4 with offset position to highlight faces. Allows shadows.

---

#### Scene

##### `SceneContent.jsx`
- Contains all of the scene's content - models, objects, etc

##### Objects
- For reusable scene objects like floor, cubes, props, meshes:
- `Cube.jsx` - has a hover and an onClick to demo camera movements by calling setTargetPosition.
- `Floor.jsx` - just a floor. Rotated to -Math.PI / 2 to flatten it.
- `TOM.jsx` - Imported glb - transformed to jsx with ```npx gltfjsx TOM.glb --transform```. On click changes view.
- `Ocean.jsx` - Realistic water.

#### UI
- 2D UI components overlaying the scene (HUD, buttons, panels)

### Context

##### `CameraContext.jsx`
- Stores named camera positions (start, lowShot, mediumShot).
- Exposes `moveTo(name)` for static positions and `trackTarget(pos, look)` for following dynamic objects.


### Hooks
- Custom hooks for interaction, camera, or scene state

---

## Getting Started

1. Clone the repo:

```bash
git clone https://github.com/DevTomUK/THREE-Boilerplate
```

2. Navigate into the project folder:

```bash
cd THREE-Boilerplate
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Run the development server:
```bash
npm run dev
```

---

## Dependencies
- three
- @types/three
- @react-three/fiber
- @react-three/drei


## Notes

This boilerplate is currently under active development. The core components and architecture are being structured to eventually become a reusable npm package.  

- Features and APIs may evolve as improvements are made.  
- The demo assets and example scene are included for illustration and testing.  
- Users are encouraged to follow updates and contribute feedback.


## NPM usage example:

```jsx
import { T3Scene, SCENE_PRESETS } from 't3-scene';

const myPresets = {
  cinematic: {
    ...SCENE_PRESETS.default,
    postProcessing: { enabled: true },
  },
  noEffects: {
    ...SCENE_PRESETS.default,
    postProcessing: { enabled: false },
    }
};

const myCameraPositions = {
  ...CAMERA_POSITIONS,
  heroShot: {
    position: [0, 10, 25],
    lookAt: [0, 5, 0],
  },
  basicShot: {
    position: [10, 10, 10],
    lookAt: [0, 0, 0] 
  }
};

export default function App() {
  return (
    <T3Scene
      preset="cinematic"
      scenePresets={myPresets}
      cameraPositions={myCameraPositions}
    >
      <MySceneObjects />
    </T3Scene>
  );
}
```