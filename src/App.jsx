import { useEffect } from 'react'
import { getPokemon} from './api'
import './App.css'
import { Col, Spin } from 'antd'
import logo from "./statics/logo-pokedux.svg"
import Searcher from './Components/Searcher'
import PokemonList from './Components/PokemonList'
import {getPokemonsWithDetails, setLoading} from './actions'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const pokemons = useSelector(state => state.pokemons);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(()=> {
    const fetchPokemon = async ()=> {
      dispatch(setLoading(true));
      const pokemonRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonRes));
      dispatch(setLoading(false));
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
      { loading ? <Col >
        <Spin spinning size='large' />
      </Col> : <PokemonList pokemons={pokemons}/> }
    </div>
  )
}

export default App;
