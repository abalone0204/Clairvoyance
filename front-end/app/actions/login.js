export const REQUEST_TO_OAUTH = 'REQUEST_TO_OAUTH'
export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const FAIL_TO_LOGIN = 'FAIL_TO_LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const LOGOUT = 'LOGOUT'

export function requestToOAuth() {
    return {
        type: REQUEST_TO_OAUTH
    }
}

export function requestLogin(access_token) {
    return {
        type: REQUEST_LOGIN,
        access_token
    }
}

export function failToLogin(error) {
    return {
        type: FAIL_TO_LOGIN,
        error
    }
}

export function successLogin(user) {
    return {
        type: SUCCESS_LOGIN,
        user
    }
}


export function logout() {
    return {
        type: LOGOUT
    }
}