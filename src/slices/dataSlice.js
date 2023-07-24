import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
    pokemons: [],
    searchText: "",
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    "data/fetchPokemonsWithDetails",
    async (_, {dispatch}) => {
        dispatch(setLoading(true))
        const pokemonsRes = await getPokemon();
        const pokemonDetailed = await Promise.all(
            pokemonsRes.map((pokemon)=> getPokemonDetails(pokemon))
        );
        dispatch(setPokemons(pokemonDetailed));
        dispatch(setLoading(false))
    } 
);

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex(
                (pokemon)=> {
                    return pokemon.id === action.payload.pokemonId;
                })
            if (currentPokemonIndex >= 0 ){
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;

                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            }
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
    }
})

export const {setFavorite, setPokemons, setSearchText} = dataSlice.actions;
export default dataSlice.reducer;