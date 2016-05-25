export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const FAIL_TO_LOGIN = 'FAIL_TO_LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'

export function requestLogin() {
    return {
        type: REQUEST_LOGIN
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
