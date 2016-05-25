import {
    assert
} from 'chai'

import {
    REQUEST_EDIT_COMMENT,
    FAIL_TO_EDIT_COMMENT,
    SUCCESS_EDIT_COMMENT,
    requestEditComment,
    failToEditComment,
    successEditComment
} from 'actions/editComment.js'


describe('Actions/ Edit comments', () => {

    it('should create request edit comment action', () => {
        const expected = {
            type: REQUEST_EDIT_COMMENT
        }
        const actual = requestEditComment()
        assert.deepEqual(expected, actual)
    })

    it('should create fail to edit comment action', () => {
        const errors = {
            message: 'something wrong'
        }
        const expected = {
            type: FAIL_TO_EDIT_COMMENT,
            errors
        }
        const actual = failToEditComment(errors)
        assert.deepEqual(expected, actual)

    })

    it('should create success update comment action', () => {
        const notifications = {
            message: 'done'
        }

        const expected = {
            type: SUCCESS_EDIT_COMMENT,
            notifications
        }

        const actual = successEditComment(notifications)
        assert.deepEqual(expected, actual)

    })
})