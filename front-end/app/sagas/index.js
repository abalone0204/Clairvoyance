import {watchRequestLogin} from './login.js'
import {watchRequestLeaveComment} from './leaveComment.js'
import {watchRequestFetchComments} from './fetchComments.js'
export default function* rootSaga() {
    yield [
        watchRequestLogin(),
        watchRequestLeaveComment(),
        watchRequestFetchComments()
    ]
}
