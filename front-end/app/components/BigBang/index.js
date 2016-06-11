
import CSSModules from 'react-css-modules'

import styles from './styles.css'

class BigBang extends React.Component {
    
    render() {
        return (
            <div styleName='container'>
                <div styleName="dot">
                    <i className="fa fa-eye" aria-hidden="true"/>
                </div>
            </div>
            )
    }
}

export default CSSModules(BigBang, styles)