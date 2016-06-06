import {
    checkStatus,
    parseJSON
} from './helper.js'
import config from '../../../config.json'


export default function fetchUser({accessToken}) {
    const {backend} = config
    const options = {
        method: 'GET',
        headers: {
            'X-Access-Token': accessToken
        },
        mode: 'cors'
    }

    return fetch(`${backend}/users`, options)
        .then(checkStatus)
        .then(parseJSON)
}