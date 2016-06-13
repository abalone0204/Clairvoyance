
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
        const {job} = this.props
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
                          <div>
                            {
                                job.job ?
                                <h6>留言在<a href={`#${job.job.job_name}Cla`}>最下方（點此直接看）</a></h6>
                                : null
                            }
                            
                          </div>
                          <h3 styleName='toggle-display-word' onClick={handleClick}>關閉</h3>
                      </div>
                </div>
            )    
        } else {
            return (
                <div styleName='show-floating-block' onClick={handleClick}>
                    <i styleName='toggle-display' className="fa fa-eye" aria-hidden="true"/>
                    <h4>Clairvoyance</h4>
                </div>
                )
        }
        
    }
}

export default CSSModules(FloatingBlock, styles)