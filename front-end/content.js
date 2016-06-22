import getProvider, {
    getProviderName,
    getJobQuery
} from './app/providers'
import renderApp from './app'

import config from '../config.json'

const cdnNode = document.createElement('script')
cdnNode.src = "https://use.fontawesome.com/aa07066302.js"
document.head.appendChild(cdnNode)

const providerName = getProviderName()
const provider = getProvider()
const jobObject = getJobQuery(provider)

const {job_name,company_name} = jobObject

const node = document.createElement('div')
const nodeId = `${job_name}Cla`

node.id = nodeId
document.body.appendChild(node);


function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}
injectScript( chrome.extension.getURL('loadfb.js'), 'body');
injectScript( chrome.extension.getURL('loadDisqus.js'), 'body');

renderApp(nodeId)