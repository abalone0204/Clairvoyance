
export const REQUEST_LEAVE_COMMENT = 'REQUEST_LEAVE_COMMENT'
export const FAIL_TO_LEAVE_COMMENT = 'FAIL_TO_LEAVE_COMMENT'
export const SUCCESS_LEAVE_COMMENT = 'SUCCESS_LEAVE_COMMENT'

export function requestLeaveComment () {
            return {
                type: REQUEST_LEAVE_COMMENT
                
            }    
        }

export function failToLeaveComment (errors) {
            return {
                type: FAIL_TO_LEAVE_COMMENT,
                errors
            }    
        }

export function successLeaveComment (comments) {
            return {
                type: SUCCESS_LEAVE_COMMENT,
                comments
            }    
        }