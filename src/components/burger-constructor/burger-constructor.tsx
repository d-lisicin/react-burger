import React, {useContext, useState, useEffect, useReducer } from 'react'
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'
import Modal from '../modal/modal'
import { TIngredientsItem } from '../../utils/types'
import OrderDetails from '../order-details/order-details'
import { IngredientsContext } from '../../services/ingredientsContext'

const totalPriceInitialState = { totalPrice: 0 }

function totalPriceReducer(state: Object, action: { type: string; value: number; }) {
    switch (action.type) {
        case 'set':
            return { totalPrice: action.value }
        case 'reset':
            return totalPriceInitialState
        default:
            throw new Error(`Wrong type of action: ${action.type}`)
    }
}

const BurgerConstructor = () => {
    const { ingredients } = useContext(IngredientsContext)
    const [ totalPriceState, totalPriceDispatcher ] = useReducer(totalPriceReducer, totalPriceInitialState, undefined)
    const [ isShowOrder, setIsShowOrder ] = useState(false)
    const [ orderValue, setOrderValue ] = useState(null)
    const [ newBurgerItem ] = useState([
        { "_id":"60d3b41abdacab0026a733c8" },
        { "_id":"60d3b41abdacab0026a733d2" },
        { "_id":"60d3b41abdacab0026a733d3" },
        { "_id":"60d3b41abdacab0026a733cf" },
        { "_id":"60d3b41abdacab0026a733cb" },
        { "_id":"60d3b41abdacab0026a733d4" },
        { "_id":"60d3b41abdacab0026a733d0" }
    ])
    const newBurger: Array<TIngredientsItem> = []

    const firstBun = ingredients.filter(function(e: { type: string }) {
        return e.type === 'bun'
    })[0]

    /*ищем совпадения и кидаем их в список*/
    newBurgerItem.forEach(e => {
        const burger = ingredients.find((i: { _id: string; }) => i._id === e._id)
        if (burger) {
            newBurger.push(burger)
        }
    })

    const orderId = newBurger.map((i) => i._id)

    const totalPrice = newBurger
        .map(item => item.price)
        .reduce((prev, curr) => prev + curr, 0) + (firstBun.price * 2)

    useEffect(() => {
        if (ingredients) {
            totalPriceDispatcher({
                type: 'set',
                value: totalPrice
            })
        } else {
            totalPriceDispatcher({
                type: 'reset',
                value: 0
            })
        }
    }, [ingredients, totalPrice, totalPriceDispatcher])

    const openOrderDetails = () => {
        document.body.classList.add('overflow-hidden')
        setIsShowOrder(true)
    }

    const closeOrderDetails = () => {
        document.body.classList.remove('overflow-hidden')
        setIsShowOrder(false)
    }

    const url = 'https://norma.nomoreparties.space/api/orders'

    const postOrder = async () => {
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ingredients: orderId })
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('Something went wrong')
                }
            })
            .then((res) => {
                setOrderValue(res.order.number)
                openOrderDetails()
            })
            .catch(err => console.log(err))
    };

    return (
        <>
            <section className={`${styles.section} mt-15`}>
                <div className={`${styles.inner} mb-10`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${firstBun.name} (верх)`}
                        price={firstBun.price}
                        thumbnail={firstBun.image}
                    />
                    <ul className={styles.list}>
                        {newBurger.map((item, index) => {
                            return (
                                <li key={index} className={styles.wrap}>
                                    <span className={styles.icon}>
                                        <DragIcon type="primary" />
                                    </span>
                                    <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
                                </li>
                            )
                        })}
                    </ul>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${firstBun.name} (низ)`}
                        price={firstBun.price}
                        thumbnail={firstBun.image}
                    />
                </div>
                <div className={styles.total}>
                    <div className={`${styles.piceWrap} mr-10`}>
                        <span className='text text_type_digits-medium mr-2'>{totalPriceState.totalPrice}</span>
                        <span className={styles.iconPrice}><CurrencyIcon type="primary" /></span>
                    </div>
                    <Button
                        type="primary"
                        size="large"
                        onClick={postOrder}
                    >
                        Оформить заказ
                    </Button>
                </div>
            </section>
            {isShowOrder &&
                <Modal
                    title=''
                    onClick={closeOrderDetails}
                >
                    <OrderDetails orderValue={orderValue} />
                </Modal>
            }
        </>
    );
}

export default BurgerConstructor
