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
    REQUEST_CREATE_JOB,
    FAIL_TO_CREATE_JOB,
    SUCCESS_CREATE_JOB
} from 'actions/createJob.js'

import {
    watchRequestCreateJob,
    createJobFlow
} from 'sagas/createJob.js'
import createJob from 'API/createJob'

describe('Sagas/ createJob', () => {
    describe('watchRequestCreateJob', () => {
        const iterator = watchRequestCreateJob()
        it('should create request fetch job action', () => {
            const expected = call(takeEvery, REQUEST_CREATE_JOB, createJobFlow)
            const actual = iterator.next().value
            assert.deepEqual(expected, actual)
        })
    })

    describe('createJobFlow', () => {
        const action = {
            type: REQUEST_CREATE_JOB,
            params: {
                company_name: 'foo',
                job_name: 'wo',
                e04_job_id: '123123'
            }
        }
        const iterator = createJobFlow(action)

        it('should call create job API', () => {
            const expected = call(createJob, action.params)
            const actual = iterator.next().value
            assert.deepEqual(expected, actual)
        })

        it('should put success create job effect', () => {
            const job = {
                id: '1231231',
                company_name: 'foo',
                job_name: 'wo',
                e04_job_id: '123123'
            }
            const expected = put({
                type: SUCCESS_CREATE_JOB,
                job
            })
            const actual = iterator.next(job).value
            assert.deepEqual(expected, actual)
        })

        it('should handle fail to create job', () => {
            const error = new Error('mock')
            const expected = put({
                type: FAIL_TO_CREATE_JOB,
                error
            })
            const actual = iterator.throw(error).value
            assert.deepEqual(expected, actual)
        })
    })
})