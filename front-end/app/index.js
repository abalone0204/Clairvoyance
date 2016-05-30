import Root from './containers/Root'
import store from './store.js'

ReactDOM.render(<Root store={store}/>, document.getElementById('container'))