import {
    assert
} from 'chai'

import {
    REQUEST_FETCH_JOB,
    FAIL_TO_FETCH_JOB,
    SUCCESS_FETCH_JOB,
    requestFetchJob,
    failToFetchJob,
    successFetchJob
} from 'actions/fetchJob.js'


describe('Actions/ Fetch job', () => {

    it('should create request fetch job action', () => {
        const company_name = 'goo'
        const job_name = 'pm'
        const e04_job_no = '3#4%24$'
        const expected = {
            type: REQUEST_FETCH_JOB,
            query: {
                company_name,
                job_name,
                e04_job_no
            }
        }
        const actual = requestFetchJob({
            company_name,
            job_name,
            e04_job_no
        })
        assert.deepEqual(expected, actual)
    })

    it('should create fail to fetch job action', () => {
        const errors = {
            message: 'something wrong'
        }
        const expected = {
            type: FAIL_TO_FETCH_JOB,
            errors
        }
        const actual = failToFetchJob(errors)
        assert.deepEqual(expected, actual)

    })

    it('should create success fetch job action', () => {
        const job = {
            id: '123131',
            job_name: 'asdsad',
            company_name: 'nonono'
        }

        const expected = {
            type: SUCCESS_FETCH_JOB,
            job
        }

        const actual = successFetchJob(job)
        assert.deepEqual(expected, actual)

    })
})