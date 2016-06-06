import {
    REQUEST_FETCH_COMMENTS,
    FAIL_TO_FETCH_COMMENTS,
    RECEIVE_COMMENTS
} from '../actions/fetchComments.js'

export default function comments(state = {
    status: 'init',
    comments: [],
    error: null
}, action) {
    switch (action.type) {
        case REQUEST_FETCH_COMMENTS:
            return Object.assign({}, state, {
                status: 'loading',
                error: null
            })
            break
        case FAIL_TO_FETCH_COMMENTS:
            return Object.assign({}, state,{
                status: 'error',
                error: action.error
            })
            break
        case RECEIVE_COMMENTS:
            return Object.assign({}, state, {
                status: 'complete',
                comments: action.comments
            })
            break
        default:
            return state
    }
}