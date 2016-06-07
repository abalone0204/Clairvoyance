import {
    assert
} from 'chai'

import {
    REQUEST_FETCH_JOB,
    FAIL_TO_FETCH_JOB,
    SUCCESS_FETCH_JOB
} from 'actions/fetchJob.js'

import {
    REQUEST_CREATE_JOB,
    FAIL_TO_CREATE_JOB,
    SUCCESS_CREATE_JOB
} from 'actions/createJob.js'

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
            status: 'fetching',
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
            status: 'fetched',
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
            status: 'fail to fetch',
            error
        }
        const actual = reducer(initState(), {
            type: FAIL_TO_FETCH_JOB,
            error
        })
        assert.deepEqual(expected, actual)
    })
    it('should handle request create job', () => {
        
        const params = {
            job_name: 'work',
            company_name: 'goo'
        }

        const expected = {
            status: 'creating',
            params
        }
        const actual = reducer(initState(), {
            type: REQUEST_CREATE_JOB,
            params
        })
        assert.deepEqual(expected, actual)
    })

    it('should handle success create job', () => {
        const job = {
            id: '1231231',
            job_name: 'work',
            company_name: 'goo'
        }
        const expected = {
            status: 'created',
            job
        }
        const actual = reducer(initState(), {
            type: SUCCESS_CREATE_JOB,
            job
        })
        assert.deepEqual(expected, actual)
    })

    it('should handle fail to create job', () => {
        const error = new Error('mock')
        const expected = {
            status: 'fail to create',
            error
        }
        const actual = reducer(initState(), {
            type: FAIL_TO_CREATE_JOB,
            error
        })
        assert.deepEqual(expected, actual)
    })
})