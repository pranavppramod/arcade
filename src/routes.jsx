import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// Lazy load actual pages for code-splitting efficiency
const Game2048 = lazy(() => import('./pages/Game2048'));
const Worldle = lazy(() => import('./pages/Worldle'));
const Tetris = lazy(() => import('./pages/Tetris'));

export const appRoutes = [
  {
    path: "/",
    element: <Navigate to="/2048" replace />,
  },
  {
    path: "/2048",
    element: <Game2048 />,
  },
  {
    path: "/worldle",
    element: <Worldle />,
  },
  {
    path: "/tetris",
    element: <Tetris />,
  }
];
