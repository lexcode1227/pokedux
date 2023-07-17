import React from 'react'
import "./PokemonList.css";
import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemons }) => {
  return (
    <div className='PokemonList'>
        {pokemons.map((pokemon)=> {
          const { name, sprites, types, id } = pokemon;
          const img = sprites?.other['official-artwork']?.front_default;
            return (
              <PokemonCard name={name} key={name} image={img} types={types} id={id} />
            )
        })}
    </div>
  )
}

export default PokemonList