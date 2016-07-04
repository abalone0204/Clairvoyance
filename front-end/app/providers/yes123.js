const get_job_name = () => document.querySelector('.jobname_title :not(span):not(p)').innerText.trim()
const get_company_name = () => document.querySelector('.jobname_title a').innerText.trim()
const get_yes123_job_id = () => location.search.match(/job_id=(.+)/)[1]

const provider = {
    get_job_name,
    get_company_name,
    get_yes123_job_id
}

export default provider