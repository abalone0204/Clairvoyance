import {
  connect
} from 'react-redux'

class App extends React.Component {
    render() {
        return (
            <div>basic</div>
            )
    }
}

function mapStateToProps(state, ownProps) {
  return state
}


export default connect(mapStateToProps)(App)