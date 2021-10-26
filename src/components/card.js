import '../styles/card.css'
import React, {useState, useEffect} from 'react'

export default function Card(props) {
    const [pokemon, setPokemon] = useState({
        name: '',
        img: '',
        id: ''
    })

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon/" + props.id
        const fetchData = async() => {
            try{
                const response = await fetch(url)
                const json = await response.json()
                setPokemon({
                    name: json.name,
                    img: json.sprites.front_default,
                    id: props.id
                })
            } catch(error) {
                console.log("error", error)
            }
        }

        fetchData()

    }, [props.id])


    

return (
    <div className="card" onClick={() => props.handleClick(pokemon.id)}>
        <img 
        className="pokemon-img" 
        src={pokemon.img} 
        alt={pokemon.name}/>
        <div className="card-container">
            <h4><b className="pokemon-name">{pokemon.name}</b></h4>
        </div>
    </div>
)


}