import providers from './app/providers'
import renderApp from './app'

const jobTitle = providers['104'].getJobTitile()
const companyName = providers['104'].getCompanyName()

const node = document.createElement('div')
const nodeId = `${jobTitle}Cla`

console.log(jobTitle,companyName);
node.id = nodeId
document.body.appendChild(node)

renderApp(nodeId)
