import React from 'react'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients-content-item.module.css'

const BurgerIngredientsContentItem = (props: {
    data: any
    type: string
    name: string
}) => {
    const category = props.data.filter((el: any) => el.type === props.type)

    return (
        <>
            <h3 className='text text_type_main-medium'>{props.name}</h3>
            <ul className={`${styles.list} mb-10 ml-4 mr-2`}>
                {category.map((item: {
                    image: string
                    name: string
                    price: number
                    _id: string
                }) => (
                    <li key={item._id} className={`${styles.item} mt-6`}>
                        <img className='ml-4 mr-4' src={item.image} alt={item.name} />
                        <div className={`${styles.price} mt-1 mb-1`}>
                            <p className='text text_type_digits-default mr-2'>{item.price}</p>
                            <CurrencyIcon type="primary"/>
                        </div>
                        <p className={`${styles.name} text text_type_main-default`}>{item.name}</p>
                        <Counter count={1} size="default" />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default BurgerIngredientsContentItem;

