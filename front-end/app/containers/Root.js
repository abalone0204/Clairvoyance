import { Provider } from 'react-redux'

class Root extends React.Component {
    render() {
        return (
              <Provider store={store}>
                  <Router history={history} routes={routes} />
              </Provider>
            )
    }
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default Root