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


import CommentsBlock from 'components/CommentsBlock'
import UserBlock from 'components/UserBlock'

const sendLoginRequest = (dispatch) => (e) => {
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
        console.log('comemnts==>',comments);
        console.log('user===>', user);
        return (
            <div>
                <UserBlock user={user} sendLoginRequest={sendLoginRequest(dispatch)}/>
                <CommentsBlock comments={comments}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state
}


export default connect(mapStateToProps)(App)