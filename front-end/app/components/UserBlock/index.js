
import CSSModules from 'react-css-modules'

import styles from './styles.css'
import LoginBtn from 'components/FacebookLoginBtn'
import Loading from 'components/Loading'
import BigBang from 'components/BigBang'

class UserBlock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: true
        }
    } 
    render() {
        const {user, sendLoginRequest} = this.props
        const {status} = user
        const {display} = this.state
        const handleClick = (e) => {
            this.setState({display: !display})
        }
        
        if (status === 'init') {
            if (display) {
                return (
                    <div styleName='user-block'>
                        <div styleName="login">
                          <div styleName="login-triangle"></div>
                          <h2 styleName="login-header">Clairvoyance</h2>
                          <div styleName="login-body">
                              <h3>登入後留言</h3>
                              <LoginBtn sendLoginRequest={sendLoginRequest}/>
                              <h3 styleName='toggle-display-word' onClick={handleClick}>我暫時還不想登入</h3>
                          </div>
                        </div> 
                    </div>
                )    
            } else {
                return (
                    <div styleName='show-user-block'>
                        <i styleName='toggle-display' onClick={handleClick} className="fa fa-eye" aria-hidden="true"/>
                    </div>
                    )
            }
        }

        if (status === 'loading') {
            return (
                <div styleName='logining'>
                    <Loading/>
                </div>
                )
        }

        if (status === 'complete') {
            return (
                <div styleName='logined-flash'>
                    Hi, {user.info.user_name}. <br/>
                    歡迎使用 Clairvoyance
                </div>
                )            
        }

        
    }
}

export default CSSModules(UserBlock, styles)