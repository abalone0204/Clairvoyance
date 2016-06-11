
import CSSModules from 'react-css-modules'

import styles from './styles.css'

class About extends React.Component {
    
    render() {
        return(
            <div styleName='container'>
                <div>
                    <h2>What is clairvoyance?</h2>
                    <div>
                        一個讓求職者能在人力銀行職缺下方留言討論該職缺的 Chrome extension
                    </div>
                </div>
                <div>
                    <h2>Why build clairvoyance?</h2>
                    <div>
                        我認為留言把資訊揭露是一個求職平台「本來就該有」的功能， <br/>
                        不過現在的人力銀行獲利模式是像企業端收費， <br/>
                        而有些企業並不喜歡這樣的功能。 <br/>
                        這個 project 希望能弭平一些勞資雙方的資訊不對稱 <br/>
                        後續會在寫一篇文章詳細介紹 ：Ｄ
                    </div>
                </div>
                <div>
                    <h2>粉絲專頁</h2>
                    <div>
                        <a href="https://www.facebook.com/Clairvoyance-%E6%B1%82%E8%81%B7%E5%A4%A9%E7%9C%BC%E9%80%9A-1084564708284768" target='_blank'>Clairvoyance - 求職天眼通</a>
                    </div>
                    <div>
                        未來有什麼新功能增加會在這裡公佈， <br/>
                        當然，這裡未來也會把一些熱門討論的職缺給 po 上去。 <br/>
                        目前還在實做幫我做這件事的機器人中， <br/>
                        畢竟，經營粉絲頁並不是我所擅長和熱衷的事情 
                    </div>
                </div>
                <div>
                    <h2>Open source</h2>
                    <div>
                        這個 app 的所有程式碼都是開放的，<br/>
                        我把程式碼放在 github 上面 <br/>
                        網址在這裡：<a href="https://github.com/abalone0204/Clairvoyance" target='_blank'>https://github.com/abalone0204/Clairvoyance</a> <br/>
                        喜歡的話可以給我個星星， <br/>
                        或分享給更多人 :D
                    </div>
                </div>
            </div>
            )
    }
}

export default CSSModules(About, styles)