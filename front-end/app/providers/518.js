const get_job_name = () => document.querySelector('.job-title').innerText.trim()
const get_company_name = () => document.querySelector('.company-info h3').innerText.trim()
const get_518_key = () => location.pathname.match(/job-(\d+)/)[1]

const provider = {
    get_job_name,
    get_company_name,
    get_518_key
}

export default provider