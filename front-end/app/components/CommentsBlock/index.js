import uuid from 'node-uuid'
import styles from './styles.css'
import Comment from './children/Comment'
import Empty from 'components/Empty'
import Loading from 'components/Loading'
import CommentInput from 'components/CommentInput'


@CSSModules(styles)
export default class CommentsBlock extends React.Component {
    render() {
        const {
            comments,
            job,
            user,
            sendLoginRequest,
            sendCreateCommentRequest,
            changeUserIdentity
        } = this.props
        return (
            <div styleName='comments-block'>
                <div styleName='container'>
                    <h2 styleName='title'> Comments </h2>
                    {
                        comments.status === 'loading' ?
                        <Loading/> :
                        comments.data.length === 0 ?
                          <Empty></Empty> :
                          comments.data.map(comment => 
                            <Comment key={uuid.v1()} comment={comment}/>
                            )
                    }
                    <CommentInput {...{comments, user, job,sendLoginRequest, sendCreateCommentRequest, changeUserIdentity, sendCreateCommentRequest}}/>
                </div>
            </div>
        )
    }
}

CommentsBlock.propTypes = {
    comments: React.PropTypes.object.isRequired,
    job: React.PropTypes.object.isRequired,
    user: React.PropTypes.object.isRequired,
    sendLoginRequest: React.PropTypes.func.isRequired,
    sendCreateCommentRequest: React.PropTypes.func.isRequired,
    changeUserIdentity: React.PropTypes.func.isRequired
}