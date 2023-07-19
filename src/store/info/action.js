import axios from 'axios'

import {
  GET_POKEMON,
  GET_POKEMON_OK,
  GET_POKEMON_FAIL
} from './actionType'

export function actionGetPokemon() {
  return {
    type: GET_POKEMON
  }
}

export function actionGetPokemonOk(pokemons){
  return {
    type: GET_POKEMON_OK,
    payload: pokemons
  }
}

export function actionGetPokemonFail(error){
  return {
    type: GET_POKEMON_FAIL,
    payload: error
  }
}

export function getPokemon(){
  return async (dispatch) => {
    dispatch(actionGetPokemon())
    try{
      const pokemons = []
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
      for (const pokemon of response.data.results){
        const info = await axios.get(pokemon.url)
        pokemons.push({
          'name': pokemon.name,
          'info': info.data
        })
      }
      dispatch(actionGetPokemonOk(pokemons))
    }catch(error){
      dispatch(actionGetPokemonFail(error))
    }
  }
}
