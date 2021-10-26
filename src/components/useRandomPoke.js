import {useState, useEffect} from 'react'


export const useRandomPoke = () => {
    const [randomPoke, setRandomPoke] = useState([])

    useEffect(() => {
        const pokemonArray = []
        for(let i = 0; i < 12; i++) {
            let randomPoke = Math.floor(Math.random() * 150) + 1
            let check = checkDuplicate(randomPoke, pokemonArray)
            while(check === false) {
            randomPoke = Math.floor(Math.random() * 150) + 1
            check = checkDuplicate(randomPoke, pokemonArray)
            }
            pokemonArray.push(randomPoke)
        }
        setRandomPoke(pokemonArray)
    },[])


    const checkDuplicate = (num, array) => {
        if(array.includes(num)) {
            return false
        } else {
            return num
        }
    }

    return [randomPoke, setRandomPoke]




}