import * as dataTypes from '../types/DataTypes'
import * as BookmarkTypes from '../types/BookmarkTypes'

const initialState = {
    loading: false,
    array: [],
    error: null,
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case (dataTypes.DATA_START):
                return {...state, loading: true}
        
        case(dataTypes.DATA_SUCCESS):
            return {...state, loading: false, array: action.payload}

        case(dataTypes.DATA_ERROR):
            return {...state, loading: false, error: action.payload}
        
        case (BookmarkTypes.BOOKMARK_SUCCESS):
            return {...state, array: action.payload}
        
        case(BookmarkTypes.BOOKMARK_ERROR):
            return {...state, error: action.payload}    

        default:
            return state;
    }
}

export default dataReducer