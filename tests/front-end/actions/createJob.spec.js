import {
    assert
} from 'chai'

import {
    REQUEST_CREATE_JOB,
    FAIL_TO_CREATE_JOB,
    SUCCESS_CREATE_JOB,
    requestCreateJob,
    failToCreateJob,
    successCreateJob
} from 'actions/createJob.js'


describe('Actions/ Create job', () => {

    it('should create request create job action', () => {
        const company_name = 'goo'
        const job_name = 'pm'
        const e04_job_no = '123123'
        const expected = {
            type: REQUEST_CREATE_JOB,
            params: {
                company_name,
                job_name,
                e04_job_no,
                eeee_job_no: "null"
            }
        }
        const actual = requestCreateJob({
            company_name,
            job_name,
            e04_job_no
        })
        assert.deepEqual(expected, actual)
    })

    it('should create fail to create job action', () => {
        const errors = {
            message: 'something wrong'
        }
        const expected = {
            type: FAIL_TO_CREATE_JOB,
            errors
        }
        const actual = failToCreateJob(errors)
        assert.deepEqual(expected, actual)

    })

    it('should create success create job action', () => {
        const job = {
            id: '1231',
            company_name: 'goo',
            job_name: 'work'
        }

        const expected = {
            type: SUCCESS_CREATE_JOB,
            job
        }

        const actual = successCreateJob(job)
        assert.deepEqual(expected, actual)

    })
})