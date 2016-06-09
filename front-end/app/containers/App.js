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
    changeUserIdentity
}from '../actions/changeUserIdentity.js'

import CommentsBlock from 'components/CommentsBlock'
import UserBlock from 'components/UserBlock'

const bindSendLoginRequest = (dispatch) => (e) => {
    console.log('what is e :' ,e);
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
        const sendCreateCommentRequest = (params) => {
            dispatch(requestLeaveComment(params))
        }
        const boundChangeUserIdentity = () => {
            dispatch(changeUserIdentity())
        }
        const sendLoginRequest = bindSendLoginRequest(dispatch)
        
        return (
            <div>
                <UserBlock user={user} sendLoginRequest={sendLoginRequest}/>
                <CommentsBlock {...{        
                    job,
                    user,
                    comments,
                    sendLoginRequest,
                    sendCreateCommentRequest,
                    changeUserIdentity: boundChangeUserIdentity
                }}
                />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state
}


export default connect(mapStateToProps)(App)