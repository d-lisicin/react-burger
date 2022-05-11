import React  from 'react'
import IngredientDetails from '../../components/ingredient-details/ingredient-details'
import styles from './ingredients.module.css'

export const IngredientsPage = () => {
    return (
        <div className={styles.wrap}>
            <h2 className='text text_type_main-large mt-30'>Детали ингредиента</h2>
            <IngredientDetails />
        </div>
    )
}
