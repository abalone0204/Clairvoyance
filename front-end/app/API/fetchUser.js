import {
    checkStatus,
    parseJSON
} from './helper.js'
import config from '../../../config.json'


export default function fetchUser({access_token}) {
    const {backend} = config
    const options = {
        method: 'GET',
        headers: {
            'X-Access-Token': access_token
        },
        mode: 'cors'
    }

    return fetch(`${backend}/users`, options)
        .then(checkStatus)
        .then(parseJSON)
}