import { useEffect } from 'react'
import './App.css'
import { Col, Spin } from 'antd'
import logo from "./statics/logo-pokedux.svg"
import Searcher from './Components/Searcher'
import PokemonList from './Components/PokemonList'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchPokemonsWithDetails } from './slices/dataSlice'

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(()=> {
      dispatch(fetchPokemonsWithDetails());
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
