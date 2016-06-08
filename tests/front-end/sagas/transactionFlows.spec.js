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
    SUCCESS_CREATE_JOB
} from 'actions/createJob.js'

import {
    SUCCESS_FETCH_JOB
} from 'actions/fetchJob.js'

import {
    requestFetchComments
} from 'actions/fetchComments.js'

import {
    transactionOfJobAndComments,
    sendRequestToFetchComments
} from 'sagas/transactionFlows'

describe('Sagas/ Transaction flows', () => {
    describe('transactionOfJobAndComments', () => {
        const iterator = transactionOfJobAndComments()

        it('should watch success effect of fetching and creating job, and call sendRequestToFetchComments', () => {
            const expected = call(takeEvery, [SUCCESS_CREATE_JOB, SUCCESS_FETCH_JOB], sendRequestToFetchComments)
            const actual = iterator.next().value
            assert.deepEqual(expected, actual)
        })
    })
})