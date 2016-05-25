import {
    assert
} from 'chai'

import {
    REQUEST_DELETE_COMMENT,
    FAIL_TO_DELETE_COMMENT,
    SUCCESS_DELETE_COMMENT,
    requestDeleteComment,
    failToDeleteComment,
    successDeleteComment
} from 'actions/deleteComment.js'


describe('Actions/ Delete comments', () => {

    it('should create request delete comment action', () => {
        const expected = {
            type: REQUEST_DELETE_COMMENT
        }
        const actual = requestDeleteComment()
        assert.deepEqual(expected, actual)
    })

    it('should create fail to delete comment action', () => {
        const errors = {
            message: 'something wrong'
        }
        const expected = {
            type: FAIL_TO_DELETE_COMMENT,
            errors
        }
        const actual = failToDeleteComment(errors)
        assert.deepEqual(expected, actual)

    })

    it('should create success delete comment action', () => {
        const notifications = {
            message: 'done'
        }

        const expected = {
            type: SUCCESS_DELETE_COMMENT,
            notifications
        }

        const actual = successDeleteComment(notifications)
        assert.deepEqual(expected, actual)

    })
})