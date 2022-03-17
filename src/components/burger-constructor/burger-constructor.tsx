import React, { useEffect, useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useDrop } from 'react-dnd'
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'
import Modal from '../modal/modal'
import { IIngredient, IIngredientConstructor, IIngredientsItem, IOrder } from '../../utils/types'
import OrderDetails from '../order-details/order-details'
import Actions from '../../services/actions'
import BurgerConstructorItem from './burger-constructor-item/burger-constructor-item'
import { v1 as uuidv4 } from 'uuid'
import { postOrder } from '../../services/actions/order'

const totalPriceInitialState = { totalPrice: 0 }

function totalPriceReducer(state: Object, action: { type: string, value: number }) {
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
    const dispatch = useDispatch()
    const [ totalPriceState, totalPriceDispatcher ] = useReducer(totalPriceReducer, totalPriceInitialState, undefined)
    const ingredients = useSelector((state: IIngredient) => state.ingredients)
    const orderValue = useSelector((state: IOrder) => state.order.number)
    const newBurger = useSelector((state: IIngredientConstructor) => state.newBurger.newBurger)
    const activeBun = newBurger.filter((e) => e.type === 'bun')[0]
    const activeIngridients = newBurger.filter((e) => e.type !== 'bun')
    const orderId = newBurger.map((i: { _id: string }) => i._id)
    const totalPrice = newBurger
        .map((item: { price: number }) => item.price)
        .reduce((prev: number, curr: number) => prev + curr, 0) + (activeBun?.price)

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

    const dropIngredient = (ingredient: IIngredientsItem) => {
        ingredient.type === 'bun' ?
            dispatch({ type: Actions.ADD_BUN, payload: { ...ingredient, _idNew: uuidv4() } }) :
            dispatch({ type: Actions.ADD_INGREDIENT, payload: { ...ingredient, _idNew: uuidv4() } })
    }

    const [, dropTarget] = useDrop({
        accept: 'ingredients',
        collect: (monitor) => ({
            isHover: monitor.isOver(),
        }),
        drop: (ingredient: IIngredientsItem) => dropIngredient(ingredient)
    })

    const sendOrder = async () => {
        if (activeBun) {
            dispatch(postOrder(orderId))
            document.body.classList.add('overflow-hidden')
        }
    }

    const closeOrderDetails = () => {
        document.body.classList.remove('overflow-hidden')
        dispatch({ type: Actions.DELETE_ORDER_NUMBER })
    }

    return (
        <>
            <section
                className={`${styles.section} mt-15`}
            >
                <div
                    className={`${styles.inner} mb-10`}
                    ref={ dropTarget }
                >
                    { activeBun && (
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${activeBun?.name} (верх)`}
                            price={activeBun?.price}
                            thumbnail={activeBun?.image}
                        />
                    )}

                    <ul className={styles.list}>
                        { activeIngridients.length === 0 && (
                            <div className={`${styles.placeholder} text text_color_inactive`}>Перетащите сюда ингредиенты</div>
                        )}

                        {activeIngridients.map((item, index) => {
                            return (
                                <BurgerConstructorItem
                                    key={item._idNew}
                                    item={item}
                                    index={index}
                                />
                            )
                        })}
                    </ul>
                    { activeBun && (
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${activeBun?.name} (низ)`}
                            price={activeBun?.price}
                            thumbnail={activeBun?.image}
                        />
                    )}
                </div>
                <div className={styles.total}>
                    <div className={`${styles.piceWrap} mr-10`}>
                        <span className='text text_type_digits-medium mr-2'>
                            {totalPriceState.totalPrice ? totalPriceState.totalPrice : 0}
                        </span>
                        <span className={styles.iconPrice}><CurrencyIcon type="primary" /></span>
                    </div>
                    <div className={ activeBun ? styles.buttonWrap : styles.buttonWrapBlock}>
                        <Button
                            type="primary"
                            size="large"
                            onClick={sendOrder}
                        >
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            </section>
            {orderValue &&
                <Modal
                    title=''
                    onClick={closeOrderDetails}
                >
                    <OrderDetails />
                </Modal>
            }
        </>
    );
}

export default BurgerConstructor
