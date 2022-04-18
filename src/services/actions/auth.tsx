import { apiURL } from '../../utils/constants'
import Actions from './index'
import { checkResponse } from '../../helpers/api'
import { getTokens, setTokens } from '../../helpers/auth'
import { IFormData } from '../../utils/types'
import { deleteCookie } from '../../utils/cookies'

export const registerUser = ( { email, password, name }: IFormData ) => (dispatch: (arg0: { type: string, payload?: IFormData }) => void) => {
    dispatch({ type: Actions.REGISTER_REQUEST })

    fetch(`${apiURL}/api/auth/register`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name })
    })
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                const accessToken = res.accessToken
                const refreshToken = res.refreshToken

                setTokens({ accessToken, refreshToken })

                dispatch({
                    type: Actions.REGISTER_SUCCESS,
                    payload: res.user
                })
            } else {
                throw new Error('Something went wrong')
            }
        })
        .catch((err) => {
            dispatch({
                type: Actions.REGISTER_ERROR,
                payload: err
            })
        })
}

export const loginUser = ({ email, password }: { email: string, password: string }) => (dispatch: (arg0: { type: string, payload?: { email: string, password: string } }) => void) => {
    dispatch({ type: Actions.LOGIN_REQUEST })

    fetch(`${apiURL}/api/auth/login`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                const accessToken = res.accessToken
                const refreshToken = res.refreshToken

                setTokens({ accessToken, refreshToken })

                dispatch({
                    type: Actions.LOGIN_SUCCESS,
                    payload: res.user
                })
            } else {
                throw new Error('Something went wrong')
            }
        })
        .catch((err) => {
            dispatch({
                type: Actions.LOGIN_ERROR,
                payload: err
            })
        })
}

export const updateToken = () => (dispatch: (arg0: { type: string, payload?: string }) => void) => {
    dispatch({ type: Actions.UPDATE_TOKEN_REQUEST })
    const { refreshToken } = getTokens()

    fetch(`${apiURL}/api/auth/token`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({'token': refreshToken})
    })
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                const accessToken = res.accessToken
                const refreshToken = res.refreshToken

                dispatch({
                    type: Actions.UPDATE_TOKEN_SUCCESS
                })

                setTokens({ accessToken, refreshToken })
            } else {
                throw new Error('Something went wrong')
            }
        })
        .catch((err) => {
            dispatch({
                type: Actions.UPDATE_TOKEN_ERROR,
                payload: err
            })
        })
}

export const checkUser = () => (dispatch: any) => {
    dispatch({ type: Actions.CHECK_REQUEST })
    const { accessToken, refreshToken } = getTokens()

    fetch(`${apiURL}/api/auth/user`,{
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${accessToken}`
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    })
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: Actions.CHECK_SUCCESS,
                    payload: res
                })
            } else {
                throw new Error('Something went wrong')
            }
        })
        .catch((err) => {
            if (!accessToken && refreshToken) {
                dispatch(updateToken())
            }

            dispatch({
                type: Actions.CHECK_ERROR,
                payload: err
            })
        })
}

export const editProfile = ({ name, email, password }: IFormData) => (dispatch: (arg0: { type: string, payload?: IFormData }) => void) => {
    dispatch({ type: Actions.EDIT_REQUEST })
    const { accessToken } = getTokens()

    fetch(`${apiURL}/api/auth/user`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${accessToken}`
        },
        body: JSON.stringify({ name, email, password })
    })
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: Actions.EDIT_SUCCESS,
                    payload: res
                })
            } else {
                throw new Error('Something went wrong')
            }
        })
        .catch((err) => {
            dispatch({
                type: Actions.EDIT_ERROR,
                payload: err
            })
        })
}

export const forgotPassword = ({ email }: { email: string }) => (dispatch: (arg0: { type: string, payload?: string }) => void) => {
    dispatch({ type: Actions.FORGOT_REQUEST })

    fetch(`${apiURL}/api/password-reset`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({'email': email})
    })
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: Actions.FORGOT_SUCCESS,
                    payload: res.message
                })
            } else {
                throw new Error('Something went wrong')
            }
        })
        .catch((err) => {
            dispatch({
                type: Actions.FORGOT_ERROR,
                payload: err.message
            })
        })
}

export const resetPassword = ({ password, mailCode }: { password: string, mailCode: string }) => (dispatch: (arg0: { type: string, payload?: string }) => void) => {
    dispatch({ type: Actions.RESET_PASSWORD_REQUEST })

    fetch(`${apiURL}/api/password-reset/reset`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({'password': password, 'token': mailCode})
    })
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: Actions.RESET_PASSWORD_SUCCESS,
                    payload: res.message
                })
            } else {
                throw new Error('Something went wrong')
            }
        })
        .catch((err) => {
            dispatch({
                type: Actions.RESET_PASSWORD_ERROR,
                payload: err.message
            })
        })
}

export const logOut = () => (dispatch: (arg0: { type: string, payload?: string }) => void) => {
    dispatch({ type: Actions.LOGOUT_REQUEST })
    const { refreshToken } = getTokens()

    fetch(`${apiURL}/api/auth/logout`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'token': refreshToken })
    })
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                deleteCookie('accessToken')
                deleteCookie('refreshToken')

                dispatch({
                    type: Actions.LOGOUT_SUCCESS
                })
            } else {
                throw new Error('Something went wrong')
            }
        })
        .catch((err) => {
            dispatch({
                type: Actions.LOGOUT_ERROR,
                payload: err.message
            })
        })
}
