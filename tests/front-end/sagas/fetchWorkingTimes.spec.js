import 'babel-polyfill'
import {
  assert
} from 'chai'
import {
  takeEvery
} from 'redux-saga'

import {
  put,
  call,
} from 'redux-saga/effects'

import {
  fetchWorkingTimeFlow,
  watchRequestFetchWorkingTimes,
} from 'sagas/fetchWorkingTimes'

import goodjobAPI from 'API/goodjob'

import {
  REQUEST_FETCH_WORKING_TIME_BY_JOB_TITLE,
  requestFetchWorkingTimeByJobTitle,
  receiveWorkingTime,
  failToFetchWorkingTimeByJobTitle,
} from 'actions/fetchWorkingTime.js'

const {
  searchByJob,
} = goodjobAPI


describe('Saga/ fetchWorkingTimes', () => {

  describe('watchRequestFetchWorkingTimes', () => {
    const iterator = watchRequestFetchWorkingTimes()
    it('should take every requestFetchWorkingTimes\' request', () => {
      const expected = call(takeEvery, REQUEST_FETCH_WORKING_TIME_BY_JOB_TITLE, fetchWorkingTimeFlow)
      const actual = iterator.next().value
      assert.deepEqual(expected, actual)
    })
  })

  describe('fetchWorkingTimesFlow', () => {
    const mockAction = requestFetchWorkingTimeByJobTitle({
      job_title: 'mock engineer',
      page: 0,
    })
    const iterator = fetchWorkingTimeFlow(mockAction)
    it('should call searchByJob API', () => {
      const expected = call(searchByJob, {
        job_title: 'mock engineer',
        page: 0,
      })
      const actual = iterator.next().value
      assert.deepEqual(expected, actual)

    })

    it('should receive response from fetchWorkingTimes API', () => {
      const response = {
        body: 'mock',
      }
      const expected = put(receiveWorkingTime(response))
      const actual = iterator.next(response).value
      assert.deepEqual(expected, actual)
    })

    it('should handle error', () => {
      const error = new Error('mock')
      const expected = put(failToFetchWorkingTimeByJobTitle(error))
      const actual = iterator.throw(error).value
      assert.deepEqual(expected, actual)

    })
  })
})