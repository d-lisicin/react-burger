import React, { useEffect } from 'react'
import { useDispatch, useSelector } from '../../store'
import styles from './feed.module.css'
import OrderList from '../../components/orders-list/order-list'
import OrdersInfo from '../../components/orders-info/orders-info'
import * as Actions from './../../store/actions'
import { getTokens } from '../../helpers/auth'
import Preloader from '../../components/preloader/preloader'

export const Feed = () => {
    const dispatch = useDispatch()
    const ws = useSelector((state) => state.ws)
    const { accessToken } = getTokens()
    const token = accessToken?.replace('Bearer ','')
    const ordersList = useSelector((state) => state.ws.messages[0]?.orders)

    useEffect(
        () => {
            if (!ws.wsConnected) {
                dispatch({
                    type: Actions.WS_CONNECTION_REQUEST,
                    urlQuery: '/all'
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

    if (!ordersList) {
        return <Preloader />
    }

    return (
        <>
            {ordersList.length !== 0 &&
                <div className={`${styles.wrap} mt-10`}>
                    <section className={`${styles.section} mr-15`}>
                        <div className='text text_type_main-large'>Лента заказов</div>
                        <OrderList />
                    </section>
                    <section className={`${styles.sectionRight}`}>
                        <OrdersInfo />
                    </section>
                </div>
            }
        </>
    )
}
