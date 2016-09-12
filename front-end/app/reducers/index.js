import {
  combineReducers
} from 'redux'
import comments from './comments.js'
import user from './user.js'
import job from './job.js'
import workingTimes from './workingTimes.js'

const rootReducer = combineReducers({
  comments,
  user,
  job,
  workingTimes,
})

export default rootReducer
