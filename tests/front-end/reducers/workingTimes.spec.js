import {
  assert,
} from 'chai'

import {byJob} from 'reducers/workingTimes.js'

import {
  requestFetchWorkingTimeByJobTitle,
  receiveWorkingTime,
  failToFetchWorkingTimeByJobTitle,
} from 'actions/fetchWorkingTime.js'

const createInitState = () => {
  return {
    status: 'init',
  }
}

describe('Reducer/ workingTimes', () => {
  const reducer = byJob
  it('should have an init state', () => {
    const initState = createInitState()
    const expected = initState
    const actual = reducer(undefined, {})
    assert.deepEqual(expected, actual)
  })

  it('should handle request fetch workingtime by job', () => {
    const initState = createInitState()
    const expected = {
      status: 'loading'
    }
    const actual = reducer(initState, requestFetchWorkingTimeByJobTitle({
      job_title: '業務',
      page: 0,
    }))
    assert.deepEqual(expected, actual)
  })


  it('should handle response of fetching workingtime by job', () => {
    const initState = createInitState()
    const response = {
      "total_count": 1,
      "total_page": 1,
      "page": "0",
      "workings": [{
        "company": {
          "name": "業務人資訊"
        },
        "created_at": "2016-07-19T12:47:01.065Z",
        "job_title": "網頁工程師",
        "week_work_time": 45
      }]
    }
    const expected = Object.assign({}, {
      status: 'completed',
    }, response)

    const actual = reducer(initState, receiveWorkingTime(response))
    assert.deepEqual(expected, actual)
  })


  it('should handle fail to fetch workingtime by job', () => {
    const initState = createInitState()
    const error = {
      message: 'mock error',
    }
    const expected = {
      status: 'error',
      error,
    }
    const actual = reducer(initState, failToFetchWorkingTimeByJobTitle(error))
    assert.deepEqual(expected, actual)
  })

})