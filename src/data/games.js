export const gamePagesData = [
  {
    name: "2048",
    description: `THE GAME INVOLVES SLIDING A NUMBER ACROSS\nUNTIL A SAME NUIMBER MATCHES. STACK SIMILAR NUMBERS TO REVEAL A LARGER NUMBER AND GET TO THE HIGHEST SCORE AND BEAT EVERYONE ELSE`,
    highScore: "21094",
    accentColor: "192F1A",
    bg: '/Frame_3.png',
    next: '/worldle',
    path: '/2048'
  },
  {
    name: "WORLDLE",
    description: `GUESS THE COUNTRY IN SIX TRIES. USE THE HINTS TO NARROW DOWN THE POSSIBILITIES AND BECOME A GEOGRAPHY WHIZ!`,
    highScore: "12345",
    accentColor: "E07755",
    bg: "/sky.png",
    next: '/tetris',
    path: '/worldle'
  },
  {
    name: "TETRIS",
    description: `GUESS THE COUNTRY IN SIX TRIES. USE THE HINTS TO NARROW DOWN THE POSSIBILITIES AND BECOME A GEOGRAPHY WHIZ!`,
    highScore: "12345",
    accentColor: "6F1F26",
    bg: "/sky_purpule.png",
    next: '/2048',
    path: '/tetris'
  }
];

// Helper to quickly retrieve a specific configuration
export const getGameData = (name) => {
  return gamePagesData.find(g => g.name === name);
};
