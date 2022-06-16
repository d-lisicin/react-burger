import { apiURL } from '../../utils/constants'
import * as Actions from '../actions'
import { checkResponse } from '../../helpers/api'
import { getTokens, setTokens } from '../../helpers/auth'
import { AppDispatch, IFormData } from '../../utils/type'
import { deleteCookie } from '../../utils/cookies'

export interface IRegisterRequest {
    readonly type: typeof Actions.REGISTER_REQUEST
}

export interface IRegisterSuccess {
    readonly type: typeof Actions.REGISTER_SUCCESS
    readonly payload: IFormData
}

export interface IRegisterError {
    readonly type: typeof Actions.REGISTER_ERROR
}

export interface ILoginRequest {
    readonly type: typeof Actions.LOGIN_REQUEST
}

export interface ILoginSuccess {
    readonly type: typeof Actions.LOGIN_SUCCESS
    readonly payload: IFormData
}

export interface ILoginError {
    readonly type: typeof Actions.LOGIN_ERROR
}

export interface ICheckRequest {
    readonly type: typeof Actions.CHECK_REQUEST
}

export interface ICheckSuccess {
    readonly type: typeof Actions.CHECK_SUCCESS
    readonly payload: IFormData
}

export interface ICheckError {
    readonly type: typeof Actions.CHECK_ERROR
}

export interface IEditRequest {
    readonly type: typeof Actions.EDIT_REQUEST
}

export interface IEditSuccess {
    readonly type: typeof Actions.EDIT_SUCCESS
    readonly payload: IFormData
}

export interface IEditError {
    readonly type: typeof Actions.EDIT_ERROR
}

export interface IUpdateTokenRequest {
    readonly type: typeof Actions.UPDATE_TOKEN_REQUEST
}

export interface IUpdateTokenSuccess {
    readonly type: typeof Actions.UPDATE_TOKEN_SUCCESS
}

export interface IUpdateTokenError {
    readonly type: typeof Actions.UPDATE_TOKEN_ERROR
}

export interface IForgotRequest {
    readonly type: typeof Actions.FORGOT_REQUEST
}

export interface IForgotSuccess {
    readonly type: typeof Actions.FORGOT_SUCCESS
    readonly payload: boolean
}

export interface IForgotError {
    readonly type: typeof Actions.FORGOT_ERROR
    readonly payload: boolean
}

export interface IResetPasswordRequest {
    readonly type: typeof Actions.RESET_PASSWORD_REQUEST
}

export interface IResetPasswordSuccess {
    readonly type: typeof Actions.RESET_PASSWORD_SUCCESS
    readonly payload: string
}

export interface IResetPasswordError {
    readonly type: typeof Actions.RESET_PASSWORD_ERROR
    readonly payload: string
}

export interface IResetLogoutRequest {
    readonly type: typeof Actions.LOGOUT_REQUEST
}

export interface IResetLogoutSuccess {
    readonly type: typeof Actions.LOGOUT_SUCCESS
}

export interface IResetLogoutError {
    readonly type: typeof Actions.LOGOUT_ERROR
}

export type TAuthActionTypes =
    | IRegisterRequest | IRegisterSuccess
    | IRegisterError | ILoginRequest
    | ILoginSuccess | ILoginError
    | ICheckRequest | ICheckSuccess
    | ICheckError | IEditRequest
    | IEditSuccess | IEditError
    | IUpdateTokenRequest | IUpdateTokenSuccess
    | IUpdateTokenError | IForgotRequest
    | IForgotSuccess | IForgotError
    | IResetPasswordRequest | IResetPasswordSuccess
    | IResetPasswordError | IResetLogoutRequest
    | IResetLogoutSuccess | IResetLogoutError

export const registerUser = ( { email, password, name }: IFormData ) => (dispatch: AppDispatch) => {
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
                    payload: { user: res.user }
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

export const loginUser = ({ email, password }: { email: string, password: string }) => (dispatch: AppDispatch) => {
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

export const updateToken = () => (dispatch: AppDispatch) => {
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

                dispatch({ type: Actions.UPDATE_TOKEN_SUCCESS })

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

export const checkUser = () => (dispatch: AppDispatch) => {
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

export const editProfile = ({ name, email, password }: IFormData) => (dispatch: AppDispatch) => {
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

export const forgotPassword = ({ email }: { email: string }) => (dispatch: AppDispatch) => {
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
                    payload: res.success,
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

export const resetPassword = ({ password, mailCode }: { password: string, mailCode: string }) => (dispatch: AppDispatch) => {
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

export const logOut = () => (dispatch: AppDispatch) => {
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
