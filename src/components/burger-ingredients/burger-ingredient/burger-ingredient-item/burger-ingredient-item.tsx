import React, { useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styles from './burger-ingredient-item.module.css'
import { IIngredientEl, IIngredientsItem } from '../../../../utils/type'
import { useDispatch, useSelector } from 'react-redux'
import BurgerIngredientItemDrag from './burger-ingredient-item-drag/burger-ingredient-item-drag'
import * as Actions from '../../../../store/actions'

const BurgerIngredientItem = (props: {
    type: string,
    name: string
}) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const ingredientsItem = useSelector((state: IIngredientEl) => state.ingredients.items)
    const categoryRef = useRef<null | HTMLDivElement>(null)
    const category = ingredientsItem.filter((el: { type: string }) => el.type === props.type)

    const openIngredientDetails = (item: IIngredientsItem) => {
        document.body.classList.add('overflow-hidden')

        history.push({
            pathname: `/ingredients/${item._id}`,
            state: {
                ingredientId: location
            }
        })

        dispatch({ type: Actions.SET_INGREDIENT_VIEW, payload: item })
    }

    return (
        <div id={props.type} ref={ categoryRef }>
            <h3 className='text text_type_main-medium'>{props.name}</h3>
            <ul className={`${styles.list} mb-10 ml-4 mr-2`}>
                {category.map((item) => (
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

