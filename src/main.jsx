import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Changed from './App.jsx' to './App' for JSX compatibility
import './index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);