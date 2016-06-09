import uuid from 'node-uuid'
import styles from './styles.css'
import Comment from './children/Comment'
import Empty from 'components/Empty'
import Loading from 'components/Loading'

@CSSModules(styles)
export default class CommentsBlock extends React.Component {
    render() {
        const {comments} = this.props
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
                </div>
            </div>
            )
    }
}

