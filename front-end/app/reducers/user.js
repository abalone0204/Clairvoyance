import {
    REQUEST_LOGIN,
    FAIL_TO_LOGIN,
    SUCCESS_LOGIN
} from '../actions/login.js'

export default function user(state={
    status: 'init'
}, action) {
    switch(action.type) {
        case REQUEST_LOGIN:
            return {
                status: 'loading'
            }
        case SUCCESS_LOGIN:
            return {
                status: 'complete',
                info: action.user
            }
        case FAIL_TO_LOGIN:
            return {
                status: 'failed',
                error: action.error
            }
        default:
            return state
    }
}