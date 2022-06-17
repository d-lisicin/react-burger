import React, { useEffect } from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from '../store'
import { IChildrenRoute } from '../utils/type'
import { getTokens } from '../helpers/auth'

export function ProtectedRoute({ children, ...rest }: IChildrenRoute) {
    const dispatch = useDispatch()
    const history = useHistory()
    const profile = useSelector((state) => state.profile)
    const { refreshToken, accessToken } = getTokens()
    const checkToken = !!refreshToken && !!accessToken

    useEffect(() => {
        if (!refreshToken && !profile.user.success) {
            history.push('/login')
        }
    }, [dispatch, refreshToken, profile.user.success, history])

    return (
        <>
            <Route
                {...rest}
                render={({ location }) =>
                    checkToken || profile.user.success ?
                        children : (
                            <Redirect
                                to={{
                                    pathname: '/login',
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
        </>
    )
}
