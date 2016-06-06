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
        const expected = {
            type: REQUEST_CREATE_JOB,
            company_name,
            job_name
        }
        const actual = requestCreateJob({company_name, job_name})
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
        const notifications = {
            message: 'done'
        }

        const expected = {
            type: SUCCESS_CREATE_JOB,
            notifications
        }

        const actual = successCreateJob(notifications)
        assert.deepEqual(expected, actual)

    })
})