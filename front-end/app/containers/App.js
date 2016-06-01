import {
    connect
} from 'react-redux'

import fetchComments from '../../API/fetchComments.js'
import createComment from '../../API/createComment.js'
import fetchJob from '../../API/fetchJob.js'
import createJob from '../../API/createJob.js'

class App extends React.Component {
    render() {
        const {
            comments
        } = this.props
        // fetchJob({
        //     companyName: 'nike',
        //     jobName: 'mj'   
        // }).then(result => {
        //     console.log('fetchJob=>', result );
        // })
        createJob({
                companyName: 'sudo inc',
                jobName: 'denny',
                jobNo: 'asdfgh1234'
            })
            .then(result => {
                console.log('result=>', result);
            })
        return (
            <div>basic</div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state
}


export default connect(mapStateToProps)(App)