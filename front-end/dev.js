import 'babel-polyfill'
require('font-awesome/css/font-awesome.css');

import fetchJob from './app/API/fetchJob.js'
import fetchComments from './app/API/fetchComments.js'

import BigBang from 'components/BigBang'
import LoginBtn from 'components/FacebookLoginBtn'
import UserBlock from 'components/UserBlock'
import Loading from './app/components/Loading'
import SpingLoading from './app/components/SpinLoading'
import Header from 'components/Header'
import CommentsList from 'components/CommentsList'
import CommentInput from 'components/CommentInput'
import FloatingBlock from 'components/FloatingBlock'
import FlashBlock from 'components/FlashBlock'
import LoadingBlock from 'components/LoadingBlock'
import StatusBlock from 'components/StatusBlock'
import About from 'components/About'
import Disqus from 'components/Disqus'
import Clock from 'components/Clock'
const mockStyles = {
    height: '10vh'
}

const access_token = 'asdasdas'

const App = ({
    comments,
    user,
    job,
    sendLoginRequest,
    sendCreateCommentRequest,
    changeUserIdentity
}) => (
    <div>
        <Loading></Loading>
        <SpingLoading/>
        <div style={mockStyles}>nothing but mock</div>
        <LoadingBlock {...{user}}/>
        <FlashBlock {...{user}}/>
        <FloatingBlock>
            <StatusBlock {...{comments}}/>
        </FloatingBlock>
        <About></About>
        <Header>Comments new</Header>
        <CommentsList comments={comments}/>
        <CommentInput {...{comments, user, job,sendLoginRequest, sendCreateCommentRequest, changeUserIdentity, sendCreateCommentRequest}}/>
    </div>
)

const sendCreateCommentRequest = (params) => {
    console.log('params: ', params);
}
const changeUserIdentity = () => {
    console.log('changeUserIdentity');
}

// fetchComments('be6fd760-2e79-11e6-9314-9b8ebc40d4e9').then(data => {
//     const job = {
//         id: 'asdasd'
//     }
//     const initUser = {
//         status: 'init',
//         access_token
//     }
//     const loadingUser = {
//         status: 'loading',
//         access_token
//     }
//     const completeUser = {
//         status: 'complete',
//         access_token,
//         info: {
//             created_at: 1465182432987,
//             fb_id: "1047832758603512",
//             id: "c3ff8ab0-2b93-11e6-b35c-1f15d7941296",
//             user_name: "Denny Ku",
//         },
//         anonymous: true
//     }
//     const sendLoginRequest = () => {
//         console.log('mockSendLoginRequest');
//     }
//     const comments = {
//         status: 'complete',
//         data
//     }
//     console.log(data[0]);
//     ReactDOM.render(<App user={completeUser} comments={comments} job={job}
//                          sendLoginRequest={sendLoginRequest}
//                          sendCreateCommentRequest={sendCreateCommentRequest}
//                          changeUserIdentity={changeUserIdentity}
//         />,
//         document.querySelector('#container'))
// })

    ReactDOM.render((
      <div>
        <Clock/>
      </div>
      ),
        document.querySelector('#container'))


if (module.hot) {
    module.hot.accept();
}