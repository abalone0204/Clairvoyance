import {
    checkStatus,
    parseJSON
} from './helper.js'

import config from '../../../config.json'

export default function fetchJob(params) {
    const {backend} = config
    const options = {
        method: 'GET',
        headers: {
            "X-Company-Name": params.company_name,
            "X-Job-Name": params.job_name,
            "X-E04-Job-No": params.e04_job_no
        },
        mode: 'cors'
    }
    return fetch(`${backend}/jobs`, options)
        .then(checkStatus)
        .then(parseJSON)
}