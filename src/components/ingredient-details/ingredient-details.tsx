import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './ingredient-details.module.css'
import { useSelector } from '../../store'
import { IParamTypes } from '../../utils/type'

const IngredientDetails = () => {
    const { id } = useParams<IParamTypes>()

    const ingredient = useSelector((state) => state.ingredients.items)
    const ingredientInfo = ingredient.find((e: { _id: string }) => e._id === id)

    return (
        <div className={styles.wrap}>
            <img className='text text_type_main-medium mb-4' src={ingredientInfo?.image_large} alt={ingredientInfo?.name} />
            <p className='text text_type_main-medium mb-8'>{ingredientInfo?.name}</p>
            <div className={`${styles.textWrap} mb-15`}>
                <div className={`${styles.textItem} text_color_inactive mr-5`}>
                    <span className={`${styles.title} text text_type_main-default`}>Калории,ккал</span>
                    <span className='text text_type_digits-default'>{ingredientInfo?.calories}</span>
                </div>
                <div className={`${styles.textItem} text_color_inactive mr-5`}>
                    <span className={`${styles.title} text text_type_main-default`}>Белки, г</span>
                    <span className='text text_type_digits-default'>{ingredientInfo?.proteins}</span>
                </div>
                <div className={`${styles.textItem} text_color_inactive mr-5`}>
                    <span className={`${styles.title} text text_type_main-default`}>Жиры, г</span>
                    <span className='text text_type_digits-default'>{ingredientInfo?.fat}</span>
                </div>
                <div className={`${styles.textItem} text_color_inactive`}>
                    <span className={`${styles.title} text text_type_main-default`}>Углеводы, г</span>
                    <span className='text text_type_digits-default'>{ingredientInfo?.carbohydrates}</span>
                </div>
            </div>
        </div>
    )
}

export default IngredientDetails
