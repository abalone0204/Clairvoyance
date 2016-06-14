import {
    checkStatus,
    parseJSON
} from './helper.js'

import config from '../../../config.json'

export default function createComment({job_id, source, content, anonymous, access_token, type}) {
    content = content.replace(/\n/g, '%0D%0A')
    const {backend} = config
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        mode: 'cors',
        body: JSON.stringify({job_id, source, content, anonymous, access_token, type})
    }

    return fetch(`${backend}/comments`, options)
        .then(checkStatus)
        .then(parseJSON)
}