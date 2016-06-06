import {
    checkStatus,
    parseJSON
} from './helper.js'

import config from '../../../config.json'


export default function createUser({access_token}) {
    const {backend} = config
    const options = {
        method: 'POST',
        headers: {
            'X-Access-Token': access_token
        },
        mode: 'cors'
    }

    return fetch(`${backend}/users`, options)
        .then(checkStatus)
        .then(parseJSON)
}