import { Provider } from 'react-redux'
import App from './App'


const Root = ({store}) => (
          <Provider store={store}>
              <App/>
          </Provider>
    )

Root.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default Root