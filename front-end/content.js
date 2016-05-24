const jobTitle = document.querySelector('#job h1')
                         .firstChild
                         .textContent.trim()

const companyName = document.querySelector('#job .company a')
                            .firstChild
                            .textContent.trim()

const node = document.createElement('div')
const nodeId = `${jobTitle}Cla`
node.id = nodeId
document.body.appendChild(node)

ReactDOM.render(<h1>yooooooooooo</h1>,
    document.getElementById(nodeId)
    )

fetch('https://api.github.com/users')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(json => {
        console.log(json);
    })