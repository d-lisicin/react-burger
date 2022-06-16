import React, { useEffect } from 'react'
import styles from './feed-order.module.css'
import FeedOrderDetail from '../../components/feed-order-detail/feed-order-detail'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../../store/actions'
import { getTokens } from '../../helpers/auth'
import { TWsGetState, TWsState } from '../../utils/type'

export const FeedOrderPage = () => {
    const dispatch = useDispatch()
    const ws = useSelector((state: { ws: TWsState }) => state.ws)
    const { accessToken } = getTokens()
    const token = accessToken?.replace('Bearer ','')
    const ordersList = useSelector((state: TWsGetState) => state.ws.messages)

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

    return (
        <div className={styles.wrap}>
            {ordersList.length !== 0 &&
                <FeedOrderDetail />
            }
        </div>
    )
}
