import {
  checkStatus,
  parseJSON,
} from '../helper.js'


export default function searchByJob({
  job_title,
  page,
}) {
  const options = {
    headers: {
      "Content-Type": "application/json"
    },
    method: 'GET',
    mode: 'cors'
  }
  const baseURL = `https://tranquil-fortress-92731.herokuapp.com/clairvoyance/search/by-job?job_title=${job_title}`
  const url = page ? `${baseURL}&page=${page}` : `${baseURL}`
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
}