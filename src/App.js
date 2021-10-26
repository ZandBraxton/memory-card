import './styles/App.css';
import React from 'react';
import Header from './components/header';
import GameBoard from './components/gameboard';
import { useGameboard } from './components/useGameboard';
export default function App() {
    const [score, highscore, cardcomponents, handleClick] = useGameboard()

  return (
    <div className="App">
      <Header score={score} highscore={highscore}></Header>
      <GameBoard cards={cardcomponents} handleClick={handleClick}></GameBoard>
    </div>
  );
}


