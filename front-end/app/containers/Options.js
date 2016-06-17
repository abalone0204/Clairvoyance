import {
    connect
} from 'react-redux'

import {
    requestLogin,
    requestToOAuth,
    logout
} from '../actions/login.js'

import {
    changeUserIdentity
} from '../actions/changeUserIdentity.js'

import Container from '../components/Container'
import LoginBtn from 'components/FacebookLoginBtn'
import LoadingBlock from 'components/LoadingBlock'
import FacebookLoginBtn from 'components/FacebookLoginBtn'
import About from 'components/About'

const bindSendLoginRequest = (dispatch) => (e) => {
    dispatch(requestToOAuth())
    chrome.runtime.sendMessage({
        message: "login"
    }, (response) => {
        chrome.storage.sync.set({
            'access_token': response.access_token
        }, () => {
            dispatch(requestLogin(response.access_token))
        })
    })
}

class Options extends React.Component {

    componentWillMount() {
        // const {
        //     dispatch,
        //     user
        // } = this.props
        // chrome.storage.sync.get('access_token', (item) => {
        //     console.log('item ==>', item);
        //     if (!!item['access_token']) {
        //         dispatch(requestLogin(item['access_token']))
        //     } else {
        //         console.log('access token not found');
        //     }
        // })
        // chrome.storage.sync.get('anonymous', (item) => {
        //     if (item['anonymous'] !== undefined) {
        //         console.log('item ==>', item['anonymous']);
        //         if (user.anonymous !== item['anonymous']) {
        //             dispatch(changeUserIdentity())
        //         }    
        //     }
        // })
    }

    render() {
        const {
            job,
            comments,
            user,
            dispatch
        } = this.props
        const {
            access_token
        } = user
        console.log('user.anonymous:' ,user.anonymous);
        const handleChange = () => {
            chrome.storage.sync.set({
                'anonymous': !(user.anonymous)
            }, () => {
                dispatch(changeUserIdentity())
            })    
        }

        if (user.status === 'loading') {
            return (
                <LoadingBlock user={user}></LoadingBlock>
            )
        } else {
            return (
                <Container>
                    <h1>Clairvoyance</h1>
                    <div>
                        現在的留言系統是架在 Disqus 上， <br/>
                        你可以選擇登入或者直接留言。
                    </div>
                    {/*
                        user.status === 'complete' ? 
                        <div>
                            <h2>Hi, {user.info.user_name}</h2>
                            <div>
                                <a href="#" onClick={()=> dispatch(logout())}>登出</a>
                            </div> 
                            <h3>設定</h3>
                            <div> 
                                <div>
                                    <label htmlFor="identity">匿名留言</label>
                                    <input
                                        type="checkbox"
                                        checked={user.anonymous}
                                        ref="complete"
                                        onChange={handleChange}
                                      />
                             
                                </div>
                            </div>
                        </div>
                        : 
                        <div>
                            <FacebookLoginBtn sendLoginRequest={bindSendLoginRequest(dispatch)}/>
                            <h2>登入後可以做什麼？</h2>
                            <div>
                                <ul>
                                    <li>
                                        使用匿名留言：其他人不會知道你的身分
                                    </li>
                                    <li>
                                        使用一般留言：會署名、顯示大頭貼於討論區
                                    </li>
                                    <li>
                                        即將開放： 追蹤留言職缺功能
                                    </li>
                                </ul>
                            </div>
                            <h2>為什麼需要臉書登入？</h2>
                            <div>
                                <ul>
                                    <li>簡易認證機制，防止機器人帳號</li>
                                </ul>
                                <div style={{paddingLeft: '20px'}}> 
                                    ※ 因臉書目前普及率較高，所以先開放臉書串聯， <br/>
                                    未來將會加上其他認證方式 :）
                                </div>
                            </div>
                            
                        </div>
                        */
                    }     
                    <hr/>
                    <About/>
                </Container>
            )
        }

    }
}

function mapStateToProps(state, ownProps) {
    return state
}


export default connect(mapStateToProps)(Options)
