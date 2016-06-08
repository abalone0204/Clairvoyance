
import CSSModules from 'react-css-modules'

import styles from './styles.css'

class Empty extends React.Component {
    
    render() {
        return (
            <div>
                <div styleName='text'>目前沒有留言</div>
            </div>
            )
    }
}

export default CSSModules(Empty, styles)