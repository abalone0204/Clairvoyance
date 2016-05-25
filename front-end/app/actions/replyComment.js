export const REQUEST_REPLY_COMMENT = 'REQUEST_REPLY_COMMENT'
export const FAIL_TO_REPLY_COMMENT = 'FAIL_TO_REPLY_COMMENT'
export const SUCCESS_REPLY_COMMENT = 'SUCCESS_REPLY_COMMENT'

export function requestReplyComment () {
            return {
                type: REQUEST_REPLY_COMMENT
                
            }    
        }

export function failToReplyComment (errors) {
            return {
                type: FAIL_TO_REPLY_COMMENT,
                errors
            }    
        }

export function successReplyComment (comments) {
            return {
                type: SUCCESS_REPLY_COMMENT,
                comments
            }    
        }