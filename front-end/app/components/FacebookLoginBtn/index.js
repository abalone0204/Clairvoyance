
import CSSModules from 'react-css-modules'

import styles from './styles.css'

class FacebookLoginBtn extends React.Component {
    
    render() {
        const {sendLoginRequest} = this.props
        return (
            <div>
                <button styleName="login-btn-fb" onClick={sendLoginRequest}>
                  Login with Facebook
                </button>
            </div>
            )
    }
}

FacebookLoginBtn.propTypes = {
    sendLoginRequest: React.PropTypes.func.isRequired
}

export default CSSModules(FacebookLoginBtn, styles)