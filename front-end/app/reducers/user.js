import {
    REQUEST_TO_OAUTH,
    REQUEST_LOGIN,
    FAIL_TO_LOGIN,
    SUCCESS_LOGIN,
    LOGOUT
} from '../actions/login.js'

import {
    CHANGE_USER_IDENTITY
} from '../actions/changeUserIdentity.js'

export default function user(state = {
    status: 'init',
    anonymous: false
}, action) {
    switch (action.type) {
        case REQUEST_TO_OAUTH:
            return Object.assign({}, state, {
                status: 'loading'
            })
        case REQUEST_LOGIN:
            return Object.assign({}, state, {
                status: 'loading',
                access_token: action.access_token
            })
        case CHANGE_USER_IDENTITY:
            return Object.assign({}, state, {
                anonymous: !(state.anonymous)
            })
        case SUCCESS_LOGIN:
            return Object.assign({}, state, {
                status: 'complete',
                info: action.user
            })
            return
        case FAIL_TO_LOGIN:
            return Object.assign({}, state, {
                status: 'failed',
                error: action.error
            })
        case LOGOUT:
            return {
                status: 'logout'
            }
        default:
            return state
    }
}