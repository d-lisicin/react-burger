import React from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './order-list-item.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { replaceDate } from '../../../utils/date'
import {useHistory, useLocation} from 'react-router-dom'
import * as Actions from '../../../store/actions'
import { TOrderView, IIngredientEl, IIngredientsItem } from '../../../utils/type'

function OrderListItem(orders: { orders: TOrderView }) {
    const orderItem = orders.orders
    const ingredients = useSelector((state: IIngredientEl) => state.ingredients.items)
    const date = orderItem.createdAt
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()


    const openOrderDetails = (item: TOrderView) => {
        document.body.classList.add('overflow-hidden')
        history.push({
            pathname: `/feed/${item._id}`,
            state: {
                ingredientId: location
            }
        })

        dispatch({ type: Actions.SET_ORDER_VIEW, payload: item })
    }

    const orderItemFilter = orderItem.ingredients
        .map(function(name: string) {
            return ingredients.find((e: { _id: string }) => e._id === name)
        })
        .filter((e) => e !== undefined) as IIngredientsItem[]

    const orderItemPrice = orderItemFilter
        .map((e) => e.price)
        .reduce((prev, curr) => prev + curr, 0)

    const orderItemImg = orderItemFilter
        .map((e) => e.image_mobile)

    return (
        <div
            className={`${styles.item} pt-6 pb-6 pl-6 pr-6 mb-4 mr-2`}
            onClick={() => { openOrderDetails(orderItem) }}
        >
            <div className={`${styles.top} mb-6`}>
                <div className={`${styles.topNumber} text text_type_digits-default`}>
                    #{orderItem.number}
                </div>
                <div className={`${styles.topDate} text text_type_main-default text_color_inactive`}>
                    { replaceDate(date) }
                </div>
            </div>
            <div className={`${styles.center} text text_type_main-medium mb-6`}>
                {orderItem.name}
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomList}>
                    {orderItemImg.slice(0, 6).map((img, index) => {
                        return (
                            <div
                                key={index}
                                className={styles.bottomListItem}
                            >
                                <img
                                    className={styles.img}
                                    src={img}
                                    alt=''
                                />
                                { (orderItemImg.length > 6) && (index === 5) &&
                                    <div className={`${styles.ingredientValue} text text_type_main-default`}>
                                        +{orderItemImg.length - 6}
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>
                <div className={styles.bottomPrice}>
                    <div className='text text_type_digits-default mr-2'>
                        { orderItemPrice }
                    </div>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
}

export default OrderListItem
