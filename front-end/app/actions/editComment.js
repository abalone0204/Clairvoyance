
export const REQUEST_EDIT_COMMENT = 'REQUEST_EDIT_COMMENT'
export const FAIL_TO_EDIT_COMMENT = 'FAIL_TO_EDIT_COMMENT'
export const SUCCESS_EDIT_COMMENT = 'SUCCESS_EDIT_COMMENT'

export function requestEditComment () {
            return {
                type: REQUEST_EDIT_COMMENT
                
            }    
        }

export function failToEditComment (errors) {
            return {
                type: FAIL_TO_EDIT_COMMENT,
                errors
            }    
        }

export function successEditComment (comments) {
            return {
                type: SUCCESS_EDIT_COMMENT,
                comments
            }    
        }