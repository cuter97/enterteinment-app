import * as types from "./AuthTypes"
import { auth } from '../firebase/firebase-config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"


//REGISTER
export const registerInitite = (email, password, displayName) => async (dispatch) => {
    try {
        dispatch(
            { type: types.REGISTER_START, }
        )
        const { user } = await createUserWithEmailAndPassword(auth, email, password)

        await updateProfile(user, { displayName })

        dispatch({
            type: types.REGISTER_SUCCESS,
            payload: user,
        })
    } catch (error) {
        dispatch({
            type: types.REGISTER_ERROR,
            payload: error.message,
        })
    }
}


//LOGIN
export const loginAuth = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: types.REGISTER_START,
        })

        const { user } = await signInWithEmailAndPassword(auth, email, password)

        dispatch({
            type: types.REGISTER_SUCCESS,
            payload: user,
        })

    } catch (error) {
        dispatch({
            type: types.REGISTER_ERROR,
            payload: error.message,
        })
    }
}

//LOGOUT
export const logoutAuth = () => async (dispatch) => {
    try {
        dispatch({
            type: types.LOGOUT_START,
        })

        const resp = await signOut(auth)

        dispatch({
            type: types.LOGOUT_SUCCESS,
            payload: resp,
        })

    } catch (error) {
        dispatch({
            type: types.LOGOUT_ERROR,
            payload: error.message,
        })
    }
}

//SET_USER
export const setUser = (user) => (dispatch) => {
    dispatch({
        type: types.SET_USER,
        payload: user,
    })
}