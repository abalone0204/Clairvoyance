import {
    checkStatus,
    parseJSON
} from './helper.js'

export default function checkAccessToken({
    access_token
}) {
    const url = `https://graph.facebook.com/me?access_token=${access_token}&fileds=email,id,name`
    return fetch(url)
        .then(checkStatus)
        .then(parseJSON)
        .then(response => {
            return !!(response.id)
        })

}