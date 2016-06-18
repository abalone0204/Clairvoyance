import {
    connect
} from 'react-redux'

import oauthCallback from '../../chrome/oauthCallback.js'
import {
    requestLogin,
    requestToOAuth
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

// Import dumb components
import UserBlock from 'components/UserBlock'
import Header from 'components/Header'
import CommentsList from 'components/CommentsList'
import CommentInput from 'components/CommentInput'
import FBComment from 'components/FBComment'
import FloatingBlock from 'components/FloatingBlock'
import FlashBlock from 'components/FlashBlock'
import LoadingBlock from 'components/LoadingBlock'
import StatusBlock from 'components/StatusBlock'

// Import source provider, 104, 1111, or yes123
import getProvider, {
    getProviderName,
    getJobQuery
} from '../providers'



const bindSendLoginRequest = (dispatch) => (e) => {
    dispatch(requestToOAuth())
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
        // const {
        //     dispatch, user
        // } = this.props

        // chrome.storage.sync.get('access_token', (item) => {
        //     if (!!item['access_token']) {
        //         dispatch(requestLogin(item['access_token']))
        //     }
        // })
        
        // chrome.storage.sync.get('anonymous', (item) => {
        //     if (item['anonymous'] !== undefined) {
        //         if (user.anonymous !== item['anonymous']) {
        //             dispatch(changeUserIdentity())
        //         }    
        //     }
        // })

        // const provider = getProvider()
        // const query = getJobQuery(provider)
        // dispatch(requestFetchJob(query))
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
        const isLoading = user.status === 'loading'

        if (isLoading) {
            return (
                <div>
                    <LoadingBlock {...{user}}/>
                </div>
            )
        } else {
            return (
                <div>
                    {
                    /*
                    <FlashBlock {...{user}}/>
                    
                    <FloatingBlock {...{job}}> 
                        <StatusBlock {...{comments}}/>
                    </FloatingBlock>
                    <Header>Comments</Header>
                    <CommentsList comments={comments}/>
                    <CommentInput {...{
                        comments, 
                        user, 
                        job,
                        sendLoginRequest, 
                        sendCreateCommentRequest, 
                        changeUserIdentity: boundChangeUserIdentity, 
                        sendCreateCommentRequest
                    }}/>
                    */    
                    }
                    
                    <FBComment url={self.location.ref} numposts="10" />
                </div>

            )
        }
    }
}

function mapStateToProps(state, ownProps) {
    return state
}


export default connect(mapStateToProps)(App)