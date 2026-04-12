import React from 'react';
import GameExploreLayout from '../layouts/ExploreLayout';
import { getGameData } from '../data/games';

export default function Worldle() {
  const data = getGameData("WORLDLE");
  return <GameExploreLayout {...data} />;
}
