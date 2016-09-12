export const REQUEST_FETCH_WORKING_TIME_BY_JOB_TITLE = 'REQUEST_FETCH_WORKING_TIME_BY_JOB_TITLE'
export const RECEIVE_WORKING_TIME = 'RECEIVE_WORKING_TIME'
export const FAIL_TO_FETCH_WORKING_TIME_BY_JOB_TITLE = 'FAIL_TO_FETCH_WORKING_TIME_BY_JOB_TITLE'

export function requestFetchWorkingTimeByJobTitle({
  job_title,
  page,
}) {
  return {
    type: REQUEST_FETCH_WORKING_TIME_BY_JOB_TITLE,
    job_title,
    page,
  }
}

export function receiveWorkingTime(response) {
  return {
    type: RECEIVE_WORKING_TIME,
    response,
  }
}

export function failToFetchWorkingTimeByJobTitle(error) {
  return {
    type: FAIL_TO_FETCH_WORKING_TIME_BY_JOB_TITLE,
    error,
  }
}
