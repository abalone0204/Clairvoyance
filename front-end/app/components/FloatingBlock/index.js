
import CSSModules from 'react-css-modules'

import styles from './styles.css'

class FloatingBlock extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            display: true
        }
    } 

    render() {
        const {display} = this.state
        
        const handleClick = (e) => {
            this.setState({display: !display})
        }

        if (display) {
            return (
                <div styleName='floating-block'>
                      <div styleName="triangle"/>
                      <h2 styleName="header">Clairvoyance</h2>
                      <div styleName="body">
                          {this.props.children}
                          <h3 styleName='toggle-display-word' onClick={handleClick}>關閉</h3>
                      </div>
                </div>
            )    
        } else {
            return (
                <div styleName='show-floating-block'>
                    <i styleName='toggle-display' onClick={handleClick} className="fa fa-eye" aria-hidden="true"/>
                </div>
                )
        }
        
    }
}

export default CSSModules(FloatingBlock, styles)