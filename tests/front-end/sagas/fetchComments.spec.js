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

import fetchComments from 'API/fetchComments.js'

import {
    REQUEST_FETCH_COMMENTS,
    FAIL_TO_FETCH_COMMENTS,
    RECEIVE_COMMENTS
} from 'actions/fetchComments.js'

import {
    watchRequestFetchComments,
    fetchCommentsFlow
} from 'sagas/fetchComments.js'

describe('Sagas/ Fetch comments', () => {
    describe('watchRequestFetchComments', () => {
        const iterator = watchRequestFetchComments()
        it('should take every fetch comments\' request ', () => {
            const expected = call(takeEvery, REQUEST_FETCH_COMMENTS, fetchCommentsFlow)
            const actual = iterator.next().value
            assert.deepEqual(expected, actual)
        })
    })

    describe('fetchCommentsFlow', () => {
        const mockAction = {
            type: REQUEST_FETCH_COMMENTS,
            job_id: '123123123'
        }
        const iterator = fetchCommentsFlow(mockAction)

        it('should call fetchComments API', () => {
            const expected = call(fetchComments, mockAction.job_id)
            const actual = iterator.next().value
            assert.deepEqual(expected, actual)
        })

        it('should put receive comments\' effect', () => {
            const comments = [{job_id: '123123', content: 'yo'}]
            const expected = put({type: RECEIVE_COMMENTS, comments})
            const actual = iterator.next(comments).value
            assert.deepEqual(expected, actual)
        })

        it('should handle error',  ()=> {
            const error = new Error('mock error')
            const expected = put({type: FAIL_TO_FETCH_COMMENTS, error})
            const actual = iterator.throw(error).value
            assert.deepEqual(expected, actual)  
        });
    })
})