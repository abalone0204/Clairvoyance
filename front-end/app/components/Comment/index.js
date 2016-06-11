import CSSModules from 'react-css-modules'
import styles from './styles.css'
import FBAvatar from 'components/FBAvatar'

const renderTime = (timeStamp) => {
    const date = new Date(timeStamp)
    return date.toLocaleString()
}

function renderAvatar(url) {
    if (url) {
        return <img styleName='avatar' src={url} alt="user avatar"/>    
    } 
}

class Comment extends React.Component {

    shouldComponentUpdate(prevProps){
        return this.props.comment.id !== prevProps.comment.id
    }
    
    render() {
        const {
            comment
        } = this.props
        const renderCommentType = (type) => (
            <div styleName={type}>
                    {   
                        type === 'good' ? <i className="fa fa-thumbs-o-up"/> : 
                        type ==='bad' ? <i className="fa fa-thumbs-o-down"/> :
                        null
                    }
            </div>
        )
        return (
            <div styleName='comment'>
               <div styleName='info-container'>
                   {comment.anonymous ? 
                    <div styleName='anonymous-icon'>
                        <div styleName='anonymous-head'>
                            <div styleName="left-eye"/>
                            <div styleName="right-eye"/>
                        </div>
                        <div styleName='anonymous-body'/>
                    </div> :
                    <FBAvatar fb_id={comment.fb_id}/>
                    }
                </div> 
                <div styleName ='content-box'>
                    <div styleName="head">
                    {
                        comment.anonymous ?
                        <div styleName='anonymous-user-name'>Anonymous</div>:
                        <div styleName='user-name'>{comment.user_name}</div>
                    }
                    {renderCommentType(comment.type)}
                    <div styleName='timestamp'>
                        {renderTime(comment.timestamp)}
                    </div>
                    </div>
                    <div styleName='body'>
                        {comment.content} 
                    </div>
                </div>
               
               
            </div>
        )
    }
}

export default CSSModules(Comment, styles)