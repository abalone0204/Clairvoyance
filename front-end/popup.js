var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-82256880-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

class Popup extends React.Component {
    render() {
        return (
            <div style={{width: '360px', fontSize: '18px', padding: '15px'}}>
                <h3>Clairvoyance</h3>
                <div>
                    <a href="" onClick={()=>chrome.tabs.create({'url': "/options.html" } )}><h4>設置與說明書</h4></a>
                </div>
                <div>
                    目前支援: 1111, 104 的職缺頁面
                </div>
                <div>
                    <h4>關於 Clairvoyance</h4>
                    <div>
                        臉書專頁：<a href="https://www.facebook.com/Clairvoyance-%E6%B1%82%E8%81%B7%E5%A4%A9%E7%9C%BC%E9%80%9A-1084564708284768" target="_blank">Clairvoyance - 求職天眼通</a>
                    </div>
                    <div>
                        Source code: <a href="https://github.com/abalone0204/Clairvoyance" target="_blank">Clairvoyance</a>
                    </div>
                    <div>
                        <a href="https://chrome.google.com/webstore/detail/clairvoyance-%E6%B1%82%E8%81%B7%E5%A4%A9%E7%9C%BC%E9%80%9A/mdneakdlnoidknagkamfeambdefhppbi/reviews?authuser=1" target='_blank'>
                            給評分
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }
}

ReactDOM.render(<Popup/>,
    document.querySelector('#container')
)