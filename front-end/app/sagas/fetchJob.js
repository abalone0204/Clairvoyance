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
} from '../actions/fetchJob.js'

import {
    REQUEST_CREATE_JOB
} from '../actions/createJob.js'

import {
    REQUEST_FETCH_COMMENTS
} from '../actions/fetchComments.js'

import fetchJob from '../API/fetchJob.js'

export function* watchRequestFetchJob() {
    yield call(takeEvery, REQUEST_FETCH_JOB, fetchJobFlow)
}

export function* fetchJobFlow(action) {
    try {
        
        const job = yield call(fetchJob, action.query)
        yield call(jobHandler, job, action)

    } catch (error) {
        yield put({
            type: FAIL_TO_FETCH_JOB,
            error
        })
    }
}

export function* jobHandler(job, action) {
    if (job === null) {
        yield put({
            type: REQUEST_CREATE_JOB,
            params: action.query
        })
    } else {
        yield put({
            type: SUCCESS_FETCH_JOB,
            job
        })
    }
}

