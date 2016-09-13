export const SET_INIT_JOB_OBJECT = 'SET_INIT_JOB_OBJECT'
export const FETCH_INIT_JOB_OBJECT = 'FETCH_INIT_JOB_OBJECT'
export const FAIL_TO_INIT_JOB_OBJECT = 'FAIL_TO_INIT_JOB_OBJECT'

export function fetchInitJobObject() {
  return {
    type: FETCH_INIT_JOB_OBJECT,
  }
}

export function setInitJobObject({
  job_name,
  company_name,
}) {
  return {
    type: SET_INIT_JOB_OBJECT,
    job_name,
    company_name,
  }
}

export function failToInitJobObject(error) {
  return {
    type: FAIL_TO_INIT_JOB_OBJECT,
    error
  }
}