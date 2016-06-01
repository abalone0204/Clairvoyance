import {
    checkStatus,
    parseJSON
} from './helper.js'

import config from '../../config.json'

export default function createJob({companyName, jobName, jobNo}) {
    const {backend} = config
    const options = {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify({companyName, jobName, jobNo}),
        mode: 'cors'
    }
    return fetch(`${backend}/jobs`, options)
        .then(checkStatus)
        .then(parseJSON)
}