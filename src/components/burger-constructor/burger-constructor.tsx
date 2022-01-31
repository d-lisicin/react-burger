import React from 'react';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from "./burger-constructor.module.css";
import Modal from "../modal/modal"
import {TIngredientsItem} from "../../utils/types"
import OrderDetails from "../order-details/order-details"

/*мок игредиентов которые добавили*/
const newBurgerArr = [
    { "_id":"60d3b41abdacab0026a733c8" },
    { "_id":"60d3b41abdacab0026a733d2" },
    { "_id":"60d3b41abdacab0026a733d3" },
    { "_id":"60d3b41abdacab0026a733cf" },
    { "_id":"60d3b41abdacab0026a733cb" },
    { "_id":"60d3b41abdacab0026a733d4" },
    { "_id":"60d3b41abdacab0026a733d0" }
]

const BurgerConstructor = (props: { data: Array<TIngredientsItem> }) => {
    const [isShowOrder, setIsShowOrder] = React.useState(false)

    const openOrderDetails = () => {
        document.body.classList.add('overflow-hidden')
        setIsShowOrder(true)
    }

    const closeOrderDetails = () => {
        document.body.classList.remove('overflow-hidden')
        setIsShowOrder(false)
    }

    const newBurger: Array<TIngredientsItem> = []

    /*ищем совпадения и кидаем их в список*/
    newBurgerArr.forEach(e => {
        const burger = props.data.find((i: { _id: string; }) => i._id === e._id)
        if (burger) {
            newBurger.push(burger)
        }
    })

    return (
        <>
            <section className={`${styles.section} mt-15`}>
                <div className={`${styles.inner} mb-10`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${props.data[0].name} (верх)`}
                        price={props.data[0].price}
                        thumbnail={props.data[0].image}
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
                        text={`${props.data[0].name} (низ)`}
                        price={props.data[0].price}
                        thumbnail={props.data[0].image}
                    />
                </div>
                <div className={styles.total}>
                    <div className={`${styles.piceWrap} mr-10`}>
                        <span className='text text_type_digits-medium mr-2'>610</span>
                        <span className={styles.iconPrice}><CurrencyIcon type="primary" /></span>
                    </div>
                    <Button
                        type="primary"
                        size="large"
                        onClick={openOrderDetails}
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
                    <OrderDetails />
                </Modal>
            }
        </>
    );
}

export default BurgerConstructor
