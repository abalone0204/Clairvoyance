const get_job_name = () => (document.querySelector('#commonTop h1').innerText.trim())
const get_company_name = () => document.querySelector('#commonTop .navbar a').innerText.trim()
const get_eeee_job_no = () =>{
  if (location.search.match(/\?eNo=([0-9]+)/) !== null) {
    return location.search.match(/\?eNo=([0-9]+)/)[1]
  }
  if (location.hash.match(/\?eNo=([0-9]+)/) !== null) {
    return location.hash.match(/\?eNo=([0-9]+)/)[1]
  }
  return null
}

const provider = {
    get_job_name,
    get_company_name,
    get_eeee_job_no
}

export default provider