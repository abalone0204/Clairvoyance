import {
    assert
} from 'chai'

import {
    REQUEST_FETCH_COMMENTS,
    FAIL_TO_FETCH_COMMENTS,
    RECEIVE_COMMENTS,
    requestFetchComments,
    failToGetComments,
    receiveComments
} from 'actions/fetchComments.js'


describe('Actions/ Fetch comments', () => {

    it('should create request comments action', () => {
        const job_id= '123123'
        const expected = {
            type: REQUEST_FETCH_COMMENTS,
            job_id
        }
        const actual = requestFetchComments(job_id)
        assert.deepEqual(expected, actual)
    })

    it('should create fail to login action', () => {
        const error = {
            message: 'something wrong'
        }
        const expected = {
            type: FAIL_TO_FETCH_COMMENTS,
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