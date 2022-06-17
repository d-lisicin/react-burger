import React from 'react'
import { useDrag } from 'react-dnd'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredient-item-drag.module.css'
import { useSelector } from '../../../../../store'
import { IIngredientArr, TBurgerConstructor } from '../../../../../utils/type'

const BurgerIngredientItemDrag = (props: IIngredientArr) => {
    const newBurger = useSelector((state) => state.newBurger.newBurger)
    const countIngredient = newBurger.filter((e) => e._id === props.ingredient._id).length

    const [{ opacity }, drag] = useDrag({
        type: 'ingredients',
        item: props.ingredient,
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    })

    return (
        <div
            ref={drag}
            style={{opacity}}
        >
            <img
                className='ml-4 mr-4'
                src={props.ingredient.image}
                alt={props.ingredient.name}
            />
            <div className={`${styles.price} mt-1 mb-1`}>
                <p className='text text_type_digits-default mr-2'>
                    {props.ingredient.price}
                </p>
                <CurrencyIcon type="primary"/>
            </div>
            <p className={`${styles.name} text text_type_main-default`}>
                {props.ingredient.name}
            </p>
            <Counter
                count={ props.ingredient.type === 'bun' ? countIngredient * 2 : countIngredient }
                size="default" />
        </div>
    )
}

export default BurgerIngredientItemDrag
