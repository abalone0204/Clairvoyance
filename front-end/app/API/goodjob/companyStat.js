import {
  checkStatus,
  parseJSON,
} from '../helper.js'

export default function searchByJob({
  company,
}) {
  const options = {
    headers: {
      "Content-Type": "application/json"
    },
    method: 'GET',
    mode: 'cors'
  }
  const url = `https://tranquil-fortress-92731.herokuapp.com/workings/statistics/by-company?company=${company}`
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
}
