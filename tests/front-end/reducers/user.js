import {
    assert
} from 'chai'
import user from 'reducers/user.js'
import {
    REQUEST_LOGIN,
    FAIL_TO_LOGIN,
    SUCCESS_LOGIN
} from 'actions/login.js'

describe('Reducers/ User', () => {
    const getInitState = () => {
        status: 'init'
    }

    it('should handle initial state', () => {
        const expected = {
            status: 'init'
        }
        const actual = user(getInitState(), {})
        assert.deepEqual(expected, actual)
    })

    it('should handle request login', () => {
        const expected = {
            status: 'loading'
        }
        const actual = user(getInitState(), {
            type: REQUEST_LOGIN
        })
        assert.deepEqual(expected, actual)
    })

    it('should handle success login', () => {
        const mockUser = {
            id: 12345,
            name: "MOCK twain"
        }
        const expected = {
            status: 'complete',
            user: mockUser
        }
        const actual = user(getInitState(), {
            type: SUCCESS_LOGIN,
            user: mockUser
        })
        assert.deepEqual(expected, actual)
    })

    it('should handle fail login', () => {
        const error = {
            message: "something's wrong"
        }
        const expected = {
            status: 'failed',
            error
        }
        const actual = user(getInitState(), {
            type: FAIL_TO_LOGIN,
            error
        })
        assert.deepEqual(expected, actual)
    })

})