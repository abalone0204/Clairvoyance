import 'babel-polyfill'
import {
    takeEvery
} from 'redux-saga'

import {
    put,
    call
} from 'redux-saga/effects'

import fetchComments from '../API/fetchComments.js'

import {
    REQUEST_FETCH_COMMENTS,
    FAIL_TO_FETCH_COMMENTS,
    RECEIVE_COMMENTS
} from '../actions/fetchComments.js'

export function* watchRequestFetchComments() {
    yield call(takeEvery, REQUEST_FETCH_COMMENTS, fetchCommentsFlow)
}

export function* fetchCommentsFlow(action) {
    try {
        const comments = yield call(fetchComments, action.job_id)    
        yield put({type: RECEIVE_COMMENTS, comments})
    } catch(error) {
        yield put({type: FAIL_TO_FETCH_COMMENTS, error})
    }    
}