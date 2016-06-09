import getProvider, {
    getProviderName,
    getJobQuery
} from './app/providers'
import renderApp from './app'

const cdnNode = document.createElement('script')
cdnNode.src = "https://use.fontawesome.com/aa07066302.js"
document.head.appendChild(cdnNode)

const providerName = getProviderName()
const provider = getProvider()
const jobObject = getJobQuery(provider)
console.log('jobObject:',jobObject);
const {job_name,company_name} = jobObject

const node = document.createElement('div')
const nodeId = `${job_name}Cla`

node.id = nodeId
document.body.appendChild(node)

renderApp(nodeId, {
    job_name,
    company_name
})