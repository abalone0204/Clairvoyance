import uuid from 'node-uuid'
import Empty from 'components/Empty'
import SpinLoading from 'components/SpinLoading'
import Comment from 'components/Comment'
import styles from './styles.css'

class CommentsList extends React.Component {
    shouldComponentUpdate(nextProps) {
        return (nextProps.comments.status !== this.props.comments.status) ||
               (nextProps.comments.data[0] !== this.props.comments.data[0])
    }
    render() {
        const {comments} = this.props
        if (comments.status === 'loading') {
            return <SpinLoading/>
        }
        if (comments.data.length === 0) {
            return <Empty/>
        } else {
            const commentsNode = comments.data.map(comment => 
                            <Comment key={uuid.v1()} comment={comment}/>
                            )
            return (
                <div>
                    {commentsNode}
                </div>
            )    
        }
        
    }
}

export default CSSModules(CommentsList, styles)