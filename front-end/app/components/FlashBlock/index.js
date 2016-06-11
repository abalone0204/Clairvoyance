
import CSSModules from 'react-css-modules'

import styles from './styles.css'

class FlashBlock extends React.Component {
    
    render() {
        const {user} = this.props
        if (user.status === 'complete') {
            return (
                <div styleName='logined-flash'>
                    Hi, {user.info.user_name}. <br/>
                    歡迎使用 Clairvoyance
                </div>
                )    
        }
        
    }
}

export default CSSModules(FlashBlock, styles)