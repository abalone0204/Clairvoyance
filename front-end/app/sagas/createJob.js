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
} from '../actions/createJob.js'

import createJob from '../API/createJob.js'

export function* watchRequestCreateJob() {
    yield call(takeEvery, REQUEST_CREATE_JOB, createJobFlow)
}

export function* createJobFlow(action) {
    try {
        const job = yield call(createJob, action.params)
        if (job) {
            yield put({type: SUCCESS_CREATE_JOB, job})    
        } else {
            throw new Error('Failed to create job')
        }
        
    } catch(error) {
        yield put({type: FAIL_TO_CREATE_JOB, error})
    }    
}