import Card from './card'
import React, {useState, useEffect} from 'react'
import { useScore } from './useScore'
import '../styles/gameboard.css'


export const useGameboard = () => {
    const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    const [clickedArray, setClickedArray] = useState([])
    const [score, highscore, updateScore, resetScore] = useScore()




const handleClick = (id) => {
    //check array
    if (clickedArray.includes(id)) {
        resetScore()
        shuffle(cards)
    } else {
        //add to array
        setClickedArray((prevState) => [...prevState, id])
        updateScore()
        shuffle(cards)
    }
}

useEffect(() => console.log(clickedArray), console.log(cards), console.log(score))


        // setCards(prevState => [...prevState, randomPoke()])


const shuffle = (cards) => {
    let currentIndex = cards.length, randomIndex

    while (currentIndex !=0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [cards[currentIndex], cards[randomIndex]] = [
            cards[randomIndex], cards[currentIndex]]
    }
    setCards(cards)
}




const randomPoke = () => {
    //handles the logic for making random pokemon
    let randomPoke = Math.floor(Math.random() * 150) + 1
    let check = checkDuplicate(randomPoke)
    while(check === false) {
        randomPoke = Math.floor(Math.random() * 150) + 1
        check = checkDuplicate(randomPoke)
        console.log(check)
        }
    return randomPoke
}


const checkDuplicate = (num) => {
    if(cards.includes(num)) {
        return false
    } else {
        return num
    }
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