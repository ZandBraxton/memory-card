import React from 'react'
import '../styles/gameboard.css'


export default function GameBoard({cards}) {

    return(
        <div className="game-board">
          {cards}
        </div>
    )

}