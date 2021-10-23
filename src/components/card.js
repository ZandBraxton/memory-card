import '../styles/card.css'
import React, {useState, useEffect} from 'react'



export default function Card() {
    const [pokemon, setPokemon] = useState({
        name: '',
        img: '',
    })


    useEffect(() => {



        const randomPoke = Math.floor(Math.random() * 150) +1


        const url = "https://pokeapi.co/api/v2/pokemon/" + randomPoke


        const fetchData = async() => {
            try{
                const response = await fetch(url)
                const json = await response.json()
                setPokemon({
                    name: json.name,
                    img: json.sprites.front_default
                })
                console.log(json.sprites.front_default)
            } catch(error) {
                console.log("error", error)
            }
        }

        fetchData()

    }, [])


    

return (
    <div className="card">
        <img 
        className="pokemon-img" 
        src={pokemon.img} 
        alt={pokemon.name}/>
        <div className="card-container">
            <h4><b>{pokemon.name}</b></h4>
        </div>
    </div>
)


}