# THREE.js Boilerplate

## Components

### `World`
- Contains the full 3D scene, wrapping the Scene Manager, and Scene Content together.

---

### Core

#### `Camera`
- Creates a `PerspectiveCamera` as the default camera from Drei

#### `CameraController`
-  Animates the camera movements (position and lookAt) for current to target on changes - uses LERP for smooth movements.

#### `Lighting`
- Uses `ambientLight` at intensity 0.6
- Uses `directionalLight` at intensity 0.4 with offset position to highlight faces. Allows shadows.

#### `SceneManager`
- Wraps all of the scene's core components

---

### Scene

#### `SceneContent`
- Contains all of the scene's content - models, objects, etc

#### Environment
- For environmental features, sky, fog, environment maps, etc.
- `Fog.jsx` - Creates fog in scene with input options. use "exp" for exponential, or any other for linear.
- `SkyHDRI` - Creates a HDRI background from an image, or a Drei Sky as a backup. Both can be disabled if needed.

#### Models
- For 3D models within the scene (GLTF, JSX, etc.)

#### Objects
- For reusable scene objects like floor, cubes, props, meshes:
- `Cube.jsx` has an onClick to demo camera movements by calling setTargetPosition.
- `Floor.jsx` - just a floor. Rotated to -Math.PI / 2 to flatten it.

---

### UI
- 2D UI components overlaying the scene (HUD, buttons, panels)

---

## Context

- For global React Context. Contains:
- `CameraContext` - Provides context for the camera positioning.

---

## Hooks
- Custom hooks for interaction, camera, or scene state

---

## Dependencies
- three
- @types/three
- @react-three/fiber
- @react-three/drei
