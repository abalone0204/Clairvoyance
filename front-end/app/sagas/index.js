import {watchRequestLogin} from './login.js'

export default function* rootSaga() {
    yield [
        watchRequestLogin()
    ]
}
