
export const REQUEST_REPORT_COMMENT = 'REQUEST_REPORT_COMMENT'
export const FAIL_TO_REPORT_COMMENT = 'FAIL_TO_REPORT_COMMENT'
export const SUCCESS_REPORT_COMMENT = 'SUCCESS_REPORT_COMMENT'

export function requestReportComment () {
            return {
                type: REQUEST_REPORT_COMMENT
                
            }    
        }

export function failToReportComment (errors) {
            return {
                type: FAIL_TO_REPORT_COMMENT,
                errors
            }    
        }

export function successReportComment (comments) {
            return {
                type: SUCCESS_REPORT_COMMENT,
                comments
            }    
        }