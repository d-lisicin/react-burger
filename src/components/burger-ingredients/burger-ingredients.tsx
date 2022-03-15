import { useSelector } from 'react-redux'
import BurgerIngredientsTab from './burger-ingredients-tab/burger-ingredients-tab'
import BurgerIngredientsContent from './burger-ingredients-content/burger-ingredients-content'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import styles from './burger-ingredients.module.css'
import { IIngredientView } from '../../utils/types'

const BurgerIngredients = () => {
    const ingredientDetails = useSelector((state: IIngredientView) => state.ingredientView.ingredientView)

    return (
        <>
            <section className={`${styles.section} mb-10 mr-10`}>
                <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>
                <BurgerIngredientsTab />
                <BurgerIngredientsContent />
            </section>
            {ingredientDetails &&
                <Modal title='Детали ингредиента'>
                    <IngredientDetails />
                </Modal >
            }
        </>
    )
}

export default BurgerIngredients
