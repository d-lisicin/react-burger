import React from 'react';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from "./burger-constructor.module.css";
import data from '../../utils/data'

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

const newBurger: ({ _id: string; name: string; type: string; proteins: number; fat: number; carbohydrates: number; calories: number; price: number; image: string; image_mobile: string; image_large: string; __v: number; })[] = []

/*ищем совпадения и кидаем их в список*/
newBurgerArr.forEach(e => {
    const burger = data.find(i => i._id === e._id)
    if (burger) {
        newBurger.push(burger)
    }
})

const BurgerConstructor = () => {
    return (
        <section className={`${styles.section} mt-15`}>
            <div className='mb-10' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '15px', paddingRight: '16px' }}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail='https://code.s3.yandex.net/react/code/bun-02.png'
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
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail='https://code.s3.yandex.net/react/code/bun-02.png'
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
