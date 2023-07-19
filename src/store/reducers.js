import {combineReducers} from 'redux'
import Pokemons from './info/reducer';

const rootReducer = combineReducers ({
  Pokemons
})

export default rootReducer;