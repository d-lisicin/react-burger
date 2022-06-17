import React, {useEffect} from 'react'
import { ProfileNav } from '../../components/profile/profile-nav/profile-nav'
import styles from '../profile/profile.module.css'
import Preloader from '../../components/preloader/preloader'
import { useDispatch, useSelector } from '../../store'
import { getTokens } from '../../helpers/auth'
import * as Actions from '../../store/actions'
import OrderList from '../../components/orders-list/order-list'

export const ProfileOrdersPage = () => {
    const profile = useSelector((state) => state.profile)
    const dispatch = useDispatch()
    const { wsConnected } = useSelector((state) => state.ws)
    const { accessToken } = getTokens()
    const token = accessToken?.replace('Bearer ','')

    useEffect(
        () => {
            if (!wsConnected) {
                dispatch({
                    type: Actions.WS_CONNECTION_REQUEST,
                    urlQuery: `?token=${token}`
                })
            }

            return () => {
                if (wsConnected) {
                    dispatch({ type: Actions.WS_CONNECTION_CLOSED })
                }
            }
        },
        [dispatch, wsConnected, token]
    )

    if (profile.loading && !wsConnected) {
        return <Preloader />
    }

    return (
        <div className={`${styles.wrap} mt-5`}>
            <ProfileNav />
            <OrderList />
        </div>
    )
}
