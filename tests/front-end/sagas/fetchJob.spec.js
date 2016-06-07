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
    REQUEST_FETCH_JOB,
    FAIL_TO_FETCH_JOB,
    SUCCESS_FETCH_JOB
} from 'actions/fetchJob.js'

import {
    watchRequestFetchJob,
    fetchJobFlow
} from 'sagas/fetchJob.js'

import fetchJob from 'API/fetchJob.js'

describe('Sagas/ fetchJob', () => {

    describe('watchRequestFetchJob', () => {
        const iterator = watchRequestFetchJob()
        it('should listen to fetchJob request', () => {
            const expected = call(takeEvery, REQUEST_FETCH_JOB, fetchJobFlow)
            const actual = iterator.next().value
            assert.deepEqual(expected, actual)
        })
    })

    describe('fetchJobFlow', () => {
        const action = {
            type: REQUEST_FETCH_JOB,
            query: {
                e04_job_no: '123$3#',
                company_name: 'goo',
                job_name: 'work'
            }
        }
        const iterator = fetchJobFlow(action)

        it('should call fetchJob API', () => {
            const expected = call(fetchJob, action.query)
            const actual = iterator.next().value
            assert.deepEqual(expected, actual)
        })

        it('should put success fetch job effect', () => {
            const job = {
                id: '123123',
                e04_job_no: '123$3#',
                company_name: 'goo',
                job_name: 'work'
            }
            const expected = put({
                type: SUCCESS_FETCH_JOB,
                job
            })
            const actual = iterator.next(job).value
            assert.deepEqual(expected, actual)
        })

        it('should handle error', () => {
            const error = new Error('mock')
            const expected = put({type: FAIL_TO_FETCH_JOB, error})
            const actual = iterator.throw(error).value
            assert.deepEqual(expected, actual)
        })
    })
})