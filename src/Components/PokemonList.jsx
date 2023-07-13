import React from 'react'
import "./PokemonList.css";
import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemons }) => {
  return (
    <div className='PokemonList'>
        {pokemons.map((pokemon)=> {
            return <PokemonCard name={pokemon.name} key={pokemon.name} />
        })}
    </div>
  )
}

export default PokemonList