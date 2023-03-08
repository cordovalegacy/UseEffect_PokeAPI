import { useState, useEffect } from 'react'

const Display = () => {
    const [pokeResults, setPokeResults] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=807`)
            .then((res) => res.json())
            .then((pokemon => setPokeResults([...pokeResults, pokemon.results])))
            .catch((err) => err)
    }, [])

    console.log(pokeResults[0])

    return (
        <div>
            <h1>Here is where we will display our Pokemans</h1>
            <div className='poke-container'>
                {pokeResults[0].map(pokemans => <p>{pokemans.name.charAt(0).toUpperCase() + pokemans.name.slice(1)}</p>)}
            </div>
        </div>
    )
}

export default Display