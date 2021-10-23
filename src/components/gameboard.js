import Card from './card'
import React, {useState} from 'react'
import '../styles/gameboard.css'


export default function GameBoard() {
    const [clickedArray, setClickedArray] = useState([])

console.log(<Card></Card>)

const handleClick = (id) => {
    console.log(id)
}


    return(
        <div className="game-board">
            <Card handleClick={handleClick}></Card>
            <Card handleClick={handleClick}></Card>
            <Card handleClick={handleClick}></Card>
            <Card handleClick={handleClick}></Card>
            <Card handleClick={handleClick}></Card>
            <Card handleClick={handleClick}></Card>
            <Card handleClick={handleClick}></Card>
            <Card handleClick={handleClick}></Card>
            <Card handleClick={handleClick}></Card>
            <Card handleClick={handleClick}></Card>
        </div>
    )


}