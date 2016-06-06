import {
    connect
} from 'react-redux'

import oauthCallback from '../../chrome/oauthCallback.js'
import {requestLogin} from '../actions/login.js'

const clickHandler = (dispatch) => (e) => {
    e.preventDefault()
    chrome.runtime.sendMessage({
        message: "login"
    }, (response) => {
        chrome.storage.sync.set({'access_token': response.access_token}, () => {
            dispatch(requestLogin(response.access_token))
        })
    })
}

const getAccessTokenHandler = (e) => {
    e.preventDefault()
    chrome.storage.sync.get('access_token', (item) =>{
        console.log('item ==>', item);
    })
}

const clearHandler = (e) => {
    e.preventDefault()
    chrome.storage.sync.clear()
}

class App extends React.Component {

    componentWillMount() {
        const {dispatch} = this.props
        chrome.storage.sync.get('access_token', (item) =>{
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
            comments, user, dispatch
        } = this.props

        return (
            <div>
                test app container
                {user.status === 'complete' ? <div>{user.info.user_name}</div>: null}
                
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
                    <button>推</button>
                    <button>噓</button>
                    <button>-></button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state
}


export default connect(mapStateToProps)(App)