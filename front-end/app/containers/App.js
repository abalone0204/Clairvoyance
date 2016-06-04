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
        console.log('response ==> ',response);
    })
}

class App extends React.Component {
    render() {
        const {
            comments
        } = this.props

        return (
            <div>
                test app container
                <a href="" onClick={clickHandler}>facebook login</a>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state
}


export default connect(mapStateToProps)(App)