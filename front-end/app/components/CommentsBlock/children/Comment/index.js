
import CSSModules from 'react-css-modules'

import styles from './styles.css'

class Comment extends React.Component {
    
    render() {
        const {comment} = this.props
        return (
            <div>{comment.user_name}:{comment.content}</div>
            )
    }
}

export default CSSModules(Comment, styles)