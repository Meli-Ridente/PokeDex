import {
  GET_POKEMON,
  GET_POKEMON_OK,
  GET_POKEMON_FAIL
} from './actionType'

const initialState = {
  pokemons: [],
  loadingPokemon: false,
  error: {
    message: ''
  }
}

export default function Pokemons(state = initialState, action){
  switch(action.type){

    case GET_POKEMON:
      state = {...state, loadingPokemon: true}
      break;

    case GET_POKEMON_OK:
      state = {...state, loadingPokemon: false, pokemons: action.payload}
      break;

    case GET_POKEMON_FAIL:
      state = {...state, loadingPokemon: false, pokemons: [], error: {message: action.payload}}
      break;
    
    default:
      break
  }
  return state;
}