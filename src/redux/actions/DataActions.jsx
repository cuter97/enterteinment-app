import * as dataTypes from '../types/DataTypes'
import { db } from '../../firebase/firebase-config'
import { collection, getDocs } from 'firebase/firestore'

import * as BookmarkTypes from '../types/BookmarkTypes'

//traemos la informacion de la base de datos
export const getData = () => async (dispatch) => {
    try {
        dispatch({ type: dataTypes.DATA_START })

        const datos = await getDocs(collection(db, 'data-json'))

        dispatch({
            type: dataTypes.DATA_SUCCESS,
            payload: datos.docs.map(element => {
                return { ...element.data() }
            }),
        })

    } catch (error) {
        dispatch({
            type: dataTypes.DATA_ERROR,
            payload: error.code,
        })
    }
}

//action que que cambia el estado de isBookmarked para agrear o no a bookmark
export const bookmarkAdd = (title, bookmark) => (dispatch, getState) => {
    try {
        const { array } = getState().data
        dispatch({
            type: BookmarkTypes.BOOKMARK_SUCCESS,
            payload: array.map(dato => {
                if (dato.title === title) {
                    if(bookmark === true)
                        dato.isBookmarked = false
                    else   
                        dato.isBookmarked = true
                }
                return {...dato}
            }),
        })

    } catch (error) {
        dispatch({
            type: BookmarkTypes.BOOKMARK_ERROR,
            payload: error,
        })
    }
}