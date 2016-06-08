import uuid from 'node-uuid'
import styles from './styles.css'
import Comment from './children/Comment'
import Empty from 'components/Empty'
@CSSModules(styles)
export default class CommentsBlock extends React.Component {
    render() {
        const {comments} = this.props
        return (
            <div styleName='comments-block'>
                <div styleName='container'>
                    <h2 styleName='title'> Comments </h2>
                    {comments.length === 0 ?
                       <Empty></Empty> :
                        comments.data.map(comment => <Comment key={uuid.v1()} comment={comment}/>)
                    }
                </div>
            </div>
            )
    }
}

