// 🚨 import this BEFORE anything else
import './stores/loader-init.js';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <App />
);

