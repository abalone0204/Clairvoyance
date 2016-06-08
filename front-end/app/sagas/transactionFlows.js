import {
    takeEvery
} from 'redux-saga'

import {
    put,
    call
} from 'redux-saga/effects'

import {
    SUCCESS_CREATE_JOB
} from '../actions/createJob.js'

import {
    SUCCESS_FETCH_JOB
} from '../actions/fetchJob.js'

import {
    requestFetchComments
} from '../actions/fetchComments.js'

export function* transactionOfJobAndComments() {
    yield call(takeEvery, [SUCCESS_CREATE_JOB, SUCCESS_FETCH_JOB], sendRequestToFetchComments)
}

export function* sendRequestToFetchComments(action) {
    yield put(requestFetchComments(action.job.id))
}