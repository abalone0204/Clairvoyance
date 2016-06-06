import 'babel-polyfill'

import {
    assert
} from 'chai'

import {
    takeEvery
} from 'redux-saga'

import {
    call,
    put
} from 'redux-saga/effects'
import {
    watchRequestLogin,
    loginFlow,
    userHandler
} from 'sagas/login.js'

import checkAccessToken from 'API/checkAccessToken.js'
import fetchUser from 'API/fetchUser.js'
import createUser from 'API/createUser.js'

import {
    REQUEST_LOGIN,
    FAIL_TO_LOGIN,
    SUCCESS_LOGIN
} from 'actions/login.js'

describe('Sagas/ Login', () => {
    describe('watchRequestLogin', function() {
        const iterator = watchRequestLogin()
        it('should takeEvery request login and do loginFlow', () => {
            const expected = call(takeEvery, REQUEST_LOGIN, loginFlow)
            const actual = iterator.next().value
            assert.deepEqual(expected, actual)
        })
    })

    describe('loginFlow', function() {

        describe('with valid token', function() {
            const access_token = "VALID_MOCK_TOKEN"
            const mockAction = {
                type: REQUEST_LOGIN,
                access_token
            }
            const iterator = loginFlow(mockAction)

            it('should validate the access token', function() {
                const expected = call(checkAccessToken, {
                    access_token
                })
                const actual = iterator.next().value
                assert.deepEqual(expected, actual)
            })

            it('should try to fetch user', () => {
                const expected = call(fetchUser, {
                    access_token
                })
                const actual = iterator.next(true).value
                assert.deepEqual(expected, actual)
            })

            it('should call userHandler to determine create user or not', () => {
                const mockUser = {
                    name: 'mock',
                    id: 'asdad',
                    fb_id: '1231231'
                }
                const expected = call(userHandler, mockUser, {
                    access_token
                })
                const actual = iterator.next(mockUser).value
                assert.deepEqual(expected, actual)
            })

            it('should handle error', () => {
                const error = new Error('mock error')
                const expected = put({
                    type: FAIL_TO_LOGIN,
                    error
                })
                const actual = iterator.throw(error).value
                assert.deepEqual(expected, actual)
            })

            describe('userHandler: determine create user or not', () => {
                describe('user exist', () => {
                    const user = {
                        name: 'mock',
                        id: '123123',
                        fb_id: '123123123'
                    }
                    const iterator = userHandler(user, mockAction)

                    it('return user and successfully login', () => {
                        const expected = put({
                            type: SUCCESS_LOGIN,
                            user
                        })
                        const actual = iterator.next().value
                        assert.deepEqual(expected, actual)
                    })
                })

                describe('user not exist', () => {
                    const access_token = 'mockAccessTokesssn'
                    const user = null
                    const iterator = userHandler(user, {
                        access_token
                    })

                    it('should create an user', () => {
                        const expected = call(createUser, {
                            access_token
                        })
                        const actual = iterator.next().value
                        assert.deepEqual(expected, actual)
                    })

                    it('should return a new user', () => {
                        const newUser = {
                            name: 'newUser',
                            id: '123123123',
                            fb_id: '123123'
                        }
                        const expected = put({
                            type: SUCCESS_LOGIN,
                            user: newUser
                        })
                        const actual = iterator.next(newUser).value
                        assert.deepEqual(expected, actual)
                    })

                    it('should handle error', () => {
                        const error = new Error('mock error')
                        const expected = put({
                            type: FAIL_TO_LOGIN,
                            error
                        })
                        const actual = iterator.throw(error).value
                        assert.deepEqual(expected, actual)
                    })
                })

            })
        })

        describe('with invalid token', function() {
            const access_token = "INVALID_MOCK_TOKEN"
            const iterator = loginFlow({
                type: REQUEST_LOGIN,
                access_token
            })
            iterator.next()
            it('should return fail to login and error message', () => {
                const expected = put({
                    type: FAIL_TO_LOGIN,
                    error: 'access token not valid'
                })
                const actual = iterator.next().value
                assert.deepEqual(expected, actual)
            })
        })


    });
})