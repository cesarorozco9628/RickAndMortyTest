import {ACTIONS_TYPE} from './Actions';

const INITIAL_STATE = {
    login: false,
    pokemonList : [],
    User: [],
}

const Reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTIONS_TYPE.loginAccess:
            return {
                ...state,
                login: true,
            }
        case ACTIONS_TYPE.logOut:
            return {
                ...state,
                login: false,
                pokemonList: [],
            }
        case ACTIONS_TYPE.PokemonsList:
            return {
                ...state,
                pokemonList: [...state.pokemonList, action.payload],
            }
        case ACTIONS_TYPE.User:
            return {
                ...state,
                User: [...state.User, action.payload],
            }
        default:
            return state;    
    }
}

export default Reducer;