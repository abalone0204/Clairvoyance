import {
    assert
} from 'chai'

import {
    REQUEST_REPLY_COMMENT,
    FAIL_TO_REPLY_COMMENT,
    SUCCESS_REPLY_COMMENT,
    requestReplyComment,
    failToReplyComment,
    successReplyComment
} from 'actions/replyComment.js'


describe('Actions/ Reply comment', () => {

    it('should create request reply comment action', () => {
        const expected = {
            type: REQUEST_REPLY_COMMENT
        }
        const actual = requestReplyComment()
        assert.deepEqual(expected, actual)
    })

    it('should create fail to reply comment action', () => {
        const errors = {
            message: 'something wrong'
        }
        const expected = {
            type: FAIL_TO_REPLY_COMMENT,
            errors
        }
        const actual = failToReplyComment(errors)
        assert.deepEqual(expected, actual)

    })

    it('should create success reply comment action', () => {
        const notifications = {
            message: 'done'
        }

        const expected = {
            type: SUCCESS_REPLY_COMMENT,
            notifications
        }

        const actual = successReplyComment(notifications)
        assert.deepEqual(expected, actual)

    })
})