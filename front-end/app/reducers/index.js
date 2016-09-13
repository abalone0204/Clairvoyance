import {
  combineReducers
} from 'redux'
import comments from './comments.js'
import user from './user.js'
import job from './job.js'
import workingTimes from './workingTimes.js'
import init from './init.js'
const rootReducer = combineReducers({
  init,
  comments,
  user,
  job,
  workingTimes,
})

export default rootReducer
