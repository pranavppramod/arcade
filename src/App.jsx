import React, { Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { appRoutes } from './routes'
import { gamePagesData } from './data/games'

function App() {
  const location = useLocation();
  const targetGame = gamePagesData.find(g => g.path === location.pathname) || gamePagesData[0];

  return (
    <Suspense fallback={<div style={{ backgroundColor: `#${targetGame.accentColor}` }} className="w-full h-dvh flex justify-center items-center"><p className="text-[#F8FFD7] font-base-neue-trial text-[clamp(2rem,4vw,64px)] animate-pulse">LOADING...</p></div>}>
      <AnimatePresence mode="popLayout">
        <Routes location={location} key={location.pathname}>
          {appRoutes.map((route, index) => (
            <Route 
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

export default App
