export const REQUEST_FETCH_COMMENTS = 'REQUEST_FETCH_COMMENTS'
export const FAIL_TO_FETCH_COMMENTS = 'FAIL_TO_FETCH_COMMENTS'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export function requestFetchComments({accessToken, jobId}) {
    return {
        type: REQUEST_FETCH_COMMENTS,
        accessToken,
        jobId
    }
}

export function failToGetComments(error) {
    return {
        type: FAIL_TO_FETCH_COMMENTS,
        error
    }
}

export function receiveComments(comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}
