import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './reducer/AuthReducer';
import dataReducer from './reducer/DataReducer';


const rootReducer = combineReducers({
    user: userReducer,
    data: dataReducer,
})

export default function generateStore() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    return store
}