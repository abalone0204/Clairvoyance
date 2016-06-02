const getJobTitile = () => document.querySelector('#job h1')
    .firstChild
    .textContent.trim()
const getCompanyName = () => document.querySelector('#job .company a')
    .firstChild
    .textContent.trim()

const provider = {
    getJobTitile,
    getCompanyName
}

export default provider