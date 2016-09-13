import {
  combineReducers
} from 'redux'

import {
  SET_INIT_JOB_OBJECT,
  FETCH_INIT_JOB_OBJECT,
  FAIL_TO_INIT_JOB_OBJECT,
} from 'actions/initialize.js'

export function jobObject(state = {
  status: 'init'
}, action) {
  switch (action.type) {
    case FETCH_INIT_JOB_OBJECT:
      return Object.assign({}, {
        status: 'fetching',
      })
    case SET_INIT_JOB_OBJECT:
      return Object.assign({}, {
        status: 'completed',
        job_name: action.job_name,
        company_name: action.company_name,
      })
    case FAIL_TO_INIT_JOB_OBJECT:
      return Object.assign({}, {
        status: 'error',
        error: action.error,
      })
    default:
      return state;
  }
}

const init = combineReducers({
  jobObject,
})

export default init