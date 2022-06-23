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
        <div
            className={styles.wrap}
            data-test="ingredient-details"
        >
            <img
                className='text text_type_main-medium mb-4'
                src={ingredientInfo?.image_large}
                alt={ingredientInfo?.name}
                data-test="ingredient-details-image"
            />
            <p
                className='text text_type_main-medium mb-8'
                data-test="ingredient-details-name"
            >
                {ingredientInfo?.name}
            </p>
            <div className={`${styles.textWrap} mb-15`}>
                <div className={`${styles.textItem} text_color_inactive mr-5`}>
                    <span className={`${styles.title} text text_type_main-default`}>
                        Калории,ккал
                    </span>
                    <span
                        className='text text_type_digits-default'
                        data-test="ingredient-details-calories"
                    >
                        {ingredientInfo?.calories}
                    </span>
                </div>
                <div className={`${styles.textItem} text_color_inactive mr-5`}>
                    <span className={`${styles.title} text text_type_main-default`}>Белки, г</span>
                    <span
                        className='text text_type_digits-default'
                        data-test="ingredient-details-proteins"
                    >
                        {ingredientInfo?.proteins}
                    </span>
                </div>
                <div className={`${styles.textItem} text_color_inactive mr-5`}>
                    <span className={`${styles.title} text text_type_main-default`}>Жиры, г</span>
                    <span
                        className='text text_type_digits-default'
                        data-test="ingredient-details-fat"
                    >
                        {ingredientInfo?.fat}
                    </span>
                </div>
                <div className={`${styles.textItem} text_color_inactive`}>
                    <span className={`${styles.title} text text_type_main-default`}>Углеводы, г</span>
                    <span
                        className='text text_type_digits-default'
                        data-test="ingredient-details-carbohydrates"
                    >
                        {ingredientInfo?.carbohydrates}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default IngredientDetails
