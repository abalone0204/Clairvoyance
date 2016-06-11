
import CSSModules from 'react-css-modules'

import styles from './styles.css'
import LoginBtn from 'components/FacebookLoginBtn'

class UserBlock extends React.Component {
    render() {
        const {user, sendLoginRequest} = this.props
        const {status} = user
        
        if (status === 'init') {
                return (
                    <div>
                      <h3>登入後留言</h3>
                      <LoginBtn sendLoginRequest={sendLoginRequest}/>
                    </div>
                )    
        }

        if (status === 'loading') {
            return (
                <div styleName='logining'>
                    <Loading/>
                </div>
                )
        }
        
    }
}

export default CSSModules(UserBlock, styles)