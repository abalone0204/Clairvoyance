import styles from './styles.css'

class SpinLoading extends React.Component {
    
    render() {
        return (
            <div styleName='loading-container'>
                <div styleName="loading"></div>
                <div styleName="loading-text">Loading</div>
            </div>
            )
    }
}

export default CSSModules(SpinLoading, styles)