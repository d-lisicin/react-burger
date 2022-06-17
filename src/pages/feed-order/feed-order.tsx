import React, { useEffect } from 'react'
import styles from './feed-order.module.css'
import FeedOrderDetail from '../../components/feed-order-detail/feed-order-detail'
import { useDispatch, useSelector } from '../../store'
import * as Actions from '../../store/actions'
import { getTokens } from '../../helpers/auth'

export const FeedOrderPage = () => {
    const dispatch = useDispatch()
    const ws = useSelector((state) => state.ws)
    const { accessToken } = getTokens()
    const token = accessToken?.replace('Bearer ','')
    const ordersList = useSelector((state) => state.ws.messages)

    useEffect(
        () => {
            if (!ws.wsConnected) {
                dispatch({
                    type: Actions.WS_CONNECTION_REQUEST,
                    urlQuery: `?token=${token}`
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

    return (
        <div className={styles.wrap}>
            {ordersList.length !== 0 &&
                <FeedOrderDetail />
            }
        </div>
    )
}
