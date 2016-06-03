import callback from './chrome/oauthCallback.js'

class Popup extends React.Component {

    handleClick(event) {
        event.preventDefault()
        callback()
    }

    render() {
        // const url = 'https://www.facebook.com/dialog/oauth?client_id=1230682326955383&redirect_uri=https://d2xhcc9852.execute-api.ap-northeast-1.amazonaws.com/dev/callback&auth_type=rerequest&scope=email,public_profile,user_friends'
        return (
            <div>
                <h2>Popup</h2>
                <a href="" onClick={this.handleClick.bind(this)}>facebook login</a>
              </div>
        )
    }
}

ReactDOM.render(<Popup/>,
    document.querySelector('#container')
)