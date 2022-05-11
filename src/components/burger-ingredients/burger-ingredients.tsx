import BurgerIngredientsTab from './burger-ingredients-tab/burger-ingredients-tab'
import BurgerIngredient from './burger-ingredient/burger-ingredient'
import styles from './burger-ingredients.module.css'

const BurgerIngredients = () => {
    return (
        <>
            <section className={`${styles.section} mb-10 mr-10`}>
                <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>
                <BurgerIngredientsTab />
                <BurgerIngredient />
            </section>
        </>
    )
}

export default BurgerIngredients
