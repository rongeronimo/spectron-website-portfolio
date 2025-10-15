import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.jsx';

import * as THREE from 'three';
import { setupLoaders } from './setuploaders.js';

// Initialize and register loaders globally
const renderer = new THREE.WebGLRenderer();
setupLoaders(renderer);

createRoot(document.getElementById('root')).render(
  <App />
    
);
