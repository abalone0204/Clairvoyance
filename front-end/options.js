import 'babel-polyfill'
import { Provider } from 'react-redux'
import store from './app/store.js'
import Options from './app/containers/Options.js'

// Standard Google Universal Analytics code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); // Note: https protocol here
 
ga('create', 'UA-82256880-1', 'auto');
ga('set', 'checkProtocolTask', function(){}); // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200
ga('require', 'displayfeatures');
ga('send', 'pageview', '/options.html');

const OptionsRoot = ({store})=> (
    <Provider store={store}>
        <Options/>
    </Provider>
)



ReactDOM.render(<OptionsRoot store={store}/>,
    document.querySelector('#container')
)