import Card from './card'
import React, {useState} from 'react'
import { useScore } from './useScore'
import { useRandomPoke } from './useRandomPoke'
import '../styles/gameboard.css'


export const useGameboard = () => {
    const [cards, setCards] = useRandomPoke()
    const [clickedArray, setClickedArray] = useState([])
    const [score, highscore, updateScore, resetScore] = useScore()

const handleClick = (id) => {
    //check clicked array
    if (clickedArray.includes(id)) {
        resetScore()
        setClickedArray([])
        shuffle(cards)
    } else {
        //add to array
        setClickedArray((prevState) => [...prevState, id])
        updateScore()
        shuffle(cards)
    }
}

const shuffle = (cards) => {
    let currentIndex = cards.length, randomIndex

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [cards[currentIndex], cards[randomIndex]] = [
            cards[randomIndex], cards[currentIndex]]
    }
    setCards(cards)
}

    const cardcomponents = cards.map((card) => (
        <Card id={card} key={card} handleClick={handleClick}></Card>
    ))
  
    return [
        score,
        highscore,
        cardcomponents,
        handleClick
    ]
}