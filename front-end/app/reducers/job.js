import {
    REQUEST_FETCH_JOB,
    FAIL_TO_FETCH_JOB,
    SUCCESS_FETCH_JOB
} from '../actions/fetchJob.js'

import {
    REQUEST_CREATE_JOB,
    FAIL_TO_CREATE_JOB,
    SUCCESS_CREATE_JOB
} from '../actions/createJob.js'

export default function job(state = {
    status: 'init'
}, action) {
    switch (action.type) {
        case REQUEST_CREATE_JOB:
            return {
                status: 'creating',
                params: action.params
            }
        case REQUEST_FETCH_JOB:
            return {
                status: 'fetching',
                query: action.query
            }
        case FAIL_TO_CREATE_JOB:
            return {
                status: 'fail to create',
                error: action.error
            }
        case FAIL_TO_FETCH_JOB:
            return {
                status: 'fail to fetch',
                error: action.error
            }
        case SUCCESS_CREATE_JOB:
            return {
                status: 'created',
                job: action.job
            }
        case SUCCESS_FETCH_JOB:
            return {
                status: 'fetched',
                job: action.job
            }
        default:
            return state
    }
}