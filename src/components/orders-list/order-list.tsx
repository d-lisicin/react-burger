import React from 'react'
import styles from './order-list.module.css'
import OrderListItem from './order-list-item/order-list-item'
import { useSelector } from '../../store'
import Preloader from '../preloader/preloader'
import { TOrderView } from '../../utils/type'

function OrderList() {
    const ordersInfo = useSelector((state) => state.ws.messages[0])
    const ordersConnected = useSelector((state) => state.ws.wsConnected)
    let notResult = false

    if (ordersConnected) {
        notResult = ordersInfo?.orders.length === 0
    }

    if (!ordersInfo) {
        return <Preloader />
    }

    return (
        <div className={`${styles.wrap} ${notResult ? styles.notResult : ''} mt-5`}>
            {ordersInfo &&
                ordersInfo.orders.map((item: TOrderView) => {
                    return (
                        <OrderListItem
                            key={item._id}
                            orders={item}
                        />
                    )
                })
            }

            {notResult && (
                    <div className='text text_type_main-small text_color_inactive'>
                        Нет результатов
                    </div>
                )
            }
        </div>
    )
}

export default OrderList
