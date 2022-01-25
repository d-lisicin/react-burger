import React from 'react';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from "./burger-constructor.module.css";

/*мок игредиентов которые добавили*/
const newBurgerArr = [
    {
        "_id":"60666c42cc7b410027a1a9b9"
    },
    {
        "_id":"60666c42cc7b410027a1a9b4"
    },
    {
        "_id":"60666c42cc7b410027a1a9bc"
    },
    {
        "_id":"60666c42cc7b410027a1a9bb"
    },
    {
        "_id":"60666c42cc7b410027a1a9bb"
    },
    {
        "_id":"60666c42cc7b410027a1a9b9"
    },
    {
        "_id":"60666c42cc7b410027a1a9b3",
    }
]

const newBurger: ({
    _id: string; name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
})[] = []

const BurgerConstructor = (props: { data: any }) => {
    /*ищем совпадения и кидаем их в список*/
    newBurgerArr.forEach(e => {
        const burger = props.data.find((i: { _id: string; }) => i._id === e._id)
        if (burger) {
            newBurger.push(burger)
        }
    })

    return (
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
                        return <li key={index} className={styles.wrap}>
                        <span className={styles.icon}>
                            <DragIcon type="primary" />
                        </span>
                            <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
                        </li>
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
                <Button type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </section>
    );
}

export default BurgerConstructor;
