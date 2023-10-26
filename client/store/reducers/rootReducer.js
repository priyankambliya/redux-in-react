import { combineReducers } from 'redux'
import postReducer from './postReducers'

const rootReducer = combineReducers({
    post:postReducer
})

export default rootReducer