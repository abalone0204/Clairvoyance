import getProvider, {
    getProviderName,
    getJobQuery
} from './app/providers'
import renderApp from './app'


const providerName = getProviderName()
console.log('providerName:', providerName);
const provider = getProvider()
console.log('provider:', provider);
const jobObject = getJobQuery(provider)
console.log('jobObject:',jobObject);
const {job_name,company_name} = jobObject

const node = document.createElement('div')
const nodeId = `${job_name}Cla`

console.log(job_name, company_name);
node.id = nodeId
document.body.appendChild(node)

renderApp(nodeId, {
    job_name,
    company_name
})