import {
    connect
} from 'react-redux'

import {
    requestLogin,
    requestToOAuth,
    logout
} from '../actions/login.js'

import {
    changeUserIdentity
} from '../actions/changeUserIdentity.js'

import Container from '../components/Container'
import LoginBtn from 'components/FacebookLoginBtn'
import LoadingBlock from 'components/LoadingBlock'
import FacebookLoginBtn from 'components/FacebookLoginBtn'
import About from 'components/About'

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

class Options extends React.Component {

    componentWillMount() {
        const {
            dispatch,
            user
        } = this.props
        chrome.storage.sync.get('access_token', (item) => {
            console.log('item ==>', item);
            if (!!item['access_token']) {
                dispatch(requestLogin(item['access_token']))
            } else {
                console.log('access token not found');
            }
        })
        chrome.storage.sync.get('anonymous', (item) => {
            if (item['anonymous'] !== undefined) {
                console.log('item ==>', item['anonymous']);
                if (user.anonymous !== item['anonymous']) {
                    dispatch(changeUserIdentity())
                }    
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
        console.log('user.anonymous:' ,user.anonymous);
        const handleChange = () => {
            chrome.storage.sync.set({
                'anonymous': !(user.anonymous)
            }, () => {
                dispatch(changeUserIdentity())
            })    
        }

        if (user.status === 'loading') {
            return (
                <LoadingBlock user={user}></LoadingBlock>
            )
        } else {
            return (
                <Container>
                    <h1>Clairvoyance</h1>
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
                    <div> 
                        <div>
                            <label htmlFor="identity">匿名留言</label>
                            
                                <input
                                    type="checkbox"
                                    checked={user.anonymous}
                                    ref="complete"
                                    onChange={handleChange}
                                  />
                             
                        </div>
                    </div>
                    <About/>
                </Container>
            )
        }

    }
}

function mapStateToProps(state, ownProps) {
    return state
}


export default connect(mapStateToProps)(Options)