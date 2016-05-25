import {
    assert
} from 'chai'

import {
    REQUEST_REPORT_COMMENT,
    FAIL_TO_REPORT_COMMENT,
    SUCCESS_REPORT_COMMENT,
    requestReportComment,
    failToReportComment,
    successReportComment
} from 'actions/reportComment.js'


describe('Actions/ Report comments', () => {

    it('should create request report comment action', () => {
        const expected = {
            type: REQUEST_REPORT_COMMENT
        }
        const actual = requestReportComment()
        assert.deepEqual(expected, actual)
    })

    it('should create fail to report comment action', () => {
        const errors = {
            message: 'something wrong'
        }
        const expected = {
            type: FAIL_TO_REPORT_COMMENT,
            errors
        }
        const actual = failToReportComment(errors)
        assert.deepEqual(expected, actual)

    })

    it('should create success report comment action', () => {
        const notifications = {
            message: 'done'
        }

        const expected = {
            type: SUCCESS_REPORT_COMMENT,
            notifications
        }

        const actual = successReportComment(notifications)
        assert.deepEqual(expected, actual)

    })
})