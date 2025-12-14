import { createRoot } from 'react-dom/client';
import './index.css';
import T3Scene from './T3Scene.jsx';
import Game from './components/Game.jsx';

createRoot(document.getElementById('root')).render(
  <T3Scene>
    <Game />
  </T3Scene>
);
