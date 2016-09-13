import CSSModules from 'react-css-modules'
import styles from './styles.css'
import Clock from 'components/Clock'

const GoodJobBlock = ({
  byJob,
  companyStat,
  display,
}) => {
  const {
    status,
    data
  } = companyStat
  if (status === 'completed') {
    const companyWorkStatList = data.map((company) => {
      const {
        id,
        name
      } = company._id

      const sumOfCount = company.job_titles.reduce((acc, cur) => {
        acc += cur.count
        return acc
      }, 0)
      const sumOfWorkTime = company.job_titles.reduce((acc, cur) => {
        acc += cur.average_week_work_time * cur.count
        return acc
      }, 0)
      const avg = Math.ceil((sumOfWorkTime / sumOfCount) * 10) / 10
      return {
        id, 
        name,
        avg
      }
    })
    const displayNode = companyWorkStatList.map(company => (
      <div key={company.id} styleName='work-time'>
        <div>
          公司名稱：{company.name}
        </div>
        <div>
          公司每週平均工時：{company.avg}小時
        </div>
      </div>
    ))

    return (
      <div>
        {
          companyWorkStatList.length === 0 ?
          <div>
            目前查無工時資料
          </div> :
          <div>
            {
              display ?
              <div>
                {displayNode}
                <div styleName="credit">provide by Good Job - 工時透明化運動</div>
              </div>
              :
              <div styleName='work-time'>
                 <div>每週平均工時</div>
                 <div>{companyWorkStatList[0].avg} 小時</div>
              </div>
            }
            {
              companyWorkStatList.length > 1 ?
              "多於一筆資料，點這看更多" :
              null
            }
          </div> 
        }  
        
      </div>
    )
  }

  return (
    <div>
      {
        status === 'fetching' ?
        <div>
          <Clock/>
          <p>讀取工時資料</p>
        </div>
        :
        null
      }
    </div>
  )
}

export default CSSModules(GoodJobBlock, styles);
