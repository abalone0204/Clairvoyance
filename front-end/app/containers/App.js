import getProvider, {
    getProviderName,
    getJobQuery
} from '../providers'

import {
    connect
} from 'react-redux'

import oauthCallback from '../../chrome/oauthCallback.js'
import {
    requestLogin
} from '../actions/login.js'
import {
    requestFetchJob
} from '../actions/fetchJob.js'
import {
    requestLeaveComment
} from '../actions/leaveComment.js'

import {
    requestCreateJob
} from '../actions/createJob.js'

let value = 0
const createJobHandler = (dispatch) => (e) => {
    e.preventDefault()
    value += 1
    const params = {
        "company_name": `goo${value}`,
        "job_name": "test",
        "e04_job_no": "12313"
    }
    dispatch(requestCreateJob(params))
}

const fetchJobHandler = (dispatch) => (e) => {
    e.preventDefault()
    const query = {
        "company_name": "goo",
        "job_name": "test",
        "e04_job_no": "12313"
    }
    dispatch(requestFetchJob(query))
}

const leaveCommentHandler = (type, access_token, dispatch) => (e) => {
    e.preventDefault()
    const params = {
        type,
        access_token,
        job_id: '123123123',
        source: '404',
        content: 'FROM extension',
        anonymous: true
    }
    console.log(params);
    dispatch(requestLeaveComment(params))
}

const clickHandler = (dispatch) => (e) => {
    e.preventDefault()
    chrome.runtime.sendMessage({
        message: "login"
    }, (response) => {
        chrome.storage.sync.set({
            'access_token': response.access_token
        }, () => {
            dispatch(requestLogin(response.access_token))
        })
    })
}

const getAccessTokenHandler = (e) => {
    e.preventDefault()
    chrome.storage.sync.get('access_token', (item) => {
        console.log('item ==>', item);
    })
}

const clearHandler = (e) => {
    e.preventDefault()
    chrome.storage.sync.clear()
}

class App extends React.Component {

    componentWillMount() {
        const {
            dispatch
        } = this.props

        chrome.storage.sync.get('access_token', (item) => {
            console.log('item ==>', item);
            if (!!item['access_token']) {
                dispatch(requestLogin(item['access_token']))
            } else {
                console.log('access token not found');
            }
        })

        const provider = getProvider()
        const query = getJobQuery(provider)
        dispatch(requestFetchJob(query))
                

    }

    render() {
        const {
            job,
            comments,
            user,
            dispatch
        } = this.props
        const {
            access_token
        } = user
        console.log('job==>', job);
        return (
            <div>
                test app container
                {user.status === 'complete' ? <div>{user.info.user_name}</div>: null}
                <div>
                    <a href="" onClick={createJobHandler(dispatch)}>create Job</a>
                </div>
                <div>
                    <a href="" onClick={fetchJobHandler(dispatch)}>fetch Job</a>
                </div>
                <div>
                    <a href="" onClick={clickHandler(dispatch)}>facebook login</a>
                </div>
                <div>
                    <a href="" onClick={getAccessTokenHandler}>get access_token</a>
                </div>
                <div>
                    <a href="" onClick={clearHandler}> clear</a>
                </div>
                <div>
                    <input ref='comment' type="text"/>
                    <button onClick={leaveCommentHandler('good', access_token,dispatch)}>推</button>
                    <button onClick={leaveCommentHandler('bad', access_token,dispatch)}>噓</button>
                    <button onClick={leaveCommentHandler('normal', access_token,dispatch)}>-></button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state
}


export default connect(mapStateToProps)(App)