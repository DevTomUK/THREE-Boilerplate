// Scene presets to define what the scene looks like
// Future updates: Add in performance presets for low-tier devices?

export const SCENE_PRESETS = {
  default: {
    camera: {
      type: "perspective",
    },

    lighting: {
      enabled: true,
      lights: {
        ambient: true,
        directional: true,
        point: false,
        spot: false,
      },
    },

    fog: {
      enabled: true,
      mode: "exp",
    },

    environment: {
      sky: {
        hdri: {
          enabled: true,
          path: "/hdris/qwantani_dusk_2_puresky_2k.hdr",
          background: true,
        },
        sky: {
          enabled: false,
        },
      },
    },

    postProcessing: {
      enabled: true,
    },
  },
  performance: {
    
  }

};
