import {
    REQUEST_LOGIN,
    FAIL_TO_LOGIN,
    SUCCESS_LOGIN
} from '../actions/login.js'

export default function user(state = {
    status: 'init'
}, action) {
    switch (action.type) {
        case REQUEST_LOGIN:
            return Object.assign({}, state, {
                status: 'loading',
                access_token: action.access_token
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
        default:
            return state
    }
}