import React, { useEffect } from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IProfile, IChildrenRoute } from '../utils/type'
import { getTokens } from '../helpers/auth'

export function ProtectedRoute({ children, ...rest }: IChildrenRoute) {
    const dispatch = useDispatch()
    const history = useHistory()
    const profile = useSelector((state: IProfile) => state.profile)
    const { refreshToken } = getTokens()

    useEffect(() => {
        if (!refreshToken && !profile.user) {
            history.push('/login')
        }
    }, [dispatch, refreshToken, profile.user, history])

    return (
        <>
            <Route
                {...rest}
                render={({ location }) =>
                    profile.user ?
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
