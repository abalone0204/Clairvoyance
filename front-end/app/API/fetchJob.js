import {
    checkStatus,
    parseJSON
} from './helper.js'

import config from '../../../config.json'

export default function fetchJob({
    company_name,
    job_name,
    e04_job_no
}) {
    const {
        backend
    } = config
    const options = {
        method: 'GET',
        headers: {
            "X-Company-Name": company_name,
            "X-Job-Name": job_name,
            "X-E04-Job-No": e04_job_no
        },
        mode: 'cors'
    }
    return fetch(`${backend}/jobs`, options)
        .then(checkStatus)
        .then(parseJSON)
}