import axios from 'axios';

export const ACTIONS_TYPE = {
    loginAccess: 'LOGIN_ACCESS',
    logOut: 'LOG_OUT',
    PokemonsList: 'POKEMONS_LIST', 
    User: 'USER',
}

export const loginAccess = (value) => {
    return {
        type: ACTIONS_TYPE.loginAccess,
        payload: value,
    }
}

export const logOut = (value) => {
    return {
        type: ACTIONS_TYPE.logOut,
        payload: value,
    }
}

export const PokemonsList = (value) => {
    return {
        type: ACTIONS_TYPE.PokemonsList,
        payload: value,
    }
}

export const User = (value) => {
    return {
        type: ACTIONS_TYPE.User,
        payload: value,
    }
}

export const GetPokemonsThunk = (data) => {
    return (dispatch) => {
        return axios ('')
        .then((response) => {
            dispatch(PokemonsList(response.data))
        })
        .catch ((err) => {
            console.log(err.message);
        })

    }
}