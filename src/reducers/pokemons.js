import { fromJS } from "immutable";
import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "../actions/types";

const initialState = {
    pokemons: [],
};

export const pokemonsReducers =  (state = initialState , action) => {
    switch(action.type){
        case SET_POKEMONS:
            return { ...state, pokemons: action.payload };
            // return state.setIn(["pokemons"], fromJS(action,payload));
        case SET_FAVORITE:
            const newPokemonsList = [...state.pokemons];
            const currentPokemonIndex = newPokemonsList.findIndex(
                (pokemon)=> {
                    return pokemon.id === action.payload.pokemonId;
                }
            )
            if (currentPokemonIndex < 0 ){
                return state
            }
            newPokemonsList[currentPokemonIndex].favorite = !newPokemonsList[currentPokemonIndex].favorite;
            return {...state, pokemons: newPokemonsList };
        default:
            return state;
    }
}