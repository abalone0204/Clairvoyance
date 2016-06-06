import {combineReducers} from 'redux'
import comments from './comments.js'
import user from './user.js'

const rootReducer = combineReducers({
    comments,
    user
})

export default rootReducer