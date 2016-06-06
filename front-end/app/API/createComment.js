import {
    checkStatus,
    parseJSON
} from './helper.js'

import config from '../../../config.json'

export default function createComment({job_id, source, content}) {
    const {backend} = config
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        mode: 'cors',
        body: JSON.stringify({job_id, source, content})
    }

    return fetch(`${backend}/comments`, options)
        .then(checkStatus)
        .then(parseJSON)
}