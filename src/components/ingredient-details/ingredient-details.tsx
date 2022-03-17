import React from 'react'
import styles from './ingredient-details.module.css'
import { IIngredientView } from '../../utils/types'
import { useSelector } from 'react-redux'

const IngredientDetails = () => {
    const ingredientDetails = useSelector((state: IIngredientView) => state.ingredientView.ingredientView)

    return (
        <div className={styles.wrap}>
            <img className='text text_type_main-medium mb-4' src={ingredientDetails.image_large} alt={ingredientDetails.name} />
            <p className='text text_type_main-medium mb-8'>{ingredientDetails.name}</p>
            <div className={`${styles.textWrap} mb-15`}>
                <div className={`${styles.textItem} text_color_inactive mr-5`}>
                    <span className={`${styles.title} text text_type_main-default`}>Калории,ккал</span>
                    <span className='text text_type_digits-default'>{ingredientDetails.calories}</span>
                </div>
                <div className={`${styles.textItem} text_color_inactive mr-5`}>
                    <span className={`${styles.title} text text_type_main-default`}>Белки, г</span>
                    <span className='text text_type_digits-default'>{ingredientDetails.proteins}</span>
                </div>
                <div className={`${styles.textItem} text_color_inactive mr-5`}>
                    <span className={`${styles.title} text text_type_main-default`}>Жиры, г</span>
                    <span className='text text_type_digits-default'>{ingredientDetails.fat}</span>
                </div>
                <div className={`${styles.textItem} text_color_inactive`}>
                    <span className={`${styles.title} text text_type_main-default`}>Углеводы, г</span>
                    <span className='text text_type_digits-default'>{ingredientDetails.carbohydrates}</span>
                </div>
            </div>
        </div>
    )
}

export default IngredientDetails
