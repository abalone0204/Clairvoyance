// todo: extract fxcking state
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import FacebookLoginBtn from 'components/FacebookLoginBtn'

class CommentInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            confirm: false,
            showConfirm: false,
            commentType: 'normal',
            commentsWordCount: 0
        }
    }
    handleChange(e) {
        const {commentsWordCount} = this.state
        // this.setState({commentsWordCount: }) 
        console.log('e:', 501-this.refs.commentInput.value.length);


    }
    render() {
        const {
            user,
            job,
            sendLoginRequest,
            changeUserIdentity,
            sendCreateCommentRequest
        } = this.props
        const {showConfirm, commentsWordCount} =this.state
        
        const handleSubmit = (type) => (e) => {
            if (!!this.refs.commentInput.value) {
                this.setState({showConfirm: true, commentType: type})    
            }
        }

        const type = this.state.commentType
        console.log('user.anonymous:', user.anonymous);
        const confirmHandler = () => {
            const content = this.refs.commentInput.value
            this.refs.commentInput.value = ''
            this.setState({showConfirm: false}, ()=> {
                sendCreateCommentRequest({
                    job_id: job.job.id,
                    source: '13123',
                    content,
                    anonymous: user.anonymous,
                    access_token: user.access_token,
                    type
                })    
            })
        }
        const cancelHandler = () => {
            this.setState({showConfirm: false})
        }
        return (
            <div styleName='container'>
                {user.status === 'complete'?
                        <div></div>
                        :
                        <FacebookLoginBtn sendLoginRequest={sendLoginRequest}/>
                }
                <div>
                {user.status === 'complete'?
                    showConfirm ? 
                      <textarea disabled ref='commentInput' placeholder="對這份工作有什麼看法，或分享你的面試心得" styleName='comment-input' name="comment" cols="30" rows="7"></textarea> 
                      :
                      <textarea onChange={this.handleChange.bind(this)} ref='commentInput' placeholder="對這份工作有什麼看法，或分享你的面試心得" styleName='comment-input' name="comment" cols="30" rows="7"></textarea> 
                    :
                    <textarea disabled placeholder="登入後才能留言" styleName='comment-input' name="comment" cols="30" rows="7"></textarea>
                }
                {
                    user.status === 'complete'?
                            showConfirm ? 
                            <div styleName='btn-block'>
                                <div styleName='good' onClick={confirmHandler}>
                                    <i className="fa fa-check"/>
                                </div>
                                <div styleName='bad' onClick={cancelHandler}>
                                    <i className="fa fa-times"/>
                                </div>
                                <div styleName='confirm-text'>確定送出嗎？</div>
                            </div> 
                            : 
                            <div styleName='btn-block'>
                                <div styleName='good' onClick={handleSubmit('good')}>
                                    <i className="fa fa-thumbs-o-up"/>
                                </div>
                                <div styleName='bad' onClick={handleSubmit('bad')}>
                                    <i className="fa fa-thumbs-o-down"/>
                                </div>
                                <div styleName='normal' onClick={handleSubmit('normal')}>
                                    <i className="fa fa-comment-o"/>
                                </div>
                                <div styleName='toggle-identity'  onClick={changeUserIdentity}>

                                    {
                                        user.anonymous ? 
                                              <input type="checkbox" defaultChecked/>
                                            :
                                              <input type="checkbox"/>
                                    }
                                    <span>匿名</span>
                                </div>
                            </div>
                                
                    
                    :
                    <div styleName='btn-block--disabled'>
                        <div styleName='good'>
                            <i className="fa fa-thumbs-o-up"/>
                        </div>
                        <div styleName='bad'>
                            <i className="fa fa-thumbs-o-down"/>
                        </div>
                        <div styleName='normal'>
                            <i className="fa fa-comment-o"/>
                        </div>
                        <div styleName='toggle-identity'>
                            <label styleName="checkbox">
                              <input type="checkbox" defaultChecked/> <span>匿名</span>
                            </label>
                        </div>
                    </div>
                }
                
                    
                </div>
            </div>
        )



    }
}

CommentInput.propTypes = {
    job: React.PropTypes.object.isRequired,
    comments:React.PropTypes.object.isRequired,
    user: React.PropTypes.object.isRequired,
    sendLoginRequest: React.PropTypes.func.isRequired,
    sendCreateCommentRequest: React.PropTypes.func.isRequired,
    changeUserIdentity: React.PropTypes.func.isRequired
}
export default CSSModules(CommentInput, styles)