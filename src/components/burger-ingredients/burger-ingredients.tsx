import React from 'react'
import BurgerIngredientsTab from './burger-ingredients-tab/burger-ingredients-tab'
import BurgerIngredientsContent from './burger-ingredients-content/burger-ingredients-content'
import styles from './burger-ingredients.module.css'

const BurgerIngredients = (props: { data: any }) => {
    return (
        <section className={`${styles.section} mb-10 mr-10`}>
            <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>
            <BurgerIngredientsTab />
            <BurgerIngredientsContent data={props.data} />
        </section>
    );
}

export default BurgerIngredients;
