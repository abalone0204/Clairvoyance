import CSSModules from 'react-css-modules'

import styles from './styles.css'

class StatusBlock extends React.Component {

    render() {
        const {
            comments
        } = this.props

        if (comments.data.length !== 0) {
            let statNumbers = {
                good: 0,
                bad: 0,
                normal: 0
            }

            comments.data.forEach(comment => {
                statNumbers[comment.type] += 1
            })

            return (
            <div styleName='container'>
                <div styleName='stat-item'>
                    <div styleName='icon--good'><i className="fa fa-thumbs-o-up"/></div>
                    <div styleName="number">
                        {statNumbers.good}
                    </div>
                </div>
                <div styleName='stat-item'>
                    <div styleName='icon--bad'><i className="fa fa-thumbs-o-down"/></div>
                    <div styleName="number">
                        {statNumbers.bad}
                    </div>
                </div>

                <div styleName='stat-item'>
                    <div styleName='icon--normal'>
                        <i className="fa fa-comment-o"/>
                    </div>
                    <div styleName="number">
                        {statNumbers.normal}
                    </div>
                </div>
            </div>
            )
        }


    }
}

export default CSSModules(StatusBlock, styles)