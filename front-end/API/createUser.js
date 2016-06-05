import {
    checkStatus,
    parseJSON
} from './helper.js'
import config from '../../config.json'


export default function createUser({accessToken}) {
    const {backend} = config
    const options = {
        method: 'POST',
        headers: {
            'X-Access-Token': accessToken
        },
        mode: 'cors'
    }

    return fetch(`${backend}/users`, options)
        .then(checkStatus)
        .then(parseJSON)
}