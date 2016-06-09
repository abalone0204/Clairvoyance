import 'babel-polyfill'
import Loading from './app/components/Loading'
import fetchJob from './app/API/fetchJob.js'
import createJob from './app/API/createJob.js'
import fetchComments from './app/API/fetchComments.js'
import CommentsBlock from './app/components/CommentsBlock'
require('font-awesome/css/font-awesome.css');

const mockStyles = {
    height: '10vh'
}

const App = ({comments}) => (
    <div>
        <div style={mockStyles}>nothing but mock</div>
        <CommentsBlock comments={comments}/>
    </div>
)

fetchComments('123123123').then(data => {
    const comments = {
        data
    }
    console.log(data[0]);
    ReactDOM.render(<App comments={comments}/>, document.querySelector('#container'))    
})

if (module.hot) {
  module.hot.accept();
}
