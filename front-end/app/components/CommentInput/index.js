// todo: extract fxcking state
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import FacebookLoginBtn from 'components/FacebookLoginBtn'

import FBComment from "components/FBComment"


class CommentInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            confirm: false,
            showConfirm: false,
            showTextArea: false,
            commentType: 'normal',
            commentsWordCount: 500,
            confirmText: ''
        }
    }

    handleChange(e) {
        const {
            commentsWordCount
        } = this.state

        this.setState({
            commentsWordCount: 500 - this.refs.commentInput.value.length,
            confirmText: this.refs.commentInput.value
        })

    }
    componentDidUpdate() {
        const {showTextArea, confirmText} = this.state 
        if (showTextArea) {
            this.refs.commentInput.value= confirmText
        }
    }
    render() {
        const {
            user,
            job,
            sendLoginRequest,
            changeUserIdentity,
            sendCreateCommentRequest
        } = this.props
        const {
            showConfirm,
            showTextArea,
            commentsWordCount,
            confirmText
        } = this.state
        const {commentInput} =this.refs 
        const handleSubmit = (type) => (e) => {
            this.setState({
                showTextArea: true,
                commentType: type
            })
        }

        const type = this.state.commentType
        console.log('user.anonymous:', user.anonymous);
        
        const confirmHandler = () => {
            console.log('commentInput.value', commentInput.value);
            const content = commentInput.value
            this.refs.commentInput.value = ''
            this.setState({
                showConfirm: false,
                showTextArea: false,
                commentsWordCount: 500
            }, () => {
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
            const confirmText= this.refs.commentInput.value
            this.setState({
                showConfirm: false,
                confirmText
            })
        }

        const cancelShowTextAreaHandler = () => {
            this.setState({
                showTextArea: false,
                commentsWordCount: 500,
                confirmText: ''
            })
        }

        const showConfirmBlockHandler = () => {
            if(!!this.refs.commentInput.value && commentsWordCount >= 0 ) {
                const confirmText= this.refs.commentInput.value
                this.setState({
                    showConfirm: true,
                    confirmText
                })    
            }
        }

        return (
            <div styleName='container'>
                {user.status === 'complete'?
                        <div></div>
                        :
                        <div>
                            <FacebookLoginBtn sendLoginRequest={sendLoginRequest}/>
                            <div style={{padding: '10px', color: '#b1b1b1'}}>登入後可以使用匿名留言，臉書的名稱和帳號都是保密的</div>
                        </div>
                }
                <div>
                {
                    !(showTextArea || showConfirm) ?
                    <h4>按以下按鈕推薦( <i className="fa fa-thumbs-o-up"/>)、噓文( <i className="fa fa-thumbs-o-down"/>)、或送出一般評論（<i className="fa fa-comment-o"/>）</h4>
                    :
                    null
                }
                
                {user.status === 'complete'?
                    showTextArea ? 
                        showConfirm ? 
                          <textarea disabled ref='commentInput' placeholder="對這份工作有什麼看法，或分享你的面試心得" styleName='comment-input' name="comment" cols="30" rows="7" value={confirmText}></textarea> 
                          :
                          <div>
                            {user.anonymous ? <h6>你會以匿名的方式發布評論</h6>: <h6>你會以 {user.info.user_name} 的名義發布評論</h6>}
                            <h6>還剩下 {commentsWordCount} 字可以輸入</h6>
                            <textarea onChange={this.handleChange.bind(this)} ref='commentInput' placeholder="對這份工作有什麼看法，或分享你的面試心得" styleName='comment-input' name="comment" cols="30" rows="7"></textarea> 
                          </div>
                        : null
                    : null
                }
                {
                    user.status === 'complete'?
                            showConfirm ? 
                            <div styleName='btn-block'>
                                <div styleName='confirm-text'>確定送出嗎？</div>
                                <div styleName='check-confirm' onClick={confirmHandler}>
                                    <i className="fa fa-check"/>
                                </div>
                                <div styleName='cancel-confirm' onClick={cancelHandler}>
                                    <i className="fa fa-times"/>
                                </div>
                            </div> 
                            : 
                            showTextArea ?
                                <div styleName='btn-block'>
                                    <div styleName='check-confirm' onClick={showConfirmBlockHandler}>
                                        <i className="fa fa-check"/>
                                    </div>
                                    <div styleName='cancel-confirm' onClick={cancelShowTextAreaHandler}>
                                        <i className="fa fa-times"/>
                                    </div>
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
                <hr style={{clear:"both",marginTop:"20px"}} />
            </div>
        )



    }
}

CommentInput.propTypes = {
    job: React.PropTypes.object.isRequired,
    comments: React.PropTypes.object.isRequired,
    user: React.PropTypes.object.isRequired,
    sendLoginRequest: React.PropTypes.func.isRequired,
    sendCreateCommentRequest: React.PropTypes.func.isRequired,
    changeUserIdentity: React.PropTypes.func.isRequired
}
export default CSSModules(CommentInput, styles)