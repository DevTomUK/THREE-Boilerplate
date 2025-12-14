// Wrapper to store all of the world contents for the canvas

// UPDATE: Scene content may need to be lifted higher or have children components passed here and only render one.

import SceneManager from './core/SceneManager';
import SceneContent from './scene/SceneContent';

export default function World({ preset = 'default', children }) {
  return (
    <>
      <SceneManager preset={preset} />
      {children || <SceneContent />} {/* here - fallback to demo scene */}
    </>
  );
}
