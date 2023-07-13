import axios from "axios";

export const getPokemon = async () => {
    try {
        const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
        return data.results;
    } catch (error) {
        console.log(error.message);
    }
}
