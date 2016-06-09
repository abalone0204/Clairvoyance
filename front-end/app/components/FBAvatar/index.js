
import CSSModules from 'react-css-modules'

import styles from './styles.css'

class FBAvatar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fb_url: null
        }
    }
    componentWillMount() {
        const {fb_id} = this.props
        fetch(`http://graph.facebook.com/v2.6/${fb_id}/picture?redirect=false&type=square`)
        .then(response => response.json())
        .then(json => {
            this.setState({fb_url: json.data.url})
        })
    }
    render() {
        const {fb_url} = this.state
        return (
            <img styleName='avatar' src={fb_url}/>
            )
    }
}

export default CSSModules(FBAvatar, styles)