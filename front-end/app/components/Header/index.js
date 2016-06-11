
import CSSModules from 'react-css-modules'

import styles from './styles.css'

class Header extends React.Component {
    
    render() {
        return (
            <h2 styleName='title'> {this.props.children} </h2>
            )
    }
}

export default CSSModules(Header, styles)