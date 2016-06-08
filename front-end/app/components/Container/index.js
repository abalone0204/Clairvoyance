import styles from './styles.css';

@CSSModules(styles)
export default class Container extends React.Component {
    render () {
        return (
            <div styleName='container'>{this.props.children}</div>
            )
    }
}