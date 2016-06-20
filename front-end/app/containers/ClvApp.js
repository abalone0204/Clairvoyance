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

class ClvApp extends React.Component {
    render() {
        const providerName = getProviderName()
        const provider = getProvider()
        const jobObject = getJobQuery(provider)
        
        const {
            job_name,
            company_name
        } = jobObject
        return (
            <div> 
                <FloatingBlock/>
                <Header>
                    Comments
                </Header>
                <Disqus {...{job_name, company_name}}/>
            </div>
            )         
    }
}

function mapStateToProps(state, ownProps) {
    return state
}


export default connect(mapStateToProps)(ClvApp)