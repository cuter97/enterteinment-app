import * as dataTypes from '../types/DataTypes'
import { db } from '../../firebase/firebase-config'
import { collection, getDocs } from 'firebase/firestore'

//traemos la informacion de la base de datos
export const getData = () => async (dispatch) => {
    try {
        dispatch({ type: dataTypes.DATA_START })

        const datos = await getDocs(collection(db, 'data-json'))

        dispatch({
            type: dataTypes.DATA_SUCCESS,
            payload: datos.docs.map(element => {
                return {...element.data()}
            }),
        })

    } catch (error) {
        dispatch({
            type: dataTypes.DATA_ERROR,
            payload: error.code,
        })
    }
}