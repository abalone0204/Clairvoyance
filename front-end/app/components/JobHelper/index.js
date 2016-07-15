import CSSModules from 'react-css-modules'
import styles from './styles.css'
import Modal from 'react-modal'

import {
  getCompanyInfo,
  searchPackageByNameApi,
  checkName,
  getPackageInfo
} from 'jobHelper'

const customStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 2000
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    zIndex: 2001

  }
}

class JobHelper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: [],
      display: false,
      displayFlash: false
    }
  }
  componentDidMount() {
    const params = getCompanyInfo()
    if ('object' == typeof(params) && 'undefined' !== typeof(params.name)) {
      searchPackageByNameApi(params.name, params.link, (result) => {
        this.setState({
          result,
          displayFlash: true
        })
      }, (error_message) => {
        searchPackageByNameApi(params.name, function(result) {
          console.log("result while name api doesn't work:", result);
        }, checkName);
      })
    }
  }
  render() {
    const {
      result,
      display,
      displayFlash
    } = this.state


    const resultNode = result.map((item, key) => {
      const {
        date,
        name,
        reason,
        link
      } = item
      return (
        <div key={item.link+key} styleName='item'>
                        <div>
                            時間： {date}
                        </div>
                        <div>
                            公司名稱： {name}
                        </div>
                        <div>
                            違反事由： {reason}
                        </div>
                        <div>
                           <a href={link} target='_blank'>官方公告連結</a>   
                        </div>
                    </div>
      )
    })
    const handler = (e) => {
      this.setState({
        display: true
      })
    }
    const closeHandler = (_) => {
      this.setState({
        display: false
      })
    }

    const closeFlashHandler = (_) => {
      this.setState({
        displayFlash: false
      })
    }
    return (
      <div styleName='container'>
                    <Modal
                      isOpen={display}
                      // onAfterOpen={afterOpenFn}
                      // onRequestClose={requestCloseFn}
                      closeTimeoutMS={200}
                      style={customStyle}
                    >
                        <div onClick={closeHandler} styleName='close'>
                            <i className="fa fa-times" aria-hidden="true" />關閉視窗
                        </div>
        
                        <div styleName='list'>
                            {resultNode}
                        </div>
                    </Modal>
                    {
                        displayFlash ?
                            result.length > 0 ?
                              <div styleName='notice'>
                                  <div styleName='flash-container'>
                                      <i onClick={closeFlashHandler} styleName='close-flash' className="fa fa-times" aria-hidden="true" />
                                      有 {result.length} 筆違反勞基法紀錄，
                                      <div styleName='show' onClick={handler}>點這裡看全部</div>
                                  </div>
                              </div>
                              :
                              <div styleName='notice'>
                                  <div styleName='flash-container--alright'>
                                      <i onClick={closeFlashHandler} styleName='close-flash' className="fa fa-times" aria-hidden="true" />
                                      目前查無違反勞基法紀錄 ：）
                                  </div>
                              </div>
                            :
                            null
                    }
                    
                </div>
    )


  }
}

export default CSSModules(JobHelper, styles)