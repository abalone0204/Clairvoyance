import {
    connect
} from 'react-redux'

import {
    requestLogin,
    logout
} from '../actions/login.js'

import Container from '../components/Container'
import LoginBtn from 'components/FacebookLoginBtn'
import LoadingBlock from 'components/LoadingBlock'
import FacebookLoginBtn from 'components/FacebookLoginBtn'

const bindSendLoginRequest = (dispatch) => (e) => {
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

class Options extends React.Component {

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
        if (user.status === 'loading') {
            return (
                <LoadingBlock user={user}></LoadingBlock>
            )
        } else {
            return (
                <Container>
                    <h1>Clairvoyance</h1>
                    {user.info ? user.info.user_name : '尚未登入'}     

                    {
                        user.status === 'complete' ? 
                        <div>
                            <h2>Hi, {user.info.user_name}</h2>
                            <div>
                                <a href="#" onClick={()=> dispatch(logout())}>登出</a>
                            </div> 
                    
                        </div>
                        : 
                        <FacebookLoginBtn sendLoginRequest={bindSendLoginRequest(dispatch)}/>
                    }     
                
                    
                </Container>
            )
        }

    }
}

function mapStateToProps(state, ownProps) {
    return state
}


export default connect(mapStateToProps)(Options)