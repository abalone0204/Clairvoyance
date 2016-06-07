import {
    assert
} from 'chai'

import {
    REQUEST_FETCH_JOB,
    FAIL_TO_FETCH_JOB,
    SUCCESS_FETCH_JOB
} from 'actions/fetchJob.js'

import reducer from 'reducers/job.js'

const initState = () => {
    return {
        status: 'init'
    }
}

describe('Reducer/ job', () => {

    it('should have a init state', () => {
        const expected = initState()
        const actual = reducer(undefined, {})
        assert.deepEqual(expected, actual)
    })

    it('should handle request fetch job', () => {
        const query = {
            job_name: 'work',
            company_name: 'goo'
        }
        const expected = {
            status: 'loading',
            query
        }
        const actual = reducer(initState(), {
            type: REQUEST_FETCH_JOB,
            query
        })
        assert.deepEqual(expected, actual)
    })

    it('should handle success fetch job', () => {
        const job = {
            id: '1231231',
            job_name: 'work',
            company_name: 'goo'
        }
        const expected = {
            status: 'complete',
            job
        }
        const actual = reducer(initState(), {
            type: SUCCESS_FETCH_JOB,
            job
        })
        assert.deepEqual(expected, actual)
    })

    it('should handle fail to fetch job', () => {
        const error = new Error('mock')
        const expected = {
            status: 'failed',
            error
        }
        const actual = reducer(initState(), {
            type: FAIL_TO_FETCH_JOB,
            error
        })
        assert.deepEqual(expected, actual)
    })
})