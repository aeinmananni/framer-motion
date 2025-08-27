import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="italic h-screen overflow-hidden w-full border-8 border-rose-600 bg-purple-950">
      <App />
    </main>
  </StrictMode>
);
