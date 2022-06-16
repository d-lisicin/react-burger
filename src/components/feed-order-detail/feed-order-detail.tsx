import React from 'react'
import styles from './feed-order-detail.module.css'
import { replaceDate } from '../../utils/date'
import { useSelector } from 'react-redux'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useParams } from 'react-router-dom'
import {IParamTypes, TOrderViewWs, IIngredientEl, IIngredientsItem } from '../../utils/type'

const FeedOrderDetail = () => {
    const { id } = useParams<IParamTypes>()
    const orderState = useSelector((state: TOrderViewWs) => state.ws.messages[0].orders)
    const ingredients = useSelector((state: IIngredientEl) => state.ingredients.items)
    const order = orderState?.find((e) => e._id === id)
    const orderNotDuplicate = [...new Set(order?.ingredients.map((id) => id))]
    const orderInfo = orderNotDuplicate.map((orderIngredient) => {
        const ingredient = ingredients.find((ingredient) => ingredient._id === orderIngredient)
        const ingredientValue = order?.ingredients.filter((ingredientId) => ingredientId === ingredient?._id).length

        return ((ingredient === undefined) || (ingredientValue === undefined))
            ? undefined
            : {
            ...ingredient,
            allPrice: ingredient.price * ingredientValue,
            __v: ingredientValue,
        }
    }).filter((e) => e !== undefined) as IIngredientsItem[]

    const orderAllPrice = orderInfo
        .map((item) => item.allPrice)
        .reduce((prev: number, curr: number) => prev + curr, 0)

    const statusName = (status: string) => {
        switch (status) {
            case ('created'): {
                return 'Создан'
            }
            case ('pending'): {
                return 'В работе'
            }

            case ('done'): {
                return 'Выполнен'
            }

            default: {
                break
            }
        }
    }

    return (
        <>
            { order &&
                <div className={`${styles.wrap} mt-10 mr-10 mb-10 ml-10`}>
                    <div className={`${styles.orderNumber} text text_type_digits-default mb-10`}>#{order?.number}</div>
                    <div className='text text_type_main-medium mb-3'>{order.name}</div>
                    <div className={`${styles.status} text text_type_main-default mb-15`}>{statusName(order.status)}</div>
                    <div className='text text_type_main-medium mb-6'>Состав</div>
                    <div className={`${styles.scrollList} mb-10`}>
                        {orderInfo.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`${styles.item} mb-4`}
                                >
                                    <div className={`${styles.imageWrap} mr-4`}>
                                        <img className={styles.img} src={item.image_mobile} alt='' />
                                    </div>
                                    <div className={`${styles.infoWrap} mr-6`}>
                                        <div className='text text_type_main-default mr-4'>{item.name}</div>
                                        <div className='text text_type_digits-default'>{item.__v} x {item.price}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.footer}>
                        <div className='text text_type_main-default text_color_inactive'>
                            { replaceDate(order.createdAt) }
                        </div>
                        <div className={styles.allPrice}>
                            <div className='text text_type_digits-default mr-2'>
                                { orderAllPrice }
                            </div>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default FeedOrderDetail
