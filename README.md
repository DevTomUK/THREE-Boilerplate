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

---

### UI
- 2D UI components overlaying the scene (HUD, buttons, panels)

---

## Hooks
- Custom hooks for interaction, camera, or scene state

---

## Dependencies
- three
- @types/three
- @react-three/fiber
- @react-three/drei
