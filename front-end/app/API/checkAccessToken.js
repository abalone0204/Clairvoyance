import {
    checkStatus,
    parseJSON
} from './helper.js'

export default function checkAccessToken({
    access_token
}) {
    const url = `https://graph.facebook.com/debug_token?input_token=${access_token}&access_token=${access_token}`
    return fetch(url)
        .then(checkStatus)
        .then(parseJSON)
        .then(response => {
            return response.data.is_valid
        })

}