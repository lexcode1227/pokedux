import { useEffect, useMemo } from 'react'
import './App.css'
import { Col, Spin } from 'antd'
import logo from "./statics/logo-pokedux.svg"
import Searcher from './Components/Searcher'
import PokemonList from './Components/PokemonList'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchPokemonsWithDetails } from './slices/dataSlice'
import EmptyResult from './Components/EmptyResult'

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const searchText = useSelector((state) => state.data.searchText);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(()=> {
      dispatch(fetchPokemonsWithDetails());
  },[])

  const filteredPokemons = useMemo(() => {
    if (searchText === "") {
      return pokemons;
    } else {
      return pokemons.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().startsWith(searchText.toLowerCase())
      );
    }
  }, [pokemons, searchText]);
  return (
    <div className='App'>
      <Col span={4} offset={10} >
        <img src={logo} alt='Pokedux logo' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      {loading ? (
        <Col>
          <Spin spinning size='large' />
        </Col>
      ) : (
        filteredPokemons.length === 0 ? <EmptyResult searchText={searchText}/> : <PokemonList pokemons={filteredPokemons} />
      )}
      {/* { loading ? <Col >
        <Spin spinning size='large' />
      </Col> : <></> }
      { filteredPokemons.length === 0 ? <p>Sin Resultados</p> :
        <PokemonList pokemons={filteredPokemons}/>
      } */}
      {/* { loading ? <Col >
        <Spin spinning size='large' />
      </Col> : <PokemonList pokemons={filteredPokemons}/> } */}
    </div>
  )
}

export default App;
