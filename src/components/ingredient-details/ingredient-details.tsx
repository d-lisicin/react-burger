import React from 'react'
import styles from './ingredient-details.module.css'
import { TIngredientsItem } from '../../utils/types'

const IngredientDetails = (props: {
    ingredient: TIngredientsItem}) => {

    return (
        <div className={styles.wrap}>
            <img className='text text_type_main-medium mb-4' src={props.ingredient.image_large} alt={props.ingredient.name} />
            <p className='text text_type_main-medium mb-8'>{props.ingredient.name}</p>
            <div className={`${styles.textWrap} mb-15`}>
                <div className={`${styles.textItem} text_color_inactive mr-5`}>
                    <span className={`${styles.title} text text_type_main-default`}>Калории,ккал</span>
                    <span className='text text_type_digits-default'>{props.ingredient.calories}</span>
                </div>
                <div className={`${styles.textItem} text_color_inactive mr-5`}>
                    <span className={`${styles.title} text text_type_main-default`}>Белки, г</span>
                    <span className='text text_type_digits-default'>{props.ingredient.proteins}</span>
                </div>
                <div className={`${styles.textItem} text_color_inactive mr-5`}>
                    <span className={`${styles.title} text text_type_main-default`}>Жиры, г</span>
                    <span className='text text_type_digits-default'>{props.ingredient.fat}</span>
                </div>
                <div className={`${styles.textItem} text_color_inactive`}>
                    <span className={`${styles.title} text text_type_main-default`}>Углеводы, г</span>
                    <span className='text text_type_digits-default'>{props.ingredient.carbohydrates}</span>
                </div>
            </div>
        </div>
    );
}

export default IngredientDetails
