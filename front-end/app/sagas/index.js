import {watchRequestLogin} from './login.js'
import {watchRequestLeaveComment} from './leaveComment.js'

export default function* rootSaga() {
    yield [
        watchRequestLogin(),
        watchRequestLeaveComment()
    ]
}
