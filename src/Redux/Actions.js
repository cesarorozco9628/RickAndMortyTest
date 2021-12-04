import axios from 'axios';

export const ACTIONS_TYPE = {
    loginAccess: 'LOGIN_ACCESS',
    logOut: 'LOG_OUT',
    User: 'USER',
    Error: 'ERROR'
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
export const User = (value) => {
    return {
        type: ACTIONS_TYPE.User,
        payload: value,
    }
}
const ErrorPetition = (value) => {
    return {
        type: ACTIONS_TYPE.Error,
        payload: value,
    }
}
export const Users = () => {
    return async (dispatch) => {
        return axios.get('localhost:8080/get_list_user')
            .then((result) => {
                debugger;
                dispatch(User(result.data));
            })
            .catch((err) => {
                debugger;
                dispatch(ErrorPetition(err.message));
            })
    }
}