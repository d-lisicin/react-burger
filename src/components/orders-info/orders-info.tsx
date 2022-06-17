import React from 'react'
import styles from './orders-info.module.css'
import { useSelector } from '../../store'

function OrdersInfo() {
    const ordersList = useSelector((state) => state.ws.messages[0]?.orders)
    const orderInfo = useSelector((state) => state.ws.messages[0])

    const orderStatusDone = ordersList
        .filter((e) => e.status === 'done')
        .map((x) => x.number)

    const orderStatusPending = ordersList
        .filter((e) => e.status === 'pending')
        .map((x) => x.number)

    return (
        <div className={`${styles.wrap} mt-5`}>
            <div className={`${styles.infoBlockWrap} mb-15`}>
                <div className={`${styles.infoBlock} mr-9`}>
                    <div className={`${styles.title} text text_type_main-medium mb-6`}>
                        Готовы:
                    </div>
                    <div className={styles.content}>
                        {orderStatusDone.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`${styles.contentItem} text text_type_digits-default mb-2`}
                                >
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div className={`${styles.title} text text_type_main-medium mb-6`}>
                        В работе:
                    </div>
                    <div className={styles.content}>
                        {orderStatusPending.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className='text text_type_digits-default mb-2'
                                >
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className='mb-15'>
                <div className='text text_type_main-medium'>
                    Выполнено за все время:
                </div>
                <div className={`${styles.timeContent} text text_type_digits-large`}>
                    { orderInfo.total }
                </div>
            </div>

            <div className={styles.oneDay}>
                <div className='text text_type_main-medium'>
                    Выполнено за сегодня:
                </div>
                <div className={`${styles.timeContent} text text_type_digits-large`}>
                    { orderInfo.totalToday }
                </div>
            </div>
        </div>
    )
}

export default OrdersInfo
