import styles from './styles.css';

@CSSModules(styles)
class Disqus extends React.Component {

    componentWillMount() {
        const {
            company_name,
            job_name
        } = this.props

        const disqus_config = () => {
            this.page.url = location.href; // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = `${company_name}-${job_name}` // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        }

        (function() { // DON'T EDIT BELOW THIS LINE
            var d = document,
                s = d.createElement('script');

            s.src = '//clv-bakc-end.disqus.com/embed.js';
            s.async = true
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    }

    render() {
        return (
            <div id="disqus_thread" styleName='disqus-container'/>
        )
    }
}

export default Disqus