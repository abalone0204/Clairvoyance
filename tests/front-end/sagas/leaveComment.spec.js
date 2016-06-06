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
    REQUEST_LEAVE_COMMENT,
    FAIL_TO_LEAVE_COMMENT,
    SUCCESS_LEAVE_COMMENT
} from 'actions/leaveComment.js'

import checkAccessToken from 'API/checkAccessToken.js'
import createComment from 'API/createComment.js'

import {
    watchRequestLeaveComment,
    leaveCommentFlow
} from 'sagas/leaveComment.js'

describe('Sagas/ Leave comment', () => {
    describe('watchRequestLeaveComment', function() {
        const iterator = watchRequestLeaveComment()
        it('should take every request leave comment action', () => {
            const expected = call(takeEvery, REQUEST_LEAVE_COMMENT, leaveCommentFlow)
            const actual = iterator.next().value
            assert.deepEqual(expected, actual)

        })
    })

    describe('leave comment flow', () => {
        const params = {
            job_id: '1234',
            source: 'goo',
            content: 'no',
            anonymous: true,
            accessToken: 'mocktoken',
            type: 'good'
        }

        describe('with valid token', () => {
            const iterator = leaveCommentFlow({
                type: REQUEST_LEAVE_COMMENT,
                params
            })

            it('should validate access token', () => {
                const expected= call(checkAccessToken, {accessToken:params.accessToken})
                const actual = iterator.next().value    
                assert.deepEqual(expected, actual)
            })

            it('should create comment',  ()=> {
                const expected= call(createComment, params)
                const actual = iterator.next(true).value    
                assert.deepEqual(expected, actual)                
            })

        })

        describe('with invalid token', () => {
            it('should', function () {
                
            })
        })
    })
})