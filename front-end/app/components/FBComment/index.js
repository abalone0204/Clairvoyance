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
            <div className="fb-comments" 
                data-href={url} 
                data-numposts={numposts}>
            </div>
        )
    }
}

export default CSSModules(FBComment, styles)