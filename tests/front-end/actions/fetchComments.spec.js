import {
    assert
} from 'chai'

import {
    REQUEST_COMMENTS,
    FAIL_GET_COMMENTS,
    RECEIVE_COMMENTS,
    requestComments,
    failToGetComments,
    receiveComments
} from 'actions/fetchComments.js'


describe('Actions/ Fetch comments', () => {

    it('should create request comments action', () => {
        const expected = {
            type: REQUEST_COMMENTS
        }
        const actual = requestComments()
        assert.deepEqual(expected, actual)
    })

    it('should create fail to login action', () => {
        const error = {
            message: 'something wrong'
        }
        const expected = {
            type: FAIL_GET_COMMENTS,
            error
        }
        const actual = failToGetComments(error)
        assert.deepEqual(expected, actual)

    })

    it('should create receive comments action', () => {
        const comments = {
            content: 'asdasdasdasd'
        }

        const expected = {
            type: RECEIVE_COMMENTS,
            comments
        }

        const actual = receiveComments(comments)
        assert.deepEqual(expected, actual)

    })
})