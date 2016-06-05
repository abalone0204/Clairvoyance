import 'babel-polyfill'

import {
    assert
} from 'chai'

import {
    takeEvery
}from 'redux-saga'

import {
    call
} from 'redux-saga/effects'
import {
    watchRequestLogin,
    loginFlow
} from 'sagas/login.js'

import {
    REQUEST_LOGIN
} from 'actions/login.js'

describe('Sagas/ Login', () => {
    describe('watchRequestLogin', function () {
        const iterator = watchRequestLogin()
        it('should takeEvery request login and do loginFlow', () => {
            const expected = call(takeEvery, REQUEST_LOGIN, loginFlow)
            const actual = iterator.next().value
            assert.deepEqual(expected,actual)
        })
    })

    describe('loginFlow', function () {
        
    });
})