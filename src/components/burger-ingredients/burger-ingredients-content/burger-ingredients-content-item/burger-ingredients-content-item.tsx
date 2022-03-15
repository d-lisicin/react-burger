import React, {useContext} from 'react'
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients-content-item.module.css'
import { TIngredientsItem } from '../../../../utils/types'
import { IngredientsContext } from '../../../../services/ingredientsContext'

const BurgerIngredientsContentItem = (props: {
    type: string;
    name: string;
    onClick: Function
}) => {

    const { ingredients } = useContext(IngredientsContext)

    const category = ingredients.filter((el: { type: string; }) => el.type === props.type)

    return (
        <>
            <h3 className='text text_type_main-medium'>{props.name}</h3>
            <ul className={`${styles.list} mb-10 ml-4 mr-2`}>
                {category.map((item: TIngredientsItem) => (
                    <li
                        key={item._id}
                        className={`${styles.item} mt-6`}
                        onClick={() => { props.onClick(item) }}
                    >
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

