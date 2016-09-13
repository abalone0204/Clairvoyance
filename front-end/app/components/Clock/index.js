import CSSModules from 'react-css-modules'
import styles from './styles.css'

const Clock = () => (
  <div styleName="clock">
    <div styleName="top"></div>
    <div styleName="right"></div>
    <div styleName="bottom"></div>
    <div styleName="left"></div>
    <div styleName="center"></div>
    <div styleName="hour"></div>
    <div styleName="minute"></div>
  </div>
)

export default CSSModules(Clock, styles)