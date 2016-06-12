import {
    checkStatus,
    parseJSON
} from './helper.js'

import config from '../../../config.json'

export default function fetchJob({
    company_name,
    job_name,
    e04_job_no,
    eeee_job_no
}) {
    const {
        backend
    } = config

    const options = {
        method: 'GET',
        mode: 'cors'
    }

    const url = `${backend}/jobs?company_name=${company_name}&job_name=${job_name}&e04_job_no=${e04_job_no}&eeee_job_no=${eeee_job_no}`
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
}