import 'babel-polyfill'
import Root from './containers/Root'
import store from './store.js'


export default function main(containerId) {
    ReactDOM.render(<Root store={store}/>, document.getElementById(containerId))
}