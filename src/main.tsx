import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import MyRoutes from './routes.tsx'
import './js/main.js';
import './scss/styles.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  </StrictMode>,
)
