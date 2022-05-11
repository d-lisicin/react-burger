import { getCookie, setCookie } from '../utils/cookies'

export const setTokens = ({ accessToken, refreshToken }: { accessToken: string, refreshToken: string }) => {
    const cookieTime = Date.now() + 20 * 60 * 1000

    setCookie('accessToken', accessToken, { expires: new Date(cookieTime) })
    setCookie('refreshToken', refreshToken, {})
}

export const getTokens = () => {
    const accessToken = getCookie('accessToken')
    const refreshToken = getCookie('refreshToken')

    return {
        accessToken,
        refreshToken
    }
}
