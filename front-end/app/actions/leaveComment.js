export const REQUEST_LEAVE_COMMENT = 'REQUEST_LEAVE_COMMENT'
export const FAIL_TO_LEAVE_COMMENT = 'FAIL_TO_LEAVE_COMMENT'
export const SUCCESS_LEAVE_COMMENT = 'SUCCESS_LEAVE_COMMENT'

export function requestLeaveComment({
    job_id,
    source,
    content,
    anonymous,
    access_token,
    type
}) {
    return {
        type: REQUEST_LEAVE_COMMENT,
        params: {
            job_id,
            source,
            content,
            anonymous,
            type,
            access_token
        }
    }
}

export function failToLeaveComment(errors) {
    return {
        type: FAIL_TO_LEAVE_COMMENT,
        errors
    }
}

export function successLeaveComment(notifications) {
    return {
        type: SUCCESS_LEAVE_COMMENT,
        notifications
    }
}