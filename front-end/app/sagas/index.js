import {watchRequestLogin} from './login.js'
import {watchRequestLeaveComment} from './leaveComment.js'
import {watchRequestFetchComments} from './fetchComments.js'
import {watchRequestFetchJob} from './fetchJob.js'
export default function* rootSaga() {
    yield [
        watchRequestLogin(),
        watchRequestLeaveComment(),
        watchRequestFetchComments(),
        watchRequestFetchJob()
    ]
}
