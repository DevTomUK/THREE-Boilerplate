# THREE.js Boilerplate

## Components

### Core
#### Camera
- `PerspectiveCamera` as default camera from Drei

#### CameraController
- Currently blank. For changing current (lookAt and position) to target using lerp for smooth movements.

#### Lighting
- `ambientLight` intensity 0.6
- `directionalLight` intensity 0.4 with offset position to highlight faces

#### Scene Manager
Contains all of the scene's core components
---

### Scene

#### Environment
- For environmental features, sky, fog, environment maps, etc.

#### Models
- For 3D models within the scene (GLTF, JSX, etc.)

#### Objects
- For reusable scene objects like floor, cubes, props, meshes

#### World
- Assembles the full 3D scene using environment, models, and objects

#### SceneContent
Contains all of the scene's content - models, objects, etc

---

### UI
- 2D UI components overlaying the scene (HUD, buttons, panels)

---

## Context

For global React Context
- `CameraController` - Animates the camera movements (position and lookAt) from current to target using LERP.

---

## Hooks
- Custom hooks for interaction, camera, or scene state

---

## Dependencies
- three
- @types/three
- @react-three/fiber
- @react-three/drei
