import styles from './styles.css'

@CSSModules(styles)
export default class Loading extends React.Component {
    render() {
        return (
            <div styleName="circ">
              <div styleName="load">{this.props.text}</div>
              <div styleName="hands"></div>
              <div styleName="body"></div>
              <div styleName="head">
                <div styleName="left-eye"></div>
                <div styleName="right-eye"></div>
              </div>
            </div>
        )
    }
}

Loading.defaultProps = {
    text: 'Loading'
}