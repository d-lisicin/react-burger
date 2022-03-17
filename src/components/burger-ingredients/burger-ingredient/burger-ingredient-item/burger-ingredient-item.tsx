import React, { useRef } from 'react'
import styles from './burger-ingredient-item.module.css'
import { IIngredient, IIngredientsItem } from '../../../../utils/types'
import { useDispatch, useSelector } from 'react-redux'
import BurgerIngredientItemDrag from './burger-ingredient-item-drag/burger-ingredient-item-drag'
import Actions from '../../../../services/actions'

const BurgerIngredientItem = (props: {
    type: string,
    name: string
}) => {

    const dispatch = useDispatch()
    const ingredientsItem = useSelector((state: IIngredient) => state.ingredients)
    const categoryRef = useRef<null | HTMLDivElement>(null)
    const category = ingredientsItem.filter((el: { type: string }) => el.type === props.type)

    const openIngredientDetails = (ingredientDetails: IIngredientsItem) => {
        document.body.classList.add('overflow-hidden')
        dispatch({ type: Actions.SET_INGREDIENT_VIEW, payload: ingredientDetails })
    }

    return (
        <div id={props.type} ref={ categoryRef }>
            <h3 className='text text_type_main-medium'>{props.name}</h3>
            <ul className={`${styles.list} mb-10 ml-4 mr-2`}>
                {category.map((item: IIngredientsItem) => (
                    <li
                        key={item._id}
                        className={`${styles.item} mt-6`}
                        onClick={() => { openIngredientDetails(item) }}
                    >
                        <BurgerIngredientItemDrag ingredient={ item } />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BurgerIngredientItem
