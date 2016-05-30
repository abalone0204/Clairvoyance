import {
  connect
} from 'react-redux'

class App extends React.Component {
    render() {
        const {comments} = this.props
        console.log(comments);
        return (
            <div>basic</div>
            )
    }
}

function mapStateToProps(state, ownProps) {
  return state
}


export default connect(mapStateToProps)(App)