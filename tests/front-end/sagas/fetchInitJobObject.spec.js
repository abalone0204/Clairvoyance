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

import {
  watchFetchInitJobObject,
  initJobObjectFlow,
} from 'sagas/fetchInitJobObject.js'

import {
  FETCH_INIT_JOB_OBJECT,
  fetchInitJobObject,
  setInitJobObject,
  failToInitJobObject,
} from 'actions/initialize.js'

import getProvider, {
  getProviderName,
  getJobQuery
} from 'providers'


describe('Sagas/ Fetch initJobObject', () => {
  describe('watchFetchInitJobObject?', () => {
    const iterator = watchFetchInitJobObject()
    it('should take everty fetchInitJobObject', () => {
      const expected = call(takeEvery, FETCH_INIT_JOB_OBJECT, initJobObjectFlow)
      const actual = iterator.next().value
      assert.deepEqual(expected, actual)
    })
  })
  describe('initJobObjectFlow', () => {
    const iterator = initJobObjectFlow(fetchInitJobObject())
    it('should call getProviderName', () => {
      const expected = call(getProviderName)
      const actual = iterator.next().value
      assert.deepEqual(expected, actual)
    })

    it('should call getProvider', () => {
      const expected = call(getProvider)
      const actual = iterator.next().value
      assert.deepEqual(expected, actual)
    })

    it('should call getJobObject', () => {
      const mockProvider = {
        get_job_name: () => 'mock'
      }
      const expected = call(getJobQuery, mockProvider)
      const actual = iterator.next(mockProvider).value
      assert.deepEqual(expected, actual)
    })

    it('should call setJobObject', () => {
      const jobObject = {
        job_name: 'mock',
        company_name: 'mock',
      }
      const expected = put(setInitJobObject(jobObject))
      const actual = iterator.next(jobObject).value
      assert.deepEqual(expected, actual)
    })

    it('should call failToFetchJobObnject', () => {
      const error = new Error('mock')
      const expected = put(failToInitJobObject(error))
      const actual = iterator.throw(error).value
      assert.deepEqual(expected, actual)
    })
  })
})