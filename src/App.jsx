import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPokemon } from './api'
import './App.css'
import { Col } from 'antd'
import logo from "./statics/logo-pokedux.svg"
import Searcher from './Components/Searcher'
import PokemonList from './Components/PokemonList'
import { setPokemons as setPokemonsActions } from './actions'

function App({ pokemons, setPokemons }) {
  console.log(pokemons);
  useEffect(()=> {
    const fetchPokemon = async ()=> {
      const pokemonRes = await getPokemon();
      setPokemons(pokemonRes)
    }
    fetchPokemon();
  },[])

  return (
    <div className='App'>
      <Col span={4} offset={10} >
        <img src={logo} alt='Pokedux logo' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value)=> dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
