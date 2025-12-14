// src/types.ts

import React from "react";
import { Object3D } from "three";

export type CameraPosition = {
  position: [number, number, number];
  lookAt: [number, number, number];
};

export type CameraPositions = Record<string, CameraPosition>;

export type ScenePreset = {
  camera?: {
    type?: "perspective" | "orthographic" | "cube";
    options?: Record<string, any>;
  };
  lighting?: {
    enabled?: boolean;
    options?: Record<string, any>;
  };
  fog?: {
    enabled?: boolean;
    options?: Record<string, any>;
  };
  environment?: {
    sky?: {
      options?: Record<string, any>;
    };
    hdri?: {
      path?: string;
      enabled?: boolean;
      background?: boolean;
    };
  };
  postProcessing?: {
    enabled?: boolean;
    options?: Record<string, any>;
  };
  lerpFactor?: number;
};

export type ScenePresets = Record<string, ScenePreset>;

export interface T3SceneProps {
  preset?: string;
  children?: React.ReactNode;
  cameraPositions?: CameraPositions;
  scenePresets?: ScenePresets;
}

// CameraContext API
export interface CameraContextType {
  cameraRef: React.MutableRefObject<Object3D | undefined>;
  targetPosition: React.MutableRefObject<[number, number, number]>;
  targetLookAt: React.MutableRefObject<[number, number, number]>;
  moveTo: (name: string) => void;
  trackTarget: (position: [number, number, number], lookAt: [number, number, number]) => void;
  addCameraPosition?: (name: string, data: CameraPosition) => void;
  setCameraPositions?: (positions: CameraPositions) => void;
  positionName: string;
  namedPositions?: CameraPositions;
}
