import 'babel-polyfill'
import Root from './containers/Root'
import store from './store.js'


export default function main(containerId, {
    job_name,
    company_name
}) {
    ReactDOM.render(<Root store={store} company_name={company_name}/>,
        document.getElementById(containerId))
}