import * as types from "./AuthTypes"

const initialState = {
    loading: false,
    currentUser: null,
    error: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case (types.REGISTER_START || types.LOGIN_START || types.LOGOUT_START): 
            return {...state, loading: true}            
        
        case (types.LOGOUT_SUCCESS):
            return {...state, currentUser: null}

        case (types.SET_USER):
            return {...state, loading: false, currentUser: action.payload}

        case (types.REGISTER_SUCCESS || types.LOGIN_SUCCESS):
            return {...state, loading: false, currentUser: action.payload}

        case (types.REGISTER_ERROR || types.LOGIN_ERROR || types.LOGOUT_ERROR):
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export default userReducer