export const REQUEST_FETCH_JOB = 'REQUEST_FETCH_JOB'
export const FAIL_TO_FETCH_JOB = 'FAIL_TO_FETCH_JOB'
export const SUCCESS_FETCH_JOB = 'SUCCESS_FETCH_JOB'


export function requestFetchJob({company_name, job_name, e04_job_no="null", eeee_job_no="null"}) {
    return {
        type: REQUEST_FETCH_JOB,
        query: {company_name, job_name, e04_job_no, eeee_job_no}
    }
}

export function failToFetchJob(errors) {
    return {
        type: FAIL_TO_FETCH_JOB,
        errors
    }
}

export function successFetchJob(job) {
    return {
        type: SUCCESS_FETCH_JOB,
        job
    }
}