import {
    takeEvery
} from 'redux-saga'

import {
    put,
    call
} from 'redux-saga/effects'

import {
    REQUEST_LOGIN,
    FAIL_TO_LOGIN,
    SUCCESS_LOGIN
} from '../actions/login.js'

export function* watchRequestLogin() {
    yield call(takeEvery, REQUEST_LOGIN, loginFlow)
}

export function* loginFlow(action) {
        
}