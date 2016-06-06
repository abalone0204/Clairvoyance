import {
    checkStatus,
    parseJSON
} from './helper.js'

import config from '../../../config.json'

export default function fetchComments(params) {
    const {backend} = config
    const options = {
        method: 'GET',
        headers: {
            "X-Job-Id": params.job_id
        },
        mode: 'cors'
    }
    return fetch(`${backend}/comments`, options)
        .then(checkStatus)
        .then(parseJSON)
}