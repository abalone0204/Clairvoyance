
import CSSModules from 'react-css-modules'

import styles from './styles.css'
import Loading from 'components/Loading'

class LoadingBlock extends React.Component {
    
    render() {
        const {user} = this.props
        if (user.status === 'loading') {
            return (
                <div styleName='logining'>
                    <Loading/>
                </div>
                )    
        }
    }
}

export default CSSModules(LoadingBlock, styles)