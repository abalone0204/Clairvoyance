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
    REQUEST_CREATE_JOB
} from 'actions/createJob.js'

import {
    watchRequestFetchJob,
    fetchJobFlow,
    jobHandler
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

        it('should call jobHandler', () => {
            const job = {
                id: '123123',
                e04_job_no: '123$3#',
                company_name: 'goo',
                job_name: 'work'
            }
            const expected = call(jobHandler, job, action)
            const actual = iterator.next(job).value
            assert.deepEqual(expected, actual)
        })

        it('should handle error', () => {
            const error = new Error('mock')
            const expected = put({
                type: FAIL_TO_FETCH_JOB,
                error
            })
            const actual = iterator.throw(error).value
            assert.deepEqual(expected, actual)
        })
        describe('jobHandler', () => {
            describe('if job is null', () => {
                const iterator = jobHandler(null, action)
                it('should put request create job effect, if the job is null', () => {
                    const expected = put({
                        type: REQUEST_CREATE_JOB,
                        params: action.query
                    })
                    const actual = iterator.next().value
                    assert.deepEqual(expected, actual)
                })
            })

            describe('if job is found', () => {
                const job = {
                    id: '123123',
                    e04_job_no: '123$3#',
                    company_name: 'goo',
                    job_name: 'work'
                }
                const iterator = jobHandler(job, action)

                it('should put success fetched job effect, if the job is found', () => {
                    const expected = put({
                        type: SUCCESS_FETCH_JOB,
                        job
                    })
                    const actual = iterator.next().value
                    assert.deepEqual(expected, actual)
                })
            })



            
        })
    })


})