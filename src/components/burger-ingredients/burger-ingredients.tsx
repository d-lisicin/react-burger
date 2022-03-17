import { useSelector, useDispatch } from 'react-redux'
import BurgerIngredientsTab from './burger-ingredients-tab/burger-ingredients-tab'
import BurgerIngredient from './burger-ingredient/burger-ingredient'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import Actions from '../../services/actions'
import styles from './burger-ingredients.module.css'
import { IIngredientView } from '../../utils/types'

const BurgerIngredients = () => {
    const dispatch = useDispatch()
    const ingredientDetails = useSelector((state: IIngredientView) => state.ingredientView.ingredientView)

    const closeIngredientDetails = () => {
        document.body.classList.remove('overflow-hidden')
        dispatch({ type: Actions.DELETE_INGREDIENT_VIEW })
    }

    return (
        <>
            <section className={`${styles.section} mb-10 mr-10`}>
                <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>
                <BurgerIngredientsTab />
                <BurgerIngredient />
            </section>
            {ingredientDetails &&
                <Modal
                    title='Детали ингредиента'
                    onClick={closeIngredientDetails}
                >
                    <IngredientDetails />
                </Modal >
            }
        </>
    )
}

export default BurgerIngredients
