import {
    checkStatus,
    parseJSON
} from './helper.js'

import config from '../../../config.json'

export default function createJob({company_name, job_name, e04_job_no}) {
    const {backend} = config
    const options = {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify({company_name, job_name, e04_job_no}),
        mode: 'cors'
    }
    return fetch(`${backend}/jobs`, options)
        .then(checkStatus)
        .then(parseJSON)
}