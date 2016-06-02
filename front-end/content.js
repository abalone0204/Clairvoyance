import providers from './app/providers'


const jobTitle = providers['104'].getJobTitile()
const companyName = providers['104'].getCompanyName()

const node = document.createElement('div')
const nodeId = `${jobTitle}Cla`

console.log(jobTitle,companyName);
node.id = nodeId
document.body.appendChild(node)

ReactDOM.render(<h1>yooooooooooo</h1>,
    document.getElementById(nodeId)
    )
