import 'babel-polyfill'
import { Provider } from 'react-redux'
import store from './app/store.js'
import Options from './app/containers/Options.js'

const OptionsRoot = ({store})=> (
    <Provider store={store}>
        <Options/>
    </Provider>
)

ReactDOM.render(<OptionsRoot store={store}/>,
    document.querySelector('#container')
)