import React from 'react';
import GameExploreLayout from '../layouts/ExploreLayout';
import { getGameData } from '../data/games';

export default function Tetris() {
  const data = getGameData("TETRIS");
  return <GameExploreLayout {...data} />;
}
