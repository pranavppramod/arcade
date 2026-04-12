import React from 'react';
import GameExploreLayout from '../layouts/ExploreLayout';
import { getGameData } from '../data/games';

export default function Game2048() {
  const data = getGameData("2048");
  return <GameExploreLayout {...data} />;
}
