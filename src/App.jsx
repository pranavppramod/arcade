import { useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import GameExploreLayout from './layouts/ExploreLayout'

function App() {
  const location = useLocation();
  const gamePages = [
    {
      name: "2048",
      description: `THE GAME INVOLVES SLIDING A NUMBER ACROSS\nUNTIL A SAME NUIMBER MATCHES. STACK SIMILAR NUMBERS TO REVEAL A LARGER NUMBER AND GET TO THE HIGHEST SCORE AND BEAT EVERYONE ELSE`,
      highScore: "21094",
      accentColor:"192F1A",
      bg: '/Frame_3.png',
      next: '/worldle'
    },
    {
      name: "WORLDLE",
      description: `GUESS THE COUNTRY IN SIX TRIES. USE THE HINTS TO NARROW DOWN THE POSSIBILITIES AND BECOME A GEOGRAPHY WHIZ!`,
      highScore: "12345",
      accentColor: "E07755",
      bg: "/sky.png",
      next:'/tetris',
    },
    {
      name: "TETRIS",
      description: `GUESS THE COUNTRY IN SIX TRIES. USE THE HINTS TO NARROW DOWN THE POSSIBILITIES AND BECOME A GEOGRAPHY WHIZ!`,
      highScore: "12345",
      accentColor: "6F1F26",
      bg: "/sky_purpule.png",
      next: '/2048'
    }
  ]
  return (
    <AnimatePresence mode="popLayout">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/2048" replace />} />
        {gamePages.map((game) => (
          <Route 
            key={game.name}
            path={`/${game.name.toLowerCase()}`}
            element={
              <GameExploreLayout 
                {...game}
              />
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  )
}

export default App
