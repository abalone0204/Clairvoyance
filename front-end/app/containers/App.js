import {
    connect
} from 'react-redux'

import fetchComments from '../../API/fetchComments.js'
import createComment from '../../API/createComment.js'
import fetchJob from '../../API/fetchJob.js'
import createJob from '../../API/createJob.js'

import oauthCallback from '../../chrome/oauthCallback.js'

const clickHandler = (e) => {
    e.preventDefault()
    chrome.runtime.sendMessage({
        message: "login"
    }, (response) => {
        chrome.storage.sync.set({'access_token': response.access_token})
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
        chrome.storage.sync.get('access_token', (item) =>{
            console.log('item ==>', item);
            if (!!item['access_token']) {
                console.log('Access token exists:', item['access_token']);
            } else {
                console.log('access token not found');
            }
        })       
    }

    render() {
        const {
            comments
        } = this.props

        return (
            <div>
                test app container
                <div>
                    <a href="" onClick={clickHandler}>facebook login</a>
                </div>
                <div>
                    <a href="" onClick={getAccessTokenHandler}>get access_token</a>
                </div>
                <div>
                    <a href="" onClick={clearHandler}> clear</a>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state
}


export default connect(mapStateToProps)(App)