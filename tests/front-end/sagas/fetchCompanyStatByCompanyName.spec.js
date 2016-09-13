import 'babel-polyfill'
import {
  assert
} from 'chai'
import {
  takeEvery
} from 'redux-saga'

import {
  put,
  call
} from 'redux-saga/effects'

import companyStat from 'API/goodjob/companyStat.js'
import {
  REQUEST_FETCH_WORKING_TIME_STAT_BY_COMPANY_NAME,
  requestFetchWorkingTimeStatByCompanyName,
  receiveWorkingTimeStatByCompanyName,
  failToFetchWorkingTimeStatByCompanyName,
} from 'actions/fetchWorkingTime.js'

import {
  fetchCompanyStatByCompantNameFlow,
  watchRequestFetchCompanyStatByCompantName,
} from 'sagas/fetchCompanyStatByCompanyName.js'

describe('Sagas/ fetchCompanyStatByCompanyName', () => {
  describe('watchRequestFetchCompanyStatByCompantName', () => {
    const iterator = watchRequestFetchCompanyStatByCompantName()
    it('should take every REQUEST_FETCH_WORKING_TIME_STAT_BY_COMPANY_NAME', () => {
      const actual = iterator.next().value
      const expeted = call(takeEvery, REQUEST_FETCH_WORKING_TIME_STAT_BY_COMPANY_NAME, fetchCompanyStatByCompantNameFlow)
      assert.deepEqual(actual, expeted)
    })
  })

  describe('fetchCompanyStatByCompantNameFlow', () => {
    const iterator = fetchCompanyStatByCompantNameFlow(requestFetchWorkingTimeStatByCompanyName({
      company: 'mock',
      page: 0
    }))

    it('should call companyStat', () => {
      const actual = iterator.next().value
      const expeted = call(companyStat, {
        company: 'mock',
        page: 0
      })
      assert.deepEqual(actual, expeted)
    })

    it('should put receiveWorkingTimeStatByCompanyName ', () => {
      const response = {
        name: 'mock',
        workingTime: 40,
      }
      const actual = iterator.next(response).value
      const expeted = put(receiveWorkingTimeStatByCompanyName(response))
      assert.deepEqual(actual, expeted)
    })

    it('should handle error', () => {
      const error = new Error('mock')
      const expected = put(failToFetchWorkingTimeStatByCompanyName(error))
      const actual = iterator.throw(error).value
      assert.deepEqual(expected, actual)
    })
  })
})