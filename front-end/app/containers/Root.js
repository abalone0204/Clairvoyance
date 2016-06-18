import { Provider } from 'react-redux'
// import App from './App'
import ClvApp from './ClvApp'

const Root = ({store}) => (
          <Provider store={store}>
              <ClvApp/>
          </Provider>
    )

Root.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default Root