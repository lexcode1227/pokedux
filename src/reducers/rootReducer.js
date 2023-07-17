import { combineReducers } from "redux";
import { pokemonsReducers } from "./pokemons";
import { uiReducer } from "./ui";

const rootReducer = combineReducers({
    data: pokemonsReducers,
    ui: uiReducer,
});

export default rootReducer;