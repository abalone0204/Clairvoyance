import {
  combineReducers
} from 'redux'

import {
  REQUEST_FETCH_WORKING_TIME_BY_JOB_TITLE,
  RECEIVE_WORKING_TIME,
  FAIL_TO_FETCH_WORKING_TIME_BY_JOB_TITLE,
} from 'actions/fetchWorkingTime.js'


export function byJob(state = {
  status: 'init',
}, action) {
  switch (action.type) {
    case REQUEST_FETCH_WORKING_TIME_BY_JOB_TITLE:
      return {
        status: 'loading',
      }
    case RECEIVE_WORKING_TIME:
      return Object.assign({}, action.response, {
        status: 'completed',
      })
    case FAIL_TO_FETCH_WORKING_TIME_BY_JOB_TITLE:
      return Object.assign({}, {
        status: 'error',
        error: action.error,
      })
    default:
      return state
  }
}

const workingTimes = combineReducers({
 byJob, 
})
export default workingTimes
