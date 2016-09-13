import {
  combineReducers
} from 'redux'

import {
  REQUEST_FETCH_WORKING_TIME_BY_JOB_TITLE,
  RECEIVE_WORKING_TIME,
  FAIL_TO_FETCH_WORKING_TIME_BY_JOB_TITLE,
  REQUEST_FETCH_WORKING_TIME_STAT_BY_COMPANY_NAME,
  RECEIVE_WORKING_TIME_STAT_BY_COMPANY_NAME,
  FAIL_TO_FETCH_WORKING_TIME_STAT_BY_COMPANY_NAME,
} from 'actions/fetchWorkingTime.js'

export function companyStat(state = {
  status: 'init'
}, action) {
  switch (action.type) {
    case REQUEST_FETCH_WORKING_TIME_STAT_BY_COMPANY_NAME:
      return Object.assign({}, state, {
        status: 'fetching',
      })
    case RECEIVE_WORKING_TIME_STAT_BY_COMPANY_NAME:
      return Object.assign({}, state, {
        status: 'completed',
        data: action.response,
      })
    case FAIL_TO_FETCH_WORKING_TIME_STAT_BY_COMPANY_NAME:
      return Object.assign({}, state, {
        status: 'error',
        error: action.error,
      })
    default:
      return state
  }
}

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
  companyStat,
})
export default workingTimes