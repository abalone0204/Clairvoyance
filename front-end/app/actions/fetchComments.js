export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'
export const FAIL_GET_COMMENTS = 'FAIL_GET_COMMENTS'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export function requestComments() {
    return {
        type: REQUEST_COMMENTS
    }
}

export function failToGetComments(error) {
    return {
        type: FAIL_GET_COMMENTS,
        error
    }
}

export function receiveComments(comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}
