import providers from './app/providers'
import renderApp from './app'

console.log('load content script');

const getProviderName = () => {
    const matcher = location.host.match(/([^w\.]+)\.com/)
    if (matcher) {
        return matcher[1]
    }
}

const providerName = getProviderName()
console.log('providerName:', providerName);

const jobTitle = providers[providerName].getJobTitile()
const companyName = providers[providerName].getCompanyName()

const node = document.createElement('div')
const nodeId = `${jobTitle}Cla`

console.log(jobTitle,companyName);
node.id = nodeId
document.body.appendChild(node)

renderApp(nodeId)
