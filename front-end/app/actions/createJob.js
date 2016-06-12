export const REQUEST_CREATE_JOB = 'REQUEST_CREATE_JOB'
export const FAIL_TO_CREATE_JOB = 'FAIL_TO_CREATE_JOB'
export const SUCCESS_CREATE_JOB = 'SUCCESS_CREATE_JOB'


export function requestCreateJob({
    company_name,
    job_name,
    e04_job_no="null",
    eeee_job_no="null"
}) {
    console.log('requestCreateJob:::',{
    company_name,
    job_name,
    e04_job_no,
    eeee_job_no
});
    return {
        type: REQUEST_CREATE_JOB,
        params: {
            company_name,
            job_name,
            e04_job_no,
            eeee_job_no
        }
    }
}

export function failToCreateJob(errors) {
    return {
        type: FAIL_TO_CREATE_JOB,
        errors
    }
}

export function successCreateJob(job) {
    return {
        type: SUCCESS_CREATE_JOB,
        job
    }
}