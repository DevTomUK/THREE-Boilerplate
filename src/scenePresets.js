// Scene presets to define what the scene looks like
// Future updates: Add in performance presets for low-tier devices?

export const SCENE_PRESETS = {
  default: {
    camera: { type: "perspective", options: { fov: 50 } },
    lighting: { enabled: true, options: { ambient: { intensity: 0.7 }, directional: { intensity: 1 } } },
    fog: { enabled: true, options: { mode: "exp", density: 0.001 } },
    environment: {
      sky: { options: { hdri: { enabled: false, background: true } } }
    },
    postProcessing: { enabled: true, options: { bloom: { enabled: true } } },
    lerpFactor: 0.05
  },
  performance: {
    camera: { type: "perspective" },
    lighting: { enabled: true, options: { ambient: { intensity: 0.5 }, directional: { enabled: false } } },
    fog: { enabled: false },
    environment: { sky: { options: { sky: { enabled: true } } } },
    postProcessing: { enabled: false },
    noise: { enabled: false },
    lerpFactor: 0.05 
  },
};
