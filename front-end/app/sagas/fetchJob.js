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

import fetchJob from '../API/fetchJob.js'

export function* watchRequestFetchJob() {
    yield call(takeEvery, REQUEST_FETCH_JOB, fetchJobFlow)
}

export function* fetchJobFlow(action) {
    try {
        const job = yield call(fetchJob, action.query)
        yield put({
            type: SUCCESS_FETCH_JOB,
            job
        })
    } catch (error) {
        yield put({
            type: FAIL_TO_FETCH_JOB,
            error
        })
    }
}