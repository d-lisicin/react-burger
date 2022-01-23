import React from 'react'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients-content-item.module.css'

const BurgerIngredientsContentItem = (props: {
    price: number;
    name: string;
    img: string | undefined;}) => {
    return (
        <li className={`${styles.item} mt-6`}>
            <img className='ml-4 mr-4' src={props.img} alt={props.name}/>
            <div className={`${styles.price} mt-1 mb-1`}>
                <p className='text text_type_digits-default mr-2'>{props.price}</p>
                <CurrencyIcon type="primary"/>
            </div>
            <p className={`${styles.name} text text_type_main-default`}>{props.name}</p>
            <Counter count={1} size="default" />
        </li>
    )
}

export default BurgerIngredientsContentItem;

