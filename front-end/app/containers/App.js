import {
  connect
} from 'react-redux'

import fetchComments from '../../API/fetchComments.js'

import createComment from '../../API/createComment.js'

class App extends React.Component {
    render() {
        const {comments} = this.props
        console.log(comments);
        createComment({job_id: '1234', content: 'nooooooooooooo', source: '104'})
        .then(result => {
            console.log(result);
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