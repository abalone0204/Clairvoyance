import {
  connect
} from 'react-redux'
import FloatingBlock from 'components/FloatingBlock'
import Disqus from 'components/Disqus'
import Header from 'components/Header'
import getProvider, {
  getProviderName,
  getJobQuery
} from '../providers'
import JobHelper from 'components/JobHelper'
import GoodJobBlock from 'components/GoodJobBlock'
import {
  requestFetchWorkingTimeByJobTitle,
} from 'actions/fetchWorkingTime'
import {
  fetchInitJobObject,
} from 'actions/initialize.js'

class ClvApp extends React.Component {
  componentDidMount() {
    const {
      dispatch,
    } = this.props
    dispatch(fetchInitJobObject())
  }
  render() {
    const {
      init,
      workingTimes,
    } = this.props
    const {
      jobObject,
    } = init

    const {
      job_name,
      company_name,
    } = jobObject

    return (
      <div> 
        <FloatingBlock workingTimes={workingTimes}>
        </FloatingBlock>
        <Header>
            Comments
        </Header>
        {
          jobObject.status === 'completed' ?
          <div>
            <Disqus {...{job_name, company_name}}/>
          </div> 
          : 
          null
        }
        <JobHelper/>
      </div>
    )  
    
  }
}

function mapStateToProps(state, ownProps) {
  return state
}

export default connect(mapStateToProps)(ClvApp)