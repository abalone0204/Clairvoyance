import {
    checkStatus,
    parseJSON
} from './helper.js'

import config from '../../config.json'

export default function fetchJob(params) {
    const {backend} = config
    const options = {
        method: 'GET',
        headers: {
            "X-Company-Name": params.companyName,
            "X-Job-Name": params.jobName,
            "X-E04-Job-No": params.jobNo
        },
        mode: 'cors'
    }
    return fetch(`${backend}/jobs`, options)
        .then(checkStatus)
        .then(parseJSON)
}