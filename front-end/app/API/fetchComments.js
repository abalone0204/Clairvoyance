import {
    checkStatus,
    parseJSON
} from './helper.js'

import config from '../../../config.json'
import _ from 'underscore'

export default function fetchComments(job_id) {
    const {backend} = config
    const options = {
        method: 'GET',
        headers: {
            "X-Job-Id": job_id
        },
        mode: 'cors'
    }
    return fetch(`${backend}/comments`, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(comments => {
            return _.sortBy(comments, (comment) => comment.timestamp)
        })
}