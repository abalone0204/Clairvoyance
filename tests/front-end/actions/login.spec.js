import {
    assert
} from 'chai'

import {
    REQUEST_TO_OAUTH,
    REQUEST_LOGIN,
    FAIL_TO_LOGIN,
    SUCCESS_LOGIN,
    LOGOUT,
    requestToOAuth,
    requestLogin,
    failToLogin,
    successLogin,
    logout
} from 'actions/login.js'


describe('Actions/ Login', () => {
    it('should handle request to oauth',  () => {
        const expected = 1
        const actual = REQUEST_TO_OAUTH  
    })
    it('should create request login action', () => {
        const expected = {
            type: REQUEST_TO_OAUTH
        }
        const actual = requestToOAuth()
        assert.deepEqual(expected, actual)
    })

    it('should create fail to login action', () => {
        const error = {
            message: 'something wrong'
        }
        const expected = {
            type: FAIL_TO_LOGIN,
            error
        }
        const actual = failToLogin(error)
        assert.deepEqual(expected, actual)

    })

    it('should create success login action', () => {
        const user = {
            id: 'abcd'
        }
        
        const expected = {
            type: SUCCESS_LOGIN,
            user
        }

        const actual = successLogin(user)
        assert.deepEqual(expected, actual)

    })

    it('should handle logout', () => {
        
        const expected = {
            type: LOGOUT
        }
        
        const actual = logout()
        assert.deepEqual(expected, actual)

    })
})