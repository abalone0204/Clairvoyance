import {
    REQUEST_FETCH_JOB,
    FAIL_TO_FETCH_JOB,
    SUCCESS_FETCH_JOB
} from '../actions/fetchJob.js'

export default function job(state = {
    status: 'init'
}, action) {
    switch (action.type) {
        case REQUEST_FETCH_JOB:
            return {
                status: 'loading',
                query: action.query
            }
        case FAIL_TO_FETCH_JOB:
            return {
                status: 'failed',
                error: action.error
            }
        case SUCCESS_FETCH_JOB:
            return {
                status: 'complete',
                job: action.job
            }
        default:
            return state
    }
}