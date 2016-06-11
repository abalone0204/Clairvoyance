import {
    assert
} from 'chai'
import user from 'reducers/user.js'
import {
    REQUEST_TO_OAUTH,
    REQUEST_LOGIN,
    FAIL_TO_LOGIN,
    SUCCESS_LOGIN,
    LOGOUT
} from 'actions/login.js'

import {
    CHANGE_USER_IDENTITY
} from 'actions/changeUserIdentity.js'

describe('Reducers/ User', () => {
    const getInitState = () => {
        return {
            status: 'init',
            anonymous: false
        }
    }

    it('should handle initial state', () => {
        const expected = {
            status: 'init',
            anonymous: false
        }
        const actual = user(getInitState(), {})
        assert.deepEqual(expected, actual)
    })

    it('should handle request to oauth',  () =>{
        const expected = {
            status: 'loading',
            anonymous: false
        }
        const actual = user(getInitState(), {type: REQUEST_TO_OAUTH})
        assert.deepEqual(expected, actual)
    });
    it('should handle request login', () => {
        const access_token = 'mock_token'
        const expected = {
            status: 'loading',
            anonymous: false,
            access_token
        }
        const actual = user(getInitState(), {
            type: REQUEST_LOGIN,
            access_token
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
            anonymous: false,
            info: mockUser
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
            anonymous: false,
            error
        }
        const actual = user(getInitState(), {
            type: FAIL_TO_LOGIN,
            error
        })
        assert.deepEqual(expected, actual)
    })

    it('should handle chnage user identity', () => {
        const expected = {
            status: 'init',
            anonymous: true
        }
        const actual = user(getInitState(), {
            type: CHANGE_USER_IDENTITY
        })
        assert.deepEqual(expected, actual)
    })

    it('should handle logout', () => {
        const expected  = {
            status: 'logout'
        }
        const actual = user(getInitState(), {
            type: LOGOUT
        })  
        assert.deepEqual(expected, actual)
    })

})