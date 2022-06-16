import React, {useEffect} from 'react'
import { ProfileNav } from '../../components/profile/profile-nav/profile-nav'
import styles from '../profile/profile.module.css'
import Preloader from '../../components/preloader/preloader'
import { useDispatch, useSelector } from 'react-redux'
import { IProfile } from '../../utils/type'
import { getTokens } from '../../helpers/auth'
import * as Actions from '../../store/actions'
import OrderList from '../../components/orders-list/order-list'
import { TWsState } from '../../utils/type'

export const ProfileOrdersPage = () => {
    const profile = useSelector((state: IProfile) => state.profile)
    const dispatch = useDispatch()
    const ws = useSelector((state: { ws: TWsState }) => state.ws)
    const { accessToken } = getTokens()
    const token = accessToken?.replace('Bearer ','')

    useEffect(
        () => {
            if (!ws.wsConnected) {
                dispatch({
                    type: Actions.WS_CONNECTION_REQUEST,
                    accessToken: token
                })
            }

            return () => {
                if (ws.wsConnected) {
                    dispatch({ type: Actions.WS_CONNECTION_CLOSED })
                }
            }
        },
        [dispatch, ws.wsConnected, token]
    )

    if (profile.loading && !ws.wsConnected) {
        return <Preloader />
    }

    return (
        <div className={`${styles.wrap} mt-5`}>
            <ProfileNav />
            <OrderList />
        </div>
    )
}
