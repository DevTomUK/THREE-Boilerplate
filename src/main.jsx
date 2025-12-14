import { createRoot } from 'react-dom/client';
import './index.css';
import T3Scene from './T3Scene.jsx';
import { TOM } from './components/scene/objects/TOM.jsx';

createRoot(document.getElementById('root')).render(
  <T3Scene />
);
