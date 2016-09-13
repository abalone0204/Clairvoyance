import {
  watchRequestLogin
} from './login.js'
import {
  watchRequestLeaveComment
} from './leaveComment.js'
import {
  watchRequestFetchComments
} from './fetchComments.js'
import {
  watchRequestFetchJob
} from './fetchJob.js'
import {
  watchRequestCreateJob
} from './createJob.js'
import {
  transactionOfJobAndComments
} from './transactionFlows.js'
import {
  watchRequestFetchWorkingTimes,
} from './fetchWorkingTimes.js'

import {
  watchFetchInitJobObject,
} from './fetchInitJobObject.js'

import {
watchRequestFetchCompanyStatByCompantName,
}from './fetchCompanyStatByCompanyName.js'

export default function* rootSaga() {
  yield [
    watchRequestLogin(),
    watchRequestLeaveComment(),
    watchRequestFetchComments(),
    watchRequestFetchJob(),
    watchRequestCreateJob(),
    transactionOfJobAndComments(),
    watchRequestFetchWorkingTimes(),
    watchFetchInitJobObject(),
    watchRequestFetchCompanyStatByCompantName(),
  ]
}