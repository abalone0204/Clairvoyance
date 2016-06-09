import CSSModules from 'react-css-modules'

import styles from './styles.css'

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

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const {
            fb_id
        } = this.props.comment
        if (fb_id) {
            fetch(`https://graph.facebook.com/v2.6/${fb_id}/picture?redirect=false&type=square`)
                .then(response => response.json())
                .then((json) => {
                    this.setState({
                        fb_url: json.data.url
                    })
                })
        }
    }

    render() {
        const {
            comment
        } = this.props
        const {
            fb_url
        } = this.state
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
                    renderAvatar(fb_url)
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