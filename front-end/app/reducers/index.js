import {combineReducers} from 'redux'
import comments from './comments.js'
import user from './user.js'
import job from './job.js'
const rootReducer = combineReducers({
    comments,
    user,
    job
})

export default rootReducer