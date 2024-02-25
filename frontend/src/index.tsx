// src/index.tsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css'; // This is the global CSS you currently have
import App from './App';
//import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
// Ensure the root element is there and has an id of 'root'
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you were using the reportWebVitals tool, you can call it here
// reportWebVitals(console.log);
