import './styles/App.css';
import React, {useEffect, useState} from 'react';
import Header from './components/header';
import GameBoard from './components/gameboard';
import { useGameboard } from './components/useGameboard';
import { useScore } from './components/useScore';
export default function App() {
    const [score, highscore, cardcomponents, handleClick] = useGameboard()

useEffect(() => {
  console.log(score)
})

  return (
    <div className="App">
      <Header score={score} highscore={highscore}></Header>
      <GameBoard cards={cardcomponents} handleClick={handleClick}></GameBoard>
    </div>
  );
}


