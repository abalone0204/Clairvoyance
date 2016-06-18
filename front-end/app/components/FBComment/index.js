import CSSModules from 'react-css-modules'
import styles from './styles.css'
import config from '../../../../config.json'

class FBComment extends React.Component {

    shouldComponentUpdate(prevProps){
        return this.props.url !== prevProps.url;
    }

    loadAndParse(){
        if(window.FB != null){
            FB.XFBML.parse();
        }
    }

    componentDidMount(){
        this.loadAndParse();
    }

    componentDidUpdate(){
        this.loadAndParse();
    }   

    render() {
        const {
            url,
            numposts
        } = this.props
        
        return (
            <div styleName='container'>
                <h5 style={{color: 'red'}}>目前由於遭受 DDoS 攻擊，先只開 facebook 留言板，匿名功能暫停</h5>
                {
                //<h5>你可以使用 facebook 的留言板評論，但無法匿名</h5>
                }
                <div className="fb-comments" 
                    data-href={url} 
                    data-numposts={numposts}>
                </div>
            </div>
        )
    }
}

export default CSSModules(FBComment, styles)