const get_job_name = () => document.querySelector('#job h1')
    .firstChild
    .textContent.trim()

const get_company_name = () => document.querySelector('#job .company a')
    .firstChild
    .textContent.trim()
 
const get_e04_job_no = () => location.search.match(/\?jobno=([^\&]+)/)[1]


const provider = {
    get_job_name,
    get_company_name,
    get_e04_job_no
}

export default provider