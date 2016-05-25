
export const REQUEST_DELETE_COMMENT = 'REQUEST_DELETE_COMMENT'
export const FAIL_TO_DELETE_COMMENT = 'FAIL_TO_DELETE_COMMENT'
export const SUCCESS_DELETE_COMMENT = 'SUCCESS_DELETE_COMMENT'

export function requestDeleteComment () {
            return {
                type: REQUEST_DELETE_COMMENT
                
            }    
        }

export function failToDeleteComment (errors) {
            return {
                type: FAIL_TO_DELETE_COMMENT,
                errors
            }    
        }

export function successDeleteComment (comments) {
            return {
                type: SUCCESS_DELETE_COMMENT,
                comments
            }    
        }